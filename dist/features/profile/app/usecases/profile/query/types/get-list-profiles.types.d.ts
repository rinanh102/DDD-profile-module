import { AuthInput, PaginationInput } from '@cbidigital/aqua';
import { ProfileDto } from '../../../../../domain/dtos';
export declare type GetListProfilesUseCaseInput = PaginationInput<ProfileDto>;
export declare type GetListProfilesUseCaseOutput = ProfileDto[];
export declare type GetListProfilesUseCaseContext = {
    firstInput: GetListProfilesUseCaseInput;
    auth: AuthInput<ProfileDto>;
};
export declare type GetListProfilesUseCaseValidateInput = GetListProfilesUseCaseInput;
export declare type GetListProfilesUseCaseValidateOutput = GetListProfilesUseCaseInput;
export declare type GetListProfilesUseCaseProcessingInput = GetListProfilesUseCaseValidateOutput;
export declare type GetListProfilesUseCaseProcessingOutput = Partial<ProfileDto>[];
export declare type GetListProfilesUseCaseMapInput = GetListProfilesUseCaseProcessingOutput;
export declare type GetListProfilesUseCaseMapOutput = Partial<ProfileDto>[];
