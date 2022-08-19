import { CreateProfileAddressInput, UpdateProfileAddressInput } from '../../../aggregates';
export declare type CreateProfileAddressRepoInput = Omit<CreateProfileAddressInput, 'profileId'>;
export declare type CreateProfileAddressRepoOutput = void;
export declare type UpdateProfileAddressRepoInput = UpdateProfileAddressInput;
export declare type UpdateProfileAddressRepoOutput = void;
export declare type DeleteProfileAddressRepoInput = void;
export declare type DeleteProfileAddressRepoOutput = void;
