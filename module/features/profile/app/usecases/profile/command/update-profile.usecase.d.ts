import { UpdateProfileUseCaseContext, UpdateProfileUseCaseInput, UpdateProfileUseCaseMapInput, UpdateProfileUseCaseMapOutput, UpdateProfileUseCaseOutput, UpdateProfileUseCaseProcessingInput, UpdateProfileUseCaseProcessingOutput, UpdateProfileUseCaseValidateInput, UpdateProfileUseCaseValidateOutput } from './types';
import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileRepo } from '../../../../domain/repos/profile';
import { IProfileMapper } from '../../../../../../utils/objects/mappers/profile.mapper';
export declare type IUpdateprofileUseCase = IUseCase<UpdateProfileUseCaseInput, UpdateProfileUseCaseOutput, UpdateProfileUseCaseContext>;
export declare class UpdateProfileUseCase extends UseCase<UpdateProfileUseCaseInput, UpdateProfileUseCaseOutput, UpdateProfileUseCaseContext> implements IUpdateprofileUseCase {
    private readonly _repo;
    private readonly _mapper;
    constructor(_repo: IProfileRepo, _mapper: IProfileMapper);
    validate: UseCasePipeMethod<UpdateProfileUseCaseValidateInput, UpdateProfileUseCaseValidateOutput>;
    processing: UseCasePipeMethod<UpdateProfileUseCaseProcessingInput, UpdateProfileUseCaseProcessingOutput>;
    map: UseCasePipeMethod<UpdateProfileUseCaseMapInput, UpdateProfileUseCaseMapOutput>;
}
