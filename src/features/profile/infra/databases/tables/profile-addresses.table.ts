import { Table, BaseTable, TABLE_FIELD_DEFAULT_VALUE, Column } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { TableNames } from '../../../../../constants';
import { ProfileAddressDto } from '../../../domain/dtos';

@Table({
    name: TableNames.PROFILE_ADDRESSES,
})
export class ProfileAddressesTable extends BaseTable<ProfileAddressDto> implements ProfileAddressDto {
    @Column({ isPrimaryKey: true })
    public id: string = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public profileId: string = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public country: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public region: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public province: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public district: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public ward: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public address: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public postalCode: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public latitude: Nullable<number> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public longitude: Nullable<number> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public createdAt: Date = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public updatedAt: Nullable<Date> = TABLE_FIELD_DEFAULT_VALUE;
}
