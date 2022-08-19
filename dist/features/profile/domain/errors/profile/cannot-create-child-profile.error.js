"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CannotCreateChildProfileError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class CannotCreateChildProfileError extends common_1.RuntimeError {
    constructor() {
        super(__1.ErrorNamespaces.PROFILE, __1.ErrorCodes.CANNOT_CREATE_PROFILE, 'Cannot Create Child Profile. Missing TypeId or ParentId');
    }
}
exports.CannotCreateChildProfileError = CannotCreateChildProfileError;
