import {
    EavEntityChangeAttributesValuesOutput,
    EavEntityRepo,
    EavMapperTokens,
    EavUtil,
    IEavAttributeMapper,
    IEavAttributeValueMapper,
    IEavEntityRepo,
    IRepo,
} from '@cbidigital/aqua';
import { Inject, Optional, Repository, Scope } from '@heronjs/common';
import { IProfileAddressDAO, IProfileDAO, IProfileRelationshipTypeDAO } from '../../../infra/databases/daos';
import { Profile } from '../../aggregates/profile/profile';
import { ProfileDto, ProfileRelationshipTypeDto } from '../../dtos';
import {
    CannotCreateChildProfileError,
    ProfileNotFoundError,
    ProfileRelationshipTypeNotFoundError,
    RootProfileAlreadyExistError,
} from '../../errors';
import {
    CreateProfileRepoInput,
    CreateProfileRepoOutput,
    UpdateProfileRepoInput,
    UpdateProfileRepoOutput,
} from './types';
import { IProfileMapper, IProfileRelationshipTypeMapper } from '../../../../../utils/objects/mappers/';
import { IProfileAttributeDAO } from '../../../infra/databases/daos/profile-attribute.dao';
import { IProfileAttributeValueDAO } from '../../../infra/databases/daos/profile-attribute-value.dao';
import { ProfileTokens } from '../../../../../constants';
export interface IProfileRepo extends IRepo<Profile>, IEavEntityRepo {
    create: (input: CreateProfileRepoInput) => CreateProfileRepoOutput;
    update: (id: string, input: UpdateProfileRepoInput) => UpdateProfileRepoOutput;
    updateByUserId: (userId: string, input: UpdateProfileRepoInput) => UpdateProfileRepoOutput;
}
@Repository({ token: ProfileTokens.Repo.PROFILE, scope: Scope.SINGLETON })
export class ProfileRepo extends EavEntityRepo implements IProfileRepo {
    constructor(
        @Inject(ProfileTokens.Mapper.PROFILE) private _profileMapper: IProfileMapper,
        @Inject(ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)
        private _profileRelationshipTypeMapper: IProfileRelationshipTypeMapper,
        @Inject(ProfileTokens.Dao.PROFILE) private _profileDAO: IProfileDAO,
        @Inject(ProfileTokens.Dao.PROFILE_ADDRESS) private _profileAddressDAO: IProfileAddressDAO,
        @Inject(ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)
        private _profileRelationshipTypeDAO: IProfileRelationshipTypeDAO,
        @Inject(ProfileTokens.Dao.PROFILE_ATTRIBUTE) private _profileAttributeDAO: IProfileAttributeDAO,
        @Inject(ProfileTokens.Dao.PROFILE_ATTRIBUTE_VALUE)
        private _profileAttributeValueDAO: IProfileAttributeValueDAO,
        @Inject(EavMapperTokens.ATTRIBUTE) private _profileAttributeMapper: IEavAttributeMapper,
        @Inject(EavMapperTokens.ATTRIBUTE_VALUE)
        private _profileAttributeValueMapper: IEavAttributeValueMapper,
    ) {
        super(_profileAttributeMapper, _profileAttributeDAO);
    }

    public async create(input: CreateProfileRepoInput): CreateProfileRepoOutput {
        let profile: Profile;
        let rootProfile: Profile;

        //if user's input donot have typepId  -> create root profile(ME)
        if (!input.typeId && !input.parentId) {
            // user create root profile

            if (input.userId) {
                rootProfile = await this.getByUserId(input.userId);
                if (rootProfile) throw new RootProfileAlreadyExistError();
            }
            profile = new Profile();
            await profile.create(input);
        } else {
            //if user's input have typepId  -> create child profile

            if (input.typeId) {
                const type = await this.getProfileRelationshipType(input.typeId);
                if (!type) throw new ProfileRelationshipTypeNotFoundError();
            }

            if (input.userId && input.typeId) {
                // user ->  seek for rootProfile by userID && parentId

                rootProfile = await this.getRootProfile(input.userId);
                if (!rootProfile) throw new ProfileNotFoundError();
                profile = new Profile();
                await profile.create({ ...input, parentId: rootProfile.id });
            } else if (input.parentId && input.typeId) {
                //admin -> bat buoc truyen parentId, seek for rootProfile by parentId

                rootProfile = await this.getByParentId(input.parentId);
                if (!rootProfile) throw new ProfileNotFoundError();
                profile = new Profile();
                await profile.create({ ...input, parentId: rootProfile.id });
            } else {
                throw new CannotCreateChildProfileError();
            }
        }

        await this.createProfileJob(input, profile);

        return profile;
    }

    private async createProfileJob(input: CreateProfileRepoInput, profile: Profile) {
        //Create Attribute Value for Profile Entity
        if (input.attributeValues) {
            const attributeValuesInput = await EavUtil.getCreateAttributeValuesInput(
                input.attributeValues,
                this._profileAttributeMapper,
                this._profileAttributeDAO,
            );
            await profile.eav.createAttributeValues(attributeValuesInput);
        }

        const dto = this._profileMapper.fromEntityToDTO(profile);
        await this._profileDAO.transaction(async (trx) => {
            await this._profileDAO.create(dto, { trx });
            await Promise.all([
                dto.addressInfo ? this._profileAddressDAO.create(dto.addressInfo, { trx }) : undefined,
                dto.attributeValues
                    ? this._profileAttributeValueDAO.createList(dto.attributeValues, { trx })
                    : undefined,
            ]);
        });
    }

    private async updateProfileJob(profile: Profile, input: UpdateProfileRepoInput) {
        await profile.update(input);

        let changeAttrOutput: Optional<EavEntityChangeAttributesValuesOutput>;
        if (input.attributeValues) {
            const attributeValuesInput = await EavUtil.getUpdateAttributeValuesInput(
                input.attributeValues,
                this._profileAttributeMapper,
                this._profileAttributeDAO,
            );
            changeAttrOutput = await profile.eav.changeAttributeValues(attributeValuesInput);
        }

        await this._profileDAO.transaction((trx) =>
            Promise.all([
                this._profileDAO.updateById(profile.id, this._profileMapper.fromEntityToDTO(profile), {
                    trx,
                }),
                changeAttrOutput
                    ? this._profileAttributeValueDAO.deleteList(
                          changeAttrOutput.deletedItems.map((d) => d.id),
                          { trx },
                      )
                    : undefined,
                changeAttrOutput
                    ? this._profileAttributeValueDAO.updateList(
                          changeAttrOutput.updatedItems.map((u) =>
                              this._profileAttributeValueMapper.fromEntityToDTO(u),
                          ),
                          { trx },
                      )
                    : undefined,
                changeAttrOutput
                    ? this._profileAttributeValueDAO.createList(
                          changeAttrOutput.createdItems.map((c) =>
                              this._profileAttributeValueMapper.fromEntityToDTO(c),
                          ),
                          { trx },
                      )
                    : undefined,
            ]),
        );
    }
    public async updateByUserId(userId: string, input: UpdateProfileRepoInput): UpdateProfileRepoOutput {
        const profile = await this.getRootProfile(userId);
        if (!profile) throw new ProfileNotFoundError();

        await this.updateProfileJob(profile, input);

        return profile;
    }
    public async update(id: string, input: UpdateProfileRepoInput): UpdateProfileRepoOutput {
        const profile = await this.getById(id);
        if (!profile) throw new ProfileNotFoundError();

        await this.updateProfileJob(profile, input);

        return profile;
    }

    public async delete(id: string) {
        const profile = await this.getById(id);
        if (!profile) throw new ProfileNotFoundError();

        //if root profile - find and delete all children profiles
        if (profile.parentId === null) {
            const children = await this.findAllChildren(profile);
            if (children) {
                await children.map((i) => {
                    i.delete();
                    this._profileDAO.deleteById(i.id);
                });
            }
        }

        await profile.delete();

        await this._profileDAO.deleteById(profile.id);

        return profile;
    }

    public async findAllChildren(profile: Profile) {
        const childrenDto = (await this._profileDAO.find({
            filter: {
                parentId: { eq: profile.id },
            },
        })) as ProfileDto[];
        return childrenDto.map((dto) => this._profileMapper.fromDTOToEntity(dto));
    }

    public async findAll() {
        const dtos = (await this._profileDAO.find()) as ProfileDto[];
        return dtos.map((dto) => this._profileMapper.fromDTOToEntity(dto));
    }

    public async getById(id: string) {
        const dto = (await this._profileDAO.findOne(
            {
                filter: {
                    id: { eq: id },
                },
            },
            {
                resolve: ['addressInfo', 'type', { attributeValues: ['attribute'] }],
            },
        )) as Optional<ProfileDto>;
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }
    public async getByUserId(userId: string) {
        const dto = (await this._profileDAO.findOne({
            filter: {
                userId: { eq: userId },
            },
        })) as ProfileDto;
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }

    public async getRootProfile(userId: string) {
        const dto = (await this._profileDAO.findOne({
            filter: {
                userId: { eq: userId },
                parentId: { eq: null },
            },
        })) as ProfileDto;
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }
    public async getByParentId(parentId: string) {
        const dto = (await this._profileDAO.findOne({
            filter: {
                id: { eq: parentId },
            },
        })) as ProfileDto;
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }
    public async getProfileRelationshipType(typeId: string) {
        const dto = (await this._profileRelationshipTypeDAO.findOne({
            filter: {
                id: { eq: typeId },
            },
        })) as ProfileRelationshipTypeDto;
        return dto ? this._profileRelationshipTypeMapper.fromDTOToEntity(dto) : dto;
    }
}
