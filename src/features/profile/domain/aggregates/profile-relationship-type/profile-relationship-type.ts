import { ValidatorUtil, EntityIdUtil, AggregateRoot } from '@cbidigital/aqua';
import { Nullable } from '@heronjs/common';
import { ProfileEventNames, ProfileRelationshipTypeEventNames } from '../profile/enums';
import {
    CreateProfileRelationshipTypeInput,
    CreateProfileRelationshipTypeInputModel,
    CreateProfileRelationshipTypeOutput,
    DeleteProfileRelationshipTypeInput,
    DeleteProfileRelationshipTypeOutput,
    UpdateProfileRelationshipTypeInput,
    UpdateProfileRelationshipTypeInputModel,
    UpdateProfileRelationshipTypeOutput,
} from './types';

export type ProfileRelationshipTypeProps = {
    description: string;
    createdAt: Date;
    updatedAt: Nullable<Date>;
};

export class ProfileRelationshipType extends AggregateRoot<ProfileRelationshipTypeProps> {
    constructor(id?: string, props?: ProfileRelationshipTypeProps) {
        super(id, props);
    }

    /** Props **/

    get description(): string {
        return this._props.description;
    }

    get createdAt(): Date {
        return this._props.createdAt;
    }

    get updatedAt(): Nullable<Date> {
        return this._props.updatedAt;
    }

    /** Methods **/

    private setDescription(payload?: string) {
        if (payload !== undefined) this._props.description = payload;
    }

    private setCreatedAt(payload?: Date) {
        if (payload !== undefined) this._props.createdAt = payload;
    }

    private setUpdatedAt(payload?: Date) {
        if (payload !== undefined) this._props.updatedAt = payload;
    }

    async create(payload: CreateProfileRelationshipTypeInput): Promise<CreateProfileRelationshipTypeOutput> {
        // validate input
        const model = await ValidatorUtil.validatePlain(CreateProfileRelationshipTypeInputModel, payload);

        // handle logic
        this.setId(EntityIdUtil.randomUUID());
        this.setDescription(model.description);
        this.setCreatedAt(new Date());

        this.addDomainEvent({
            aggregateId: this.id,
            type: ProfileRelationshipTypeEventNames.CREATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }

    async update(payload: UpdateProfileRelationshipTypeInput): Promise<UpdateProfileRelationshipTypeOutput> {
        // validate
        const model = await ValidatorUtil.validatePlain(UpdateProfileRelationshipTypeInputModel, payload);

        // handle logic
        this.setDescription(model.description);
        this.setUpdatedAt(new Date());

        this.addDomainEvent({
            aggregateId: this.id,
            type: ProfileRelationshipTypeEventNames.UPDATE,
            meta: this.props,
            createdAt: new Date(),
        });
    }

    public async delete(
        payload: DeleteProfileRelationshipTypeInput,
    ): Promise<DeleteProfileRelationshipTypeOutput> {
        this.addDomainEvent({
            aggregateId: this.id,
            type: ProfileEventNames.DELETE,
            meta: this.props,
            createdAt: new Date(),
        });
    }
}
