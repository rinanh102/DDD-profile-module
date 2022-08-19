import { DtoUtil, IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { Inject, Provider, Scope } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';
import { ProfileDto } from '../../../../domain/dtos';
import { IProfileDAO } from '../../../../infra/databases/daos';
import {
    GetListProfilesUseCaseContext,
    GetListProfilesUseCaseInput,
    GetListProfilesUseCaseMapInput,
    GetListProfilesUseCaseMapOutput,
    GetListProfilesUseCaseOutput,
    GetListProfilesUseCaseProcessingInput,
    GetListProfilesUseCaseProcessingOutput,
    GetListProfilesUseCaseValidateInput,
    GetListProfilesUseCaseValidateOutput,
} from './types';

export type IGetListProfilesUseCase = IUseCase<
    GetListProfilesUseCaseInput,
    GetListProfilesUseCaseOutput,
    GetListProfilesUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.GET_LIST_PROFILES, scope: Scope.REQUEST })
export class GetListProfilesUseCase
    extends UseCase<GetListProfilesUseCaseInput, GetListProfilesUseCaseOutput, GetListProfilesUseCaseContext>
    implements IGetListProfilesUseCase
{
    constructor(@Inject(ProfileTokens.Dao.PROFILE) private readonly _profileDAO: IProfileDAO) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<GetListProfilesUseCaseValidateInput, GetListProfilesUseCaseValidateOutput> =
        async (input) => {
            return input;
        };

    processing: UseCasePipeMethod<
        GetListProfilesUseCaseProcessingInput,
        GetListProfilesUseCaseProcessingOutput
    > = async (input) => {
        return this._profileDAO.find(input, {
            resolve: ['addressInfo', 'type', 'children', { attributeValues: ['attribute'] }],
        });
    };

    map: UseCasePipeMethod<GetListProfilesUseCaseMapInput, GetListProfilesUseCaseMapOutput> = async (
        input,
    ) => {
        return input.map((i) => DtoUtil.map<Partial<ProfileDto>>(i, { useUnixtime: true }));
    };
}
