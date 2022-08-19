import { EavEntityRepo, IEavAttributeMapper, IEavAttributeValueMapper, IEavEntityRepo, IRepo } from '@cbidigital/aqua';
import { IProfileAddressDAO, IProfileDAO, IProfileRelationshipTypeDAO } from '../../../infra/databases/daos';
import { Profile } from '../../aggregates/profile/profile';
import { CreateProfileRepoInput, CreateProfileRepoOutput, UpdateProfileRepoInput, UpdateProfileRepoOutput } from './types';
import { IProfileMapper, IProfileRelationshipTypeMapper } from '../../../../../utils/objects/mappers/';
import { IProfileAttributeDAO } from '../../../infra/databases/daos/profile-attribute.dao';
import { IProfileAttributeValueDAO } from '../../../infra/databases/daos/profile-attribute-value.dao';
export interface IProfileRepo extends IRepo<Profile>, IEavEntityRepo {
    create: (input: CreateProfileRepoInput) => CreateProfileRepoOutput;
    update: (id: string, input: UpdateProfileRepoInput) => UpdateProfileRepoOutput;
    updateByUserId: (userId: string, input: UpdateProfileRepoInput) => UpdateProfileRepoOutput;
}
export declare class ProfileRepo extends EavEntityRepo implements IProfileRepo {
    private _profileMapper;
    private _profileRelationshipTypeMapper;
    private _profileDAO;
    private _profileAddressDAO;
    private _profileRelationshipTypeDAO;
    private _profileAttributeDAO;
    private _profileAttributeValueDAO;
    private _profileAttributeMapper;
    private _profileAttributeValueMapper;
    constructor(_profileMapper: IProfileMapper, _profileRelationshipTypeMapper: IProfileRelationshipTypeMapper, _profileDAO: IProfileDAO, _profileAddressDAO: IProfileAddressDAO, _profileRelationshipTypeDAO: IProfileRelationshipTypeDAO, _profileAttributeDAO: IProfileAttributeDAO, _profileAttributeValueDAO: IProfileAttributeValueDAO, _profileAttributeMapper: IEavAttributeMapper, _profileAttributeValueMapper: IEavAttributeValueMapper);
    create(input: CreateProfileRepoInput): CreateProfileRepoOutput;
    private createProfileJob;
    private updateProfileJob;
    updateByUserId(userId: string, input: UpdateProfileRepoInput): UpdateProfileRepoOutput;
    update(id: string, input: UpdateProfileRepoInput): UpdateProfileRepoOutput;
    delete(id: string): Promise<Profile>;
    findAllChildren(profile: Profile): Promise<Profile[]>;
    findAll(): Promise<Profile[]>;
    getById(id: string): Promise<Profile | undefined>;
    getByUserId(userId: string): Promise<Profile>;
    getRootProfile(userId: string): Promise<Profile>;
    getByParentId(parentId: string): Promise<Profile>;
    getProfileRelationshipType(typeId: string): Promise<import("../../aggregates").ProfileRelationshipType>;
}
