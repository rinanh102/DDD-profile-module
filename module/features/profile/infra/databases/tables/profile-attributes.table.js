"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAttributeTable = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const constants_1 = require("../../../../../constants");
let ProfileAttributeTable = class ProfileAttributeTable extends aqua_1.EavAttributeTable {
};
ProfileAttributeTable = tslib_1.__decorate([
    (0, aqua_1.Table)({
        name: constants_1.TableNames.PROFILE_ATTRIBUTES,
    })
], ProfileAttributeTable);
exports.ProfileAttributeTable = ProfileAttributeTable;
