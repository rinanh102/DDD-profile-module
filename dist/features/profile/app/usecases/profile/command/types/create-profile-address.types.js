"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileAddressUsecaseInputModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateProfileAddressUsecaseInputModel {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "country", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "region", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "province", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "district", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "ward", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "postalCode", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "latitude", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressUsecaseInputModel.prototype, "longitude", void 0);
exports.CreateProfileAddressUsecaseInputModel = CreateProfileAddressUsecaseInputModel;
