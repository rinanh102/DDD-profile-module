import { Inject, Provider, Scope } from '@heronjs/common';
import { IUseCase, UseCase, UseCasePipeMethod, ValidatorUtil } from '@cbidigital/aqua';
import {
    CreateProfileRelationshipTypeUseCaseContext,
    CreateProfileRelationshipTypeUseCaseInput,
    CreateProfileRelationshipTypeUseCaseInputModel,
    CreateProfileRelationshipTypeUseCaseMapInput,
    CreateProfileRelationshipTypeUseCaseMapOutput,
    CreateProfileRelationshipTypeUseCaseOutput,
    CreateProfileRelationshipTypeUseCaseProcessingInput,
    CreateProfileRelationshipTypeUseCaseProcessingOutput,
    CreateProfileRelationshipTypeUseCaseValidateInput,
    CreateProfileRelationshipTypeUseCaseValidateOutput,
} from './types';
import { IProfileRelationshipTypeMapper } from '../../../../../../utils/objects/mappers';
import { IProfileRelationshipTypeRepo } from '../../../../domain/repos';
import { ProfileTokens } from '../../../../../../constants';

export type ICreateProfileRelationshipTypeUseCase = IUseCase<
    CreateProfileRelationshipTypeUseCaseInput,
    CreateProfileRelationshipTypeUseCaseOutput,
    CreateProfileRelationshipTypeUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.CREATE_PROFILE_RELATIONSHIP_TYPE, scope: Scope.REQUEST })
export class CreateProfileRelationshipTypeUseCase
    extends UseCase<
        CreateProfileRelationshipTypeUseCaseInput,
        CreateProfileRelationshipTypeUseCaseOutput,
        CreateProfileRelationshipTypeUseCaseContext
    >
    implements ICreateProfileRelationshipTypeUseCase
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
        CreateProfileRelationshipTypeUseCaseValidateInput,
        CreateProfileRelationshipTypeUseCaseValidateOutput
    > = async (input) => {
        const model = await ValidatorUtil.validatePlain(
            CreateProfileRelationshipTypeUseCaseInputModel,
            input,
        );

        return model;
    };

    processing: UseCasePipeMethod<
        CreateProfileRelationshipTypeUseCaseProcessingInput,
        CreateProfileRelationshipTypeUseCaseProcessingOutput
    > = async (input) => {
        const entity = await this._repo.create(input);
        return { entity };
    };

    map: UseCasePipeMethod<
        CreateProfileRelationshipTypeUseCaseMapInput,
        CreateProfileRelationshipTypeUseCaseMapOutput
    > = async ({ entity }) => {
        return this._mapper.fromEntityToDTO(entity);
    };
}
