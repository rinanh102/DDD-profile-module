"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRest = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const http_status_codes_1 = require("http-status-codes");
const constants_1 = require("../../../../../../constants");
let ProfileRest = class ProfileRest {
    constructor(cacheStore, _createProfileUseCase, _updateProfileUseCase, _deleteProfileUseCase, _getProfileUseCase, _getListProfileUseCase, _getListProfileOfUserUseCase, _getProfileAttributeUseCase, _getListProfileAttributeUseCase) {
        this.cacheStore = cacheStore;
        this._createProfileUseCase = _createProfileUseCase;
        this._updateProfileUseCase = _updateProfileUseCase;
        this._deleteProfileUseCase = _deleteProfileUseCase;
        this._getProfileUseCase = _getProfileUseCase;
        this._getListProfileUseCase = _getListProfileUseCase;
        this._getListProfileOfUserUseCase = _getListProfileOfUserUseCase;
        this._getProfileAttributeUseCase = _getProfileAttributeUseCase;
        this._getListProfileAttributeUseCase = _getListProfileAttributeUseCase;
    }
    async create(body, authId) {
        body.userId = authId;
        body.parentId = undefined;
        return this._createProfileUseCase.exec(body, {
            auth: {
                authId,
            },
        });
    }
    async update(id, body, authId) {
        return this._updateProfileUseCase.exec({
            ...body,
            id,
        }, {
            auth: {
                authId,
            },
        });
    }
    async delete(id, authId) {
        return this._deleteProfileUseCase.exec({
            id,
        }, {
            auth: {
                authId,
            },
        });
    }
    async getProfileById(id, authId) {
        return this._getProfileUseCase.exec(id, {
            auth: {
                authId,
            },
        });
    }
    async findAll(filter, offset, limit, sort, authId) {
        return this._getListProfileOfUserUseCase.exec({
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
], ProfileRest.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Patch)({ uri: '/:id' }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRest.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)({ uri: '/:id', code: http_status_codes_1.StatusCodes.NO_CONTENT }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRest.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/:id' }),
    (0, common_1.Guard)({ private: true }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Principal)('sub')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRest.prototype, "getProfileById", null);
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
], ProfileRest.prototype, "findAll", null);
ProfileRest = tslib_1.__decorate([
    (0, common_1.Rest)('/profiles'),
    tslib_1.__param(0, (0, common_1.CacheLookup)()),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.CREATE_PROFILE)),
    tslib_1.__param(2, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.UPDATE_PROFILE)),
    tslib_1.__param(3, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.DELETE_PROFILE)),
    tslib_1.__param(4, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_PROFILE_BY_ID)),
    tslib_1.__param(5, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILES)),
    tslib_1.__param(6, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILES_OF_USER)),
    tslib_1.__param(7, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILE_ATTRIBUTE)),
    tslib_1.__param(8, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILE_ATTRIBUTE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
], ProfileRest);
exports.ProfileRest = ProfileRest;
