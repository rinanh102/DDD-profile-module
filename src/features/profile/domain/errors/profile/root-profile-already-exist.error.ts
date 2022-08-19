import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ErrorCodes } from '..';

export class RootProfileAlreadyExistError extends RuntimeError {
    constructor() {
        super(ErrorNamespaces.PROFILE, ErrorCodes.ALREADY_EXIST, 'Root Profile Already Exist');
    }
}
