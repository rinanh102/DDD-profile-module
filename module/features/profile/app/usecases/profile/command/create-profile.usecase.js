"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileUseCase = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const aqua_1 = require("@cbidigital/aqua");
const types_1 = require("./types");
const constants_1 = require("../../../../../../constants");
let CreateProfileUseCase = class CreateProfileUseCase extends aqua_1.UseCase {
    constructor(_repo, _mapper) {
        super();
        this._repo = _repo;
        this._mapper = _mapper;
        this.validate = async (input) => {
            const model = await aqua_1.ValidatorUtil.validatePlain(types_1.CreateProfileUseCaseInputModel, input);
            return model;
        };
        this.processing = async (input) => {
            const entity = await this._repo.create(input);
            return { entity };
        };
        this.map = async ({ entity, }) => {
            return this._mapper.fromEntityToDTO(entity);
        };
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }
};
CreateProfileUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.CREATE_PROFILE, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Repo.PROFILE)),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], CreateProfileUseCase);
exports.CreateProfileUseCase = CreateProfileUseCase;
