"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfileUseCaseInputModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class DeleteProfileUseCaseInputModel {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], DeleteProfileUseCaseInputModel.prototype, "id", void 0);
exports.DeleteProfileUseCaseInputModel = DeleteProfileUseCaseInputModel;
