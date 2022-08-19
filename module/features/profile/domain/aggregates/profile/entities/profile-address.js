"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAddress = void 0;
const aqua_1 = require("@cbidigital/aqua");
const types_1 = require("../types");
class ProfileAddress extends aqua_1.Entity {
    constructor(id, props) {
        super(id, props);
    }
    get profileId() {
        return this._props.profileId;
    }
    get country() {
        return this._props.country;
    }
    get region() {
        return this._props.region;
    }
    get province() {
        return this._props.province;
    }
    get district() {
        return this._props.district;
    }
    get ward() {
        return this._props.ward;
    }
    get address() {
        return this._props.address;
    }
    get postalCode() {
        return this._props.postalCode;
    }
    get latitude() {
        return this._props.latitude;
    }
    get longitude() {
        return this._props.longitude;
    }
    get createdAt() {
        return this._props.createdAt;
    }
    get updatedAt() {
        return this._props.updatedAt;
    }
    setProfileId(payload) {
        if (payload !== undefined)
            this._props.profileId = payload;
    }
    setCountry(payload) {
        if (payload !== undefined)
            this._props.country = payload;
    }
    setRegion(payload) {
        if (payload !== undefined)
            this._props.region = payload;
    }
    setProvince(payload) {
        if (payload !== undefined)
            this._props.province = payload;
    }
    setDistrict(payload) {
        if (payload !== undefined)
            this._props.district = payload;
    }
    setWard(payload) {
        if (payload !== undefined)
            this._props.ward = payload;
    }
    setAddress(payload) {
        if (payload !== undefined)
            this._props.address = payload;
    }
    setPosttalCode(payload) {
        if (payload !== undefined)
            this._props.postalCode = payload;
    }
    setLatitude(payload) {
        if (payload !== undefined)
            this._props.latitude = payload;
    }
    setLongtitude(payload) {
        if (payload !== undefined)
            this._props.longitude = payload;
    }
    setCreatedAt(payload) {
        if (payload !== undefined)
            this._props.createdAt = payload;
    }
    setUpdatedAt(payload) {
        if (payload !== undefined)
            this._props.updatedAt = payload;
    }
    async create(payload) {
        this.setId(aqua_1.EntityIdUtil.randomUUID());
        this.setProfileId(payload.profileId);
        this.setCountry(payload.country);
        this.setRegion(payload.region);
        this.setProvince(payload.province);
        this.setDistrict(payload.district);
        this.setWard(payload.ward);
        this.setAddress(payload.address);
        this.setPosttalCode(payload.postalCode);
        this.setLatitude(payload.latitude);
        this.setLongtitude(payload.longitude);
        this.setCreatedAt(new Date());
    }
    async update(payload) {
        const model = await aqua_1.ValidatorUtil.validatePlain(types_1.UpdateProfileAddressInputModel, payload);
        this.setCountry(model.country);
        this.setRegion(model.region);
        this.setProvince(model.province);
        this.setDistrict(model.district);
        this.setWard(model.ward);
        this.setAddress(model.address);
        this.setPosttalCode(model.postalCode);
        this.setLatitude(model.latitude);
        this.setLongtitude(model.longitude);
        this.setUpdatedAt(new Date());
    }
}
exports.ProfileAddress = ProfileAddress;
