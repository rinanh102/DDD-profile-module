import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// TYPE: create
export type CreateProfileRelationshipTypeInput = {
    description: string;
};

export class CreateProfileRelationshipTypeInputModel implements CreateProfileRelationshipTypeInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    public readonly description!: string;
}

export type CreateProfileRelationshipTypeOutput = void;

// TYPE: update
export type UpdateProfileRelationshipTypeInput = {
    description?: string;
};

export class UpdateProfileRelationshipTypeInputModel implements UpdateProfileRelationshipTypeInput {
    @Expose()
    @IsOptional()
    @IsString()
    public readonly description?: string;
}

export type UpdateProfileRelationshipTypeOutput = void;

// TYPE: delete
export type DeleteProfileRelationshipTypeInput = void;
export type DeleteProfileRelationshipTypeOutput = void;
