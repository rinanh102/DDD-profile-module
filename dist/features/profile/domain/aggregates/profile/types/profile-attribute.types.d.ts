import { EAVAttributeStatus, EAVAttributeTypes } from '../enums';
export declare type ProfileAttributeCreateInput = {
    code: string;
    label: string;
    type: EAVAttributeTypes;
    status?: EAVAttributeStatus;
    sortOrder?: number;
    visibility?: boolean;
    isRequired?: boolean;
    options?: any[];
};
export declare class ProfileAttributeCreateInputModel implements ProfileAttributeCreateInput {
    readonly code: string;
    readonly label: string;
    readonly type: EAVAttributeTypes;
    readonly status?: EAVAttributeStatus;
    readonly sortOrder?: number;
    readonly visibility?: boolean;
    readonly isRequired?: boolean;
    readonly options?: any[];
    constructor(payload: ProfileAttributeCreateInput);
}
export declare type ProfileAttributeCreateOutput = void;
export declare type ProfileAttributeUpdateInput = {
    code: string;
    label?: string;
    status?: EAVAttributeStatus;
    sortOrder?: number;
    visibility?: boolean;
    isRequired?: boolean;
    options?: any[];
};
export declare class ProfileAttributeUpdateInputModel implements ProfileAttributeUpdateInput {
    readonly code: string;
    readonly label?: string;
    readonly status?: EAVAttributeStatus;
    readonly sortOrder?: number;
    readonly visibility?: boolean;
    readonly isRequired?: boolean;
    readonly options?: any[];
    constructor(payload: ProfileAttributeUpdateInput);
}
export declare type ProfileAttributeUpdateOutput = void;
export declare type ProfileAttributeDeleteInput = void;
export declare type ProfileAttributeDeleteOutput = void;
