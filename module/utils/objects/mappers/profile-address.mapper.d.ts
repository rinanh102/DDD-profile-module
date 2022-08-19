import { ProfileAddressDto } from '../../../features/profile/domain/dtos';
import { ProfileAddress } from '../../../features/profile/domain/aggregates/profile/entities';
import { IMapper } from '@cbidigital/aqua';
export declare type IProfileAddressMapper = IMapper<ProfileAddressDto, ProfileAddress>;
export declare class ProfileAddressMapper implements IProfileAddressMapper {
    fromEntityToDTO(entity: ProfileAddress): ProfileAddressDto;
    fromDTOToEntity(dto: ProfileAddressDto): ProfileAddress;
}
