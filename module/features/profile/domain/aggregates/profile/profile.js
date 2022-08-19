"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const aqua_1 = require("@cbidigital/aqua");
const _1 = require(".");
const entities_1 = require("./entities");
class Profile extends aqua_1.AggregateRoot {
    constructor(id, props, attributeValues) {
        super(id, props);
        this._eav = new aqua_1.EavEntity(this, attributeValues);
    }
    get eav() {
        return this._eav;
    }
    get userId() {
        return this._props.userId;
    }
    get firstName() {
        return this._props.firstName;
    }
    get lastName() {
        return this._props.lastName;
    }
    get email() {
        return this._props.email;
    }
    get gender() {
        return this._props.gender;
    }
    get dob() {
        return this._props.dob;
    }
    get phone() {
        return this._props.phone;
    }
    get identityNum() {
        return this._props.identityNum;
    }
    get avatar() {
        return this._props.avatar;
    }
    get profession() {
        return this._props.profession;
    }
    get status() {
        return this._props.status;
    }
    get createdAt() {
        return this._props.createdAt;
    }
    get updatedAt() {
        return this._props.updatedAt;
    }
    get deletedAt() {
        return this._props.deletedAt;
    }
    get addressInfo() {
        return this._props.addressInfo;
    }
    get parentId() {
        return this._props.parentId;
    }
    get typeId() {
        return this._props.typeId;
    }
    get type() {
        return this._props.type;
    }
    get children() {
        return this._props.children;
    }
    get targetId() {
        return this._props.targetId;
    }
    get code() {
        return this._props.code;
    }
    setUserId(userId) {
        if (userId !== undefined) {
            this._props.userId = userId;
        }
    }
    setFirstName(firstName) {
        if (firstName !== undefined) {
            this._props.firstName = firstName;
        }
    }
    setLastName(lastName) {
        if (lastName !== undefined) {
            this._props.lastName = lastName;
        }
    }
    setEmail(email) {
        if (email !== undefined) {
            this._props.email = email;
        }
    }
    setGender(gender) {
        if (gender !== undefined) {
            this._props.gender = gender;
        }
    }
    setDob(dob) {
        if (dob !== undefined) {
            this._props.dob = dob;
        }
    }
    setPhone(phone) {
        if (phone !== undefined) {
            this._props.phone = phone;
        }
    }
    setIdentifyNum(identityNum) {
        if (identityNum !== undefined) {
            this._props.identityNum = identityNum;
        }
    }
    setAvatar(avatar) {
        if (avatar !== undefined) {
            this._props.avatar = avatar;
        }
    }
    setProfession(profession) {
        if (profession !== undefined) {
            this._props.profession = profession;
        }
    }
    setStatus(status) {
        if (status !== undefined) {
            this._props.status = status;
        }
    }
    setType(type) {
        if (type !== undefined) {
            this._props.type = type;
        }
    }
    setCreatedAt(createdAt) {
        if (createdAt !== undefined) {
            this._props.createdAt = createdAt;
        }
    }
    setUpdatedAt(updatedAt) {
        if (updatedAt !== undefined) {
            this._props.updatedAt = updatedAt;
        }
    }
    setDeletedAt(deletedAt) {
        if (deletedAt !== undefined) {
            this._props.deletedAt = deletedAt;
        }
    }
    setAddressInfo(addressInfo) {
        if (addressInfo !== undefined) {
            this._props.addressInfo = addressInfo;
        }
    }
    setTypeId(typeId) {
        if (typeId !== undefined) {
            this._props.typeId = typeId;
        }
    }
    setParentId(parentId) {
        if (parentId !== undefined) {
            this._props.parentId = parentId;
        }
    }
    setChildren(children) {
        if (children !== undefined) {
            this._props.children = children;
        }
    }
    setTargetId(targetId) {
        if (targetId !== undefined) {
            this._props.targetId = targetId;
        }
    }
    setCode(code) {
        if (code !== undefined) {
            this._props.code = code;
        }
    }
    async create(payload) {
        const model = await aqua_1.ValidatorUtil.validatePlain(_1.CreateProfileInputModel, payload);
        this.setId(aqua_1.EntityIdUtil.randomUUID());
        this.setUserId(model.userId);
        this.setFirstName(model.firstName);
        this.setLastName(model.lastName);
        this.setEmail(model.email);
        this.setGender(model.gender);
        if (model.dob)
            this.setDob(new Date(model.dob));
        this.setPhone(model.phone);
        this.setIdentifyNum(model.identityNum);
        this.setAvatar(model.avatar);
        this.setProfession(model.profession);
        this.setStatus(model.status);
        this.setCreatedAt(new Date());
        this.setTypeId(model.typeId);
        this.setParentId(model.parentId);
        this.setTargetId(model.targetId);
        this.setCode(model.code);
        if (model.addressInfo) {
            const addressInfo = new entities_1.ProfileAddress();
            const createAddressInput = { ...model.addressInfo, profileId: this.id };
            await addressInfo.create(createAddressInput);
            this.setAddressInfo(addressInfo);
        }
        this.addDomainEvent({
            aggregateId: this.id,
            type: _1.ProfileEventNames.CREATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
    async update(payload) {
        const model = await aqua_1.ValidatorUtil.validatePlain(_1.UpdateProfileInputModel, payload);
        this.setFirstName(model.firstName);
        this.setLastName(model.lastName);
        this.setEmail(model.email);
        this.setGender(model.gender);
        this.setDob(model.dob);
        this.setPhone(model.phone);
        this.setIdentifyNum(model.identityNum);
        this.setAvatar(model.avatar);
        this.setProfession(model.profession);
        this.setStatus(model.status);
        this.setUpdatedAt(new Date());
        this.setTypeId(model.typeId);
        this.setParentId(model.parentId);
        this.setTargetId(model.targetId);
        if (model.addressInfo) {
            const addressInfo = new entities_1.ProfileAddress();
            await addressInfo.update(model.addressInfo);
            this.setAddressInfo(addressInfo);
        }
        this.addDomainEvent({
            aggregateId: this.id,
            type: _1.ProfileEventNames.UPDATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
    async delete(payload) {
        this.setStatus(_1.ProfileStatusEnum.Deactivate);
        this.setDeletedAt(new Date());
        this.addDomainEvent({
            aggregateId: this.id,
            type: _1.ProfileEventNames.DELETE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
}
exports.Profile = Profile;
