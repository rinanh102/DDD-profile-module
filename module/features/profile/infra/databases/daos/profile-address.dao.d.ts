import { BaseDao, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { ModuleDatabase } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileAddressDto } from '../../../domain/dtos';
export declare type IProfileAddressDAO = IBaseDao<ProfileAddressDto>;
export declare class ProfileAddressDao extends BaseDao<ProfileAddressDto> implements IProfileAddressDAO {
    constructor(db: ModuleDatabase<KnexClient>, queryUtil: IQueryUtil<ProfileAddressDto>);
    protected _transformError(err: any): void;
}
