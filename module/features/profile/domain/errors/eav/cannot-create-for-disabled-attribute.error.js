"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CannotCreateForDisabledAttributeError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class CannotCreateForDisabledAttributeError extends common_1.RuntimeError {
    constructor(message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.CANNOT_CREATE_FOR_DISABLED_ATTRIBUTE, message ?? 'EAV attribute value cannot create for disabled attribute');
    }
}
exports.CannotCreateForDisabledAttributeError = CannotCreateForDisabledAttributeError;
