import { IRepo } from '@cbidigital/aqua';
import { Inject, Optional, Repository, Scope } from '@heronjs/common';
import { IProfileRelationshipTypeDAO } from '../../../infra/databases/daos';
import { ProfileRelationshipTypeDto } from '../../dtos';
import { ProfileNotFoundError, ProfileRelationshipTypeNotFoundError } from '../../errors';
import { IProfileRelationshipTypeMapper } from '../../../../../utils/objects/mappers/';
import { ProfileRelationshipType } from '../../aggregates/profile-relationship-type/profile-relationship-type';
import {
    CreateProfileRelationshipTypeRepoInput,
    CreateProfileRelationshipTypeRepoOutput,
    UpdateProfileRelationshipTypeRepoInput,
    UpdateProfileRelationshipTypeRepoOutput,
} from './types';
import { ProfileTokens } from '../../../../../constants';
export interface IProfileRelationshipTypeRepo extends IRepo<ProfileRelationshipType> {
    create: (input: CreateProfileRelationshipTypeRepoInput) => CreateProfileRelationshipTypeRepoOutput;
    update: (
        id: string,
        input: UpdateProfileRelationshipTypeRepoInput,
    ) => UpdateProfileRelationshipTypeRepoOutput;
}
@Repository({ token: ProfileTokens.Repo.PROFILE_RELATIONSHIP_TYPE, scope: Scope.SINGLETON })
export class ProfileRelationshipTypeRepo implements IProfileRelationshipTypeRepo {
    constructor(
        @Inject(ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)
        private _profileRelationshipTypeMapper: IProfileRelationshipTypeMapper,
        @Inject(ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)
        private _profileRelationshipTypeDAO: IProfileRelationshipTypeDAO,
    ) {}

    public async create(
        input: CreateProfileRelationshipTypeRepoInput,
    ): CreateProfileRelationshipTypeRepoOutput {
        const profileRelationshipType = new ProfileRelationshipType();
        await profileRelationshipType.create(input);
        await this._profileRelationshipTypeDAO.create(
            this._profileRelationshipTypeMapper.fromEntityToDTO(profileRelationshipType),
        );

        return profileRelationshipType;
    }

    public async update(
        id: string,
        input: UpdateProfileRelationshipTypeRepoInput,
    ): UpdateProfileRelationshipTypeRepoOutput {
        const profileRelationshipType = await this.getById(id);
        if (!profileRelationshipType) throw new ProfileNotFoundError();

        await profileRelationshipType.update(input);

        await this._profileRelationshipTypeDAO.updateById(
            profileRelationshipType.id,
            this._profileRelationshipTypeMapper.fromEntityToDTO(profileRelationshipType),
        );

        return profileRelationshipType;
    }

    public async delete(id: string) {
        const profileRelationshipType = await this.getById(id);
        if (!profileRelationshipType) throw new ProfileRelationshipTypeNotFoundError();

        await profileRelationshipType.delete();

        await this._profileRelationshipTypeDAO.deleteById(profileRelationshipType.id);

        return profileRelationshipType;
    }

    public async findAll() {
        const dtos = (await this._profileRelationshipTypeDAO.find()) as ProfileRelationshipTypeDto[];
        return dtos.map((dto) => this._profileRelationshipTypeMapper.fromDTOToEntity(dto));
    }

    public async getById(id: string) {
        const dto = (await this._profileRelationshipTypeDAO.findOne({
            filter: {
                id: { eq: id },
            },
        })) as Optional<ProfileRelationshipTypeDto>;
        return dto ? this._profileRelationshipTypeMapper.fromDTOToEntity(dto) : dto;
    }
}
