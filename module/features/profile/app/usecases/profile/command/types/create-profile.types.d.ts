import { AuthInput } from '@cbidigital/aqua';
import { CreateProfileInputModel } from '../../../../../domain/aggregates/profile';
import { Profile } from '../../../../../domain/aggregates/profile/profile';
import { ProfileDto } from '../../../../../domain/dtos';
import { CreateProfileRepoInput } from '../../../../../domain/repos/profile/types';
export declare type CreateProfileUseCaseInput = CreateProfileRepoInput;
export declare class CreateProfileUseCaseInputModel extends CreateProfileInputModel implements CreateProfileUseCaseInput {
}
export declare type CreateProfileUseCaseOutput = ProfileDto;
export declare type CreateProfileUseCaseContext = {
    firstInput: CreateProfileUseCaseInput;
    auth: AuthInput<ProfileDto>;
};
export declare type CreateProfileUseCaseValidateInput = CreateProfileUseCaseInput;
export declare type CreateProfileUseCaseValidateOutput = CreateProfileUseCaseInput;
export declare type CreateProfileUseCaseProcessingInput = CreateProfileUseCaseValidateOutput;
export declare type CreateProfileUseCaseProcessingOutput = {
    entity: Profile;
};
export declare type CreateProfileUseCaseMapInput = CreateProfileUseCaseProcessingOutput;
export declare type CreateProfileUseCaseMapOutput = ProfileDto;
