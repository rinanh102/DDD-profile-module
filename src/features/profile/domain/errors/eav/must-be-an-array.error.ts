import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ErrorCodes } from '..';

export class MustBeAnArrayError extends RuntimeError {
    constructor(message?: string) {
        super(
            ErrorNamespaces.EAV,
            ErrorCodes.TYPE_OF_VALUE_MUST_BE_A_ARRAY,
            message ?? 'EAV attribute value must be a array',
        );
    }
}
