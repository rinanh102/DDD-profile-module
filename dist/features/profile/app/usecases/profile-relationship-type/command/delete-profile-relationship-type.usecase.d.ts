import { DeleteProfileRelationshipTypeUseCaseContext, DeleteProfileRelationshipTypeUseCaseInput, DeleteProfileRelationshipTypeUseCaseMapInput, DeleteProfileRelationshipTypeUseCaseMapOutput, DeleteProfileRelationshipTypeUseCaseOutput, DeleteProfileRelationshipTypeUseCaseProcessingInput, DeleteProfileRelationshipTypeUseCaseProcessingOutput, DeleteProfileRelationshipTypeUseCaseValidateInput, DeleteProfileRelationshipTypeUseCaseValidateOutput } from './types';
import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileRelationshipTypeRepo } from '../../../../domain/repos';
import { IProfileRelationshipTypeMapper } from '../../../../../../utils/objects/mappers';
export declare type IDeleteProfileRelationshipTypeUseCase = IUseCase<DeleteProfileRelationshipTypeUseCaseInput, DeleteProfileRelationshipTypeUseCaseOutput, DeleteProfileRelationshipTypeUseCaseContext>;
export declare class DeleteProfileRelationshipTypeUseCase extends UseCase<DeleteProfileRelationshipTypeUseCaseInput, DeleteProfileRelationshipTypeUseCaseOutput, DeleteProfileRelationshipTypeUseCaseContext> implements IDeleteProfileRelationshipTypeUseCase {
    private readonly _repo;
    private readonly _mapper;
    constructor(_repo: IProfileRelationshipTypeRepo, _mapper: IProfileRelationshipTypeMapper);
    validate: UseCasePipeMethod<DeleteProfileRelationshipTypeUseCaseValidateInput, DeleteProfileRelationshipTypeUseCaseValidateOutput>;
    processing: UseCasePipeMethod<DeleteProfileRelationshipTypeUseCaseProcessingInput, DeleteProfileRelationshipTypeUseCaseProcessingOutput>;
    map: UseCasePipeMethod<DeleteProfileRelationshipTypeUseCaseMapInput, DeleteProfileRelationshipTypeUseCaseMapOutput>;
}
