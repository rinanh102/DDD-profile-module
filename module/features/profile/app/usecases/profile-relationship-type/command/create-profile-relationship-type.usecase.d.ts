import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { CreateProfileRelationshipTypeUseCaseContext, CreateProfileRelationshipTypeUseCaseInput, CreateProfileRelationshipTypeUseCaseMapInput, CreateProfileRelationshipTypeUseCaseMapOutput, CreateProfileRelationshipTypeUseCaseOutput, CreateProfileRelationshipTypeUseCaseProcessingInput, CreateProfileRelationshipTypeUseCaseProcessingOutput, CreateProfileRelationshipTypeUseCaseValidateInput, CreateProfileRelationshipTypeUseCaseValidateOutput } from './types';
import { IProfileRelationshipTypeMapper } from '../../../../../../utils/objects/mappers';
import { IProfileRelationshipTypeRepo } from '../../../../domain/repos';
export declare type ICreateProfileRelationshipTypeUseCase = IUseCase<CreateProfileRelationshipTypeUseCaseInput, CreateProfileRelationshipTypeUseCaseOutput, CreateProfileRelationshipTypeUseCaseContext>;
export declare class CreateProfileRelationshipTypeUseCase extends UseCase<CreateProfileRelationshipTypeUseCaseInput, CreateProfileRelationshipTypeUseCaseOutput, CreateProfileRelationshipTypeUseCaseContext> implements ICreateProfileRelationshipTypeUseCase {
    private readonly _repo;
    private readonly _mapper;
    constructor(_repo: IProfileRelationshipTypeRepo, _mapper: IProfileRelationshipTypeMapper);
    validate: UseCasePipeMethod<CreateProfileRelationshipTypeUseCaseValidateInput, CreateProfileRelationshipTypeUseCaseValidateOutput>;
    processing: UseCasePipeMethod<CreateProfileRelationshipTypeUseCaseProcessingInput, CreateProfileRelationshipTypeUseCaseProcessingOutput>;
    map: UseCasePipeMethod<CreateProfileRelationshipTypeUseCaseMapInput, CreateProfileRelationshipTypeUseCaseMapOutput>;
}
