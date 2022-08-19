"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAddressMapper = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const entities_1 = require("../../../features/profile/domain/aggregates/profile/entities");
const constants_1 = require("../../../constants");
let ProfileAddressMapper = class ProfileAddressMapper {
    fromEntityToDTO(entity) {
        return {
            id: entity.id,
            profileId: entity.profileId,
            country: entity.country,
            region: entity.region,
            province: entity.province,
            district: entity.district,
            ward: entity.ward,
            address: entity.address,
            postalCode: entity.postalCode,
            latitude: entity.latitude,
            longitude: entity.longitude,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
    fromDTOToEntity(dto) {
        return new entities_1.ProfileAddress(dto.id, {
            profileId: dto.profileId,
            country: dto.country,
            region: dto.region,
            province: dto.province,
            district: dto.district,
            ward: dto.ward,
            address: dto.address,
            postalCode: dto.postalCode,
            latitude: dto.latitude,
            longitude: dto.longitude,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }
};
ProfileAddressMapper = tslib_1.__decorate([
    (0, common_1.Provider)({
        token: constants_1.ProfileTokens.Mapper.PROFILE_ADDRESS,
        scope: common_1.Scope.SINGLETON,
    })
], ProfileAddressMapper);
exports.ProfileAddressMapper = ProfileAddressMapper;
