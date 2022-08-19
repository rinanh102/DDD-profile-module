"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeNotFoundError = void 0;
const common_1 = require("@heronjs/common");
const __1 = require("..");
class ProfileRelationshipTypeNotFoundError extends common_1.RuntimeError {
    constructor() {
        super(__1.ErrorNamespaces.PROFILE_REALATIONSHIP_TYPE, __1.ErrorCodes.NOT_FOUND, 'Profile Relationship Type Not found');
    }
}
exports.ProfileRelationshipTypeNotFoundError = ProfileRelationshipTypeNotFoundError;
