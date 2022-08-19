"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginateResult = void 0;
class PaginateResult {
    constructor(pagination, data) {
        this.pagination = pagination;
        this.data = data;
    }
    static create(pagination, data) {
        return new PaginateResult(pagination, data);
    }
}
exports.PaginateResult = PaginateResult;
