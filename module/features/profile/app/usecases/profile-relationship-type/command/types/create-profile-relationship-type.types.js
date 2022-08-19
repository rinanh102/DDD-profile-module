"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileRelationshipTypeUseCaseInputModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateProfileRelationshipTypeUseCaseInputModel {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateProfileRelationshipTypeUseCaseInputModel.prototype, "description", void 0);
exports.CreateProfileRelationshipTypeUseCaseInputModel = CreateProfileRelationshipTypeUseCaseInputModel;
