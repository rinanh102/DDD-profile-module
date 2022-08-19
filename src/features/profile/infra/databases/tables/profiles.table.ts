import {
    Table,
    BaseTable,
    Column,
    HasOne,
    HasMany,
    TABLE_FIELD_DEFAULT_VALUE,
    EavAttributeValueDTO,
} from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { TableNames } from '../../../../../constants';
import { GenderEnum, ProfileStatusEnum } from '../../../domain/aggregates/profile';
import { ProfileAddressDto, ProfileDto, ProfileRelationshipTypeDto } from '../../../domain/dtos';

@Table({
    name: TableNames.PROFILES,
    eav: { tableLink: TableNames.PROFILE_ATTRIBUTE_VALUES },
})
export class ProfileTable extends BaseTable<ProfileDto> implements ProfileDto {
    @Column({ isPrimaryKey: true })
    public id: string = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public userId: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public firstName: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public lastName: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public email: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public gender: Nullable<GenderEnum> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public dob: Nullable<Date> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public phone: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public identityNum: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public avatar: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public profession: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public status: ProfileStatusEnum = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public createdAt: Date = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public updatedAt: Nullable<Date> = TABLE_FIELD_DEFAULT_VALUE;
    @Column()
    public deletedAt: Nullable<Date> = TABLE_FIELD_DEFAULT_VALUE;

    @HasMany(TableNames.PROFILE_ATTRIBUTE_VALUES, 'id', 'entity_id')
    public attributeValues: EavAttributeValueDTO[] = TABLE_FIELD_DEFAULT_VALUE;

    @HasOne(TableNames.PROFILE_ADDRESSES, 'id', 'profile_id')
    public addressInfo: ProfileAddressDto = TABLE_FIELD_DEFAULT_VALUE;

    @Column()
    public typeId: string = TABLE_FIELD_DEFAULT_VALUE;

    @HasOne(TableNames.PROFILE_RELATIONSHIP_TYPES, 'type_id', 'id')
    public type: ProfileRelationshipTypeDto = TABLE_FIELD_DEFAULT_VALUE;

    @Column()
    public parentId: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;

    @HasMany(TableNames.PROFILES, 'id', 'parent_id')
    public children: ProfileDto[] = TABLE_FIELD_DEFAULT_VALUE;

    @Column()
    public targetId: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;

    @Column()
    public code: Nullable<string> = TABLE_FIELD_DEFAULT_VALUE;
}
