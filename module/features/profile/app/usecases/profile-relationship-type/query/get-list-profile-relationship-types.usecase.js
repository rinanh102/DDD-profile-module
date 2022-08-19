"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetListProfileRelationshipTypesUseCase = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const constants_1 = require("../../../../../../constants");
let GetListProfileRelationshipTypesUseCase = class GetListProfileRelationshipTypesUseCase extends aqua_1.UseCase {
    constructor(_profileRelationshipTypeDAO) {
        super();
        this._profileRelationshipTypeDAO = _profileRelationshipTypeDAO;
        this.validate = async (input) => {
            return input;
        };
        this.processing = async (input) => {
            return this._profileRelationshipTypeDAO.find({
                offset: input.offset || constants_1.DEFAULT_OFFSET,
                limit: input.limit || constants_1.DEFAULT_LIMIT,
            });
        };
        this.map = async (input) => {
            return input.map((i) => aqua_1.DtoUtil.map(i, { useUnixtime: true }));
        };
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }
};
GetListProfileRelationshipTypesUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.GET_LIST_PROFILE_RELATIONSHIP_TYPES, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetListProfileRelationshipTypesUseCase);
exports.GetListProfileRelationshipTypesUseCase = GetListProfileRelationshipTypesUseCase;
