"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeDao = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../constants");
let ProfileRelationshipTypeDao = class ProfileRelationshipTypeDao extends aqua_1.BaseDao {
    constructor(db, queryUtil) {
        super({ db, queryUtil, tableName: constants_1.TableNames.PROFILE_RELATIONSHIP_TYPES });
    }
    _transformError(err) {
        const logger = new common_1.Logger(this.constructor.name);
        logger.error(err);
        throw err;
    }
};
ProfileRelationshipTypeDao = tslib_1.__decorate([
    (0, common_1.Dao)({ token: constants_1.ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE, scope: common_1.Scope.SINGLETON }),
    tslib_1.__param(0, (0, common_1.DatabaseLookup)()),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Common.PROFILE_QUERY_UTIL)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], ProfileRelationshipTypeDao);
exports.ProfileRelationshipTypeDao = ProfileRelationshipTypeDao;
