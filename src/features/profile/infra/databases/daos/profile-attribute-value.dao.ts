import { BaseDao, EavAttributeValueDTO, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { Scope, DatabaseLookup, ModuleDatabase, Dao, Inject } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileTokens, TableNames } from '../../../../../constants';

export type IProfileAttributeValueDAO = IBaseDao<EavAttributeValueDTO>;

@Dao({ token: ProfileTokens.Dao.PROFILE_ATTRIBUTE_VALUE, scope: Scope.SINGLETON })
export class ProfileAttributeValueDao
    extends BaseDao<EavAttributeValueDTO>
    implements IProfileAttributeValueDAO
{
    constructor(
        @DatabaseLookup() db: ModuleDatabase<KnexClient>,
        @Inject(ProfileTokens.Common.PROFILE_QUERY_UTIL) queryUtil: IQueryUtil<EavAttributeValueDTO>,
    ) {
        super({ db, queryUtil, tableName: TableNames.PROFILE_ATTRIBUTE_VALUES });
    }
}
