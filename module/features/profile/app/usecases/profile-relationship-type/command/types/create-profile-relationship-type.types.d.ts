import { AuthInput } from '@cbidigital/aqua';
import { ProfileRelationshipType } from '../../../../../domain/aggregates/profile-relationship-type';
import { ProfileRelationshipTypeDto } from '../../../../../domain/dtos';
export declare type CreateProfileRelationshipTypeUseCaseInput = {
    description: string;
};
export declare class CreateProfileRelationshipTypeUseCaseInputModel implements CreateProfileRelationshipTypeUseCaseInput {
    readonly description: string;
}
export declare type CreateProfileRelationshipTypeUseCaseOutput = ProfileRelationshipTypeDto;
export declare type CreateProfileRelationshipTypeUseCaseContext = {
    firstInput: CreateProfileRelationshipTypeUseCaseInput;
    auth: AuthInput<ProfileRelationshipTypeDto>;
};
export declare type CreateProfileRelationshipTypeUseCaseValidateInput = CreateProfileRelationshipTypeUseCaseInput;
export declare type CreateProfileRelationshipTypeUseCaseValidateOutput = CreateProfileRelationshipTypeUseCaseInput;
export declare type CreateProfileRelationshipTypeUseCaseProcessingInput = CreateProfileRelationshipTypeUseCaseValidateOutput;
export declare type CreateProfileRelationshipTypeUseCaseProcessingOutput = {
    entity: ProfileRelationshipType;
};
export declare type CreateProfileRelationshipTypeUseCaseMapInput = CreateProfileRelationshipTypeUseCaseProcessingOutput;
export declare type CreateProfileRelationshipTypeUseCaseMapOutput = ProfileRelationshipTypeDto;
