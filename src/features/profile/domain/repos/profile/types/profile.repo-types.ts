import { CreateProfileInput, DeleteProfileInput, UpdateProfileInput } from '../../../aggregates/profile';
import { Profile } from '../../../aggregates/profile/profile';

//create
export type CreateProfileRepoInput = CreateProfileInput;
export type CreateProfileRepoOutput = Promise<Profile>;

//update
export type UpdateProfileRepoInput = UpdateProfileInput;
export type UpdateProfileRepoOutput = Promise<Profile>;

//delete
export type DeleteProfileRepoInput = DeleteProfileInput;
export type DeleteProfileRepoOutput = void;
