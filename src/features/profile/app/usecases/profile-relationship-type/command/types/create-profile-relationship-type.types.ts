import { AuthInput } from '@cbidigital/aqua';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ProfileRelationshipType } from '../../../../../domain/aggregates/profile-relationship-type';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';

export type CreateProfileRelationshipTypeUseCaseInput = {
    description: string;
};

export class CreateProfileRelationshipTypeUseCaseInputModel
    implements CreateProfileRelationshipTypeUseCaseInput
{
    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly description!: string;

    // constructor(payload: CreateProfileRelationshipTypeUseCaseInput) {
    //     this.description = payload.description;
    // }
}

export type CreateProfileRelationshipTypeUseCaseOutput = ProfileRelationshipTypeDto;

export type CreateProfileRelationshipTypeUseCaseContext = {
    firstInput: CreateProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};

export type CreateProfileRelationshipTypeUseCaseValidateInput = CreateProfileRelationshipTypeUseCaseInput;
export type CreateProfileRelationshipTypeUseCaseValidateOutput = CreateProfileRelationshipTypeUseCaseInput;

export type CreateProfileRelationshipTypeUseCaseProcessingInput =
    CreateProfileRelationshipTypeUseCaseValidateOutput;
export type CreateProfileRelationshipTypeUseCaseProcessingOutput = {
    entity: ProfileRelationshipType;
};

export type CreateProfileRelationshipTypeUseCaseMapInput =
    CreateProfileRelationshipTypeUseCaseProcessingOutput;
export type CreateProfileRelationshipTypeUseCaseMapOutput = ProfileRelationshipTypeDto;
