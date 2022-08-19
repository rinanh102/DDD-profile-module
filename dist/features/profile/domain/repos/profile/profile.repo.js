"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepo = void 0;
const tslib_1 = require("tslib");
const aqua_1 = require("@cbidigital/aqua");
const common_1 = require("@heronjs/common");
const profile_1 = require("../../aggregates/profile/profile");
const errors_1 = require("../../errors");
const constants_1 = require("../../../../../constants");
let ProfileRepo = class ProfileRepo extends aqua_1.EavEntityRepo {
    constructor(_profileMapper, _profileRelationshipTypeMapper, _profileDAO, _profileAddressDAO, _profileRelationshipTypeDAO, _profileAttributeDAO, _profileAttributeValueDAO, _profileAttributeMapper, _profileAttributeValueMapper) {
        super(_profileAttributeMapper, _profileAttributeDAO);
        this._profileMapper = _profileMapper;
        this._profileRelationshipTypeMapper = _profileRelationshipTypeMapper;
        this._profileDAO = _profileDAO;
        this._profileAddressDAO = _profileAddressDAO;
        this._profileRelationshipTypeDAO = _profileRelationshipTypeDAO;
        this._profileAttributeDAO = _profileAttributeDAO;
        this._profileAttributeValueDAO = _profileAttributeValueDAO;
        this._profileAttributeMapper = _profileAttributeMapper;
        this._profileAttributeValueMapper = _profileAttributeValueMapper;
    }
    async create(input) {
        let profile;
        let rootProfile;
        if (!input.typeId && !input.parentId) {
            if (input.userId) {
                rootProfile = await this.getByUserId(input.userId);
                if (rootProfile)
                    throw new errors_1.RootProfileAlreadyExistError();
            }
            profile = new profile_1.Profile();
            await profile.create(input);
        }
        else {
            if (input.typeId) {
                const type = await this.getProfileRelationshipType(input.typeId);
                if (!type)
                    throw new errors_1.ProfileRelationshipTypeNotFoundError();
            }
            if (input.userId && input.typeId) {
                rootProfile = await this.getRootProfile(input.userId);
                if (!rootProfile)
                    throw new errors_1.ProfileNotFoundError();
                profile = new profile_1.Profile();
                await profile.create({ ...input, parentId: rootProfile.id });
            }
            else if (input.parentId && input.typeId) {
                rootProfile = await this.getByParentId(input.parentId);
                if (!rootProfile)
                    throw new errors_1.ProfileNotFoundError();
                profile = new profile_1.Profile();
                await profile.create({ ...input, parentId: rootProfile.id });
            }
            else {
                throw new errors_1.CannotCreateChildProfileError();
            }
        }
        await this.createProfileJob(input, profile);
        return profile;
    }
    async createProfileJob(input, profile) {
        if (input.attributeValues) {
            const attributeValuesInput = await aqua_1.EavUtil.getCreateAttributeValuesInput(input.attributeValues, this._profileAttributeMapper, this._profileAttributeDAO);
            await profile.eav.createAttributeValues(attributeValuesInput);
        }
        const dto = this._profileMapper.fromEntityToDTO(profile);
        await this._profileDAO.transaction(async (trx) => {
            await this._profileDAO.create(dto, { trx });
            await Promise.all([
                dto.addressInfo ? this._profileAddressDAO.create(dto.addressInfo, { trx }) : undefined,
                dto.attributeValues
                    ? this._profileAttributeValueDAO.createList(dto.attributeValues, { trx })
                    : undefined,
            ]);
        });
    }
    async updateProfileJob(profile, input) {
        await profile.update(input);
        let changeAttrOutput;
        if (input.attributeValues) {
            const attributeValuesInput = await aqua_1.EavUtil.getUpdateAttributeValuesInput(input.attributeValues, this._profileAttributeMapper, this._profileAttributeDAO);
            changeAttrOutput = await profile.eav.changeAttributeValues(attributeValuesInput);
        }
        await this._profileDAO.transaction((trx) => Promise.all([
            this._profileDAO.updateById(profile.id, this._profileMapper.fromEntityToDTO(profile), {
                trx,
            }),
            changeAttrOutput
                ? this._profileAttributeValueDAO.deleteList(changeAttrOutput.deletedItems.map((d) => d.id), { trx })
                : undefined,
            changeAttrOutput
                ? this._profileAttributeValueDAO.updateList(changeAttrOutput.updatedItems.map((u) => this._profileAttributeValueMapper.fromEntityToDTO(u)), { trx })
                : undefined,
            changeAttrOutput
                ? this._profileAttributeValueDAO.createList(changeAttrOutput.createdItems.map((c) => this._profileAttributeValueMapper.fromEntityToDTO(c)), { trx })
                : undefined,
        ]));
    }
    async updateByUserId(userId, input) {
        const profile = await this.getRootProfile(userId);
        if (!profile)
            throw new errors_1.ProfileNotFoundError();
        await this.updateProfileJob(profile, input);
        return profile;
    }
    async update(id, input) {
        const profile = await this.getById(id);
        if (!profile)
            throw new errors_1.ProfileNotFoundError();
        await this.updateProfileJob(profile, input);
        return profile;
    }
    async delete(id) {
        const profile = await this.getById(id);
        if (!profile)
            throw new errors_1.ProfileNotFoundError();
        if (profile.parentId === null) {
            const children = await this.findAllChildren(profile);
            if (children) {
                await children.map((i) => {
                    i.delete();
                    this._profileDAO.deleteById(i.id);
                });
            }
        }
        await profile.delete();
        await this._profileDAO.deleteById(profile.id);
        return profile;
    }
    async findAllChildren(profile) {
        const childrenDto = (await this._profileDAO.find({
            filter: {
                parentId: { eq: profile.id },
            },
        }));
        return childrenDto.map((dto) => this._profileMapper.fromDTOToEntity(dto));
    }
    async findAll() {
        const dtos = (await this._profileDAO.find());
        return dtos.map((dto) => this._profileMapper.fromDTOToEntity(dto));
    }
    async getById(id) {
        const dto = (await this._profileDAO.findOne({
            filter: {
                id: { eq: id },
            },
        }, {
            resolve: ['addressInfo', 'type', { attributeValues: ['attribute'] }],
        }));
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }
    async getByUserId(userId) {
        const dto = (await this._profileDAO.findOne({
            filter: {
                userId: { eq: userId },
            },
        }));
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }
    async getRootProfile(userId) {
        const dto = (await this._profileDAO.findOne({
            filter: {
                userId: { eq: userId },
                parentId: { eq: null },
            },
        }));
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }
    async getByParentId(parentId) {
        const dto = (await this._profileDAO.findOne({
            filter: {
                id: { eq: parentId },
            },
        }));
        return dto ? this._profileMapper.fromDTOToEntity(dto) : dto;
    }
    async getProfileRelationshipType(typeId) {
        const dto = (await this._profileRelationshipTypeDAO.findOne({
            filter: {
                id: { eq: typeId },
            },
        }));
        return dto ? this._profileRelationshipTypeMapper.fromDTOToEntity(dto) : dto;
    }
};
ProfileRepo = tslib_1.__decorate([
    (0, common_1.Repository)({ token: constants_1.ProfileTokens.Repo.PROFILE, scope: common_1.Scope.SINGLETON }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE)),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(2, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE)),
    tslib_1.__param(3, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_ADDRESS)),
    tslib_1.__param(4, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(5, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_ATTRIBUTE)),
    tslib_1.__param(6, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_ATTRIBUTE_VALUE)),
    tslib_1.__param(7, (0, common_1.Inject)(aqua_1.EavMapperTokens.ATTRIBUTE)),
    tslib_1.__param(8, (0, common_1.Inject)(aqua_1.EavMapperTokens.ATTRIBUTE_VALUE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
], ProfileRepo);
exports.ProfileRepo = ProfileRepo;
