"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesModule = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const mappers_1 = require("./utils/objects/mappers");
const repos_1 = require("./features/profile/domain/repos");
const daos_1 = require("./features/profile/infra/databases/daos");
const query_util_1 = require("./features/profile/infra/databases/query-util");
let ProfilesModule = class ProfilesModule {
};
ProfilesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [
            query_util_1.ProfileQueryUtil,
            aqua_1.EavAttributeMapper,
            aqua_1.EavAttributeValueMapper,
            mappers_1.ProfileMapper,
            mappers_1.ProfileAddressMapper,
            mappers_1.ProfileRelationshipTypeMapper,
            daos_1.ProfileDao,
            daos_1.ProfileAttributeDao,
            daos_1.ProfileAttributeValueDao,
            daos_1.ProfileAddressDao,
            daos_1.ProfileRelationshipTypeDao,
            repos_1.ProfileRepo,
            repos_1.ProfileRelationshipTypeRepo,
        ],
    })
], ProfilesModule);
exports.ProfilesModule = ProfilesModule;
