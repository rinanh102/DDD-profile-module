"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeCannotBeDeletedError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class AttributeCannotBeDeletedError extends common_1.RuntimeError {
    constructor(message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.SYSTEM_DEFINED_ATTRIBUTE_CANNOT_BE_DELETED, message ?? 'EAV system defined attribute cannot be deleted');
    }
}
exports.AttributeCannotBeDeletedError = AttributeCannotBeDeletedError;
