"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileQueryUtil = void 0;
const tslib_1 = require("tslib");
const query_util_1 = require("@cbidigital/aqua/database/query-util");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../constants");
const tables_1 = require("../tables");
let ProfileQueryUtil = class ProfileQueryUtil extends query_util_1.BaseQueryUtil {
    constructor(db) {
        const tables = new Map([
            [constants_1.TableNames.PROFILES, new tables_1.ProfileTable()],
            [constants_1.TableNames.PROFILE_ADDRESSES, new tables_1.ProfileAddressesTable()],
            [constants_1.TableNames.PROFILE_ATTRIBUTES, new tables_1.ProfileAttributeTable()],
            [constants_1.TableNames.PROFILE_ATTRIBUTE_VALUES, new tables_1.ProfileAttributeValueTable()],
            [constants_1.TableNames.PROFILE_RELATIONSHIP_TYPES, new tables_1.ProfileRelationshipTypeTable()],
        ]);
        super({ db, tables });
    }
};
ProfileQueryUtil = tslib_1.__decorate([
    (0, common_1.Provider)({
        token: constants_1.ProfileTokens.Common.PROFILE_QUERY_UTIL,
        scope: common_1.Scope.SINGLETON,
    }),
    tslib_1.__param(0, (0, common_1.DatabaseLookup)()),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProfileQueryUtil);
exports.ProfileQueryUtil = ProfileQueryUtil;
