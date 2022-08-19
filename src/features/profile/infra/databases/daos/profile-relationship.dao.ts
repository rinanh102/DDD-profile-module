// import { BaseDao, IBaseDao } from '@cbidigital/aqua';
// import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
// import { Scope, DatabaseLookup, ModuleDatabase, Dao, Logger, Inject } from '@heronjs/common';
// import { KnexClient } from '@heronjs/core';
// import { DAOTokens, QueryTokens, TableNames } from '../../../../../constants';
// import { ProfileDto } from '../../../domain/dtos';
// import { ProfileRelationshipDto } from '../../../domain/dtos';

// export type IProfileRelationshipDAO = IBaseDao<ProfileRelationshipDto>;

// @Dao({ token: DAOTokens.PROFILE_RELATIONSHIP, scope: Scope.SINGLETON })
// export class ProfileRelationshipDao
//     extends BaseDao<ProfileRelationshipDto>
//     implements IProfileRelationshipDAO
// {
//     constructor(
//         @DatabaseLookup() db: ModuleDatabase<KnexClient>,
//         @Inject(QueryTokens.PROFILE_QUERY_UTIL) queryUtil: IQueryUtil<ProfileRelationshipDto>,
//     ) {
//         super({ db, queryUtil, tableName: TableNames.PROFILE_RELATIONSHIPS });
//     }

//     protected _transformError(err: any) {
//         const logger = new Logger(this.constructor.name);
//         logger.error(err);

//         throw err;
//     }
// }
