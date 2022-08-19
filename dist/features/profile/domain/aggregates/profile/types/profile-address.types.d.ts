import { Nullable } from '@heronjs/common';
export declare type CreateProfileAddressInput = {
    profileId: string;
    country: Nullable<string>;
    region: Nullable<string>;
    province: Nullable<string>;
    district: Nullable<string>;
    ward: Nullable<string>;
    address: Nullable<string>;
    postalCode: Nullable<string>;
    latitude: Nullable<number>;
    longitude: Nullable<number>;
};
export declare type CreateProfileAddressOutput = void;
export declare type UpdateProfileAddressInput = {
    country?: Nullable<string>;
    region?: Nullable<string>;
    province?: Nullable<string>;
    district?: Nullable<string>;
    ward?: Nullable<string>;
    address?: Nullable<string>;
    postalCode?: Nullable<string>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
};
export declare class UpdateProfileAddressInputModel implements UpdateProfileAddressInput {
    readonly profileId?: string;
    readonly country?: Nullable<string>;
    readonly region?: Nullable<string>;
    readonly province?: Nullable<string>;
    readonly district?: Nullable<string>;
    readonly ward?: Nullable<string>;
    readonly address?: Nullable<string>;
    readonly postalCode?: Nullable<string>;
    readonly latitude?: Nullable<number>;
    readonly longitude?: Nullable<number>;
}
export declare type UpdateProfileAddressOutput = void;
export declare type DeleteProfileAddressInput = void;
export declare type DeleteProfileAddressOutput = void;
