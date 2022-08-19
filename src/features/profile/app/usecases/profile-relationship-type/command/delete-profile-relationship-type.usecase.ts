import { Inject, Provider, Scope } from '@heronjs/common';
import {
    DeleteProfileRelationshipTypeUseCaseContext,
    DeleteProfileRelationshipTypeUseCaseInput,
    DeleteProfileRelationshipTypeUseCaseInputModel,
    DeleteProfileRelationshipTypeUseCaseMapInput,
    DeleteProfileRelationshipTypeUseCaseMapOutput,
    DeleteProfileRelationshipTypeUseCaseOutput,
    DeleteProfileRelationshipTypeUseCaseProcessingInput,
    DeleteProfileRelationshipTypeUseCaseProcessingOutput,
    DeleteProfileRelationshipTypeUseCaseValidateInput,
    DeleteProfileRelationshipTypeUseCaseValidateOutput,
} from './types';
import { IUseCase, UseCase, UseCasePipeMethod, ValidatorUtil } from '@cbidigital/aqua';
import { IProfileRelationshipTypeRepo } from '../../../../domain/repos';
import { IProfileRelationshipTypeMapper } from '../../../../../../utils/objects/mappers';
import { ProfileTokens } from '../../../../../../constants';

export type IDeleteProfileRelationshipTypeUseCase = IUseCase<
    DeleteProfileRelationshipTypeUseCaseInput,
    DeleteProfileRelationshipTypeUseCaseOutput,
    DeleteProfileRelationshipTypeUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.DELETE_PROFILE_RELATIONSHIP_TYPE, scope: Scope.REQUEST })
export class DeleteProfileRelationshipTypeUseCase
    extends UseCase<
        DeleteProfileRelationshipTypeUseCaseInput,
        DeleteProfileRelationshipTypeUseCaseOutput,
        DeleteProfileRelationshipTypeUseCaseContext
    >
    implements IDeleteProfileRelationshipTypeUseCase
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
        DeleteProfileRelationshipTypeUseCaseValidateInput,
        DeleteProfileRelationshipTypeUseCaseValidateOutput
    > = async (input) => {
        const model = await ValidatorUtil.validatePlain(
            DeleteProfileRelationshipTypeUseCaseInputModel,
            input,
        );
        return model;
    };

    processing: UseCasePipeMethod<
        DeleteProfileRelationshipTypeUseCaseProcessingInput,
        DeleteProfileRelationshipTypeUseCaseProcessingOutput
    > = async (input) => {
        const entity = await this._repo.delete(input.id);
        return { entity };
    };

    map: UseCasePipeMethod<
        DeleteProfileRelationshipTypeUseCaseMapInput,
        DeleteProfileRelationshipTypeUseCaseMapOutput
    > = async () => {
        return;
    };
}
