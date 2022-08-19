import { AuthInput } from '@cbidigital/aqua';
import { CreateProfileInputModel } from '../../../../../domain/aggregates/profile';
import { Profile } from '../../../../../domain/aggregates/profile/profile';
import { ProfileDto } from '../../../../../domain/dtos';
import { CreateProfileRepoInput } from '../../../../../domain/repos/profile/types';

export type CreateProfileUseCaseInput = CreateProfileRepoInput;

export class CreateProfileUseCaseInputModel
    extends CreateProfileInputModel
    implements CreateProfileUseCaseInput {}

export type CreateProfileUseCaseOutput = ProfileDto;

export type CreateProfileUseCaseContext = {
    firstInput: CreateProfileUseCaseInput;
    auth: AuthInput<ProfileDto>;
};

export type CreateProfileUseCaseValidateInput = CreateProfileUseCaseInput;
export type CreateProfileUseCaseValidateOutput = CreateProfileUseCaseInput;

export type CreateProfileUseCaseProcessingInput = CreateProfileUseCaseValidateOutput;
export type CreateProfileUseCaseProcessingOutput = {
    entity: Profile;
};

export type CreateProfileUseCaseMapInput = CreateProfileUseCaseProcessingOutput;
export type CreateProfileUseCaseMapOutput = ProfileDto;
