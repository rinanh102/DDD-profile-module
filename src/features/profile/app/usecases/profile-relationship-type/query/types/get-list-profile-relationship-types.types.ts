import { AuthInput, PaginationInput } from '@cbidigital/aqua';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';

export type GetListProfileRelationshipTypesUseCaseInput = PaginationInput<ProfileRelationshipTypeDto>;
export type GetListProfileRelationshipTypesUseCaseOutput = ProfileRelationshipTypeDto[];

export type GetListProfileRelationshipTypesCaseContext = {
    firstInput: GetListProfileRelationshipTypesUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};

export type GetListProfileRelationshipTypesUseCaseValidateInput = GetListProfileRelationshipTypesUseCaseInput;
export type GetListProfileRelationshipTypesUseCaseValidateOutput =
    GetListProfileRelationshipTypesUseCaseInput;

export type GetListProfileRelationshipTypesUseCaseProcessingInput =
    GetListProfileRelationshipTypesUseCaseValidateOutput;
export type GetListProfileRelationshipTypesUseCaseProcessingOutput = Partial<ProfileRelationshipTypeDto>[];

export type GetListProfileRelationshipTypesUseCaseMapInput =
    GetListProfileRelationshipTypesUseCaseProcessingOutput;
export type GetListProfileRelationshipTypesUseCaseMapOutput = Partial<ProfileRelationshipTypeDto>[];
