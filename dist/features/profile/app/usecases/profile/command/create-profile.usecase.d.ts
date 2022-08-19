import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { CreateProfileUseCaseContext, CreateProfileUseCaseInput, CreateProfileUseCaseMapInput, CreateProfileUseCaseMapOutput, CreateProfileUseCaseOutput, CreateProfileUseCaseProcessingInput, CreateProfileUseCaseProcessingOutput, CreateProfileUseCaseValidateInput, CreateProfileUseCaseValidateOutput } from './types';
import { IProfileRepo } from '../../../../domain/repos/profile';
import { IProfileMapper } from '../../../../../../utils/objects/mappers/profile.mapper';
export declare type ICreateProfileUseCase = IUseCase<CreateProfileUseCaseInput, CreateProfileUseCaseOutput, CreateProfileUseCaseContext>;
export declare class CreateProfileUseCase extends UseCase<CreateProfileUseCaseInput, CreateProfileUseCaseOutput, CreateProfileUseCaseContext> implements ICreateProfileUseCase {
    private readonly _repo;
    private readonly _mapper;
    constructor(_repo: IProfileRepo, _mapper: IProfileMapper);
    validate: UseCasePipeMethod<CreateProfileUseCaseValidateInput, CreateProfileUseCaseValidateOutput>;
    processing: UseCasePipeMethod<CreateProfileUseCaseProcessingInput, CreateProfileUseCaseProcessingOutput>;
    map: UseCasePipeMethod<CreateProfileUseCaseMapInput, CreateProfileUseCaseMapOutput>;
}
