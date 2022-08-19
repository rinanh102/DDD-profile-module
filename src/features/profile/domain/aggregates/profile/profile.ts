import { Nullable } from '@cbidigital/heron-common';
import { AggregateRoot, EntityIdUtil, EavAttributeValue, EavEntity, ValidatorUtil } from '@cbidigital/aqua';
import {
    GenderEnum,
    CreateProfileInput,
    // ProfileAddChildInput,
    CreateProfileInputModel,
    CreateProfileOutput,
    DeleteProfileInput,
    DeleteProfileOutput,
    ProfileStatusEnum,
    UpdateProfileInput,
    UpdateProfileInputModel,
    UpdateProfileOutput,
    ProfileEventNames,
} from '.';
import { ProfileAddress } from './entities';
import { ProfileRelationshipType } from '../profile-relationship-type';

type ProfileEntityProps = {
    userId: Nullable<string>;
    firstName: Nullable<string>;
    lastName: Nullable<string>;
    email: Nullable<string>;
    gender: Nullable<GenderEnum>;
    dob: Nullable<Date>;
    phone: Nullable<string>;
    identityNum: Nullable<string>;
    avatar: Nullable<string>;
    profession: Nullable<string>;
    status: ProfileStatusEnum;
    //type: ProfileTypeEnum;
    createdAt: Date;
    updatedAt: Nullable<Date>;
    deletedAt: Nullable<Date>;
    addressInfo: Nullable<ProfileAddress>;
    // relationships: ProfileRelationship[];
    parentId: Nullable<string>;
    typeId: Nullable<string>;
    type: Nullable<ProfileRelationshipType>;
    children: Nullable<Profile[]>;
    // attributeValues: Optional<EavAttributeValue[]>;
    targetId: Nullable<string>;
    code: Nullable<string>;
};

export class Profile extends AggregateRoot<ProfileEntityProps> {
    private readonly _eav: EavEntity;
    get eav(): EavEntity {
        return this._eav;
    }
    constructor(id?: string, props?: ProfileEntityProps, attributeValues?: EavAttributeValue[]) {
        super(id, props);
        this._eav = new EavEntity(this, attributeValues);
    }

    public get userId(): Nullable<string> {
        return this._props.userId;
    }
    public get firstName(): Nullable<string> {
        return this._props.firstName;
    }
    public get lastName(): Nullable<string> {
        return this._props.lastName;
    }
    public get email(): Nullable<string> {
        return this._props.email;
    }
    public get gender(): Nullable<GenderEnum> {
        return this._props.gender;
    }
    public get dob(): Nullable<Date> {
        return this._props.dob;
    }
    public get phone(): Nullable<string> {
        return this._props.phone;
    }
    public get identityNum(): Nullable<string> {
        return this._props.identityNum;
    }
    public get avatar(): Nullable<string> {
        return this._props.avatar;
    }
    public get profession(): Nullable<string> {
        return this._props.profession;
    }
    public get status(): ProfileStatusEnum {
        return this._props.status;
    }
    // public get type(): ProfileTypeEnum{
    //     return this._props.type;
    // }
    public get createdAt(): Date {
        return this._props.createdAt;
    }
    public get updatedAt(): Nullable<Date> {
        return this._props.updatedAt;
    }
    public get deletedAt(): Nullable<Date> {
        return this._props.deletedAt;
    }
    public get addressInfo(): Nullable<ProfileAddress> {
        return this._props.addressInfo;
    }
    // public get relationships(): ProfileRelationship[] {
    //     return this._props.relationships;
    // }
    // public get attributeValues(): Optional<ProfileAttributeValue[]> {
    //     return this._props.attributeValues;
    // }
    public get parentId(): Nullable<string> {
        return this._props.parentId;
    }
    public get typeId(): Nullable<string> {
        return this._props.typeId;
    }
    public get type(): Nullable<ProfileRelationshipType> {
        return this._props.type;
    }
    public get children(): Nullable<Profile[]> {
        return this._props.children;
    }
    public get targetId(): Nullable<string> {
        return this._props.targetId;
    }
    public get code(): Nullable<string> {
        return this._props.code;
    }

    private setUserId(userId?: Nullable<string>) {
        if (userId !== undefined) {
            this._props.userId = userId;
        }
    }
    private setFirstName(firstName?: Nullable<string>) {
        if (firstName !== undefined) {
            this._props.firstName = firstName;
        }
    }
    private setLastName(lastName?: Nullable<string>) {
        if (lastName !== undefined) {
            this._props.lastName = lastName;
        }
    }
    private setEmail(email?: Nullable<string>) {
        if (email !== undefined) {
            this._props.email = email;
        }
    }
    private setGender(gender?: Nullable<GenderEnum>) {
        if (gender !== undefined) {
            this._props.gender = gender;
        }
    }
    private setDob(dob?: Nullable<Date>) {
        if (dob !== undefined) {
            this._props.dob = dob;
        }
    }
    private setPhone(phone?: Nullable<string>) {
        if (phone !== undefined) {
            this._props.phone = phone;
        }
    }
    private setIdentifyNum(identityNum?: Nullable<string>) {
        if (identityNum !== undefined) {
            this._props.identityNum = identityNum;
        }
    }
    private setAvatar(avatar?: Nullable<string>) {
        if (avatar !== undefined) {
            this._props.avatar = avatar;
        }
    }
    private setProfession(profession?: Nullable<string>) {
        if (profession !== undefined) {
            this._props.profession = profession;
        }
    }
    private setStatus(status?: ProfileStatusEnum) {
        if (status !== undefined) {
            this._props.status = status;
        }
    }
    private setType(type?: ProfileRelationshipType) {
        if (type !== undefined) {
            this._props.type = type;
        }
    }
    private setCreatedAt(createdAt?: Date): void {
        if (createdAt !== undefined) {
            this._props.createdAt = createdAt;
        }
    }
    private setUpdatedAt(updatedAt?: Nullable<Date>): void {
        if (updatedAt !== undefined) {
            this._props.updatedAt = updatedAt;
        }
    }
    private setDeletedAt(deletedAt?: Nullable<Date>): void {
        if (deletedAt !== undefined) {
            this._props.deletedAt = deletedAt;
        }
    }
    private setAddressInfo(addressInfo: ProfileAddress): void {
        if (addressInfo !== undefined) {
            this._props.addressInfo = addressInfo;
        }
    }

    // private setRelationships(relationships: ProfileRelationship[]): void {
    //     if (relationships !== undefined) {
    //         this._props.relationships = relationships;
    //     }
    // }

    private setTypeId(typeId?: Nullable<string>) {
        if (typeId !== undefined) {
            this._props.typeId = typeId;
        }
    }
    private setParentId(parentId?: Nullable<string>) {
        if (parentId !== undefined) {
            this._props.parentId = parentId;
        }
    }
    private setChildren(children?: Nullable<Profile[]>) {
        if (children !== undefined) {
            this._props.children = children;
        }
    }
    private setTargetId(targetId?: Nullable<string>) {
        if (targetId !== undefined) {
            this._props.targetId = targetId;
        }
    }
    private setCode(code?: Nullable<string>) {
        if (code !== undefined) {
            this._props.code = code;
        }
    }
    public async create(payload: CreateProfileInput): Promise<CreateProfileOutput> {
        const model = await ValidatorUtil.validatePlain(CreateProfileInputModel, payload);

        this.setId(EntityIdUtil.randomUUID());
        this.setUserId(model.userId);
        this.setFirstName(model.firstName);
        this.setLastName(model.lastName);
        this.setEmail(model.email);
        this.setGender(model.gender);
        if (model.dob) this.setDob(new Date(model.dob));
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
            const addressInfo = new ProfileAddress();
            const createAddressInput = { ...model.addressInfo, profileId: this.id };
            await addressInfo.create(createAddressInput);
            this.setAddressInfo(addressInfo);
        }

        this.addDomainEvent({
            aggregateId: this.id,
            type: ProfileEventNames.CREATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
    public async update(payload: UpdateProfileInput): Promise<UpdateProfileOutput> {
        const model = await ValidatorUtil.validatePlain(UpdateProfileInputModel, payload);

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
        // this.setCode(model.code);

        if (model.addressInfo) {
            const addressInfo = new ProfileAddress();
            await addressInfo.update(model.addressInfo);
            this.setAddressInfo(addressInfo);
        }

        this.addDomainEvent({
            aggregateId: this.id,
            type: ProfileEventNames.UPDATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }

    public async delete(payload: DeleteProfileInput): Promise<DeleteProfileOutput> {
        this.setStatus(ProfileStatusEnum.Deactivate);
        this.setDeletedAt(new Date());

        this.addDomainEvent({
            aggregateId: this.id,
            type: ProfileEventNames.DELETE,
            meta: this.props,
            createdAt: new Date(),
        });
    }

    // public async addRelationship(payload: ProfileAddChildInput): Promise<ProfileRelationship> {
    //     const relationship = new ProfileRelationship();
    //     relationship.create({
    //         parentId: this.id,
    //         childId: payload.childProfileId,
    //         typeId: payload.relationshipTypeId,
    //     });

    //     this.setRelationships([...this._props.relationships, relationship]);

    //     return relationship;
    // }
}
