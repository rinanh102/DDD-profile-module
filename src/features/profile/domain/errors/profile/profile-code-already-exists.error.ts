import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ProfileErrorCodes } from '..';

export class ProfileCodeAlreadyExistsError extends RuntimeError {
    constructor() {
        super(ErrorNamespaces.PROFILE, ProfileErrorCodes.CODE_ALREADY_EXISTS, 'Profile code already exists');
    }
}
