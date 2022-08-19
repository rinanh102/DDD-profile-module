"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRestfulService = void 0;
const tslib_1 = require("tslib");
const module_1 = require("@cbidigital/aqua/module");
const qs_1 = tslib_1.__importDefault(require("qs"));
const aqua_1 = require("@cbidigital/aqua");
const configs_1 = require("../configs");
class ProfileRestfulService extends module_1.RestfulService {
    constructor() {
        super({
            host: configs_1.ModuleConnectorConfig.restfulConfig.host,
            secretKey: configs_1.ModuleConnectorConfig.restfulConfig.secretKey,
            moduleName: 'PROFILE',
        });
        this.pathname = configs_1.ModuleConnectorConfig.restfulConfig.pathname;
    }
    async update(payload, config) {
        const res = await this.callAPI(() => aqua_1.HttpUtil.client.patch(this.buildUrl({
            pathname: this.pathname.profile.update,
            id: payload.input.id,
        }), payload.input, this.buildConfig(config)));
        return res.data['data'];
    }
    async updateByUserId(payload, config) {
        const res = await this.callAPI(() => aqua_1.HttpUtil.client.patch(this.buildUrl({
            pathname: this.pathname.profile.updateByUserId,
            id: payload.input.userId,
        }), payload.input, this.buildConfig(config)));
        return res.data['data'];
    }
    async delete(payload, config) {
        const res = await this.callAPI(() => aqua_1.HttpUtil.client.post(this.buildUrl({
            pathname: this.pathname.profile.delete,
            id: payload.input.id,
        }), this.buildConfig(config)));
        return res.data['data'];
    }
    async get(payload, config) {
        const res = await this.callAPI(() => aqua_1.HttpUtil.client.post(this.buildUrl({
            pathname: this.pathname.profile.get,
            query: qs_1.default.stringify(payload.input),
        }), this.buildConfig(config)));
        return res.data['data'];
    }
    async getList(payload, config) {
        const res = await this.callAPI(() => aqua_1.HttpUtil.client.post(this.buildUrl({
            pathname: this.pathname.profile.getList,
            query: qs_1.default.stringify(payload.input),
        }), this.buildConfig(config)));
        return res.data['data'];
    }
    async create(payload, config) {
        const res = await this.callAPI(() => aqua_1.HttpUtil.client.post(this.buildUrl({
            pathname: this.pathname.profile.create,
        }), payload.input, this.buildConfig(config)));
        return res.data['data'];
    }
    static new() {
        return new ProfileRestfulService();
    }
}
exports.ProfileRestfulService = ProfileRestfulService;
