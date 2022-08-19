import { Entity, EntityIdUtil } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import {
    EAVAttributeStatus,
    EAVAttributeTypes,
    ProfileAttributeCreateInput,
    ProfileAttributeUpdateInput,
} from '..';
import {
    MustBeAStringError,
    MustBeANumberError,
    MustBeABooleanError,
    MustBeADatetimeError,
    MustBeAnArrayError,
    AttributeCannotBeDeletedError,
} from '../../../errors/eav';

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

export class ProfileAttribute extends Entity<ProfileAttributeProps> {
    constructor(id?: string, props?: ProfileAttributeProps) {
        super(id, props);
    }

    public get code(): string {
        return this._props.code;
    }

    public get label(): string {
        return this._props.label;
    }

    public get type(): EAVAttributeTypes {
        return this._props.type;
    }

    public get isRequired(): boolean {
        return this._props.isRequired;
    }

    public get editable(): boolean {
        return this._props.editable;
    }

    public get visibility(): boolean {
        return this._props.visibility;
    }

    public get options(): any[] {
        return this._props.options;
    }

    public get sortOrder(): number {
        return this._props.sortOrder;
    }

    public get systemDefined(): boolean {
        return this._props.systemDefined;
    }

    public get status(): string {
        return this._props.status;
    }

    public get createdAt(): Date {
        return this._props.createdAt;
    }

    public get updatedAt(): Nullable<Date> {
        return this._props.updatedAt;
    }

    private setCode(code?: string): void {
        if (code !== undefined) {
            this._props.code = code;
        }
    }

    private setLabel(label?: string): void {
        if (label !== undefined) {
            this._props.label = label;
        }
    }

    private setType(type?: EAVAttributeTypes): void {
        if (type !== undefined) {
            this._props.type = type;
        }
    }

    private setIsRequired(isRequired?: boolean): void {
        if (isRequired !== undefined) {
            this._props.isRequired = isRequired;
        }
    }

    private setEditable(editable?: boolean): void {
        if (editable !== undefined) {
            this._props.editable = editable;
        }
    }

    private setVisibility(visibility?: boolean): void {
        if (visibility !== undefined) {
            this._props.visibility = visibility;
        }
    }

    private setOptions(options?: any[]): void {
        if (options !== undefined) {
            options.forEach((value) => {
                switch (this.type) {
                    case EAVAttributeTypes.NUMBER:
                        if (typeof value !== 'number') throw new MustBeANumberError();
                        break;

                    case EAVAttributeTypes.STRING:
                        if (typeof value !== 'string') throw new MustBeAStringError();
                        break;

                    case EAVAttributeTypes.BOOLEAN:
                        if (typeof value !== 'boolean') throw new MustBeABooleanError();
                        break;

                    case EAVAttributeTypes.DATETIME:
                        value = new Date(value);
                        if (isNaN(value)) throw new MustBeADatetimeError();
                        break;

                    case EAVAttributeTypes.ARRAY:
                        if (!Array.isArray(value)) throw new MustBeAnArrayError();
                        break;
                }
            });
            this._props.options = options;
        }
    }

    private setSortOrder(sortOrder?: number): void {
        if (sortOrder !== undefined) {
            this._props.sortOrder = sortOrder;
        }
    }

    private setSystemDefined(systemDefined?: boolean): void {
        if (systemDefined !== undefined) {
            this._props.systemDefined = systemDefined;
        }
    }

    private setStatus(status?: EAVAttributeStatus): void {
        if (status !== undefined) {
            this._props.status = status;
        }
    }

    private setCreatedAt(createdAt?: Date): void {
        if (createdAt !== undefined) {
            this._props.createdAt = createdAt;
        }
    }

    private setUpdatedAt(updatedAt?: Nullable<Date>): void {
        if (updatedAt !== undefined) {
            this._props.updatedAt = updatedAt;
        }
    }

    public create(payload: ProfileAttributeCreateInput): void {
        this.setId(EntityIdUtil.randomUUID());
        this.setCode(payload.code);
        this.setLabel(payload.label);
        this.setType(payload.type);
        this.setIsRequired(payload.isRequired ?? false);
        this.setEditable(true);
        this.setSystemDefined(false);
        this.setVisibility(payload.visibility === undefined ? true : payload.visibility);
        this.setOptions(payload.options);
        this.setSortOrder(payload.sortOrder ?? 0);
        this.setStatus(payload.status ?? EAVAttributeStatus.ENABLED);
        this.setCreatedAt(new Date());
    }

    public update(payload: ProfileAttributeUpdateInput): void {
        this.setCode(payload.code);
        this.setLabel(payload.label);
        this.setIsRequired(payload.isRequired);
        this.setVisibility(payload.visibility);
        this.setOptions(payload.options);
        this.setSortOrder(payload.sortOrder);
        this.setStatus(payload.status);
        this.setUpdatedAt(new Date());
    }

    public delete(): void {
        if (this.systemDefined === true) throw new AttributeCannotBeDeletedError();
    }
}
