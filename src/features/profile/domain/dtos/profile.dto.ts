import { EavEntityDTO } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { ProfileAddressDto, ProfileRelationshipTypeDto } from '.';
import { GenderEnum, ProfileStatusEnum } from '../aggregates/profile';

export type ProfileDto = {
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
    // type: ProfileTypeEnum;
    createdAt: Date;
    updatedAt: Nullable<Date>;
    deletedAt: Nullable<Date>;
    addressInfo: Nullable<ProfileAddressDto>;
    typeId: Nullable<string>;
    type: Nullable<ProfileRelationshipTypeDto>;
    parentId: Nullable<string>;
    children: Nullable<ProfileDto[]>;
    // relationships: ProfileRelationshipDto[];
    targetId: Nullable<string>;
    code: Nullable<string>;
} & EavEntityDTO;
