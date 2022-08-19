import { DtoUtil, IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { Inject, Provider, Scope } from '@heronjs/common';
import { ProfileTokens, DEFAULT_OFFSET, DEFAULT_LIMIT } from '../../../../../../constants';
import { ProfileRelationshipTypeDto } from '../../../../domain/dtos';
import { IProfileRelationshipTypeDAO } from '../../../../infra/databases/daos';
import {
    GetListProfileRelationshipTypesCaseContext,
    GetListProfileRelationshipTypesUseCaseInput,
    GetListProfileRelationshipTypesUseCaseMapInput,
    GetListProfileRelationshipTypesUseCaseMapOutput,
    GetListProfileRelationshipTypesUseCaseOutput,
    GetListProfileRelationshipTypesUseCaseProcessingInput,
    GetListProfileRelationshipTypesUseCaseProcessingOutput,
    GetListProfileRelationshipTypesUseCaseValidateInput,
    GetListProfileRelationshipTypesUseCaseValidateOutput,
} from './types';

export type IGetListProfileRelationshipTypesUseCase = IUseCase<
    GetListProfileRelationshipTypesUseCaseInput,
    GetListProfileRelationshipTypesUseCaseOutput,
    GetListProfileRelationshipTypesCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.GET_LIST_PROFILE_RELATIONSHIP_TYPES, scope: Scope.REQUEST })
export class GetListProfileRelationshipTypesUseCase
    extends UseCase<
        GetListProfileRelationshipTypesUseCaseInput,
        GetListProfileRelationshipTypesUseCaseOutput,
        GetListProfileRelationshipTypesCaseContext
    >
    implements IGetListProfileRelationshipTypesUseCase
{
    constructor(
        @Inject(ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE)
        private readonly _profileRelationshipTypeDAO: IProfileRelationshipTypeDAO,
    ) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<
        GetListProfileRelationshipTypesUseCaseValidateInput,
        GetListProfileRelationshipTypesUseCaseValidateOutput
    > = async (input) => {
        return input;
    };

    processing: UseCasePipeMethod<
        GetListProfileRelationshipTypesUseCaseProcessingInput,
        GetListProfileRelationshipTypesUseCaseProcessingOutput
    > = async (input) => {
        return this._profileRelationshipTypeDAO.find({
            offset: input.offset || DEFAULT_OFFSET,
            limit: input.limit || DEFAULT_LIMIT,
        });
    };

    map: UseCasePipeMethod<
        GetListProfileRelationshipTypesUseCaseMapInput,
        GetListProfileRelationshipTypesUseCaseMapOutput
    > = async (input) => {
        return input.map((i) => DtoUtil.map<Partial<ProfileRelationshipTypeDto>>(i, { useUnixtime: true }));
    };
}
