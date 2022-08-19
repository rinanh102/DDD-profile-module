"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAttribute = void 0;
const aqua_1 = require("@cbidigital/aqua");
const __1 = require("..");
const eav_1 = require("../../../errors/eav");
class ProfileAttribute extends aqua_1.Entity {
    constructor(id, props) {
        super(id, props);
    }
    get code() {
        return this._props.code;
    }
    get label() {
        return this._props.label;
    }
    get type() {
        return this._props.type;
    }
    get isRequired() {
        return this._props.isRequired;
    }
    get editable() {
        return this._props.editable;
    }
    get visibility() {
        return this._props.visibility;
    }
    get options() {
        return this._props.options;
    }
    get sortOrder() {
        return this._props.sortOrder;
    }
    get systemDefined() {
        return this._props.systemDefined;
    }
    get status() {
        return this._props.status;
    }
    get createdAt() {
        return this._props.createdAt;
    }
    get updatedAt() {
        return this._props.updatedAt;
    }
    setCode(code) {
        if (code !== undefined) {
            this._props.code = code;
        }
    }
    setLabel(label) {
        if (label !== undefined) {
            this._props.label = label;
        }
    }
    setType(type) {
        if (type !== undefined) {
            this._props.type = type;
        }
    }
    setIsRequired(isRequired) {
        if (isRequired !== undefined) {
            this._props.isRequired = isRequired;
        }
    }
    setEditable(editable) {
        if (editable !== undefined) {
            this._props.editable = editable;
        }
    }
    setVisibility(visibility) {
        if (visibility !== undefined) {
            this._props.visibility = visibility;
        }
    }
    setOptions(options) {
        if (options !== undefined) {
            options.forEach((value) => {
                switch (this.type) {
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
                }
            });
            this._props.options = options;
        }
    }
    setSortOrder(sortOrder) {
        if (sortOrder !== undefined) {
            this._props.sortOrder = sortOrder;
        }
    }
    setSystemDefined(systemDefined) {
        if (systemDefined !== undefined) {
            this._props.systemDefined = systemDefined;
        }
    }
    setStatus(status) {
        if (status !== undefined) {
            this._props.status = status;
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
    create(payload) {
        this.setId(aqua_1.EntityIdUtil.randomUUID());
        this.setCode(payload.code);
        this.setLabel(payload.label);
        this.setType(payload.type);
        this.setIsRequired(payload.isRequired ?? false);
        this.setEditable(true);
        this.setSystemDefined(false);
        this.setVisibility(payload.visibility === undefined ? true : payload.visibility);
        this.setOptions(payload.options);
        this.setSortOrder(payload.sortOrder ?? 0);
        this.setStatus(payload.status ?? __1.EAVAttributeStatus.ENABLED);
        this.setCreatedAt(new Date());
    }
    update(payload) {
        this.setCode(payload.code);
        this.setLabel(payload.label);
        this.setIsRequired(payload.isRequired);
        this.setVisibility(payload.visibility);
        this.setOptions(payload.options);
        this.setSortOrder(payload.sortOrder);
        this.setStatus(payload.status);
        this.setUpdatedAt(new Date());
    }
    delete() {
        if (this.systemDefined === true)
            throw new eav_1.AttributeCannotBeDeletedError();
    }
}
exports.ProfileAttribute = ProfileAttribute;
