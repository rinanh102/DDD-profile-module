import { BaseDao, EavAttributeDTO, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { ModuleDatabase } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
export declare type IProfileAttributeDAO = IBaseDao<EavAttributeDTO>;
export declare class ProfileAttributeDao extends BaseDao<EavAttributeDTO> implements IProfileAttributeDAO {
    constructor(db: ModuleDatabase<KnexClient>, queryUtil: IQueryUtil<EavAttributeDTO>);
}
