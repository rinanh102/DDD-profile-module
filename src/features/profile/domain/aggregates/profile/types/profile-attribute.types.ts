import { Expose } from 'class-transformer';
import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';
import { EAVAttributeStatus, EAVAttributeTypes } from '../enums';

// TYPE: create
export type ProfileAttributeCreateInput = {
    code: string;
    label: string;
    type: EAVAttributeTypes;
    status?: EAVAttributeStatus;
    sortOrder?: number;
    visibility?: boolean;
    isRequired?: boolean;
    options?: any[];
};

export class ProfileAttributeCreateInputModel implements ProfileAttributeCreateInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(32)
    @Matches(/^[a-zA-Z0-9_-]*$/)
    public readonly code!: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    public readonly label!: string;

    @Expose()
    @IsNotEmpty()
    @IsEnum(EAVAttributeTypes)
    public readonly type!: EAVAttributeTypes;

    @Expose()
    @IsOptional()
    @IsEnum(EAVAttributeStatus)
    public readonly status?: EAVAttributeStatus;

    @Expose()
    @IsOptional()
    @IsNumber()
    public readonly sortOrder?: number;

    @Expose()
    @IsOptional()
    @IsBoolean()
    public readonly visibility?: boolean;

    @Expose()
    @IsOptional()
    @IsBoolean()
    public readonly isRequired?: boolean;

    @Expose()
    @IsOptional()
    @IsArray()
    public readonly options?: any[];

    constructor(payload: ProfileAttributeCreateInput) {
        this.code = payload.code;
        this.label = payload.label;
        this.type = payload.type;
        this.visibility = payload.visibility;
        this.sortOrder = payload.sortOrder;
        this.status = payload.status;
    }
}
export type ProfileAttributeCreateOutput = void;

// TYPE: update
export type ProfileAttributeUpdateInput = {
    code: string;
    label?: string;
    status?: EAVAttributeStatus;
    sortOrder?: number;
    visibility?: boolean;
    isRequired?: boolean;
    options?: any[];
};
export class ProfileAttributeUpdateInputModel implements ProfileAttributeUpdateInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly code!: string;

    @Expose()
    @IsOptional()
    @IsString()
    @MinLength(1)
    public readonly label?: string;

    @Expose()
    @IsOptional()
    @IsEnum(EAVAttributeStatus)
    public readonly status?: EAVAttributeStatus;

    @Expose()
    @IsOptional()
    @IsNumber()
    public readonly sortOrder?: number;

    @Expose()
    @IsOptional()
    @IsBoolean()
    public readonly visibility?: boolean;

    @Expose()
    @IsOptional()
    @IsBoolean()
    public readonly isRequired?: boolean;

    @Expose()
    @IsOptional()
    @IsArray()
    public readonly options?: any[];

    constructor(payload: ProfileAttributeUpdateInput) {
        this.code = payload.code;
        this.label = payload.label;
        this.isRequired = payload.isRequired;
        this.visibility = payload.visibility;
        this.sortOrder = payload.sortOrder;
        this.status = payload.status;
        this.options = payload.options;
    }
}
export type ProfileAttributeUpdateOutput = void;

// TYPE: delete
export type ProfileAttributeDeleteInput = void;
export type ProfileAttributeDeleteOutput = void;
