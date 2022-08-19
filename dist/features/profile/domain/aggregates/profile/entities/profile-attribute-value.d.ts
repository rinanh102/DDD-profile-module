import { Entity } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { ProfileAttribute } from '.';
import { ProfileAttributeValueCreateInput } from '..';
import { Profile } from '../profile';
import { ProfileAttributeValueCreateOutput, ProfileAttributeValueUpdateInput, ProfileAttributeValueUpdateOutput } from '../types';
export interface ProfileAttributeValueProps {
    id: string;
    value: any;
    attributeCode: string;
    entityId: string;
    createdAt: Date;
    updatedAt: Nullable<Date>;
    entity: Profile;
    attribute: ProfileAttribute;
}
export declare class ProfileAttributeValue extends Entity<ProfileAttributeValueProps> {
    constructor(id?: string, props?: ProfileAttributeValueProps);
    get id(): string;
    get value(): any;
    get attributeCode(): string;
    get entityId(): string;
    get createdAt(): Date;
    get updatedAt(): Nullable<Date>;
    get attribute(): ProfileAttribute;
    get entity(): Profile;
    private setValue;
    private setAttributeCode;
    private setEntityId;
    private setCreatedAt;
    private setUpdatedAt;
    private setAttribute;
    private setEntity;
    create(payload: ProfileAttributeValueCreateInput): Promise<ProfileAttributeValueCreateOutput>;
    update(payload: ProfileAttributeValueUpdateInput): Promise<ProfileAttributeValueUpdateOutput>;
    delete(): void;
}
