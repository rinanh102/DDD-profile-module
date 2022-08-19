import { Nullable } from '@heronjs/common';
import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
// TYPE: update
export type UpdateProfileAddressUsecaseInput = {
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

export class UpdateProfileAddressUsecaseInputModel implements UpdateProfileAddressUsecaseInput {
    // @Expose()
    // @IsOptional()
    // @IsString()
    // public readonly profileId?: string;

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

    // constructor(payload: UpdateProfileAddressUsecaseInput) {
    //     this.country = payload.country;
    //     this.region = payload.region;
    //     this.province = payload.province;
    //     this.district = payload.district;
    //     this.ward = payload.ward;
    //     this.address = payload.address;
    //     this.postalCode = payload.postalCode;
    //     this.latitude = payload.latitude;
    //     this.longitude = payload.longitude;
    // }
}
export type UpdateProfileAddressUsecaseOutput = void;

// TYPE: delete
export type DeleteProfileAddressUsecaseInput = void;
export type DeleteProfileAddressUsecaseOutput = void;
