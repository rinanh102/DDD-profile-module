"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileErrorCodes = exports.ErrorCodes = exports.ErrorNamespaces = void 0;
var ErrorNamespaces;
(function (ErrorNamespaces) {
    ErrorNamespaces["PROFILE"] = "PROFILE";
    ErrorNamespaces["PROFILE_REALATIONSHIP_TYPE"] = "PROFILE_RELATIONSHIP_TYPE";
    ErrorNamespaces["EAV"] = "EAV";
})(ErrorNamespaces = exports.ErrorNamespaces || (exports.ErrorNamespaces = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["NOT_FOUND"] = 10000] = "NOT_FOUND";
    ErrorCodes[ErrorCodes["NO_CONNECTION"] = 10001] = "NO_CONNECTION";
    ErrorCodes[ErrorCodes["ALREADY_EXIST"] = 10002] = "ALREADY_EXIST";
    ErrorCodes[ErrorCodes["CANNOT_CREATE_PROFILE"] = 10003] = "CANNOT_CREATE_PROFILE";
    ErrorCodes[ErrorCodes["MISSING_UPDATE_INPUT_FIELD"] = 10004] = "MISSING_UPDATE_INPUT_FIELD";
    ErrorCodes[ErrorCodes["DUPLICATE"] = 11000] = "DUPLICATE";
    ErrorCodes[ErrorCodes["INPUT_EMPTY"] = 11001] = "INPUT_EMPTY";
    ErrorCodes[ErrorCodes["CANNOT_CREATE_FOR_DISABLED_ATTRIBUTE"] = 12000] = "CANNOT_CREATE_FOR_DISABLED_ATTRIBUTE";
    ErrorCodes[ErrorCodes["TYPE_OF_VALUE_MUST_BE_A_NUMBER"] = 12001] = "TYPE_OF_VALUE_MUST_BE_A_NUMBER";
    ErrorCodes[ErrorCodes["TYPE_OF_VALUE_MUST_BE_A_STRING"] = 12002] = "TYPE_OF_VALUE_MUST_BE_A_STRING";
    ErrorCodes[ErrorCodes["TYPE_OF_VALUE_MUST_BE_A_BOOLEAN"] = 12003] = "TYPE_OF_VALUE_MUST_BE_A_BOOLEAN";
    ErrorCodes[ErrorCodes["TYPE_OF_VALUE_MUST_BE_A_DATETIME"] = 12004] = "TYPE_OF_VALUE_MUST_BE_A_DATETIME";
    ErrorCodes[ErrorCodes["TYPE_OF_VALUE_MUST_BE_A_ARRAY"] = 12005] = "TYPE_OF_VALUE_MUST_BE_A_ARRAY";
    ErrorCodes[ErrorCodes["NOT_SUPPORT_THIS_TYPE"] = 12005] = "NOT_SUPPORT_THIS_TYPE";
    ErrorCodes[ErrorCodes["ENTITY_NOT_FOUND"] = 12006] = "ENTITY_NOT_FOUND";
    ErrorCodes[ErrorCodes["ATTRIBUTE_NOT_FOUND"] = 12007] = "ATTRIBUTE_NOT_FOUND";
    ErrorCodes[ErrorCodes["ATTRIBUTE_VALUE_NOT_FOUND"] = 12008] = "ATTRIBUTE_VALUE_NOT_FOUND";
    ErrorCodes[ErrorCodes["ATTRIBUTE_VALUE_DOES_NOT_ALLOW_UPDATE"] = 12009] = "ATTRIBUTE_VALUE_DOES_NOT_ALLOW_UPDATE";
    ErrorCodes[ErrorCodes["SYSTEM_DEFINED_ATTRIBUTE_CANNOT_BE_DELETED"] = 12010] = "SYSTEM_DEFINED_ATTRIBUTE_CANNOT_BE_DELETED";
    ErrorCodes[ErrorCodes["SYSTEM_DEFINED_ATTRIBUTE_VALUE_CANNOT_BE_DELETED"] = 12011] = "SYSTEM_DEFINED_ATTRIBUTE_VALUE_CANNOT_BE_DELETED";
    ErrorCodes[ErrorCodes["ATTRIBUTE_IS_REQUIRED"] = 12012] = "ATTRIBUTE_IS_REQUIRED";
    ErrorCodes[ErrorCodes["CODE_ALREADY_EXIST"] = 12013] = "CODE_ALREADY_EXIST";
    ErrorCodes[ErrorCodes["VALUE_DOES_NOT_MATCH_OPTION"] = 12014] = "VALUE_DOES_NOT_MATCH_OPTION";
    ErrorCodes[ErrorCodes["VALIDATION_ERROR"] = 13000] = "VALIDATION_ERROR";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var ProfileErrorCodes;
(function (ProfileErrorCodes) {
    ProfileErrorCodes[ProfileErrorCodes["NOT_FOUND"] = 10000] = "NOT_FOUND";
    ProfileErrorCodes[ProfileErrorCodes["ALREADY_EXIST"] = 10002] = "ALREADY_EXIST";
    ProfileErrorCodes[ProfileErrorCodes["CANNOT_CREATE_PROFILE"] = 10003] = "CANNOT_CREATE_PROFILE";
    ProfileErrorCodes[ProfileErrorCodes["MISSING_UPDATE_INPUT_FIELD"] = 10004] = "MISSING_UPDATE_INPUT_FIELD";
    ProfileErrorCodes[ProfileErrorCodes["CODE_ALREADY_EXISTS"] = 10005] = "CODE_ALREADY_EXISTS";
})(ProfileErrorCodes = exports.ProfileErrorCodes || (exports.ProfileErrorCodes = {}));
