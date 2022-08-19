"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeRest = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../../constants");
let ProfileRelationshipTypeRest = class ProfileRelationshipTypeRest {
    constructor(cacheStore, _getProfileRelationshipTypeUseCase, _getListProfileRelationshipTypeUseCase) {
        this.cacheStore = cacheStore;
        this._getProfileRelationshipTypeUseCase = _getProfileRelationshipTypeUseCase;
        this._getListProfileRelationshipTypeUseCase = _getListProfileRelationshipTypeUseCase;
    }
    async getProfileById(id, authId) {
        return this._getProfileRelationshipTypeUseCase.exec(id, {
            auth: {
                authId,
            },
        });
    }
    async findAll(filter, offset, limit, sort, authId) {
        return this._getListProfileRelationshipTypeUseCase.exec({
            offset,
            limit,
            sort,
            filter,
        }, {
            auth: {
                authId,
            },
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/:id' }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRelationshipTypeRest.prototype, "getProfileById", null);
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/' }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Query)('filter')),
    tslib_1.__param(1, (0, common_1.Query)('offset')),
    tslib_1.__param(2, (0, common_1.Query)('limit')),
    tslib_1.__param(3, (0, common_1.Query)('sort')),
    tslib_1.__param(4, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number, Number, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRelationshipTypeRest.prototype, "findAll", null);
ProfileRelationshipTypeRest = tslib_1.__decorate([
    (0, common_1.Rest)('/profile-relationship-types'),
    tslib_1.__param(0, (0, common_1.CacheLookup)()),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(2, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILE_RELATIONSHIP_TYPES)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
], ProfileRelationshipTypeRest);
exports.ProfileRelationshipTypeRest = ProfileRelationshipTypeRest;
