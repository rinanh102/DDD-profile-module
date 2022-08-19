"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeMapper = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const profile_relationship_type_1 = require("../../../features/profile/domain/aggregates/profile-relationship-type");
const constants_1 = require("../../../constants");
let ProfileRelationshipTypeMapper = class ProfileRelationshipTypeMapper {
    fromEntityToDTO(entity) {
        return {
            id: entity.id,
            description: entity.description,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
    fromDTOToEntity(dto) {
        return new profile_relationship_type_1.ProfileRelationshipType(dto.id, {
            description: dto.description,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }
};
ProfileRelationshipTypeMapper = tslib_1.__decorate([
    (0, common_1.Provider)({
        token: constants_1.ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE,
        scope: common_1.Scope.SINGLETON,
    })
], ProfileRelationshipTypeMapper);
exports.ProfileRelationshipTypeMapper = ProfileRelationshipTypeMapper;
