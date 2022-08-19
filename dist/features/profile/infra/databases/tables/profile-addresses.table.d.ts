import { BaseTable } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { ProfileAddressDto } from '../../../domain/dtos';
export declare class ProfileAddressesTable extends BaseTable<ProfileAddressDto> implements ProfileAddressDto {
    id: string;
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
    createdAt: Date;
    updatedAt: Nullable<Date>;
}
