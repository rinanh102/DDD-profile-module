"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MustBeADatetimeError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class MustBeADatetimeError extends common_1.RuntimeError {
    constructor(message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.TYPE_OF_VALUE_MUST_BE_A_DATETIME, message ?? 'EAV attribute value must be a datetime');
    }
}
exports.MustBeADatetimeError = MustBeADatetimeError;
