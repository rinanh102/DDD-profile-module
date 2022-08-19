import { ProfileAttribute } from '../entities';
import { Profile } from '../profile';
export declare type ProfileAttributeValueCreateInput = {
    value: string;
    attribute: ProfileAttribute;
    entity: Profile;
};
export declare class ProfileAttributeValueCreateInputModel implements ProfileAttributeValueCreateInput {
    readonly value: string;
    readonly attribute: ProfileAttribute;
    readonly entity: Profile;
    constructor(payload: ProfileAttributeValueCreateInput);
}
export declare type ProfileAttributeValueCreateOutput = void;
export declare type ProfileAttributeValueUpdateInput = {
    value?: string;
};
export declare class ProfileAttributeValueUpdateInputModel implements ProfileAttributeValueUpdateInput {
    readonly value?: string;
    constructor(payload: ProfileAttributeValueUpdateInput);
}
export declare type ProfileAttributeValueUpdateOutput = void;
export declare type ProfileAttributeValueDeleteInput = void;
export declare type ProfileAttributeValueDeleteOutput = void;
export declare type ValueDetailPayload = {
    attribute: ProfileAttribute;
};
