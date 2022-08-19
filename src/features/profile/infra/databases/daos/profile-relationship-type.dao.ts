import { BaseDao, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { Scope, DatabaseLookup, ModuleDatabase, Dao, Logger, Inject } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileTokens, TableNames } from '../../../../../constants';
import { ProfileRelationshipTypeDto } from '../../../domain/dtos';

export type IProfileRelationshipTypeDAO = IBaseDao<ProfileRelationshipTypeDto>;

@Dao({ token: ProfileTokens.Dao.PROFILE_RELATIONSHIP_TYPE, scope: Scope.SINGLETON })
export class ProfileRelationshipTypeDao
    extends BaseDao<ProfileRelationshipTypeDto>
    implements IProfileRelationshipTypeDAO
{
    constructor(
        @DatabaseLookup() db: ModuleDatabase<KnexClient>,
        @Inject(ProfileTokens.Common.PROFILE_QUERY_UTIL)
        queryUtil: IQueryUtil<ProfileRelationshipTypeDto>,
    ) {
        super({ db, queryUtil, tableName: TableNames.PROFILE_RELATIONSHIP_TYPES });
    }

    protected _transformError(err: any) {
        const logger = new Logger(this.constructor.name);
        logger.error(err);

        throw err;
    }
}
