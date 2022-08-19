import { DtoUtil, IUseCase, UseCase, UseCasePipeMethod } from '@cbidigital/aqua';
import { Inject, Provider, Scope } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';
import { ProfileDto } from '../../../../domain/dtos';
import { ProfileNotFoundError } from '../../../../domain/errors';
import { IProfileDAO } from '../../../../infra/databases/daos';
import {
    GetProfileByIdUseCaseContext,
    GetProfileByIdUseCaseInput,
    GetProfileByIdUseCaseMapInput,
    GetProfileByIdUseCaseMapOutput,
    GetProfileByIdUseCaseOutput,
    GetProfileByIdUseCaseProcessingInput,
    GetProfileByIdUseCaseProcessingOutput,
    GetProfileByIdUseCaseValidateInput,
    GetProfileByIdUseCaseValidateOutput,
} from './types';

export type IGetProfileUseCase = IUseCase<
    GetProfileByIdUseCaseInput,
    GetProfileByIdUseCaseOutput,
    GetProfileByIdUseCaseContext
>;

@Provider({ token: ProfileTokens.Usecase.GET_PROFILE_BY_ID, scope: Scope.REQUEST })
export class GetProfileByIdUseCase
    extends UseCase<GetProfileByIdUseCaseInput, GetProfileByIdUseCaseOutput, GetProfileByIdUseCaseContext>
    implements IGetProfileUseCase
{
    constructor(@Inject(ProfileTokens.Dao.PROFILE) private readonly _profileDAO: IProfileDAO) {
        super();
        this.setMethods([this.validate.bind(this), this.processing.bind(this), this.map.bind(this)]);
    }

    validate: UseCasePipeMethod<GetProfileByIdUseCaseValidateInput, GetProfileByIdUseCaseValidateOutput> =
        async (input) => {
            return input;
        };

    processing: UseCasePipeMethod<
        GetProfileByIdUseCaseProcessingInput,
        GetProfileByIdUseCaseProcessingOutput
    > = async (input) => {
        const profileDTO = await this._profileDAO.findOne(
            { filter: { id: { eq: input } } },
            {
                resolve: ['addressInfo', 'type', 'children', { attributeValues: ['attribute'] }],
            },
        );
        if (!profileDTO) throw new ProfileNotFoundError();
        return profileDTO;
    };

    map: UseCasePipeMethod<GetProfileByIdUseCaseMapInput, GetProfileByIdUseCaseMapOutput> = async (input) => {
        return DtoUtil.map<Partial<ProfileDto>>(input, { useUnixtime: true });
    };
}
