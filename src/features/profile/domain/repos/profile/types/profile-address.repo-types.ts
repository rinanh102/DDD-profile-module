import { CreateProfileAddressInput, UpdateProfileAddressInput } from '../../../aggregates';

// TYPE: create
export type CreateProfileAddressRepoInput = Omit<CreateProfileAddressInput, 'profileId'>;

export type CreateProfileAddressRepoOutput = void;

// TYPE: update
export type UpdateProfileAddressRepoInput = UpdateProfileAddressInput;

export type UpdateProfileAddressRepoOutput = void;

// TYPE: delete
export type DeleteProfileAddressRepoInput = void;
export type DeleteProfileAddressRepoOutput = void;
