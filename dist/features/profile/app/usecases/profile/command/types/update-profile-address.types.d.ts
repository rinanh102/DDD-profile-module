import { Nullable } from '@heronjs/common';
export declare type UpdateProfileAddressUsecaseInput = {
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
export declare class UpdateProfileAddressUsecaseInputModel implements UpdateProfileAddressUsecaseInput {
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
export declare type UpdateProfileAddressUsecaseOutput = void;
export declare type DeleteProfileAddressUsecaseInput = void;
export declare type DeleteProfileAddressUsecaseOutput = void;
