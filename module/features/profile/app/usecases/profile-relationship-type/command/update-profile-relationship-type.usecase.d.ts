import { UpdateProfileRelationshipTypeUseCaseContext, UpdateProfileRelationshipTypeUseCaseInput, UpdateProfileRelationshipTypeUseCaseMapInput, UpdateProfileRelationshipTypeUseCaseMapOutput, UpdateProfileRelationshipTypeUseCaseOutput, UpdateProfileRelationshipTypeUseCaseProcessingInput, UpdateProfileRelationshipTypeUseCaseProcessingOutput, UpdateProfileRelationshipTypeUseCaseValidateInput, UpdateProfileRelationshipTypeUseCaseValidateOutput } from './types';
import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileRelationshipTypeRepo } from '../../../../domain/repos/profile-relationship-type';
import { IProfileRelationshipTypeMapper } from '../../../../../../utils/objects/mappers';
export declare type IUpdateProfileRelationshipTypeUseCase = IUseCase<UpdateProfileRelationshipTypeUseCaseInput, UpdateProfileRelationshipTypeUseCaseOutput, UpdateProfileRelationshipTypeUseCaseContext>;
export declare class UpdateProfileRelationshipTypeUseCase extends UseCase<UpdateProfileRelationshipTypeUseCaseInput, UpdateProfileRelationshipTypeUseCaseOutput, UpdateProfileRelationshipTypeUseCaseContext> implements IUpdateProfileRelationshipTypeUseCase {
    private readonly _repo;
    private readonly _mapper;
    constructor(_repo: IProfileRelationshipTypeRepo, _mapper: IProfileRelationshipTypeMapper);
    validate: UseCasePipeMethod<UpdateProfileRelationshipTypeUseCaseValidateInput, UpdateProfileRelationshipTypeUseCaseValidateOutput>;
    processing: UseCasePipeMethod<UpdateProfileRelationshipTypeUseCaseProcessingInput, UpdateProfileRelationshipTypeUseCaseProcessingOutput>;
    map: UseCasePipeMethod<UpdateProfileRelationshipTypeUseCaseMapInput, UpdateProfileRelationshipTypeUseCaseMapOutput>;
}
