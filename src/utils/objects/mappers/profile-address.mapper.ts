import { Provider, Scope } from '@heronjs/common';
import { ProfileAddressDto } from '../../../features/profile/domain/dtos';
import { ProfileAddress } from '../../../features/profile/domain/aggregates/profile/entities';
import { IMapper } from '@cbidigital/aqua';
import { ProfileTokens } from '../../../constants';

export type IProfileAddressMapper = IMapper<ProfileAddressDto, ProfileAddress>;

@Provider({
    token: ProfileTokens.Mapper.PROFILE_ADDRESS,
    scope: Scope.SINGLETON,
})
export class ProfileAddressMapper implements IProfileAddressMapper {
    fromEntityToDTO(entity: ProfileAddress): ProfileAddressDto {
        return {
            id: entity.id,
            profileId: entity.profileId,
            country: entity.country,
            region: entity.region,
            province: entity.province,
            district: entity.district,
            ward: entity.ward,
            address: entity.address,
            postalCode: entity.postalCode,
            latitude: entity.latitude,
            longitude: entity.longitude,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }

    fromDTOToEntity(dto: ProfileAddressDto): ProfileAddress {
        return new ProfileAddress(dto.id, {
            profileId: dto.profileId,
            country: dto.country,
            region: dto.region,
            province: dto.province,
            district: dto.district,
            ward: dto.ward,
            address: dto.address,
            postalCode: dto.postalCode,
            latitude: dto.latitude,
            longitude: dto.longitude,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }
}
