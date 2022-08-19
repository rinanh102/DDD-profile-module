import { AuthInput } from '@cbidigital/aqua';
import { Profile } from '../../../../../domain/aggregates/profile/profile';
import { ProfileDto } from '../../../../../domain/dtos';
export declare type DeleteProfileUseCaseInput = {
    id: string;
};
export declare class DeleteProfileUseCaseInputModel implements DeleteProfileUseCaseInput {
    readonly id: string;
}
export declare type DeleteProfileUseCaseOutput = void;
export declare type DeleteProfileUseCaseContext = {
    firstInput: DeleteProfileUseCaseInput;
    auth: AuthInput<ProfileDto>;
};
export declare type DeleteProfileUseCaseValidateInput = DeleteProfileUseCaseInput;
export declare type DeleteProfileUseCaseValidateOutput = DeleteProfileUseCaseInput;
export declare type DeleteProfileUseCaseProcessingInput = DeleteProfileUseCaseValidateOutput;
export declare type DeleteProfileUseCaseProcessingOutput = {
    entity: Profile;
};
export declare type DeleteProfileUseCaseMapInput = DeleteProfileUseCaseProcessingOutput;
export declare type DeleteProfileUseCaseMapOutput = void;
