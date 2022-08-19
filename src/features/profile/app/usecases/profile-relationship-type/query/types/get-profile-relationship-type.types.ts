import { AuthInput } from '@cbidigital/aqua';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';

export type GetProfileRelationshipTypeUseCaseInput = string;
export type GetProfileRelationshipTypeUseCaseOutput = ProfileRelationshipTypeDto;

export type GetProfileRelationshipTypeUseCaseContext = {
    firstInput: GetProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};

export type GetProfileRelationshipTypeUseCaseValidateInput = GetProfileRelationshipTypeUseCaseInput;
export type GetProfileRelationshipTypeUseCaseValidateOutput = GetProfileRelationshipTypeUseCaseInput;

export type GetProfileRelationshipTypeUseCaseProcessingInput =
    GetProfileRelationshipTypeUseCaseValidateOutput;
export type GetProfileRelationshipTypeUseCaseProcessingOutput = Partial<ProfileRelationshipTypeDto>;

export type GetProfileRelationshipTypeUseCaseMapInput = GetProfileRelationshipTypeUseCaseProcessingOutput;
export type GetProfileRelationshipTypeUseCaseMapOutput = Partial<ProfileRelationshipTypeDto>;
