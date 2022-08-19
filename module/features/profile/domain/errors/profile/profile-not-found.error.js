"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileNotFoundError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class ProfileNotFoundError extends common_1.RuntimeError {
    constructor() {
        super(__1.ErrorNamespaces.PROFILE, __1.ErrorCodes.NOT_FOUND, 'Profile Not found');
    }
}
exports.ProfileNotFoundError = ProfileNotFoundError;
