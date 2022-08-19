import { AuthInput } from '@cbidigital/aqua';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { Profile } from '../../../../../domain/aggregates/profile/profile';
import { ProfileDto } from '../../../../../domain/dtos';

export type DeleteProfileUseCaseInput = {
    id: string;
};

export class DeleteProfileUseCaseInputModel implements DeleteProfileUseCaseInput {
    @Expose()
    @IsNotEmpty()
    @IsUUID()
    public readonly id!: string;
}

export type DeleteProfileUseCaseOutput = void;

export type DeleteProfileUseCaseContext = {
    firstInput: DeleteProfileUseCaseInput;
    auth: AuthInput<ProfileDto>;
};

export type DeleteProfileUseCaseValidateInput = DeleteProfileUseCaseInput;
export type DeleteProfileUseCaseValidateOutput = DeleteProfileUseCaseInput;

export type DeleteProfileUseCaseProcessingInput = DeleteProfileUseCaseValidateOutput;
export type DeleteProfileUseCaseProcessingOutput = {
    entity: Profile;
};

export type DeleteProfileUseCaseMapInput = DeleteProfileUseCaseProcessingOutput;
export type DeleteProfileUseCaseMapOutput = void;
