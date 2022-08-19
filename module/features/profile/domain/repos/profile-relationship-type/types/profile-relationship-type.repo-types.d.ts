import { ProfileRelationshipType } from '../../../aggregates/profile-relationship-type';
export declare type CreateProfileRelationshipTypeRepoInput = {
    description: string;
};
export declare type CreateProfileRelationshipTypeRepoOutput = Promise<ProfileRelationshipType>;
export declare type UpdateProfileRelationshipTypeRepoInput = {
    description?: string;
};
export declare type UpdateProfileRelationshipTypeRepoOutput = Promise<ProfileRelationshipType>;
export declare type DeleteProfileRelationshipTypeRepoInput = void;
export declare type DeleteProfileRelationshipTypeRepoOutput = void;
