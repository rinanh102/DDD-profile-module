"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeIsRequiredError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class AttributeIsRequiredError extends common_1.RuntimeError {
    constructor(attributeCode, message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.ATTRIBUTE_IS_REQUIRED, message ?? `EAV attribute ${attributeCode} is required`);
    }
}
exports.AttributeIsRequiredError = AttributeIsRequiredError;
