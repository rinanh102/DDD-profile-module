"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileRelationshipTypeUseCase = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../../constants");
const errors_1 = require("../../../../domain/errors");
let GetProfileRelationshipTypeUseCase = class GetProfileRelationshipTypeUseCase extends aqua_1.UseCase {
    constructor(_profileRealtionshipTypeDAO) {
        super();
        this._profileRealtionshipTypeDAO = _profileRealtionshipTypeDAO;
        this.validate = async (input) => {
            return input;
        };
        this.processing = async (input) => {
            const profileDTO = await this._profileRealtionshipTypeDAO.findOne({ filter: { id: { eq: input } } });
            if (!profileDTO)
                throw new errors_1.ProfileRelationshipTypeNotFoundError();
            return profileDTO;
        };
        this.map = async (input) => {
            return aqua_1.DtoUtil.map(input, { useUnixtime: true });
        };
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }
};
GetProfileRelationshipTypeUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.GET_PROFILE_RELATIONSHIP_TYPE, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetProfileRelationshipTypeUseCase);
exports.GetProfileRelationshipTypeUseCase = GetProfileRelationshipTypeUseCase;
