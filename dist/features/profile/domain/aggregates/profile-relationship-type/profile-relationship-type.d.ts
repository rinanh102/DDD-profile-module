import { AggregateRoot } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { CreateProfileRelationshipTypeInput, CreateProfileRelationshipTypeOutput, DeleteProfileRelationshipTypeInput, DeleteProfileRelationshipTypeOutput, UpdateProfileRelationshipTypeInput, UpdateProfileRelationshipTypeOutput } from './types';
export declare type ProfileRelationshipTypeProps = {
    description: string;
    createdAt: Date;
    updatedAt: Nullable<Date>;
};
export declare class ProfileRelationshipType extends AggregateRoot<ProfileRelationshipTypeProps> {
    constructor(id?: string, props?: ProfileRelationshipTypeProps);
    get description(): string;
    get createdAt(): Date;
    get updatedAt(): Nullable<Date>;
    private setDescription;
    private setCreatedAt;
    private setUpdatedAt;
    create(payload: CreateProfileRelationshipTypeInput): Promise<CreateProfileRelationshipTypeOutput>;
    update(payload: UpdateProfileRelationshipTypeInput): Promise<UpdateProfileRelationshipTypeOutput>;
    delete(payload: DeleteProfileRelationshipTypeInput): Promise<DeleteProfileRelationshipTypeOutput>;
}
