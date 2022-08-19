import { Inject, Provider, Scope } from '@heronjs/common';

import { IUseCase, UseCase, UseCasePipeMethod, ValidatorUtil } from '@cbidigital/aqua';
import {
    CreateProfileUseCaseContext,
    CreateProfileUseCaseInput,
    CreateProfileUseCaseInputModel,
    CreateProfileUseCaseMapInput,
    CreateProfileUseCaseMapOutput,
    CreateProfileUseCaseOutput,
    CreateProfileUseCaseProcessingInput,
    CreateProfileUseCaseProcessingOutput,
    CreateProfileUseCaseValidateInput,
    CreateProfileUseCaseValidateOutput,
} from './types';
import { IProfileRepo } from '../../../../domain/repos/profile';
import { IProfileMapper } from '../../../../../../utils/objects/mappers/profile.mapper';
import { ProfileTokens } from '../../../../../../constants';

export type ICreateProfileUseCase = IUseCase<
    CreateProfileUseCaseInput,
    CreateProfileUseCaseOutput,
    CreateProfileUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.CREATE_PROFILE, scope: Scope.REQUEST })
export class CreateProfileUseCase
    extends UseCase<CreateProfileUseCaseInput, CreateProfileUseCaseOutput, CreateProfileUseCaseContext>
    implements ICreateProfileUseCase
{
    constructor(
        @Inject(ProfileTokens.Repo.PROFILE) private readonly _repo: IProfileRepo,
        @Inject(ProfileTokens.Mapper.PROFILE) private readonly _mapper: IProfileMapper,
    ) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<CreateProfileUseCaseValidateInput, CreateProfileUseCaseValidateOutput> =
        async (input) => {
            const model = await ValidatorUtil.validatePlain(CreateProfileUseCaseInputModel, input);
            return model;
        };

    processing: UseCasePipeMethod<CreateProfileUseCaseProcessingInput, CreateProfileUseCaseProcessingOutput> =
        async (input) => {
            const entity = await this._repo.create(input);
            return { entity };
        };

    map: UseCasePipeMethod<CreateProfileUseCaseMapInput, CreateProfileUseCaseMapOutput> = async ({
        entity,
    }) => {
        return this._mapper.fromEntityToDTO(entity);
    };
}
