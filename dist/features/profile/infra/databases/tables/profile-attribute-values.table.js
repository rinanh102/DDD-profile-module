"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAttributeValueTable = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const constants_1 = require("../../../../../constants");
let ProfileAttributeValueTable = class ProfileAttributeValueTable extends aqua_1.EavAttributeValueTable {
    constructor() {
        super(...arguments);
        this.attribute = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
    }
};
tslib_1.__decorate([
    (0, aqua_1.HasOne)(constants_1.TableNames.PROFILE_ATTRIBUTES, 'attribute_code', 'code'),
    tslib_1.__metadata("design:type", Object)
], ProfileAttributeValueTable.prototype, "attribute", void 0);
ProfileAttributeValueTable = tslib_1.__decorate([
    (0, aqua_1.Table)({
        name: constants_1.TableNames.PROFILE_ATTRIBUTE_VALUES,
    })
], ProfileAttributeValueTable);
exports.ProfileAttributeValueTable = ProfileAttributeValueTable;
