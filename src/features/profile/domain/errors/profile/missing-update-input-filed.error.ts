import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ErrorCodes } from '..';

export class MissingUpdateInputField extends RuntimeError {
    constructor() {
        super(
            ErrorNamespaces.PROFILE,
            ErrorCodes.MISSING_UPDATE_INPUT_FIELD,
            'Input must contain either id (profileId) or userId',
        );
    }
}
