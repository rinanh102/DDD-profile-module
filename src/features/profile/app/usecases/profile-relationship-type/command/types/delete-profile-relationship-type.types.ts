import { AuthInput } from '@cbidigital/aqua';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { ProfileRelationshipType } from '../../../../../domain/aggregates/profile-relationship-type';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';

export type DeleteProfileRelationshipTypeUseCaseInput = {
    id: string;
};

export class DeleteProfileRelationshipTypeUseCaseInputModel
    implements DeleteProfileRelationshipTypeUseCaseInput
{
    @Expose()
    @IsNotEmpty()
    @IsUUID()
    public readonly id!: string;

    // constructor(payload: DeleteProfileRelationshipTypeUseCaseInput) {
    //     this.id = payload.id;
    // }
}

export type DeleteProfileRelationshipTypeUseCaseOutput = void;

export type DeleteProfileRelationshipTypeUseCaseContext = {
    firstInput: DeleteProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};

export type DeleteProfileRelationshipTypeUseCaseValidateInput = DeleteProfileRelationshipTypeUseCaseInput;
export type DeleteProfileRelationshipTypeUseCaseValidateOutput = DeleteProfileRelationshipTypeUseCaseInput;

export type DeleteProfileRelationshipTypeUseCaseProcessingInput =
    DeleteProfileRelationshipTypeUseCaseValidateOutput;
export type DeleteProfileRelationshipTypeUseCaseProcessingOutput = {
    entity: ProfileRelationshipType;
};

export type DeleteProfileRelationshipTypeUseCaseMapInput =
    DeleteProfileRelationshipTypeUseCaseProcessingOutput;
export type DeleteProfileRelationshipTypeUseCaseMapOutput = void;
