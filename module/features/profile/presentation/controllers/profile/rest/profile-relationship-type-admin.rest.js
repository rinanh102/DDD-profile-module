"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeAminRest = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const http_status_codes_1 = require("http-status-codes");
const constants_1 = require("../../../../../../constants");
let ProfileRelationshipTypeAminRest = class ProfileRelationshipTypeAminRest {
    constructor(cacheStore, _createProfileRelationshipTypeUseCase, _updateProfileRelationshipTypeUseCase, _deleteProfileRelationshipTypeUseCase, _getProfileRelationshipTypeUseCase, _getListProfileRelationshipTypeUseCase) {
        this.cacheStore = cacheStore;
        this._createProfileRelationshipTypeUseCase = _createProfileRelationshipTypeUseCase;
        this._updateProfileRelationshipTypeUseCase = _updateProfileRelationshipTypeUseCase;
        this._deleteProfileRelationshipTypeUseCase = _deleteProfileRelationshipTypeUseCase;
        this._getProfileRelationshipTypeUseCase = _getProfileRelationshipTypeUseCase;
        this._getListProfileRelationshipTypeUseCase = _getListProfileRelationshipTypeUseCase;
    }
    async create(body, authId) {
        return this._createProfileRelationshipTypeUseCase.exec(body, {
            auth: {
                authId,
            },
        });
    }
    async update(id, body, authId) {
        return this._updateProfileRelationshipTypeUseCase.exec({
            ...body,
            id,
        }, {
            auth: {
                authId,
            },
        });
    }
    async delete(id, authId) {
        return this._deleteProfileRelationshipTypeUseCase.exec({
            id,
        }, {
            auth: {
                authId,
            },
        });
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
    (0, common_1.Post)({ uri: '/' }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRelationshipTypeAminRest.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Patch)({ uri: '/:id' }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRelationshipTypeAminRest.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)({ uri: '/:id', code: http_status_codes_1.StatusCodes.NO_CONTENT }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRelationshipTypeAminRest.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/:id' }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRelationshipTypeAminRest.prototype, "getProfileById", null);
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
], ProfileRelationshipTypeAminRest.prototype, "findAll", null);
ProfileRelationshipTypeAminRest = tslib_1.__decorate([
    (0, common_1.Rest)('/admin/profile-relationship-types'),
    tslib_1.__param(0, (0, common_1.CacheLookup)()),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.CREATE_PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(2, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.UPDATE_PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(3, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.DELETE_PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(4, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(5, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILE_RELATIONSHIP_TYPES)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], ProfileRelationshipTypeAminRest);
exports.ProfileRelationshipTypeAminRest = ProfileRelationshipTypeAminRest;
