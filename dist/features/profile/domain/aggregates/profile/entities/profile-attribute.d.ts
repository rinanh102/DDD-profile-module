import { Entity } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { EAVAttributeStatus, EAVAttributeTypes, ProfileAttributeCreateInput, ProfileAttributeUpdateInput } from '..';
export interface ProfileAttributeProps {
    code: string;
    label: string;
    isRequired: boolean;
    editable: boolean;
    visibility: boolean;
    options: any[];
    sortOrder: number;
    systemDefined: boolean;
    createdAt: Date;
    updatedAt: Nullable<Date>;
    type: EAVAttributeTypes;
    status: EAVAttributeStatus;
}
export declare class ProfileAttribute extends Entity<ProfileAttributeProps> {
    constructor(id?: string, props?: ProfileAttributeProps);
    get code(): string;
    get label(): string;
    get type(): EAVAttributeTypes;
    get isRequired(): boolean;
    get editable(): boolean;
    get visibility(): boolean;
    get options(): any[];
    get sortOrder(): number;
    get systemDefined(): boolean;
    get status(): string;
    get createdAt(): Date;
    get updatedAt(): Nullable<Date>;
    private setCode;
    private setLabel;
    private setType;
    private setIsRequired;
    private setEditable;
    private setVisibility;
    private setOptions;
    private setSortOrder;
    private setSystemDefined;
    private setStatus;
    private setCreatedAt;
    private setUpdatedAt;
    create(payload: ProfileAttributeCreateInput): void;
    update(payload: ProfileAttributeUpdateInput): void;
    delete(): void;
}
