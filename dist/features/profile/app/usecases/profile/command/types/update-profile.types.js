"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileUseCaseInputModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const profile_1 = require("../../../../../domain/aggregates/profile");
class UpdateProfileUseCaseInputModel extends profile_1.UpdateProfileInputModel {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateProfileUseCaseInputModel.prototype, "id", void 0);
exports.UpdateProfileUseCaseInputModel = UpdateProfileUseCaseInputModel;
