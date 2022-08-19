import { AuthInput, PaginationInput } from '@cbidigital/aqua';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';
export declare type GetListProfileRelationshipTypesUseCaseInput = PaginationInput<ProfileRelationshipTypeDto>;
export declare type GetListProfileRelationshipTypesUseCaseOutput = ProfileRelationshipTypeDto[];
export declare type GetListProfileRelationshipTypesCaseContext = {
    firstInput: GetListProfileRelationshipTypesUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};
export declare type GetListProfileRelationshipTypesUseCaseValidateInput = GetListProfileRelationshipTypesUseCaseInput;
export declare type GetListProfileRelationshipTypesUseCaseValidateOutput = GetListProfileRelationshipTypesUseCaseInput;
export declare type GetListProfileRelationshipTypesUseCaseProcessingInput = GetListProfileRelationshipTypesUseCaseValidateOutput;
export declare type GetListProfileRelationshipTypesUseCaseProcessingOutput = Partial<ProfileRelationshipTypeDto>[];
export declare type GetListProfileRelationshipTypesUseCaseMapInput = GetListProfileRelationshipTypesUseCaseProcessingOutput;
export declare type GetListProfileRelationshipTypesUseCaseMapOutput = Partial<ProfileRelationshipTypeDto>[];
