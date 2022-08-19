"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetListProfilesUseCase = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../../constants");
let GetListProfilesUseCase = class GetListProfilesUseCase extends aqua_1.UseCase {
    constructor(_profileDAO) {
        super();
        this._profileDAO = _profileDAO;
        this.validate = async (input) => {
            return input;
        };
        this.processing = async (input) => {
            return this._profileDAO.find(input, {
                resolve: ['addressInfo', 'type', 'children', { attributeValues: ['attribute'] }],
            });
        };
        this.map = async (input) => {
            return input.map((i) => aqua_1.DtoUtil.map(i, { useUnixtime: true }));
        };
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }
};
GetListProfilesUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.GET_LIST_PROFILES, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE)),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetListProfilesUseCase);
exports.GetListProfilesUseCase = GetListProfilesUseCase;
