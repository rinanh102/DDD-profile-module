import { AuthInput } from '@cbidigital/aqua';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';
export declare type GetProfileRelationshipTypeUseCaseInput = string;
export declare type GetProfileRelationshipTypeUseCaseOutput = ProfileRelationshipTypeDto;
export declare type GetProfileRelationshipTypeUseCaseContext = {
    firstInput: GetProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};
export declare type GetProfileRelationshipTypeUseCaseValidateInput = GetProfileRelationshipTypeUseCaseInput;
export declare type GetProfileRelationshipTypeUseCaseValidateOutput = GetProfileRelationshipTypeUseCaseInput;
export declare type GetProfileRelationshipTypeUseCaseProcessingInput = GetProfileRelationshipTypeUseCaseValidateOutput;
export declare type GetProfileRelationshipTypeUseCaseProcessingOutput = Partial<ProfileRelationshipTypeDto>;
export declare type GetProfileRelationshipTypeUseCaseMapInput = GetProfileRelationshipTypeUseCaseProcessingOutput;
export declare type GetProfileRelationshipTypeUseCaseMapOutput = Partial<ProfileRelationshipTypeDto>;
