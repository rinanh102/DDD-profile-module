import { Nullable } from '@heronjs/common';
import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

// TYPE: create
export type CreateProfileAddressInput = {
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

export type CreateProfileAddressOutput = void;

// TYPE: update
export type UpdateProfileAddressInput = {
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

export class UpdateProfileAddressInputModel implements UpdateProfileAddressInput {
    @Expose()
    @IsOptional()
    @IsString()
    public readonly profileId?: string;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly country?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly region?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly province?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly district?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly ward?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly address?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly postalCode?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsNumber()
    public readonly latitude?: Nullable<number>;

    @Expose()
    @IsOptional()
    @IsNumber()
    public readonly longitude?: Nullable<number>;
}
export type UpdateProfileAddressOutput = void;

// TYPE: delete
export type DeleteProfileAddressInput = void;
export type DeleteProfileAddressOutput = void;
