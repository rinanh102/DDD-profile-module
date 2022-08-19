import { BaseDao, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { ModuleDatabase } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileRelationshipTypeDto } from '../../../domain/dtos';
export declare type IProfileRelationshipTypeDAO = IBaseDao<ProfileRelationshipTypeDto>;
export declare class ProfileRelationshipTypeDao extends BaseDao<ProfileRelationshipTypeDto> implements IProfileRelationshipTypeDAO {
    constructor(db: ModuleDatabase<KnexClient>, queryUtil: IQueryUtil<ProfileRelationshipTypeDto>);
    protected _transformError(err: any): void;
}
