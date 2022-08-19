import { BaseDao, EavAttributeDTO, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { Scope, DatabaseLookup, ModuleDatabase, Dao, Inject } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileTokens, TableNames } from '../../../../../constants';

export type IProfileAttributeDAO = IBaseDao<EavAttributeDTO>;

@Dao({ token: ProfileTokens.Dao.PROFILE_ATTRIBUTE, scope: Scope.SINGLETON })
export class ProfileAttributeDao extends BaseDao<EavAttributeDTO> implements IProfileAttributeDAO {
    constructor(
        @DatabaseLookup() db: ModuleDatabase<KnexClient>,
        @Inject(ProfileTokens.Common.PROFILE_QUERY_UTIL) queryUtil: IQueryUtil<EavAttributeDTO>,
    ) {
        super({ db, queryUtil, tableName: TableNames.PROFILE_ATTRIBUTES });
    }
}
