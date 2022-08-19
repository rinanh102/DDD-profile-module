import { BaseTable } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { ProfileRelationshipTypeDto } from '../../../domain/dtos';
export declare class ProfileRelationshipTypeTable extends BaseTable<ProfileRelationshipTypeDto> implements ProfileRelationshipTypeDto {
    id: string;
    description: string;
    createdAt: Date;
    updatedAt: Nullable<Date>;
}
