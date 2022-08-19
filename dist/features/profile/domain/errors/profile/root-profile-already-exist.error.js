"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootProfileAlreadyExistError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class RootProfileAlreadyExistError extends common_1.RuntimeError {
    constructor() {
        super(__1.ErrorNamespaces.PROFILE, __1.ErrorCodes.ALREADY_EXIST, 'Root Profile Already Exist');
    }
}
exports.RootProfileAlreadyExistError = RootProfileAlreadyExistError;
