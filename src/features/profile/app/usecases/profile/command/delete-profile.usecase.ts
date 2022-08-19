import { Inject, Provider, Scope } from '@heronjs/common';
import {
    DeleteProfileUseCaseContext,
    DeleteProfileUseCaseInput,
    DeleteProfileUseCaseInputModel,
    DeleteProfileUseCaseMapInput,
    DeleteProfileUseCaseMapOutput,
    DeleteProfileUseCaseOutput,
    DeleteProfileUseCaseProcessingInput,
    DeleteProfileUseCaseProcessingOutput,
    DeleteProfileUseCaseValidateInput,
    DeleteProfileUseCaseValidateOutput,
} from './types';
import { IUseCase, UseCase, UseCasePipeMethod, ValidatorUtil } from '@cbidigital/aqua';
import { IProfileRepo } from '../../../../domain/repos/profile';
import { IProfileMapper } from '../../../../../../utils/objects/mappers/profile.mapper';
import { ProfileTokens } from '../../../../../../constants';

export type IDeleteProfileUseCase = IUseCase<
    DeleteProfileUseCaseInput,
    DeleteProfileUseCaseOutput,
    DeleteProfileUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.DELETE_PROFILE, scope: Scope.REQUEST })
export class DeleteProfileUseCase
    extends UseCase<DeleteProfileUseCaseInput, DeleteProfileUseCaseOutput, DeleteProfileUseCaseContext>
    implements IDeleteProfileUseCase
{
    constructor(
        @Inject(ProfileTokens.Repo.PROFILE) private readonly _repo: IProfileRepo,
        @Inject(ProfileTokens.Mapper.PROFILE) private readonly _mapper: IProfileMapper,
    ) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<DeleteProfileUseCaseValidateInput, DeleteProfileUseCaseValidateOutput> =
        async (input) => {
            const model = await ValidatorUtil.validatePlain(DeleteProfileUseCaseInputModel, input);
            return model;
        };

    processing: UseCasePipeMethod<DeleteProfileUseCaseProcessingInput, DeleteProfileUseCaseProcessingOutput> =
        async (input) => {
            const entity = await this._repo.delete(input.id);
            return { entity };
        };

    map: UseCasePipeMethod<DeleteProfileUseCaseMapInput, DeleteProfileUseCaseMapOutput> = async () => {
        return;
    };
}
