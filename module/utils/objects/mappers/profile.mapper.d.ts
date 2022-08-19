import { IEavAttributeValueMapper, IMapper } from '@cbidigital/aqua';
import { ProfileAddressDto, ProfileDto, ProfileRelationshipTypeDto } from '../../../features/profile/domain/dtos';
import { Profile } from '../../../features/profile/domain/aggregates/profile/profile';
import { ProfileAddress } from '../../../features/profile/domain/aggregates/profile/entities';
import { ProfileRelationshipType } from '../../../features/profile/domain/aggregates';
export declare type IProfileMapper = IMapper<ProfileDto, Profile>;
export declare class ProfileMapper implements IProfileMapper {
    private readonly _profileAddressMapper;
    private readonly _profileAttributeValueMapper;
    private readonly _profileRelationshipTypeMapper;
    constructor(_profileAddressMapper: IMapper<ProfileAddressDto, ProfileAddress>, _profileAttributeValueMapper: IEavAttributeValueMapper, _profileRelationshipTypeMapper: IMapper<ProfileRelationshipTypeDto, ProfileRelationshipType>);
    fromEntityToDTO(entity: Profile): ProfileDto;
    fromDTOToEntity(dto: ProfileDto): Profile;
}
