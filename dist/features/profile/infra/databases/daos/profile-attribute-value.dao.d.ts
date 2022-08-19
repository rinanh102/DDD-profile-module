import { BaseDao, EavAttributeValueDTO, IBaseDao } from '@cbidigital/aqua';
import { IQueryUtil } from '@cbidigital/aqua/database/query-util';
import { ModuleDatabase } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
export declare type IProfileAttributeValueDAO = IBaseDao<EavAttributeValueDTO>;
export declare class ProfileAttributeValueDao extends BaseDao<EavAttributeValueDTO> implements IProfileAttributeValueDAO {
    constructor(db: ModuleDatabase<KnexClient>, queryUtil: IQueryUtil<EavAttributeValueDTO>);
}
