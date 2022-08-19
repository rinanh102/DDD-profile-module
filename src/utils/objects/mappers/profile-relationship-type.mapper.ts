import { Provider, Scope } from '@heronjs/common';
import { IMapper } from '@cbidigital/aqua';
import { ProfileRelationshipTypeDto } from '../../../features/profile/domain/dtos';
import { ProfileRelationshipType } from '../../../features/profile/domain/aggregates/profile-relationship-type';
import { ProfileTokens } from '../../../constants';

export type IProfileRelationshipTypeMapper = IMapper<ProfileRelationshipTypeDto, ProfileRelationshipType>;

@Provider({
    token: ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE,
    scope: Scope.SINGLETON,
})
export class ProfileRelationshipTypeMapper implements IProfileRelationshipTypeMapper {
    fromEntityToDTO(entity: ProfileRelationshipType): ProfileRelationshipTypeDto {
        return {
            id: entity.id,
            description: entity.description,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
    fromDTOToEntity(dto: ProfileRelationshipTypeDto): ProfileRelationshipType {
        return new ProfileRelationshipType(dto.id, {
            description: dto.description,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }
}
