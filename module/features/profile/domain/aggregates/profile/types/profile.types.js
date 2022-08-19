"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileInputModel = exports.CreateProfileInputModel = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const _1 = require(".");
const enums_1 = require("../enums");
class CreateProfileAddressInputInnerModel {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "country", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "region", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "province", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "district", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "ward", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "postalCode", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "latitude", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileAddressInputInnerModel.prototype, "longitude", void 0);
class CreateProfileInputModel {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(enums_1.GenderEnum),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "dob", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "identityNum", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(0),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "profession", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(enums_1.ProfileStatusEnum),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => CreateProfileAddressInputInnerModel),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "addressInfo", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => aqua_1.CreateAttributeValuesInputModel),
    tslib_1.__metadata("design:type", Array)
], CreateProfileInputModel.prototype, "attributeValues", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "typeId", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "parentId", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "targetId", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], CreateProfileInputModel.prototype, "code", void 0);
exports.CreateProfileInputModel = CreateProfileInputModel;
class UpdateProfileInputModel {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(enums_1.GenderEnum),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "dob", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(0),
    (0, class_validator_1.MaxLength)(20),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(0),
    (0, class_validator_1.MaxLength)(20),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "identityNum", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(0),
    (0, class_validator_1.MaxLength)(255),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "profession", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(enums_1.ProfileStatusEnum),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => _1.UpdateProfileAddressInputModel),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "addressInfo", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => aqua_1.UpdateAttributeValuesInputModel),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "attributeValues", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "typeId", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "parentId", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileInputModel.prototype, "targetId", void 0);
exports.UpdateProfileInputModel = UpdateProfileInputModel;
