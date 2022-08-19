"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileConnector = void 0;
const tslib_1 = require("tslib");
const module_1 = require("@cbidigital/aqua/module");
const heron_common_1 = require("@cbidigital/heron-common");
const _1 = require(".");
const configs_1 = require("../configs");
const constants_1 = require("../constants");
let ProfileConnector = class ProfileConnector extends module_1.ModuleConnector {
    constructor() {
        super({
            classRestfulService: _1.ProfileRestfulService,
            moduleName: 'PROFILE',
            type: configs_1.ModuleConnectorConfig.type,
        });
    }
};
ProfileConnector = tslib_1.__decorate([
    (0, heron_common_1.Provider)({ token: constants_1.ProfileTokens.ModuleConnector.PROFILE_MODULE_CONNECTOR, scope: heron_common_1.Scope.SINGLETON }),
    tslib_1.__metadata("design:paramtypes", [])
], ProfileConnector);
exports.ProfileConnector = ProfileConnector;
