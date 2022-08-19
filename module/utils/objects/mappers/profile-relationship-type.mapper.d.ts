import { IMapper } from '@cbidigital/aqua';
import { ProfileRelationshipTypeDto } from '../../../features/profile/domain/dtos';
import { ProfileRelationshipType } from '../../../features/profile/domain/aggregates/profile-relationship-type';
export declare type IProfileRelationshipTypeMapper = IMapper<ProfileRelationshipTypeDto, ProfileRelationshipType>;
export declare class ProfileRelationshipTypeMapper implements IProfileRelationshipTypeMapper {
    fromEntityToDTO(entity: ProfileRelationshipType): ProfileRelationshipTypeDto;
    fromDTOToEntity(dto: ProfileRelationshipTypeDto): ProfileRelationshipType;
}
