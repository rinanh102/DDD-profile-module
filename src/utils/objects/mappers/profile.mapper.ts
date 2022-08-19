import { Inject, Provider, Scope } from '@heronjs/common';
import { EavAttributeValue, EavMapperTokens, IEavAttributeValueMapper, IMapper } from '@cbidigital/aqua';
import {
    ProfileAddressDto,
    ProfileDto,
    ProfileRelationshipTypeDto,
} from '../../../features/profile/domain/dtos';
import { Profile } from '../../../features/profile/domain/aggregates/profile/profile';
import { ProfileAddress } from '../../../features/profile/domain/aggregates/profile/entities';
import { ProfileRelationshipType } from '../../../features/profile/domain/aggregates';
import { ProfileTokens } from '../../../constants';

export type IProfileMapper = IMapper<ProfileDto, Profile>;

@Provider({
    token: ProfileTokens.Mapper.PROFILE,
    scope: Scope.SINGLETON,
})
export class ProfileMapper implements IProfileMapper {
    constructor(
        @Inject(ProfileTokens.Mapper.PROFILE_ADDRESS)
        private readonly _profileAddressMapper: IMapper<ProfileAddressDto, ProfileAddress>,
        @Inject(EavMapperTokens.ATTRIBUTE_VALUE)
        private readonly _profileAttributeValueMapper: IEavAttributeValueMapper,
        @Inject(ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)
        private readonly _profileRelationshipTypeMapper: IMapper<
            ProfileRelationshipTypeDto,
            ProfileRelationshipType
        >,
    ) {}

    fromEntityToDTO(entity: Profile): ProfileDto {
        return {
            id: entity.id,
            userId: entity.userId,
            firstName: entity.firstName,
            lastName: entity.lastName,
            email: entity.email,
            gender: entity.gender,
            dob: entity.dob,
            phone: entity.phone,
            identityNum: entity.identityNum,
            avatar: entity.avatar,
            profession: entity.profession,
            status: entity.status,
            // type: entity.type,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
            typeId: entity.typeId,
            parentId: entity.parentId,
            type: entity.type
                ? this._profileRelationshipTypeMapper.fromEntityToDTO(entity.type)
                : entity.type,
            children: entity.children ? entity.children.map((i) => this.fromEntityToDTO(i)) : entity.children,
            addressInfo: entity.addressInfo
                ? this._profileAddressMapper.fromEntityToDTO(entity.addressInfo)
                : entity.addressInfo,
            // relationships: entity.relationships
            //     ? entity.relationships.map((i: any) => this._profileRelationshipMapper.fromEntityToDTO(i))
            //     : [],
            attributeValues: entity.eav.attributeValues
                ? entity.eav.attributeValues.map((i) => this._profileAttributeValueMapper.fromEntityToDTO(i))
                : [],
            targetId: entity.targetId,
            code: entity.code,
        };
    }
    fromDTOToEntity(dto: ProfileDto): Profile {
        return new Profile(
            dto.id,
            {
                userId: dto.userId,
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email,
                gender: dto.gender,
                dob: dto.dob,
                phone: dto.phone,
                identityNum: dto.identityNum,
                avatar: dto.avatar,
                profession: dto.profession,
                status: dto.status,
                // type: dto.type,
                createdAt: dto.createdAt,
                updatedAt: dto.updatedAt ? new Date(dto.updatedAt) : null,
                deletedAt: dto.deletedAt ? new Date(dto.deletedAt) : null,
                typeId: dto.typeId,
                parentId: dto.parentId,
                type: dto.type ? this._profileRelationshipTypeMapper.fromDTOToEntity(dto.type) : dto.type,
                children: dto.children ? dto.children.map((i) => this.fromDTOToEntity(i)) : dto.children,
                addressInfo: dto.addressInfo
                    ? this._profileAddressMapper.fromDTOToEntity(dto.addressInfo)
                    : null,
                // relationships: dto.relationships
                //     ? dto.relationships.map((i: any) => this._profileRelationshipMapper.fromDTOToEntity(i))
                //     : [],
                // attributeValues : []
                targetId: dto.targetId,
                code: dto.code,
            },
            dto.attributeValues?.map((a) => new EavAttributeValue(a.id, a)),
        );
    }
}
