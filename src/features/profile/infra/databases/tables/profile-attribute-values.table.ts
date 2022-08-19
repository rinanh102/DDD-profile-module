import {
    Table,
    EavAttributeValueTable,
    EavAttributeDTO,
    TABLE_FIELD_DEFAULT_VALUE,
    HasOne,
} from '@cbidigital/aqua';
import { TableNames } from '../../../../../constants';

@Table({
    name: TableNames.PROFILE_ATTRIBUTE_VALUES,
})
export class ProfileAttributeValueTable extends EavAttributeValueTable {
    @HasOne(TableNames.PROFILE_ATTRIBUTES, 'attribute_code', 'code')
    attribute: EavAttributeDTO = TABLE_FIELD_DEFAULT_VALUE;
}
