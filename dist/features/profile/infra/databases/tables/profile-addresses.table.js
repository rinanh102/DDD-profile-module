"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAddressesTable = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const constants_1 = require("../../../../../constants");
let ProfileAddressesTable = class ProfileAddressesTable extends aqua_1.BaseTable {
    constructor() {
        super(...arguments);
        this.id = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.profileId = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.country = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.region = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.province = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.district = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.ward = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.address = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.postalCode = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.latitude = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.longitude = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.createdAt = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
        this.updatedAt = aqua_1.TABLE_FIELD_DEFAULT_VALUE;
    }
};
tslib_1.__decorate([
    (0, aqua_1.Column)({ isPrimaryKey: true }),
    tslib_1.__metadata("design:type", String)
], ProfileAddressesTable.prototype, "id", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ProfileAddressesTable.prototype, "profileId", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "country", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "region", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "province", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "district", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "ward", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "address", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "postalCode", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "latitude", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "longitude", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], ProfileAddressesTable.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, aqua_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], ProfileAddressesTable.prototype, "updatedAt", void 0);
ProfileAddressesTable = tslib_1.__decorate([
    (0, aqua_1.Table)({
        name: constants_1.TableNames.PROFILE_ADDRESSES,
    })
], ProfileAddressesTable);
exports.ProfileAddressesTable = ProfileAddressesTable;
