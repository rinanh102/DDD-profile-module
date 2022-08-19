"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeRepo = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const errors_1 = require("../../errors");
const profile_relationship_type_1 = require("../../aggregates/profile-relationship-type/profile-relationship-type");
const constants_1 = require("../../../../../constants");
let ProfileRelationshipTypeRepo = class ProfileRelationshipTypeRepo {
    constructor(_profileRelationshipTypeMapper, _profileRelationshipTypeDAO) {
        this._profileRelationshipTypeMapper = _profileRelationshipTypeMapper;
        this._profileRelationshipTypeDAO = _profileRelationshipTypeDAO;
    }
    async create(input) {
        const profileRelationshipType = new profile_relationship_type_1.ProfileRelationshipType();
        await profileRelationshipType.create(input);
        await this._profileRelationshipTypeDAO.create(this._profileRelationshipTypeMapper.fromEntityToDTO(profileRelationshipType));
        return profileRelationshipType;
    }
    async update(id, input) {
        const profileRelationshipType = await this.getById(id);
        if (!profileRelationshipType)
            throw new errors_1.ProfileNotFoundError();
        await profileRelationshipType.update(input);
        await this._profileRelationshipTypeDAO.updateById(profileRelationshipType.id, this._profileRelationshipTypeMapper.fromEntityToDTO(profileRelationshipType));
        return profileRelationshipType;
    }
    async delete(id) {
        const profileRelationshipType = await this.getById(id);
        if (!profileRelationshipType)
            throw new errors_1.ProfileRelationshipTypeNotFoundError();
        await profileRelationshipType.delete();
        await this._profileRelationshipTypeDAO.deleteById(profileRelationshipType.id);
        return profileRelationshipType;
    }
    async findAll() {
        const dtos = (await this._profileRelationshipTypeDAO.find());
        return dtos.map((dto) => this._profileRelationshipTypeMapper.fromDTOToEntity(dto));
    }
    async getById(id) {
        const dto = (await this._profileRelationshipTypeDAO.findOne({
            filter: {
                id: { eq: id },
            },
        }));
        return dto ? this._profileRelationshipTypeMapper.fromDTOToEntity(dto) : dto;
    }
};
ProfileRelationshipTypeRepo = tslib_1.__decorate([
    (0, common_1.Repository)({ token: constants_1.ProfileTokens.Repo.PROFILE_RELATIONSHIP_TYPE, scope: common_1.Scope.SINGLETON }),
    tslib_1.__param(0, (0, common_1.Inject)(constants_1.ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__param(1, (0, common_1.Inject)(constants_1.ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], ProfileRelationshipTypeRepo);
exports.ProfileRelationshipTypeRepo = ProfileRelationshipTypeRepo;
