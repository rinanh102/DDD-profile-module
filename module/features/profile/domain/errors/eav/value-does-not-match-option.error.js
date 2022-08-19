"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueDoesNotMatchOptionError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class ValueDoesNotMatchOptionError extends common_1.RuntimeError {
    constructor(message) {
        super(__1.ErrorNamespaces.EAV, __1.ErrorCodes.VALUE_DOES_NOT_MATCH_OPTION, message ?? 'EAV does not match option');
    }
}
exports.ValueDoesNotMatchOptionError = ValueDoesNotMatchOptionError;
