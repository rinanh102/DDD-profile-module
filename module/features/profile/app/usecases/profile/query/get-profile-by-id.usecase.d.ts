import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileDAO } from '../../../../infra/databases/daos';
import { GetProfileByIdUseCaseContext, GetProfileByIdUseCaseInput, GetProfileByIdUseCaseMapInput, GetProfileByIdUseCaseMapOutput, GetProfileByIdUseCaseOutput, GetProfileByIdUseCaseProcessingInput, GetProfileByIdUseCaseProcessingOutput, GetProfileByIdUseCaseValidateInput, GetProfileByIdUseCaseValidateOutput } from './types';
export declare type IGetProfileUseCase = IUseCase<GetProfileByIdUseCaseInput, GetProfileByIdUseCaseOutput, GetProfileByIdUseCaseContext>;
export declare class GetProfileByIdUseCase extends UseCase<GetProfileByIdUseCaseInput, GetProfileByIdUseCaseOutput, GetProfileByIdUseCaseContext> implements IGetProfileUseCase {
    private readonly _profileDAO;
    constructor(_profileDAO: IProfileDAO);
    validate: UseCasePipeMethod<GetProfileByIdUseCaseValidateInput, GetProfileByIdUseCaseValidateOutput>;
    processing: UseCasePipeMethod<GetProfileByIdUseCaseProcessingInput, GetProfileByIdUseCaseProcessingOutput>;
    map: UseCasePipeMethod<GetProfileByIdUseCaseMapInput, GetProfileByIdUseCaseMapOutput>;
}
