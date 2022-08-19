import { AuthInput } from '@cbidigital/aqua';
import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { UpdateProfileInputModel } from '../../../../../domain/aggregates/profile';
import { Profile } from '../../../../../domain/aggregates/profile/profile';
import { ProfileDto } from '../../../../../domain/dtos';
import { UpdateProfileRepoInput } from '../../../../../domain/repos/profile/types';

export type UpdateProfileUseCaseInput = UpdateProfileRepoInput & {
    id?: string;
};

export class UpdateProfileUseCaseInputModel
    extends UpdateProfileInputModel
    implements UpdateProfileUseCaseInput
{
    @Expose()
    @IsOptional()
    @IsString()
    public readonly id?: string;
}

export type UpdateProfileUseCaseOutput = ProfileDto;

export type UpdateProfileUseCaseContext = {
    firstInput: UpdateProfileUseCaseInput;
    auth: AuthInput<ProfileDto>;
};

export type UpdateProfileUseCaseValidateInput = UpdateProfileUseCaseInput;
export type UpdateProfileUseCaseValidateOutput = UpdateProfileUseCaseInput;

export type UpdateProfileUseCaseProcessingInput = UpdateProfileUseCaseValidateOutput;
export type UpdateProfileUseCaseProcessingOutput = {
    entity: Profile;
};

export type UpdateProfileUseCaseMapInput = UpdateProfileUseCaseProcessingOutput;
export type UpdateProfileUseCaseMapOutput = ProfileDto;
