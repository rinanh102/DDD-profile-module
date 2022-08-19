import { IRepo } from '@cbidigital/aqua';
import { IProfileRelationshipTypeDAO } from '../../../infra/databases/daos';
import { IProfileRelationshipTypeMapper } from '../../../../../utils/objects/mappers/';
import { ProfileRelationshipType } from '../../aggregates/profile-relationship-type/profile-relationship-type';
import { CreateProfileRelationshipTypeRepoInput, CreateProfileRelationshipTypeRepoOutput, UpdateProfileRelationshipTypeRepoInput, UpdateProfileRelationshipTypeRepoOutput } from './types';
export interface IProfileRelationshipTypeRepo extends IRepo<ProfileRelationshipType> {
    create: (input: CreateProfileRelationshipTypeRepoInput) => CreateProfileRelationshipTypeRepoOutput;
    update: (id: string, input: UpdateProfileRelationshipTypeRepoInput) => UpdateProfileRelationshipTypeRepoOutput;
}
export declare class ProfileRelationshipTypeRepo implements IProfileRelationshipTypeRepo {
    private _profileRelationshipTypeMapper;
    private _profileRelationshipTypeDAO;
    constructor(_profileRelationshipTypeMapper: IProfileRelationshipTypeMapper, _profileRelationshipTypeDAO: IProfileRelationshipTypeDAO);
    create(input: CreateProfileRelationshipTypeRepoInput): CreateProfileRelationshipTypeRepoOutput;
    update(id: string, input: UpdateProfileRelationshipTypeRepoInput): UpdateProfileRelationshipTypeRepoOutput;
    delete(id: string): Promise<ProfileRelationshipType>;
    findAll(): Promise<ProfileRelationshipType[]>;
    getById(id: string): Promise<ProfileRelationshipType | undefined>;
}
