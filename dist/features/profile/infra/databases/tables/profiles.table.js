"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTable = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const constants_1 = require("../../../../../constants");
const profile_1 = require("../../../domain/aggregates/profile");
let ProfileTable = class ProfileTable extends aqua_1.BaseTable {
    constructor() {
        super(...arguments);
        this.id = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.userId = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.firstName = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.lastName = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.email = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.gender = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.dob = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.phone = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.identityNum = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.avatar = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.profession = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.status = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.createdAt = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.updatedAt = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.deletedAt = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.attributeValues = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.addressInfo = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.typeId = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.type = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.parentId = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.children = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.targetId = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.code = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
    }
};
tslib_1.__decorate([
    (0, aqua_1.Column)({ isPrimaryKey: true }),
    tslib_1.__metadata("design:type", String)
], ProfileTable.prototype, "id", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "email", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "dob", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "identityNum", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "profession", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ProfileTable.prototype, "status", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], ProfileTable.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    (0, aqua_1.HasMany)(constants_1.TableNames.PROFILE_ATTRIBUTE_VALUES, 'id', 'entity_id'),
    tslib_1.__metadata("design:type", Array)
], ProfileTable.prototype, "attributeValues", void 0);
tslib_1.__decorate([
    (0, aqua_1.HasOne)(constants_1.TableNames.PROFILE_ADDRESSES, 'id', 'profile_id'),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "addressInfo", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ProfileTable.prototype, "typeId", void 0);
tslib_1.__decorate([
    (0, aqua_1.HasOne)(constants_1.TableNames.PROFILE_RELATIONSHIP_TYPES, 'type_id', 'id'),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "type", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "parentId", void 0);
tslib_1.__decorate([
    (0, aqua_1.HasMany)(constants_1.TableNames.PROFILES, 'id', 'parent_id'),
    tslib_1.__metadata("design:type", Array)
], ProfileTable.prototype, "children", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "targetId", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileTable.prototype, "code", void 0);
ProfileTable = tslib_1.__decorate([
    (0, aqua_1.Table)({
        name: constants_1.TableNames.PROFILES,
        eav: { tableLink: constants_1.TableNames.PROFILE_ATTRIBUTE_VALUES },
    })
], ProfileTable);
exports.ProfileTable = ProfileTable;
