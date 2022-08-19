import { Nullable } from '@heronjs/common';

export type ProfileRelationshipTypeDto = {
    id: string;
    description: string;
    createdAt: Date;
    updatedAt: Nullable<Date>;
};
