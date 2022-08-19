import { RuntimeError } from '@heronjs/common';
import { ErrorNamespaces, ErrorCodes } from '..';

export class CannotCreateForDisabledAttributeError extends RuntimeError {
    constructor(message?: string) {
        super(
            ErrorNamespaces.EAV,
            ErrorCodes.CANNOT_CREATE_FOR_DISABLED_ATTRIBUTE,
            message ?? 'EAV attribute value cannot create for disabled attribute',
        );
    }
}
