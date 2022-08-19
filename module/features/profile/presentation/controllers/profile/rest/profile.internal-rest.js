"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileInternalRest = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const http_status_codes_1 = require("http-status-codes");
const constants_1 = require("../../../../../../constants");
let ProfileInternalRest = class ProfileInternalRest {
    constructor(cacheStore, _createProfileUseCase, _updateProfileUseCase, _deleteProfileUseCase, _getProfileUseCase, _getListProfileUseCase, _getListProfileOfUserUseCase) {
        this.cacheStore = cacheStore;
        this._createProfileUseCase = _createProfileUseCase;
        this._updateProfileUseCase = _updateProfileUseCase;
        this._deleteProfileUseCase = _deleteProfileUseCase;
        this._getProfileUseCase = _getProfileUseCase;
        this._getListProfileUseCase = _getListProfileUseCase;
        this._getListProfileOfUserUseCase = _getListProfileOfUserUseCase;
    }
    async create(body) {
        return this._createProfileUseCase.exec(body);
    }
    async update(id, body) {
        return this._updateProfileUseCase.exec({
            ...body,
            id,
        });
    }
    async updateByUserId(userId, body) {
        return this._updateProfileUseCase.exec({
            ...body,
            userId,
            id: undefined,
        });
    }
    async delete(id) {
        return this._deleteProfileUseCase.exec({ id });
    }
    async getProfileById(id) {
        return this._getProfileUseCase.exec(id);
    }
    async findAll(filter, offset, limit, sort) {
        return this._getListProfileUseCase.exec({
            offset,
            limit,
            sort,
            filter,
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)({ uri: '/' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileInternalRest.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Patch)({ uri: '/:id' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileInternalRest.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Patch)({ uri: '/by-user-id/:userId' }),
    tslib_1.__param(0, (0, common_1.Param)('userId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileInternalRest.prototype, "updateByUserId", null);
tslib_1.__decorate([
    (0, common_1.Delete)({ uri: '/:id', code: http_status_codes_1.StatusCodes.NO_CONTENT }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileInternalRest.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/:id' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileInternalRest.prototype, "getProfileById", null);
tslib_1.__decorate([
    (0, common_1.Get)({ uri: '/' }),
    tslib_1.__param(0, (0, common_1.Query)('filter')),
    tslib_1.__param(1, (0, common_1.Query)('offset')),
    tslib_1.__param(2, (0, common_1.Query)('limit')),
    tslib_1.__param(3, (0, common_1.Query)('sort')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number, Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileInternalRest.prototype, "findAll", null);
ProfileInternalRest = tslib_1.__decorate([
    (0, common_1.Rest)('/internal/profiles'),
    tslib_1.__param(0, (0, common_1.CacheLookup)()),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.CREATE_PROFILE)),
    tslib_1.__param(2, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.UPDATE_PROFILE)),
    tslib_1.__param(3, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.DELETE_PROFILE)),
    tslib_1.__param(4, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_PROFILE_BY_ID)),
    tslib_1.__param(5, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILES)),
    tslib_1.__param(6, (0, common_1.Inject)(constants_1.ProfileTokens.Usecase.GET_LIST_PROFILES_OF_USER)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
], ProfileInternalRest);
exports.ProfileInternalRest = ProfileInternalRest;
