"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipType = void 0;
const aqua_1 = require("@cbidigital/aqua");
const enums_1 = require("../profile/enums");
const types_1 = require("./types");
class ProfileRelationshipType extends aqua_1.AggregateRoot {
    constructor(id, props) {
        super(id, props);
    }
    get description() {
        return this._props.description;
    }
    get createdAt() {
        return this._props.createdAt;
    }
    get updatedAt() {
        return this._props.updatedAt;
    }
    setDescription(payload) {
        if (payload !== undefined)
            this._props.description = payload;
    }
    setCreatedAt(payload) {
        if (payload !== undefined)
            this._props.createdAt = payload;
    }
    setUpdatedAt(payload) {
        if (payload !== undefined)
            this._props.updatedAt = payload;
    }
    async create(payload) {
        const model = await aqua_1.ValidatorUtil.validatePlain(types_1.CreateProfileRelationshipTypeInputModel, payload);
        this.setId(aqua_1.EntityIdUtil.randomUUID());
        this.setDescription(model.description);
        this.setCreatedAt(new Date());
        this.addDomainEvent({
            aggregateId: this.id,
            type: enums_1.ProfileRelationshipTypeEventNames.CREATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
    async update(payload) {
        const model = await aqua_1.ValidatorUtil.validatePlain(types_1.UpdateProfileRelationshipTypeInputModel, payload);
        this.setDescription(model.description);
        this.setUpdatedAt(new Date());
        this.addDomainEvent({
            aggregateId: this.id,
            type: enums_1.ProfileRelationshipTypeEventNames.UPDATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
    async delete(payload) {
        this.addDomainEvent({
            aggregateId: this.id,
            type: enums_1.ProfileEventNames.DELETE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
}
exports.ProfileRelationshipType = ProfileRelationshipType;
