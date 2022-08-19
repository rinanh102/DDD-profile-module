import { AuthInput, PaginationInput } from '@cbidigital/aqua';
import { ProfileDto } from '../../../../../domain/dtos';

export type GetListProfilesOfUserUseCaseInput = PaginationInput<ProfileDto>;
export type GetListProfilesOfUserUseCaseOutput = ProfileDto[];

export type GetListProfilesOfUserseCaseContext = {
    firstInput: GetListProfilesOfUserUseCaseInput;
    auth: AuthInput<ProfileDto>;
};

export type GetListProfilesOfUserUseCaseValidateInput = GetListProfilesOfUserUseCaseInput;
export type GetListProfilesOfUserUseCaseValidateOutput = GetListProfilesOfUserUseCaseInput;

export type GetListProfilesOfUserUseCaseProcessingInput = GetListProfilesOfUserUseCaseValidateOutput;
export type GetListProfilesOfUserUseCaseProcessingOutput = Partial<ProfileDto>[];

export type GetListProfilesOfUserUseCaseMapInput = GetListProfilesOfUserUseCaseProcessingOutput;
export type GetListProfilesOfUserUseCaseMapOutput = Partial<ProfileDto>[];
