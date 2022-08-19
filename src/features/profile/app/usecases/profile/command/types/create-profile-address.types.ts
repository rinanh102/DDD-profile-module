import { Nullable } from '@heronjs/common';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// TYPE: create
export type CreateProfileAddressUsecaseInput = {
    // profileId: string;
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

export class CreateProfileAddressUsecaseInputModel implements CreateProfileAddressUsecaseInput {
    // @Expose()
    // @IsUUID()
    // @IsOptional()
    // public readonly profileId!: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly country!: Nullable<string>;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly region!: Nullable<string>;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly province!: Nullable<string>;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly district!: Nullable<string>;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly ward!: Nullable<string>;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly address!: Nullable<string>;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly postalCode!: Nullable<string>;

    @Expose()
    @IsNotEmpty()
    @IsNumber()
    public readonly latitude!: Nullable<number>;

    @Expose()
    @IsNotEmpty()
    @IsNumber()
    public readonly longitude!: Nullable<number>;

    // constructor(payload: CreateProfileAddressUsecaseInput) {
    //     this.profileId = payload.profileId;
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

export type CreateProfileAddressUsecaseOutput = void;
