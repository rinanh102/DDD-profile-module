"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHttpClient = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const qs_1 = tslib_1.__importDefault(require("qs"));
class AxiosHttpClient {
    constructor(baseApiUrl, options) {
        this.baseApiUrl = baseApiUrl;
        const config = options && options.config ? options.config : {};
        this._instance = axios_1.default.create({
            paramsSerializer: (params) => qs_1.default.stringify(params),
            ...config,
            baseURL: baseApiUrl,
        });
    }
    delete(url, config) {
        return this._instance.delete(url, config);
    }
    get(url, param, config) {
        return this._instance.get(url, {
            ...config,
            params: param,
        });
    }
    getInstance() {
        return this._instance;
    }
    patch(url, data, config) {
        return this._instance.patch(url, data, config);
    }
    post(url, data, config) {
        return this._instance.post(url, data, config);
    }
    put(url, data, config) {
        return this._instance.put(url, data, config);
    }
}
exports.AxiosHttpClient = AxiosHttpClient;
