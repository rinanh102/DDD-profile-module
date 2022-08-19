import { Entity, EntityIdUtil, ValidatorUtil } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { ProfileAttribute } from '.';
import { EAVAttributeStatus, EAVAttributeTypes, ProfileAttributeValueCreateInput } from '..';
import {
    AttributeCannotBeDeletedError,
    AttributeIsRequiredError,
    AttributeValueDoesNotAllowUpdatedError,
    CannotCreateForDisabledAttributeError,
    MustBeABooleanError,
    MustBeADatetimeError,
    MustBeAnArrayError,
    MustBeANumberError,
    MustBeAStringError,
    NotSupportThisTypeError,
    ValueDoesNotMatchOptionError,
} from '../../../errors/eav';
import { Profile } from '../profile';
import {
    ProfileAttributeValueCreateInputModel,
    ProfileAttributeValueCreateOutput,
    ProfileAttributeValueUpdateInput,
    ProfileAttributeValueUpdateInputModel,
    ProfileAttributeValueUpdateOutput,
} from '../types';

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

export class ProfileAttributeValue extends Entity<ProfileAttributeValueProps> {
    constructor(id?: string, props?: ProfileAttributeValueProps) {
        super(id, props);

        if (this.attribute) {
            switch (this.attribute.type) {
                case EAVAttributeTypes.STRING:
                    this._props.value = props?.value;
                    break;

                case EAVAttributeTypes.NUMBER:
                    this._props.value = Number(props?.value);
                    break;

                case EAVAttributeTypes.BOOLEAN:
                    this._props.value = JSON.parse(props?.value);
                    break;

                case EAVAttributeTypes.ARRAY:
                    this._props.value = JSON.parse(props?.value);
                    break;

                case EAVAttributeTypes.DATETIME:
                    this._props.value = new Date(props?.value);
                    break;

                default:
                    this._props.value = props?.value;
                    break;
            }
        }
    }

    public get id(): string {
        return this._props.id;
    }

    public get value(): any {
        return this._props.value;
    }

    public get attributeCode(): string {
        return this._props.attributeCode;
    }

    public get entityId(): string {
        return this._props.entityId;
    }

    public get createdAt(): Date {
        return this._props.createdAt;
    }

    public get updatedAt(): Nullable<Date> {
        return this._props.updatedAt;
    }

    public get attribute(): ProfileAttribute {
        return this._props.attribute;
    }
    public get entity(): Profile {
        return this._props.entity;
    }

    private setValue(value?: any) {
        if (this.attribute.isRequired && (value === undefined || value === null || value === ''))
            throw new AttributeIsRequiredError(this.attributeCode);

        if (value !== undefined) {
            if (this.attribute.status !== EAVAttributeStatus.ENABLED)
                throw new CannotCreateForDisabledAttributeError();

            if (Array.isArray(this.attribute.options) && this.attribute.options.length)
                if (!this.attribute.options.find((o) => o == value)) throw new ValueDoesNotMatchOptionError();

            switch (this.attribute.type) {
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

                default:
                    throw new NotSupportThisTypeError();
            }

            this._props.value = value;
        }
    }

    private setAttributeCode(attributeCode?: string): void {
        if (attributeCode !== undefined) {
            this._props.attributeCode = attributeCode;
        }
    }

    private setEntityId(entityId?: string): void {
        if (entityId !== undefined) {
            this._props.entityId = entityId;
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

    private setAttribute(attribute?: ProfileAttribute): void {
        if (attribute !== undefined) {
            this.setAttributeCode(attribute.code);
            this._props.attribute = attribute;
        }
    }
    private setEntity(entity?: Profile): void {
        if (entity !== undefined) {
            this.setEntityId(entity.id);
            this._props.entity = entity;
        }
    }

    public async create(
        payload: ProfileAttributeValueCreateInput,
    ): Promise<ProfileAttributeValueCreateOutput> {
        const model = new ProfileAttributeValueCreateInputModel(payload);
        await ValidatorUtil.validateOrReject(model);

        this.setId(EntityIdUtil.randomUUID());
        this.setValue(payload.value);
        this.setEntity(payload.entity);
        this.setAttribute(payload.attribute);
        this.setCreatedAt(new Date());
    }

    public async update(
        payload: ProfileAttributeValueUpdateInput,
    ): Promise<ProfileAttributeValueUpdateOutput> {
        const model = new ProfileAttributeValueUpdateInputModel(payload);
        await ValidatorUtil.validateOrReject(model);

        if (!this.attribute.editable) throw new AttributeValueDoesNotAllowUpdatedError();

        this.setValue(payload.value);
        this.setUpdatedAt(new Date());
    }

    public delete(): void {
        if (this.attribute.systemDefined === true) throw new AttributeCannotBeDeletedError();
    }
}
