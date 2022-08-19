"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfileAttributeUseCase = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../../constants");
let DeleteProfileAttributeUseCase = class DeleteProfileAttributeUseCase extends aqua_1.DeleteEavAttributeUseCase {
    constructor(_repo, _mapper) {
        super(_mapper, _repo);
    }
};
DeleteProfileAttributeUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.DELETE_PROFILE_ATTRIBUTE, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Repo.PROFILE)),
    tslib_1.__param(1, (0, common_1.Inject)(aqua_1.EavMapperTokens.ATTRIBUTE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], DeleteProfileAttributeUseCase);
exports.DeleteProfileAttributeUseCase = DeleteProfileAttributeUseCase;
