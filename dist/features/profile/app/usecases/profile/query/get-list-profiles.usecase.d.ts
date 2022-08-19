import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileDAO } from '../../../../infra/databases/daos';
import { GetListProfilesUseCaseContext, GetListProfilesUseCaseInput, GetListProfilesUseCaseMapInput, GetListProfilesUseCaseMapOutput, GetListProfilesUseCaseOutput, GetListProfilesUseCaseProcessingInput, GetListProfilesUseCaseProcessingOutput, GetListProfilesUseCaseValidateInput, GetListProfilesUseCaseValidateOutput } from './types';
export declare type IGetListProfilesUseCase = IUseCase<GetListProfilesUseCaseInput, GetListProfilesUseCaseOutput, GetListProfilesUseCaseContext>;
export declare class GetListProfilesUseCase extends UseCase<GetListProfilesUseCaseInput, GetListProfilesUseCaseOutput, GetListProfilesUseCaseContext> implements IGetListProfilesUseCase {
    private readonly _profileDAO;
    constructor(_profileDAO: IProfileDAO);
    validate: UseCasePipeMethod<GetListProfilesUseCaseValidateInput, GetListProfilesUseCaseValidateOutput>;
    processing: UseCasePipeMethod<GetListProfilesUseCaseProcessingInput, GetListProfilesUseCaseProcessingOutput>;
    map: UseCasePipeMethod<GetListProfilesUseCaseMapInput, GetListProfilesUseCaseMapOutput>;
}
