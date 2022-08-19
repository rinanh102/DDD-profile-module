"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeValueDoesNotAllowUpdatedError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class AttributeValueDoesNotAllowUpdatedError extends common_1.RuntimeError {
    constructor(message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.ATTRIBUTE_VALUE_DOES_NOT_ALLOW_UPDATE, message ?? 'EAV attribute does not allow update');
    }
}
exports.AttributeValueDoesNotAllowUpdatedError = AttributeValueDoesNotAllowUpdatedError;
