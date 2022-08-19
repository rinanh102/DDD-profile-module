"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMapper = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const aqua_1 = require("@cbidigital/aqua");
const profile_1 = require("../../../features/profile/domain/aggregates/profile/profile");
const constants_1 = require("../../../constants");
let ProfileMapper = class ProfileMapper {
    constructor(_profileAddressMapper, _profileAttributeValueMapper, _profileRelationshipTypeMapper) {
        this._profileAddressMapper = _profileAddressMapper;
        this._profileAttributeValueMapper = _profileAttributeValueMapper;
        this._profileRelationshipTypeMapper = _profileRelationshipTypeMapper;
    }
    fromEntityToDTO(entity) {
        return {
            id: entity.id,
            userId: entity.userId,
            firstName: entity.firstName,
            lastName: entity.lastName,
            email: entity.email,
            gender: entity.gender,
            dob: entity.dob,
            phone: entity.phone,
            identityNum: entity.identityNum,
            avatar: entity.avatar,
            profession: entity.profession,
            status: entity.status,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
            typeId: entity.typeId,
            parentId: entity.parentId,
            type: entity.type
                ? this._profileRelationshipTypeMapper.fromEntityToDTO(entity.type)
                : entity.type,
            children: entity.children ? entity.children.map((i) => this.fromEntityToDTO(i)) : entity.children,
            addressInfo: entity.addressInfo
                ? this._profileAddressMapper.fromEntityToDTO(entity.addressInfo)
                : entity.addressInfo,
            attributeValues: entity.eav.attributeValues
                ? entity.eav.attributeValues.map((i) => this._profileAttributeValueMapper.fromEntityToDTO(i))
                : [],
            targetId: entity.targetId,
            code: entity.code,
        };
    }
    fromDTOToEntity(dto) {
        return new profile_1.Profile(dto.id, {
            userId: dto.userId,
            firstName: dto.firstName,
            lastName: dto.lastName,
            email: dto.email,
            gender: dto.gender,
            dob: dto.dob,
            phone: dto.phone,
            identityNum: dto.identityNum,
            avatar: dto.avatar,
            profession: dto.profession,
            status: dto.status,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt ? new Date(dto.updatedAt) : null,
            deletedAt: dto.deletedAt ? new Date(dto.deletedAt) : null,
            typeId: dto.typeId,
            parentId: dto.parentId,
            type: dto.type ? this._profileRelationshipTypeMapper.fromDTOToEntity(dto.type) : dto.type,
            children: dto.children ? dto.children.map((i) => this.fromDTOToEntity(i)) : dto.children,
            addressInfo: dto.addressInfo
                ? this._profileAddressMapper.fromDTOToEntity(dto.addressInfo)
                : null,
            targetId: dto.targetId,
            code: dto.code,
        }, dto.attributeValues?.map((a) => new aqua_1.EavAttributeValue(a.id, a)));
    }
};
ProfileMapper = tslib_1.__decorate([
    (0, common_1.Provider)({
        token: constants_1.ProfileTokens.Mapper.PROFILE,
        scope: common_1.Scope.SINGLETON,
    }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE_ADDRESS)),
    tslib_1.__param(1, (0, common_1.Inject)(aqua_1.EavMapperTokens.ATTRIBUTE_VALUE)),
    tslib_1.__param(2, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
], ProfileMapper);
exports.ProfileMapper = ProfileMapper;
