import { AuthInput } from '@cbidigital/aqua';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ProfileRelationshipType } from '../../../../../domain/aggregates/profile-relationship-type';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';

export type UpdateProfileRelationshipTypeUseCaseInput = {
    id: string;
    description?: string;
};

export class UpdateProfileRelationshipTypeUseCaseInputModel
    implements UpdateProfileRelationshipTypeUseCaseInput
{
    @Expose()
    @IsNotEmpty()
    @IsUUID()
    public readonly id!: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly description?: string;

    // constructor(payload: UpdateProfileRelationshipTypeUseCaseInput) {
    //     this.id = payload.id;
    //     this.description = payload.description;
    // }
}

export type UpdateProfileRelationshipTypeUseCaseOutput = ProfileRelationshipTypeDto;

export type UpdateProfileRelationshipTypeUseCaseContext = {
    firstInput: UpdateProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};

export type UpdateProfileRelationshipTypeUseCaseValidateInput = UpdateProfileRelationshipTypeUseCaseInput;
export type UpdateProfileRelationshipTypeUseCaseValidateOutput = UpdateProfileRelationshipTypeUseCaseInput;

export type UpdateProfileRelationshipTypeUseCaseProcessingInput =
    UpdateProfileRelationshipTypeUseCaseValidateOutput;
export type UpdateProfileRelationshipTypeUseCaseProcessingOutput = {
    entity: ProfileRelationshipType;
};

export type UpdateProfileRelationshipTypeUseCaseMapInput =
    UpdateProfileRelationshipTypeUseCaseProcessingOutput;
export type UpdateProfileRelationshipTypeUseCaseMapOutput = ProfileRelationshipTypeDto;
