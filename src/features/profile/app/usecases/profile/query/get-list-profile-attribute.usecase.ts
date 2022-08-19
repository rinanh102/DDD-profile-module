import { EavAttributeDTO, GetListEavAttributeUseCase, IBaseDao } from '@cbidigital/aqua';
import { Inject, Provider, Scope } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';

@Provider({ token: ProfileTokens.Usecase.GET_LIST_PROFILE_ATTRIBUTE, scope: Scope.REQUEST })
export class GetListProfileAttributeUseCase extends GetListEavAttributeUseCase {
    constructor(@Inject(ProfileTokens.Dao.PROFILE_ATTRIBUTE) _dao: IBaseDao<EavAttributeDTO>) {
        super(_dao);
    }
}
