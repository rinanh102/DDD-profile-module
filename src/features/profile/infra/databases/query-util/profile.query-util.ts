import { BaseTable } from '@cbidigital/aqua';
import { BaseQueryUtil } from '@cbidigital/aqua/database/query-util';
import { DatabaseLookup, ModuleDatabase, Provider, Scope } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { ProfileTokens, TableNames } from '../../../../../constants';
import {
    ProfileAddressesTable,
    ProfileAttributeTable,
    ProfileAttributeValueTable,
    ProfileRelationshipTypeTable,
    ProfileTable,
} from '../tables';

@Provider({
    token: ProfileTokens.Common.PROFILE_QUERY_UTIL,
    scope: Scope.SINGLETON,
})
export class ProfileQueryUtil extends BaseQueryUtil {
    constructor(@DatabaseLookup() db: ModuleDatabase<KnexClient>) {
        // Define all tables
        const tables = new Map<string, BaseTable>([
            [TableNames.PROFILES, new ProfileTable()],
            [TableNames.PROFILE_ADDRESSES, new ProfileAddressesTable()],
            [TableNames.PROFILE_ATTRIBUTES, new ProfileAttributeTable()],
            [TableNames.PROFILE_ATTRIBUTE_VALUES, new ProfileAttributeValueTable()],
            // [TableNames.PROFILE_RELATIONSHIPS, new ProfileRelationshipTable()],
            [TableNames.PROFILE_RELATIONSHIP_TYPES, new ProfileRelationshipTypeTable()],
        ]);

        super({ db, tables });
    }
}
