import { Nullable } from '@heronjs/common';
import { EAVAttributeStatus, EAVAttributeTypes } from '../aggregates/profile';

export type ProfileAttributeDto = {
    code: string;
    label: string;
    isRequired: boolean;
    editable: boolean;
    visibility: boolean;
    options: any[];
    sortOrder: number;
    systemDefined: boolean;
    createdAt: number;
    updatedAt: Nullable<number>;
    type: EAVAttributeTypes;
    status: EAVAttributeStatus;
};
