"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAttributeUpdateInputModel = exports.ProfileAttributeCreateInputModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
class ProfileAttributeCreateInputModel {
    constructor(payload) {
        this.code = payload.code;
        this.label = payload.label;
        this.type = payload.type;
        this.visibility = payload.visibility;
        this.sortOrder = payload.sortOrder;
        this.status = payload.status;
    }
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(32),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9_-]*$/),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeCreateInputModel.prototype, "code", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeCreateInputModel.prototype, "label", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enums_1.EAVAttributeTypes),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeCreateInputModel.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.EAVAttributeStatus),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeCreateInputModel.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], ProfileAttributeCreateInputModel.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], ProfileAttributeCreateInputModel.prototype, "visibility", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], ProfileAttributeCreateInputModel.prototype, "isRequired", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ProfileAttributeCreateInputModel.prototype, "options", void 0);
exports.ProfileAttributeCreateInputModel = ProfileAttributeCreateInputModel;
class ProfileAttributeUpdateInputModel {
    constructor(payload) {
        this.code = payload.code;
        this.label = payload.label;
        this.isRequired = payload.isRequired;
        this.visibility = payload.visibility;
        this.sortOrder = payload.sortOrder;
        this.status = payload.status;
        this.options = payload.options;
    }
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeUpdateInputModel.prototype, "code", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeUpdateInputModel.prototype, "label", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.EAVAttributeStatus),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeUpdateInputModel.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], ProfileAttributeUpdateInputModel.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], ProfileAttributeUpdateInputModel.prototype, "visibility", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], ProfileAttributeUpdateInputModel.prototype, "isRequired", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ProfileAttributeUpdateInputModel.prototype, "options", void 0);
exports.ProfileAttributeUpdateInputModel = ProfileAttributeUpdateInputModel;
