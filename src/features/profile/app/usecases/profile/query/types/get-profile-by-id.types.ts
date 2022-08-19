import { AuthInput } from '@cbidigital/aqua';
import { ProfileDto } from '../../../../../domain/dtos';

export type GetProfileByIdUseCaseInput = string;
export type GetProfileByIdUseCaseOutput = ProfileDto;

export type GetProfileByIdUseCaseContext = {
    firstInput: GetProfileByIdUseCaseInput;
    auth: AuthInput<ProfileDto>;
};

export type GetProfileByIdUseCaseValidateInput = GetProfileByIdUseCaseInput;
export type GetProfileByIdUseCaseValidateOutput = GetProfileByIdUseCaseInput;

export type GetProfileByIdUseCaseProcessingInput = GetProfileByIdUseCaseValidateOutput;
export type GetProfileByIdUseCaseProcessingOutput = Partial<ProfileDto>;

export type GetProfileByIdUseCaseMapInput = GetProfileByIdUseCaseProcessingOutput;
export type GetProfileByIdUseCaseMapOutput = Partial<ProfileDto>;
