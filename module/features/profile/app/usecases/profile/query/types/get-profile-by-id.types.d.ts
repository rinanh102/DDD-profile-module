import { AuthInput } from '@cbidigital/aqua';
import { ProfileDto } from '../../../../../domain/dtos';
export declare type GetProfileByIdUseCaseInput = string;
export declare type GetProfileByIdUseCaseOutput = ProfileDto;
export declare type GetProfileByIdUseCaseContext = {
    firstInput: GetProfileByIdUseCaseInput;
    auth: AuthInput<ProfileDto>;
};
export declare type GetProfileByIdUseCaseValidateInput = GetProfileByIdUseCaseInput;
export declare type GetProfileByIdUseCaseValidateOutput = GetProfileByIdUseCaseInput;
export declare type GetProfileByIdUseCaseProcessingInput = GetProfileByIdUseCaseValidateOutput;
export declare type GetProfileByIdUseCaseProcessingOutput = Partial<ProfileDto>;
export declare type GetProfileByIdUseCaseMapInput = GetProfileByIdUseCaseProcessingOutput;
export declare type GetProfileByIdUseCaseMapOutput = Partial<ProfileDto>;
