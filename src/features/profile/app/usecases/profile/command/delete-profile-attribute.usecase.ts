import { DeleteEavAttributeUseCase, EavMapperTokens, IEavAttributeMapper } from '@cbidigital/aqua';
import { Provider, Scope, Inject } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';
import { IProfileRepo } from '../../../../domain/repos';

@Provider({ token: ProfileTokens.Usecase.DELETE_PROFILE_ATTRIBUTE, scope: Scope.REQUEST })
export class DeleteProfileAttributeUseCase extends DeleteEavAttributeUseCase {
    constructor(
        @Inject(ProfileTokens.Repo.PROFILE) _repo: IProfileRepo,
        @Inject(EavMapperTokens.ATTRIBUTE) _mapper: IEavAttributeMapper,
    ) {
        super(_mapper, _repo);
    }
}
