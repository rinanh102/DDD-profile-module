"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const tslib_1 = require("tslib");
const axios_http_client_1 = require("./axios-http-client");
tslib_1.__exportStar(require("./axios-http-client"), exports);
tslib_1.__exportStar(require("./http-client.interface"), exports);
const HttpClient = axios_http_client_1.AxiosHttpClient;
exports.HttpClient = HttpClient;
