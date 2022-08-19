import { DtoUtil, IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { Inject, Provider, Scope } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';
import { ProfileDto } from '../../../../domain/dtos';
import { IProfileDAO } from '../../../../infra/databases/daos';
import {
    GetListProfilesOfUserseCaseContext,
    GetListProfilesOfUserUseCaseInput,
    GetListProfilesOfUserUseCaseMapInput,
    GetListProfilesOfUserUseCaseMapOutput,
    GetListProfilesOfUserUseCaseOutput,
    GetListProfilesOfUserUseCaseProcessingInput,
    GetListProfilesOfUserUseCaseProcessingOutput,
    GetListProfilesOfUserUseCaseValidateInput,
    GetListProfilesOfUserUseCaseValidateOutput,
} from './types';

export type IGetListProfilesOfUserUseCase = IUseCase<
    GetListProfilesOfUserUseCaseInput,
    GetListProfilesOfUserUseCaseOutput,
    GetListProfilesOfUserseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.GET_LIST_PROFILES_OF_USER, scope: Scope.REQUEST })
export class GetListProfilesOfUserUseCase
    extends UseCase<
        GetListProfilesOfUserUseCaseInput,
        GetListProfilesOfUserUseCaseOutput,
        GetListProfilesOfUserseCaseContext
    >
    implements IGetListProfilesOfUserUseCase
{
    constructor(@Inject(ProfileTokens.Dao.PROFILE) private readonly _profileDAO: IProfileDAO) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<
        GetListProfilesOfUserUseCaseValidateInput,
        GetListProfilesOfUserUseCaseValidateOutput
    > = async (input) => {
        return input;
    };

    processing: UseCasePipeMethod<
        GetListProfilesOfUserUseCaseProcessingInput,
        GetListProfilesOfUserUseCaseProcessingOutput
    > = async (input) => {
        return this._profileDAO.find(
            {
                ...input,
                filter: {
                    ...input.filter,
                    userId: { eq: this.context.auth.authId },
                },
            },
            {
                resolve: ['addressInfo', 'type', 'children', { attributeValues: ['attribute'] }],
            },
        );
    };

    map: UseCasePipeMethod<GetListProfilesOfUserUseCaseMapInput, GetListProfilesOfUserUseCaseMapOutput> =
        async (input) => {
            return input.map((i) => DtoUtil.map<Partial<ProfileDto>>(i, { useUnixtime: true }));
        };
}
