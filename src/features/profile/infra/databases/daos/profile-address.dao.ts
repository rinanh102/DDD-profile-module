import { BaseDao, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { Scope, DatabaseLookup, ModuleDatabase, Dao, Logger, Inject } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileTokens, TableNames } from '../../../../../constants';
import { ProfileAddressDto } from '../../../domain/dtos';

export type IProfileAddressDAO = IBaseDao<ProfileAddressDto>;

@Dao({ token: ProfileTokens.Dao.PROFILE_ADDRESS, scope: Scope.SINGLETON })
export class ProfileAddressDao extends BaseDao<ProfileAddressDto> implements IProfileAddressDAO {
    constructor(
        @DatabaseLookup() db: ModuleDatabase<KnexClient>,
        @Inject(ProfileTokens.Common.PROFILE_QUERY_UTIL) queryUtil: IQueryUtil<ProfileAddressDto>,
    ) {
        super({ db, queryUtil, tableName: TableNames.PROFILE_ADDRESSES });
    }

    protected _transformError(err: any) {
        const logger = new Logger(this.constructor.name);
        logger.error(err);

        throw err;
    }
}
