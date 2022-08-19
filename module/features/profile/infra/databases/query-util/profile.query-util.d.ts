import { BaseQueryUtil } from '@cbidigital/aqua/database/query-util';
import { ModuleDatabase } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
export declare class ProfileQueryUtil extends BaseQueryUtil {
    constructor(db: ModuleDatabase<KnexClient>);
}
