import { IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { IProfileDAO } from '../../../../infra/databases/daos';
import { GetListProfilesOfUserseCaseContext, GetListProfilesOfUserUseCaseInput, GetListProfilesOfUserUseCaseMapInput, GetListProfilesOfUserUseCaseMapOutput, GetListProfilesOfUserUseCaseOutput, GetListProfilesOfUserUseCaseProcessingInput, GetListProfilesOfUserUseCaseProcessingOutput, GetListProfilesOfUserUseCaseValidateInput, GetListProfilesOfUserUseCaseValidateOutput } from './types';
export declare type IGetListProfilesOfUserUseCase = IUseCase<GetListProfilesOfUserUseCaseInput, GetListProfilesOfUserUseCaseOutput, GetListProfilesOfUserseCaseContext>;
export declare class GetListProfilesOfUserUseCase extends UseCase<GetListProfilesOfUserUseCaseInput, GetListProfilesOfUserUseCaseOutput, GetListProfilesOfUserseCaseContext> implements IGetListProfilesOfUserUseCase {
    private readonly _profileDAO;
    constructor(_profileDAO: IProfileDAO);
    validate: UseCasePipeMethod<GetListProfilesOfUserUseCaseValidateInput, GetListProfilesOfUserUseCaseValidateOutput>;
    processing: UseCasePipeMethod<GetListProfilesOfUserUseCaseProcessingInput, GetListProfilesOfUserUseCaseProcessingOutput>;
    map: UseCasePipeMethod<GetListProfilesOfUserUseCaseMapInput, GetListProfilesOfUserUseCaseMapOutput>;
}
