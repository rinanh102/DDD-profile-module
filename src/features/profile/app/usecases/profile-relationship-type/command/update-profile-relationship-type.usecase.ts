import { Inject, Provider, Scope } from '@heronjs/common';

import {
    UpdateProfileRelationshipTypeUseCaseContext,
    UpdateProfileRelationshipTypeUseCaseInput,
    UpdateProfileRelationshipTypeUseCaseInputModel,
    UpdateProfileRelationshipTypeUseCaseMapInput,
    UpdateProfileRelationshipTypeUseCaseMapOutput,
    UpdateProfileRelationshipTypeUseCaseOutput,
    UpdateProfileRelationshipTypeUseCaseProcessingInput,
    UpdateProfileRelationshipTypeUseCaseProcessingOutput,
    UpdateProfileRelationshipTypeUseCaseValidateInput,
    UpdateProfileRelationshipTypeUseCaseValidateOutput,
} from './types';
import { IUseCase, UseCase, UseCasePipeMethod, ValidatorUtil } from '@cbidigital/aqua';
import { IProfileRelationshipTypeRepo } from '../../../../domain/repos/profile-relationship-type';
import { IProfileRelationshipTypeMapper } from '../../../../../../utils/objects/mappers';
import { ProfileTokens } from '../../../../../../constants';

export type IUpdateProfileRelationshipTypeUseCase = IUseCase<
    UpdateProfileRelationshipTypeUseCaseInput,
    UpdateProfileRelationshipTypeUseCaseOutput,
    UpdateProfileRelationshipTypeUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.UPDATE_PROFILE_RELATIONSHIP_TYPE, scope: Scope.REQUEST })
export class UpdateProfileRelationshipTypeUseCase
    extends UseCase<
        UpdateProfileRelationshipTypeUseCaseInput,
        UpdateProfileRelationshipTypeUseCaseOutput,
        UpdateProfileRelationshipTypeUseCaseContext
    >
    implements IUpdateProfileRelationshipTypeUseCase
{
    constructor(
        @Inject(ProfileTokens.Repo.PROFILE_RELATIONSHIP_TYPE)
        private readonly _repo: IProfileRelationshipTypeRepo,
        @Inject(ProfileTokens.Mapper.PROFILE_RELATIONSHIP_TYPE)
        private readonly _mapper: IProfileRelationshipTypeMapper,
    ) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<
        UpdateProfileRelationshipTypeUseCaseValidateInput,
        UpdateProfileRelationshipTypeUseCaseValidateOutput
    > = async (input) => {
        const model = await ValidatorUtil.validatePlain(
            UpdateProfileRelationshipTypeUseCaseInputModel,
            input,
        );
        return model;
    };

    processing: UseCasePipeMethod<
        UpdateProfileRelationshipTypeUseCaseProcessingInput,
        UpdateProfileRelationshipTypeUseCaseProcessingOutput
    > = async (input) => {
        const entity = await this._repo.update(input.id, input);
        return { entity };
    };

    map: UseCasePipeMethod<
        UpdateProfileRelationshipTypeUseCaseMapInput,
        UpdateProfileRelationshipTypeUseCaseMapOutput
    > = async ({ entity }) => {
        return this._mapper.fromEntityToDTO(entity);
    };
}
