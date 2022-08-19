"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationshipTypeEventNames = exports.ProfileEventNames = void 0;
var ProfileEventNames;
(function (ProfileEventNames) {
    ProfileEventNames["CREATE"] = "profile_created";
    ProfileEventNames["UPDATE"] = "profile_updated";
    ProfileEventNames["DELETE"] = "profile_deleted";
})(ProfileEventNames = exports.ProfileEventNames || (exports.ProfileEventNames = {}));
var ProfileRelationshipTypeEventNames;
(function (ProfileRelationshipTypeEventNames) {
    ProfileRelationshipTypeEventNames["CREATE"] = "profile-relationship-type-created";
    ProfileRelationshipTypeEventNames["UPDATE"] = "profile-relationship-type-updated";
    ProfileRelationshipTypeEventNames["DELETE"] = "profile-relationship-type-deleted";
})(ProfileRelationshipTypeEventNames = exports.ProfileRelationshipTypeEventNames || (exports.ProfileRelationshipTypeEventNames = {}));
