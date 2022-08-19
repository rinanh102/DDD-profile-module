import { UpdateEavAttributeUseCase, IEavAttributeMapper, EavMapperTokens } from '@cbidigital/aqua';
import { Provider, Scope, Inject } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';
import { IProfileRepo } from '../../../../domain/repos';

@Provider({ token: ProfileTokens.Usecase.UPDATE_PROFILE_ATTRIBUTE, scope: Scope.REQUEST })
export class UpdateProfileAttributeUseCase extends UpdateEavAttributeUseCase {
    constructor(
        @Inject(ProfileTokens.Repo.PROFILE) _repo: IProfileRepo,
        @Inject(EavMapperTokens.ATTRIBUTE) _mapper: IEavAttributeMapper,
    ) {
        super(_mapper, _repo);
    }
}
