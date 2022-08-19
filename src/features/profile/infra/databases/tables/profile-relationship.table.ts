// import { Table, BaseTable, TABLE_FIELD_DEFAULT_VALUE, Column, HasOne } from '@cbidigital/aqua';
// import { Nullable } from '@heronjs/common';
// import { TableNames } from '../../../../../constants';
// import {
//     EAVAttributeTypes,
//     EAVAttributeStatus,
//     ProfileRelationshipTypeEnum,
// } from '../../../domain/aggregates/profile';
// import {
//     ProfileAddressDto,
//     ProfileAttributeDto,
//     ProfileAttributeValueDto,
//     ProfileDto,
//     ProfileRelationshipTypeDto,
// } from '../../../domain/dtos';
// import { ProfileRelationshipDto } from '../../../domain/dtos';

// @Table({
//     name: TableNames.PROFILE_RELATIONSHIPS,
// })
// export class ProfileRelationshipTable
//     extends BaseTable<ProfileRelationshipDto>
//     implements ProfileRelationshipDto
// {
//     @Column({ isPrimaryKey: true })
//     public id: string = TABLE_FIELD_DEFAULT_VALUE;
//     @Column()
//     public parentId: string = TABLE_FIELD_DEFAULT_VALUE;
//     @Column()
//     public childId: string = TABLE_FIELD_DEFAULT_VALUE;
//     @Column()
//     public typeId: string = TABLE_FIELD_DEFAULT_VALUE;
//     @Column()
//     public createdAt: Date = TABLE_FIELD_DEFAULT_VALUE;

//     @HasOne(TableNames.PROFILES, 'type_id', 'id')
//     public type: ProfileRelationshipTypeDto = TABLE_FIELD_DEFAULT_VALUE;

//     @HasOne(TableNames.PROFILES, 'parent_id', 'id')
//     public parent: ProfileDto = TABLE_FIELD_DEFAULT_VALUE;

//     @HasOne(TableNames.PROFILES, 'child_id', 'id')
//     public child: ProfileDto = TABLE_FIELD_DEFAULT_VALUE;
// }
