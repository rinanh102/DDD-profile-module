"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingUpdateInputField = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class MissingUpdateInputField extends common_1.RuntimeError {
    constructor() {
        super(__1.ErrorNamespaces.PROFILE, __1.ErrorCodes.MISSING_UPDATE_INPUT_FIELD, 'Input must contain either id (profileId) or userId');
    }
}
exports.MissingUpdateInputField = MissingUpdateInputField;
