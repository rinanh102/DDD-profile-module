"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAttributeValueUpdateInputModel = exports.ProfileAttributeValueCreateInputModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const entities_1 = require("../entities");
const profile_1 = require("../profile");
class ProfileAttributeValueCreateInputModel {
    constructor(payload) {
        this.value = payload.value;
        this.attribute = payload.attribute;
        this.entity = payload.entity;
    }
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeValueCreateInputModel.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", entities_1.ProfileAttribute)
], ProfileAttributeValueCreateInputModel.prototype, "attribute", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", profile_1.Profile)
], ProfileAttributeValueCreateInputModel.prototype, "entity", void 0);
exports.ProfileAttributeValueCreateInputModel = ProfileAttributeValueCreateInputModel;
class ProfileAttributeValueUpdateInputModel {
    constructor(payload) {
        this.value = payload.value;
    }
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ProfileAttributeValueUpdateInputModel.prototype, "value", void 0);
exports.ProfileAttributeValueUpdateInputModel = ProfileAttributeValueUpdateInputModel;
