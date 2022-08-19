"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileUseCase = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const types_1 = require("./types");
const aqua_1 = require("@cbidigital/aqua");
const errors_1 = require("../../../../domain/errors");
const constants_1 = require("../../../../../../constants");
let UpdateProfileUseCase = class UpdateProfileUseCase extends aqua_1.UseCase {
    constructor(_repo, _mapper) {
        super();
        this._repo = _repo;
        this._mapper = _mapper;
        this.validate = async (input) => {
            if (!input.id && !input.userId)
                throw new errors_1.MissingUpdateInputField();
            const model = await aqua_1.ValidatorUtil.validatePlain(types_1.UpdateProfileUseCaseInputModel, input);
            return model;
        };
        this.processing = async (input) => {
            if (input.id) {
                const entity = await this._repo.update(input.id, input);
                return { entity };
            }
            else if (input.userId) {
                const entity = await this._repo.updateByUserId(input.userId, input);
                return { entity };
            }
            else {
                throw new errors_1.MissingUpdateInputField();
            }
        };
        this.map = async ({ entity, }) => {
            return this._mapper.fromEntityToDTO(entity);
        };
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }
};
UpdateProfileUseCase = tslib_1.__decorate([
    (0, common_1.Provider)({ token: constants_1.ProfileTokens.Usecase.UPDATE_PROFILE, scope: common_1.Scope.REQUEST }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Repo.PROFILE)),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], UpdateProfileUseCase);
exports.UpdateProfileUseCase = UpdateProfileUseCase;
