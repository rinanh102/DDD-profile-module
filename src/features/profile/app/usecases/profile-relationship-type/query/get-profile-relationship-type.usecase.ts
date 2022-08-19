import { DtoUtil, IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { Inject, Provider, Scope } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';
import { ProfileRelationshipTypeDto } from '../../../../domain/dtos';
import { ProfileRelationshipTypeNotFoundError } from '../../../../domain/errors';
import { IProfileRelationshipTypeDAO } from '../../../../infra/databases/daos';
import {
    GetProfileRelationshipTypeUseCaseContext,
    GetProfileRelationshipTypeUseCaseInput,
    GetProfileRelationshipTypeUseCaseMapInput,
    GetProfileRelationshipTypeUseCaseMapOutput,
    GetProfileRelationshipTypeUseCaseOutput,
    GetProfileRelationshipTypeUseCaseProcessingInput,
    GetProfileRelationshipTypeUseCaseProcessingOutput,
    GetProfileRelationshipTypeUseCaseValidateInput,
    GetProfileRelationshipTypeUseCaseValidateOutput,
} from './types';

export type IGetProfileRelationshipTypeUseCase = IUseCase<
    GetProfileRelationshipTypeUseCaseInput,
    GetProfileRelationshipTypeUseCaseOutput,
    GetProfileRelationshipTypeUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.GET_PROFILE_RELATIONSHIP_TYPE, scope: Scope.REQUEST })
export class GetProfileRelationshipTypeUseCase
    extends UseCase<
        GetProfileRelationshipTypeUseCaseInput,
        GetProfileRelationshipTypeUseCaseOutput,
        GetProfileRelationshipTypeUseCaseContext
    >
    implements IGetProfileRelationshipTypeUseCase
{
    constructor(
        @Inject(ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)
        private readonly _profileRealtionshipTypeDAO: IProfileRelationshipTypeDAO,
    ) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<
        GetProfileRelationshipTypeUseCaseValidateInput,
        GetProfileRelationshipTypeUseCaseValidateOutput
    > = async (input) => {
        return input;
    };

    processing: UseCasePipeMethod<
        GetProfileRelationshipTypeUseCaseProcessingInput,
        GetProfileRelationshipTypeUseCaseProcessingOutput
    > = async (input) => {
        const profileDTO = await this._profileRealtionshipTypeDAO.findOne({ filter: { id: { eq: input } } });
        if (!profileDTO) throw new ProfileRelationshipTypeNotFoundError();
        return profileDTO;
    };

    map: UseCasePipeMethod<
        GetProfileRelationshipTypeUseCaseMapInput,
        GetProfileRelationshipTypeUseCaseMapOutput
    > = async (input) => {
        return DtoUtil.map<Partial<ProfileRelationshipTypeDto>>(input, { useUnixtime: true });
    };
}
