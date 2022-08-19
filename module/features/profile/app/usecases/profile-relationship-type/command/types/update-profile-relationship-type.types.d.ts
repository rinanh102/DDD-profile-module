import { AuthInput } from '@cbidigital/aqua';
import { ProfileRelationshipType } from '../../../../../domain/aggregates/profile-relationship-type';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';
export declare type UpdateProfileRelationshipTypeUseCaseInput = {
    id: string;
    description?: string;
};
export declare class UpdateProfileRelationshipTypeUseCaseInputModel implements UpdateProfileRelationshipTypeUseCaseInput {
    readonly id: string;
    readonly description?: string;
}
export declare type UpdateProfileRelationshipTypeUseCaseOutput = ProfileRelationshipTypeDto;
export declare type UpdateProfileRelationshipTypeUseCaseContext = {
    firstInput: UpdateProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};
export declare type UpdateProfileRelationshipTypeUseCaseValidateInput = UpdateProfileRelationshipTypeUseCaseInput;
export declare type UpdateProfileRelationshipTypeUseCaseValidateOutput = UpdateProfileRelationshipTypeUseCaseInput;
export declare type UpdateProfileRelationshipTypeUseCaseProcessingInput = UpdateProfileRelationshipTypeUseCaseValidateOutput;
export declare type UpdateProfileRelationshipTypeUseCaseProcessingOutput = {
    entity: ProfileRelationshipType;
};
export declare type UpdateProfileRelationshipTypeUseCaseMapInput = UpdateProfileRelationshipTypeUseCaseProcessingOutput;
export declare type UpdateProfileRelationshipTypeUseCaseMapOutput = ProfileRelationshipTypeDto;
