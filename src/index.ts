import { EavAttributeMapper, EavAttributeValueMapper } from '@cbidigital/aqua';
import { Module } from '@heronjs/common';
import { ProfileAddressMapper, ProfileMapper, ProfileRelationshipTypeMapper } from './utils/objects/mappers';
import { ProfileRelationshipTypeRepo, ProfileRepo } from './features/profile/domain/repos';
import {
    ProfileAddressDao,
    ProfileAttributeDao,
    ProfileAttributeValueDao,
    ProfileDao,
    ProfileRelationshipTypeDao,
} from './features/profile/infra/databases/daos';
import { ProfileQueryUtil } from './features/profile/infra/databases/query-util';

@Module({
    providers: [
        // Query util
        ProfileQueryUtil,

        // Mappers
        EavAttributeMapper,
        EavAttributeValueMapper,
        ProfileMapper,
        ProfileAddressMapper,
        ProfileRelationshipTypeMapper,

        // DAOs
        ProfileDao,
        ProfileAttributeDao,
        ProfileAttributeValueDao,
        ProfileAddressDao,
        ProfileRelationshipTypeDao,

        // Repos
        ProfileRepo,
        ProfileRelationshipTypeRepo,

        // // UseCases - profile
        // CreateProfileUseCase,
        // UpdateProfileUseCase,
        // DeleteProfileUseCase,
        // GetProfileByIdUseCase,
        // GetListProfilesUseCase,
        // GetListProfilesOfUserUseCase,

        // //Usecase - eav
        // CreateProfileAttributeUseCase,
        // UpdateProfileAttributeUseCase,
        // DeleteProfileAttributeUseCase,
        // GetProfileAttributeUseCase,
        // GetListProfileAttributeUseCase,

        // // Usecase - profile relationship type
        // CreateProfileRelationshipTypeUseCase,
        // UpdateProfileRelationshipTypeUseCase,
        // DeleteProfileRelationshipTypeUseCase,
        // GetProfileRelationshipTypeUseCase,
        // GetListProfileRelationshipTypesUseCase,
    ],
})
export class ProfilesModule {}
