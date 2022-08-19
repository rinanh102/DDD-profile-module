"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileRelationshipTypeUseCase = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const types_1 = require("./types");
const aqua_1 = require("@cbidigital/aqua");
const constants_1 = require("../../../../../../constants");
let UpdateProfileRelationshipTypeUseCase = class UpdateProfileRelationshipTypeUseCase extends aqua_1.UseCase {
    constructor(_repo, _mapper) {
        super();
        this._repo = _repo;
        this._mapper = _mapper;
        this.validate = async (input) => {
            const model = await aqua_1.ValidatorUtil.validatePlain(types_1.UpdateProfileRelationshipTypeUseCaseInputModel, input);
            return model;
        };
        this.processing = async (input) => {
            const entity = await this._repo.update(input.id, input);
            return { entity };
        };
        this.map = async ({ entity }) => {
            return this._mapper.fromEntityToDTO(entity);
        };
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }
};
UpdateProfileRelationshipTypeUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.UPDATE_PROFILE_RELATIONSHIP_TYPE, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Repo.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], UpdateProfileRelationshipTypeUseCase);
exports.UpdateProfileRelationshipTypeUseCase = UpdateProfileRelationshipTypeUseCase;
