"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotSupportThisTypeError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class NotSupportThisTypeError extends common_1.RuntimeError {
    constructor(message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.NOT_SUPPORT_THIS_TYPE, message ?? 'EAV attribute value not support this type');
    }
}
exports.NotSupportThisTypeError = NotSupportThisTypeError;
