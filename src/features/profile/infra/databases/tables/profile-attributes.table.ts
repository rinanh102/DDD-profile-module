import { Table, EavAttributeTable } from '@cbidigital/aqua';
import { TableNames } from '../../../../../constants';

@Table({
    name: TableNames.PROFILE_ATTRIBUTES,
})
export class ProfileAttributeTable extends EavAttributeTable {}
