"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAttributeValue = void 0;
const aqua_1 = require("@cbidigital/aqua");
const __1 = require("..");
const eav_1 = require("../../../errors/eav");
const types_1 = require("../types");
class ProfileAttributeValue extends aqua_1.Entity {
    constructor(id, props) {
        super(id, props);
        if (this.attribute) {
            switch (this.attribute.type) {
                case __1.EAVAttributeTypes.STRING:
                    this._props.value = props?.value;
                    break;
                case __1.EAVAttributeTypes.NUMBER:
                    this._props.value = Number(props?.value);
                    break;
                case __1.EAVAttributeTypes.BOOLEAN:
                    this._props.value = JSON.parse(props?.value);
                    break;
                case __1.EAVAttributeTypes.ARRAY:
                    this._props.value = JSON.parse(props?.value);
                    break;
                case __1.EAVAttributeTypes.DATETIME:
                    this._props.value = new Date(props?.value);
                    break;
                default:
                    this._props.value = props?.value;
                    break;
            }
        }
    }
    get id() {
        return this._props.id;
    }
    get value() {
        return this._props.value;
    }
    get attributeCode() {
        return this._props.attributeCode;
    }
    get entityId() {
        return this._props.entityId;
    }
    get createdAt() {
        return this._props.createdAt;
    }
    get updatedAt() {
        return this._props.updatedAt;
    }
    get attribute() {
        return this._props.attribute;
    }
    get entity() {
        return this._props.entity;
    }
    setValue(value) {
        if (this.attribute.isRequired && (value === undefined || value === null || value === ''))
            throw new eav_1.AttributeIsRequiredError(this.attributeCode);
        if (value !== undefined) {
            if (this.attribute.status !== __1.EAVAttributeStatus.ENABLED)
                throw new eav_1.CannotCreateForDisabledAttributeError();
            if (Array.isArray(this.attribute.options) && this.attribute.options.length)
                if (!this.attribute.options.find((o) => o == value))
                    throw new eav_1.ValueDoesNotMatchOptionError();
            switch (this.attribute.type) {
                case __1.EAVAttributeTypes.NUMBER:
                    if (typeof value !== 'number')
                        throw new eav_1.MustBeANumberError();
                    break;
                case __1.EAVAttributeTypes.STRING:
                    if (typeof value !== 'string')
                        throw new eav_1.MustBeAStringError();
                    break;
                case __1.EAVAttributeTypes.BOOLEAN:
                    if (typeof value !== 'boolean')
                        throw new eav_1.MustBeABooleanError();
                    break;
                case __1.EAVAttributeTypes.DATETIME:
                    value = new Date(value);
                    if (isNaN(value))
                        throw new eav_1.MustBeADatetimeError();
                    break;
                case __1.EAVAttributeTypes.ARRAY:
                    if (!Array.isArray(value))
                        throw new eav_1.MustBeAnArrayError();
                    break;
                default:
                    throw new eav_1.NotSupportThisTypeError();
            }
            this._props.value = value;
        }
    }
    setAttributeCode(attributeCode) {
        if (attributeCode !== undefined) {
            this._props.attributeCode = attributeCode;
        }
    }
    setEntityId(entityId) {
        if (entityId !== undefined) {
            this._props.entityId = entityId;
        }
    }
    setCreatedAt(createdAt) {
        if (createdAt !== undefined) {
            this._props.createdAt = createdAt;
        }
    }
    setUpdatedAt(updatedAt) {
        if (updatedAt !== undefined) {
            this._props.updatedAt = updatedAt;
        }
    }
    setAttribute(attribute) {
        if (attribute !== undefined) {
            this.setAttributeCode(attribute.code);
            this._props.attribute = attribute;
        }
    }
    setEntity(entity) {
        if (entity !== undefined) {
            this.setEntityId(entity.id);
            this._props.entity = entity;
        }
    }
    async create(payload) {
        const model = new types_1.ProfileAttributeValueCreateInputModel(payload);
        await aqua_1.ValidatorUtil.validateOrReject(model);
        this.setId(aqua_1.EntityIdUtil.randomUUID());
        this.setValue(payload.value);
        this.setEntity(payload.entity);
        this.setAttribute(payload.attribute);
        this.setCreatedAt(new Date());
    }
    async update(payload) {
        const model = new types_1.ProfileAttributeValueUpdateInputModel(payload);
        await aqua_1.ValidatorUtil.validateOrReject(model);
        if (!this.attribute.editable)
            throw new eav_1.AttributeValueDoesNotAllowUpdatedError();
        this.setValue(payload.value);
        this.setUpdatedAt(new Date());
    }
    delete() {
        if (this.attribute.systemDefined === true)
            throw new eav_1.AttributeCannotBeDeletedError();
    }
}
exports.ProfileAttributeValue = ProfileAttributeValue;
