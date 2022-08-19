import { AuthInput, PaginationInput } from '@cbidigital/aqua';
import { ProfileDto } from '../../../../../domain/dtos';
export declare type GetListProfilesOfUserUseCaseInput = PaginationInput<ProfileDto>;
export declare type GetListProfilesOfUserUseCaseOutput = ProfileDto[];
export declare type GetListProfilesOfUserseCaseContext = {
    firstInput: GetListProfilesOfUserUseCaseInput;
    auth: AuthInput<ProfileDto>;
};
export declare type GetListProfilesOfUserUseCaseValidateInput = GetListProfilesOfUserUseCaseInput;
export declare type GetListProfilesOfUserUseCaseValidateOutput = GetListProfilesOfUserUseCaseInput;
export declare type GetListProfilesOfUserUseCaseProcessingInput = GetListProfilesOfUserUseCaseValidateOutput;
export declare type GetListProfilesOfUserUseCaseProcessingOutput = Partial<ProfileDto>[];
export declare type GetListProfilesOfUserUseCaseMapInput = GetListProfilesOfUserUseCaseProcessingOutput;
export declare type GetListProfilesOfUserUseCaseMapOutput = Partial<ProfileDto>[];
