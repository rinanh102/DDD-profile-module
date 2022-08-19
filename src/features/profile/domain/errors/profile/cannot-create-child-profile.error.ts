import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ErrorCodes } from '..';

export class CannotCreateChildProfileError extends RuntimeError {
    constructor() {
        super(
            ErrorNamespaces.PROFILE,
            ErrorCodes.CANNOT_CREATE_PROFILE,
            'Cannot Create Child Profile. Missing TypeId or ParentId',
        );
    }
}
