import { BaseDao, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { Scope, DatabaseLookup, ModuleDatabase, Dao, Logger, Inject } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileTokens, TableNames } from '../../../../../constants';
import { ProfileDto } from '../../../domain/dtos';
import { ProfileCodeAlreadyExistsError } from '../../../domain/errors';
import { ProfileConstraints } from '../consts';

export type IProfileDAO = IBaseDao<ProfileDto>;

@Dao({ token: ProfileTokens.Dao.PROFILE, scope: Scope.SINGLETON })
export class ProfileDao extends BaseDao<ProfileDto> implements IProfileDAO {
    constructor(
        @DatabaseLookup() db: ModuleDatabase<KnexClient>,
        @Inject(ProfileTokens.Common.PROFILE_QUERY_UTIL) queryUtil: IQueryUtil<ProfileDto>,
    ) {
        super({ db, queryUtil, tableName: TableNames.PROFILES });
    }

    protected _transformError(err: any) {
        const logger = new Logger(this.constructor.name);
        logger.error(err);

        switch (err.constraint) {
            case ProfileConstraints.CODE_UNIQUE:
                return new ProfileCodeAlreadyExistsError();
        }

        return err;
    }
}
