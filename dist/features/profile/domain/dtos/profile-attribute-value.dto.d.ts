import { Nullable } from '@heronjs/common';
import { ProfileAttributeDto, ProfileDto } from '.';
export declare type ProfileAttributeValueDto = {
    id: string;
    value: any;
    attributeCode: string;
    entityId: string;
    createdAt: number;
    updatedAt: Nullable<number>;
    entity: ProfileDto;
    attribute: ProfileAttributeDto;
};
