import { DeleteProfileUseCaseContext, DeleteProfileUseCaseInput, DeleteProfileUseCaseMapInput, DeleteProfileUseCaseMapOutput, DeleteProfileUseCaseOutput, DeleteProfileUseCaseProcessingInput, DeleteProfileUseCaseProcessingOutput, DeleteProfileUseCaseValidateInput, DeleteProfileUseCaseValidateOutput } from './types';
import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileRepo } from '../../../../domain/repos/profile';
import { IProfileMapper } from '../../../../../../utils/objects/mappers/profile.mapper';
export declare type IDeleteProfileUseCase = IUseCase<DeleteProfileUseCaseInput, DeleteProfileUseCaseOutput, DeleteProfileUseCaseContext>;
export declare class DeleteProfileUseCase extends UseCase<DeleteProfileUseCaseInput, DeleteProfileUseCaseOutput, DeleteProfileUseCaseContext> implements IDeleteProfileUseCase {
    private readonly _repo;
    private readonly _mapper;
    constructor(_repo: IProfileRepo, _mapper: IProfileMapper);
    validate: UseCasePipeMethod<DeleteProfileUseCaseValidateInput, DeleteProfileUseCaseValidateOutput>;
    processing: UseCasePipeMethod<DeleteProfileUseCaseProcessingInput, DeleteProfileUseCaseProcessingOutput>;
    map: UseCasePipeMethod<DeleteProfileUseCaseMapInput, DeleteProfileUseCaseMapOutput>;
}
