import { Table, BaseTable, TABLE_FIELD_DEFAULT_VALUE, Column } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { TableNames } from '../../../../../constants';
import { ProfileRelationshipTypeDto } from '../../../domain/dtos';

@Table({
    name: TableNames.PROFILE_RELATIONSHIP_TYPES,
})
export class ProfileRelationshipTypeTable
    extends BaseTable<ProfileRelationshipTypeDto>
    implements ProfileRelationshipTypeDto
{
    @Column({ isPrimaryKey: true })
    public id: string = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public description: string = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public createdAt: Date = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public updatedAt: Nullable<Date> = TABLE_FIELD_DEFAULT_VALUE;
}
