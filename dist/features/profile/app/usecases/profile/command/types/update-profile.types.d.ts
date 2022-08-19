import { AuthInput } from '@cbidigital/aqua';
import { UpdateProfileInputModel } from '../../../../../domain/aggregates/profile';
import { Profile } from '../../../../../domain/aggregates/profile/profile';
import { ProfileDto } from '../../../../../domain/dtos';
import { UpdateProfileRepoInput } from '../../../../../domain/repos/profile/types';
export declare type UpdateProfileUseCaseInput = UpdateProfileRepoInput & {
    id?: string;
};
export declare class UpdateProfileUseCaseInputModel extends UpdateProfileInputModel implements UpdateProfileUseCaseInput {
    readonly id?: string;
}
export declare type UpdateProfileUseCaseOutput = ProfileDto;
export declare type UpdateProfileUseCaseContext = {
    firstInput: UpdateProfileUseCaseInput;
    auth: AuthInput<ProfileDto>;
};
export declare type UpdateProfileUseCaseValidateInput = UpdateProfileUseCaseInput;
export declare type UpdateProfileUseCaseValidateOutput = UpdateProfileUseCaseInput;
export declare type UpdateProfileUseCaseProcessingInput = UpdateProfileUseCaseValidateOutput;
export declare type UpdateProfileUseCaseProcessingOutput = {
    entity: Profile;
};
export declare type UpdateProfileUseCaseMapInput = UpdateProfileUseCaseProcessingOutput;
export declare type UpdateProfileUseCaseMapOutput = ProfileDto;
