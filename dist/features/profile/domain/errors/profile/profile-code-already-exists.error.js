"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCodeAlreadyExistsError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class ProfileCodeAlreadyExistsError extends common_1.RuntimeError {
    constructor() {
        super(__1.ErrorNamespaces.PROFILE, __1.ProfileErrorCodes.CODE_ALREADY_EXISTS, 'Profile code already exists');
    }
}
exports.ProfileCodeAlreadyExistsError = ProfileCodeAlreadyExistsError;
