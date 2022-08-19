import { BaseDao, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { ModuleDatabase } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileDto } from '../../../domain/dtos';
export declare type IProfileDAO = IBaseDao<ProfileDto>;
export declare class ProfileDao extends BaseDao<ProfileDto> implements IProfileDAO {
    constructor(db: ModuleDatabase<KnexClient>, queryUtil: IQueryUtil<ProfileDto>);
    protected _transformError(err: any): any;
}
