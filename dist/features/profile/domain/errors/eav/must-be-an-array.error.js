"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MustBeAnArrayError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class MustBeAnArrayError extends common_1.RuntimeError {
    constructor(message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.TYPE_OF_VALUE_MUST_BE_A_ARRAY, message ?? 'EAV attribute value must be a array');
    }
}
exports.MustBeAnArrayError = MustBeAnArrayError;
