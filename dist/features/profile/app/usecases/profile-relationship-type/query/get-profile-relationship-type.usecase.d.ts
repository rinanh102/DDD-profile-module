import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileRelationshipTypeDAO } from '../../../../infra/databases/daos';
import { GetProfileRelationshipTypeUseCaseContext, GetProfileRelationshipTypeUseCaseInput, GetProfileRelationshipTypeUseCaseMapInput, GetProfileRelationshipTypeUseCaseMapOutput, GetProfileRelationshipTypeUseCaseOutput, GetProfileRelationshipTypeUseCaseProcessingInput, GetProfileRelationshipTypeUseCaseProcessingOutput, GetProfileRelationshipTypeUseCaseValidateInput, GetProfileRelationshipTypeUseCaseValidateOutput } from './types';
export declare type IGetProfileRelationshipTypeUseCase = IUseCase<GetProfileRelationshipTypeUseCaseInput, GetProfileRelationshipTypeUseCaseOutput, GetProfileRelationshipTypeUseCaseContext>;
export declare class GetProfileRelationshipTypeUseCase extends UseCase<GetProfileRelationshipTypeUseCaseInput, GetProfileRelationshipTypeUseCaseOutput, GetProfileRelationshipTypeUseCaseContext> implements IGetProfileRelationshipTypeUseCase {
    private readonly _profileRealtionshipTypeDAO;
    constructor(_profileRealtionshipTypeDAO: IProfileRelationshipTypeDAO);
    validate: UseCasePipeMethod<GetProfileRelationshipTypeUseCaseValidateInput, GetProfileRelationshipTypeUseCaseValidateOutput>;
    processing: UseCasePipeMethod<GetProfileRelationshipTypeUseCaseProcessingInput, GetProfileRelationshipTypeUseCaseProcessingOutput>;
    map: UseCasePipeMethod<GetProfileRelationshipTypeUseCaseMapInput, GetProfileRelationshipTypeUseCaseMapOutput>;
}
