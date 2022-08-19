import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ErrorCodes } from '..';

export class ProfileRelationshipTypeNotFoundError extends RuntimeError {
    constructor() {
        super(
            ErrorNamespaces.PROFILE_REALATIONSHIP_TYPE,
            ErrorCodes.NOT_FOUND,
            'Profile Relationship Type Not found',
        );
    }
}
