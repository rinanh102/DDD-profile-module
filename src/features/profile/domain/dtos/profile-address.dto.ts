import { Nullable } from '@heronjs/common';

export type ProfileAddressDto = {
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
};
