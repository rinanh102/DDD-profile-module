import { ProfileRelationshipType } from '../../../aggregates/profile-relationship-type';

//create
export type CreateProfileRelationshipTypeRepoInput = {
    description: string;
};
export type CreateProfileRelationshipTypeRepoOutput = Promise<ProfileRelationshipType>;

//update
export type UpdateProfileRelationshipTypeRepoInput = {
    description?: string;
};
export type UpdateProfileRelationshipTypeRepoOutput = Promise<ProfileRelationshipType>;

//delete
export type DeleteProfileRelationshipTypeRepoInput = void;
export type DeleteProfileRelationshipTypeRepoOutput = void;
