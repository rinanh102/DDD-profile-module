import { CreateProfileInput, DeleteProfileInput, UpdateProfileInput } from '../../../aggregates/profile';
import { Profile } from '../../../aggregates/profile/profile';
export declare type CreateProfileRepoInput = CreateProfileInput;
export declare type CreateProfileRepoOutput = Promise<Profile>;
export declare type UpdateProfileRepoInput = UpdateProfileInput;
export declare type UpdateProfileRepoOutput = Promise<Profile>;
export declare type DeleteProfileRepoInput = DeleteProfileInput;
export declare type DeleteProfileRepoOutput = void;
