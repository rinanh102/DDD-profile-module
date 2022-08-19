import { AuthInput, PaginationInput } from '@cbidigital/aqua';
import { ProfileDto } from '../../../../../domain/dtos';

export type GetListProfilesUseCaseInput = PaginationInput<ProfileDto>;
export type GetListProfilesUseCaseOutput = ProfileDto[];

export type GetListProfilesUseCaseContext = {
    firstInput: GetListProfilesUseCaseInput;
    auth: AuthInput<ProfileDto>;
};

export type GetListProfilesUseCaseValidateInput = GetListProfilesUseCaseInput;
export type GetListProfilesUseCaseValidateOutput = GetListProfilesUseCaseInput;

export type GetListProfilesUseCaseProcessingInput = GetListProfilesUseCaseValidateOutput;
export type GetListProfilesUseCaseProcessingOutput = Partial<ProfileDto>[];

export type GetListProfilesUseCaseMapInput = GetListProfilesUseCaseProcessingOutput;
export type GetListProfilesUseCaseMapOutput = Partial<ProfileDto>[];
