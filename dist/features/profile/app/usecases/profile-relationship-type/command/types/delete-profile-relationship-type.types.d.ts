import { AuthInput } from '@cbidigital/aqua';
import { ProfileRelationshipType } from '../../../../../domain/aggregates/profile-relationship-type';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';
export declare type DeleteProfileRelationshipTypeUseCaseInput = {
    id: string;
};
export declare class DeleteProfileRelationshipTypeUseCaseInputModel implements DeleteProfileRelationshipTypeUseCaseInput {
    readonly id: string;
}
export declare type DeleteProfileRelationshipTypeUseCaseOutput = void;
export declare type DeleteProfileRelationshipTypeUseCaseContext = {
    firstInput: DeleteProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};
export declare type DeleteProfileRelationshipTypeUseCaseValidateInput = DeleteProfileRelationshipTypeUseCaseInput;
export declare type DeleteProfileRelationshipTypeUseCaseValidateOutput = DeleteProfileRelationshipTypeUseCaseInput;
export declare type DeleteProfileRelationshipTypeUseCaseProcessingInput = DeleteProfileRelationshipTypeUseCaseValidateOutput;
export declare type DeleteProfileRelationshipTypeUseCaseProcessingOutput = {
    entity: ProfileRelationshipType;
};
export declare type DeleteProfileRelationshipTypeUseCaseMapInput = DeleteProfileRelationshipTypeUseCaseProcessingOutput;
export declare type DeleteProfileRelationshipTypeUseCaseMapOutput = void;
