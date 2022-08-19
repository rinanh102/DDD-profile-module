"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileAttributeUseCase = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../../constants");
let GetProfileAttributeUseCase = class GetProfileAttributeUseCase extends aqua_1.GetEavAttributeUseCase {
    constructor(_dao) {
        super(_dao);
    }
};
GetProfileAttributeUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.GET_PROFILE_ATTRIBUTE, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_ATTRIBUTE)),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetProfileAttributeUseCase);
exports.GetProfileAttributeUseCase = GetProfileAttributeUseCase;
