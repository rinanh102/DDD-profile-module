import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ErrorCodes } from '..';

export class ProfileNotFoundError extends RuntimeError {
    constructor() {
        super(ErrorNamespaces.PROFILE, ErrorCodes.NOT_FOUND, 'Profile Not found');
    }
}
