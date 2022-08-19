import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProfileAttribute } from '../entities';
import { Profile } from '../profile';

// TYPE: create

export type ProfileAttributeValueCreateInput = {
    value: string;
    attribute: ProfileAttribute;
    entity: Profile;
};

export class ProfileAttributeValueCreateInputModel implements ProfileAttributeValueCreateInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly value: string;

    @Expose()
    @IsNotEmpty()
    public readonly attribute: ProfileAttribute;

    @Expose()
    @IsNotEmpty()
    public readonly entity: Profile;

    constructor(payload: ProfileAttributeValueCreateInput) {
        this.value = payload.value;
        this.attribute = payload.attribute;
        this.entity = payload.entity;
    }
}
export type ProfileAttributeValueCreateOutput = void;

// TYPE: update
export type ProfileAttributeValueUpdateInput = {
    value?: string;
};
export class ProfileAttributeValueUpdateInputModel implements ProfileAttributeValueUpdateInput {
    @Expose()
    @IsOptional()
    @IsString()
    public readonly value?: string;

    constructor(payload: ProfileAttributeValueUpdateInput) {
        this.value = payload.value;
    }
}
export type ProfileAttributeValueUpdateOutput = void;

export type ProfileAttributeValueDeleteInput = void;
export type ProfileAttributeValueDeleteOutput = void;

export type ValueDetailPayload = {
    attribute: ProfileAttribute;
};
