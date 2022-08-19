import { Entity, EntityIdUtil, ValidatorUtil } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import {
    CreateProfileAddressInput,
    CreateProfileAddressOutput,
    UpdateProfileAddressInput,
    UpdateProfileAddressInputModel,
    UpdateProfileAddressOutput,
} from '../types';

export type ProfileAddressProps = {
    createdAt: Date;
    updatedAt: Nullable<Date>;
    profileId: string;
    country: Nullable<string>;
    region: Nullable<string>;
    province: Nullable<string>;
    district: Nullable<string>;
    ward: Nullable<string>;
    address: Nullable<string>;
    postalCode: Nullable<string>;
    latitude: Nullable<number>;
    longitude: Nullable<number>;
};

export class ProfileAddress extends Entity<ProfileAddressProps> {
    constructor(id?: string, props?: ProfileAddressProps) {
        super(id, props);
    }
    /** Props **/

    get profileId(): string {
        return this._props.profileId;
    }
    get country(): Nullable<string> {
        return this._props.country;
    }
    get region(): Nullable<string> {
        return this._props.region;
    }
    get province(): Nullable<string> {
        return this._props.province;
    }
    get district(): Nullable<string> {
        return this._props.district;
    }
    get ward(): Nullable<string> {
        return this._props.ward;
    }
    get address(): Nullable<string> {
        return this._props.address;
    }
    get postalCode(): Nullable<string> {
        return this._props.postalCode;
    }
    get latitude(): Nullable<number> {
        return this._props.latitude;
    }
    get longitude(): Nullable<number> {
        return this._props.longitude;
    }
    get createdAt(): Date {
        return this._props.createdAt;
    }

    get updatedAt(): Nullable<Date> {
        return this._props.updatedAt;
    }

    /** Methods **/

    private setProfileId(payload?: string) {
        if (payload !== undefined) this._props.profileId = payload;
    }
    private setCountry(payload?: Nullable<string>) {
        if (payload !== undefined) this._props.country = payload;
    }
    private setRegion(payload?: Nullable<string>) {
        if (payload !== undefined) this._props.region = payload;
    }
    private setProvince(payload?: Nullable<string>) {
        if (payload !== undefined) this._props.province = payload;
    }
    private setDistrict(payload?: Nullable<string>) {
        if (payload !== undefined) this._props.district = payload;
    }
    private setWard(payload?: Nullable<string>) {
        if (payload !== undefined) this._props.ward = payload;
    }
    private setAddress(payload?: Nullable<string>) {
        if (payload !== undefined) this._props.address = payload;
    }
    private setPosttalCode(payload?: Nullable<string>) {
        if (payload !== undefined) this._props.postalCode = payload;
    }
    private setLatitude(payload?: Nullable<number>) {
        if (payload !== undefined) this._props.latitude = payload;
    }
    private setLongtitude(payload?: Nullable<number>) {
        if (payload !== undefined) this._props.longitude = payload;
    }
    private setCreatedAt(payload?: Date) {
        if (payload !== undefined) this._props.createdAt = payload;
    }
    private setUpdatedAt(payload?: Date) {
        if (payload !== undefined) this._props.updatedAt = payload;
    }

    public async create(payload: CreateProfileAddressInput): Promise<CreateProfileAddressOutput> {
        // const model = await ValidatorUtil.validatePlain(CreateProfileAddressInputModel, payload);

        // handle logic
        this.setId(EntityIdUtil.randomUUID());
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

    public async update(payload: UpdateProfileAddressInput): Promise<UpdateProfileAddressOutput> {
        const model = await ValidatorUtil.validatePlain(UpdateProfileAddressInputModel, payload);

        // handle logic
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
