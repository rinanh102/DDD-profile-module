import { BaseTable, EavAttributeValueDTO } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { GenderEnum, ProfileStatusEnum } from '../../../domain/aggregates/profile';
import { ProfileAddressDto, ProfileDto, ProfileRelationshipTypeDto } from '../../../domain/dtos';
export declare class ProfileTable extends BaseTable<ProfileDto> implements ProfileDto {
    id: string;
    userId: Nullable<string>;
    firstName: Nullable<string>;
    lastName: Nullable<string>;
    email: Nullable<string>;
    gender: Nullable<GenderEnum>;
    dob: Nullable<Date>;
    phone: Nullable<string>;
    identityNum: Nullable<string>;
    avatar: Nullable<string>;
    profession: Nullable<string>;
    status: ProfileStatusEnum;
    createdAt: Date;
    updatedAt: Nullable<Date>;
    deletedAt: Nullable<Date>;
    attributeValues: EavAttributeValueDTO[];
    addressInfo: ProfileAddressDto;
    typeId: string;
    type: ProfileRelationshipTypeDto;
    parentId: Nullable<string>;
    children: ProfileDto[];
    targetId: Nullable<string>;
    code: Nullable<string>;
}
