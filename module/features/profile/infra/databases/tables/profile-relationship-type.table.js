"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeTable = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const constants_1 = require("../../../../../constants");
let ProfileRelationshipTypeTable = class ProfileRelationshipTypeTable extends aqua_1.BaseTable {
    constructor() {
        super(...arguments);
        this.id = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.description = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.createdAt = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.updatedAt = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
    }
};
tslib_1.__decorate([
    (0, aqua_1.Column)({ isPrimaryKey: true }),
    tslib_1.__metadata("design:type", String)
], ProfileRelationshipTypeTable.prototype, "id", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ProfileRelationshipTypeTable.prototype, "description", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], ProfileRelationshipTypeTable.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileRelationshipTypeTable.prototype, "updatedAt", void 0);
ProfileRelationshipTypeTable = tslib_1.__decorate([
    (0, aqua_1.Table)({
        name: constants_1.TableNames.PROFILE_RELATIONSHIP_TYPES,
    })
], ProfileRelationshipTypeTable);
exports.ProfileRelationshipTypeTable = ProfileRelationshipTypeTable;
