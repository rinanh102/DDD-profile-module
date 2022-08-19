import { Inject, Provider, Scope } from '@heronjs/common';

import {
    UpdateProfileUseCaseContext,
    UpdateProfileUseCaseInput,
    UpdateProfileUseCaseInputModel,
    UpdateProfileUseCaseMapInput,
    UpdateProfileUseCaseMapOutput,
    UpdateProfileUseCaseOutput,
    UpdateProfileUseCaseProcessingInput,
    UpdateProfileUseCaseProcessingOutput,
    UpdateProfileUseCaseValidateInput,
    UpdateProfileUseCaseValidateOutput,
} from './types';
import { IUseCase, UseCase, UseCasePipeMethod, ValidatorUtil } from '@cbidigital/aqua';
import { IProfileRepo } from '../../../../domain/repos/profile';
import { IProfileMapper } from '../../../../../../utils/objects/mappers/profile.mapper';
import { MissingUpdateInputField } from '../../../../domain/errors';
import { ProfileTokens } from '../../../../../../constants';

export type IUpdateprofileUseCase = IUseCase<
    UpdateProfileUseCaseInput,
    UpdateProfileUseCaseOutput,
    UpdateProfileUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.UPDATE_PROFILE, scope: Scope.REQUEST })
export class UpdateProfileUseCase
    extends UseCase<UpdateProfileUseCaseInput, UpdateProfileUseCaseOutput, UpdateProfileUseCaseContext>
    implements IUpdateprofileUseCase
{
    constructor(
        @Inject(ProfileTokens.Repo.PROFILE) private readonly _repo: IProfileRepo,
        @Inject(ProfileTokens.Mapper.PROFILE) private readonly _mapper: IProfileMapper,
    ) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<UpdateProfileUseCaseValidateInput, UpdateProfileUseCaseValidateOutput> =
        async (input) => {
            if (!input.id && !input.userId) throw new MissingUpdateInputField();
            const model = await ValidatorUtil.validatePlain(UpdateProfileUseCaseInputModel, input);
            return model;
        };

    processing: UseCasePipeMethod<UpdateProfileUseCaseProcessingInput, UpdateProfileUseCaseProcessingOutput> =
        async (input) => {
            if (input.id) {
                const entity = await this._repo.update(input.id, input);
                return { entity };
            } else if (input.userId) {
                const entity = await this._repo.updateByUserId(input.userId, input);
                return { entity };
            } else {
                throw new MissingUpdateInputField();
            }
        };

    map: UseCasePipeMethod<UpdateProfileUseCaseMapInput, UpdateProfileUseCaseMapOutput> = async ({
        entity,
    }) => {
        return this._mapper.fromEntityToDTO(entity);
    };
}
