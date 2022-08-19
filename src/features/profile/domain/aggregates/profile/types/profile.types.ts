import {
    CreateAttributesValuesInput,
    CreateAttributeValuesInputModel,
    UpdateAttributesValuesInput,
    UpdateAttributeValuesInputModel,
} from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { Expose, Type } from 'class-transformer';
import {
    IsArray,
    IsDateString,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
    IsUrl,
    IsUUID,
    MaxLength,
    MinLength,
    ValidateNested,
} from 'class-validator';
import { CreateProfileAddressInput, UpdateProfileAddressInput, UpdateProfileAddressInputModel } from '.';
import { GenderEnum, ProfileStatusEnum } from '../enums';

// TYPE: create

type CreateProfileAddressInnerInput = Omit<CreateProfileAddressInput, 'profileId'>;

export type CreateProfileInput = {
    userId: Nullable<string>;
    firstName: Nullable<string>;
    lastName: Nullable<string>;
    email: Nullable<string>;
    gender: Nullable<GenderEnum>;
    dob: Nullable<string>;
    phone: Nullable<string>;
    identityNum: Nullable<string>;
    avatar: Nullable<string>;
    profession: Nullable<string>;
    status?: ProfileStatusEnum;
    addressInfo?: CreateProfileAddressInnerInput;
    attributeValues?: CreateAttributesValuesInput;
    parentId?: Nullable<string>;
    typeId?: Nullable<string>;
    targetId?: Nullable<string>;
    code?: Nullable<string>;
};

class CreateProfileAddressInputInnerModel implements CreateProfileAddressInnerInput {
    @Expose()
    @IsString()
    public readonly country!: Nullable<string>;

    @Expose()
    @IsString()
    @IsOptional()
    public readonly region!: Nullable<string>;

    @Expose()
    @IsString()
    public readonly province!: Nullable<string>;

    @Expose()
    @IsString()
    public readonly district!: Nullable<string>;

    @Expose()
    @IsString()
    public readonly ward!: Nullable<string>;

    @Expose()
    @IsString()
    public readonly address!: Nullable<string>;

    @Expose()
    @IsString()
    @IsOptional()
    public readonly postalCode!: Nullable<string>;

    @Expose()
    @IsNumber()
    @IsOptional()
    public readonly latitude!: Nullable<number>;

    @Expose()
    @IsNumber()
    @IsOptional()
    public readonly longitude!: Nullable<number>;
}

export class CreateProfileInputModel implements CreateProfileInput {
    @Expose()
    @IsUUID()
    @IsOptional()
    public readonly userId!: Nullable<string>;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    @IsNotEmpty()
    @Expose()
    public readonly firstName!: Nullable<string>;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    @IsNotEmpty()
    @Expose()
    public readonly lastName!: Nullable<string>;

    @IsEmail()
    @MinLength(1)
    @MaxLength(255)
    @Expose()
    public readonly email!: Nullable<string>;

    @IsEnum(GenderEnum)
    @Expose()
    public readonly gender!: Nullable<GenderEnum>;

    @IsDateString()
    @Expose()
    public readonly dob!: Nullable<string>;

    @Expose()
    @IsString()
    public readonly phone!: Nullable<string>;

    @Expose()
    @IsString()
    @IsOptional()
    public readonly identityNum!: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsUrl()
    public readonly avatar!: Nullable<string>;

    @IsString()
    @MinLength(0)
    @MaxLength(255)
    @IsOptional()
    @Expose()
    public readonly profession!: Nullable<string>;

    @IsEnum(ProfileStatusEnum)
    @Expose()
    public readonly status?: ProfileStatusEnum | undefined;

    @Type(() => CreateProfileAddressInputInnerModel)
    @ValidateNested()
    @IsOptional()
    @Expose()
    @Expose()
    public readonly addressInfo?: CreateProfileAddressInnerInput;

    @Expose()
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAttributeValuesInputModel)
    public readonly attributeValues?: CreateAttributesValuesInput;

    @Expose()
    @IsOptional()
    @IsUUID()
    public readonly typeId?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsUUID()
    public readonly parentId?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsUUID()
    public readonly targetId?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    public readonly code?: Nullable<string>;
}
export type CreateProfileOutput = void;

// TYPE: update
export type UpdateProfileInput = {
    userId?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    gender?: Nullable<GenderEnum>;
    dob?: Nullable<Date>;
    phone?: Nullable<string>;
    identityNum?: Nullable<string>;
    avatar?: Nullable<string>;
    profession?: Nullable<string>;
    status?: ProfileStatusEnum;
    addressInfo?: UpdateProfileAddressInput;
    attributeValues?: UpdateAttributesValuesInput;
    parentId?: Nullable<string>;
    typeId?: Nullable<string>;
    targetId?: Nullable<string>;
};

export class UpdateProfileInputModel implements UpdateProfileInput {
    @Expose()
    @IsOptional()
    @IsUUID()
    public readonly userId?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    public readonly firstName?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    public readonly lastName?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    public readonly email?: Nullable<string>;

    @IsEnum(GenderEnum)
    @Expose()
    @IsOptional()
    public readonly gender?: Nullable<GenderEnum>;

    @Expose()
    @IsOptional()
    @IsDateString()
    public readonly dob?: Nullable<Date>;

    @Expose()
    @IsOptional()
    @IsString()
    @MinLength(0)
    @MaxLength(20)
    public readonly phone?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    @MinLength(0)
    @MaxLength(20)
    public readonly identityNum?: Nullable<string>;

    @IsUrl()
    @Expose()
    @IsOptional()
    @IsString()
    public readonly avatar?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsString()
    @MinLength(0)
    @MaxLength(255)
    public readonly profession?: Nullable<string>;

    @IsEnum(ProfileStatusEnum)
    @Expose()
    @IsOptional()
    public readonly status?: ProfileStatusEnum | undefined;

    @Type(() => UpdateProfileAddressInputModel)
    @ValidateNested()
    @IsOptional()
    @Expose()
    public readonly addressInfo?: UpdateProfileAddressInput;

    @Expose()
    @IsOptional()
    @IsObject()
    @ValidateNested({ each: true })
    @Type(() => UpdateAttributeValuesInputModel)
    public readonly attributeValues?: UpdateAttributesValuesInput;

    @Expose()
    @IsOptional()
    @IsUUID()
    public readonly typeId?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsUUID()
    public readonly parentId?: Nullable<string>;

    @Expose()
    @IsOptional()
    @IsUUID()
    public readonly targetId?: Nullable<string>;
}
export type UpdateProfileOutput = void;

// TYPE: delete
export type DeleteProfileInput = void;
export type DeleteProfileOutput = void;
