"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileByIdUseCase = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../../constants");
const errors_1 = require("../../../../domain/errors");
let GetProfileByIdUseCase = class GetProfileByIdUseCase extends aqua_1.UseCase {
    constructor(_profileDAO) {
        super();
        this._profileDAO = _profileDAO;
        this.validate = async (input) => {
            return input;
        };
        this.processing = async (input) => {
            const profileDTO = await this._profileDAO.findOne({ filter: { id: { eq: input } } }, {
                resolve: ['addressInfo', 'type', 'children', { attributeValues: ['attribute'] }],
            });
            if (!profileDTO)
                throw new errors_1.ProfileNotFoundError();
            return profileDTO;
        };
        this.map = async (input) => {
            return aqua_1.DtoUtil.map(input, { useUnixtime: true });
        };
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }
};
GetProfileByIdUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.GET_PROFILE_BY_ID, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE)),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetProfileByIdUseCase);
exports.GetProfileByIdUseCase = GetProfileByIdUseCase;
