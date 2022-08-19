"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeSort = exports.whereEavFilter = exports.whereFilter = exports.TypeOperator = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const snake_case_1 = require("snake-case");
var TypeOperator;
(function (TypeOperator) {
    TypeOperator["EQ"] = "eq";
    TypeOperator["IN"] = "in";
    TypeOperator["NOT_IN"] = "notIn";
    TypeOperator["LT"] = "lt";
    TypeOperator["LTE"] = "lte";
    TypeOperator["GT"] = "gt";
    TypeOperator["GTE"] = "gte";
    TypeOperator["CONTAINS"] = "contains";
    TypeOperator["START_WITH"] = "startWith";
    TypeOperator["END_WITH"] = "endWith";
    TypeOperator["NOT"] = "not";
    TypeOperator["NESTED_NOT"] = "nestedNot";
    TypeOperator["REGEX"] = "regex";
})(TypeOperator = exports.TypeOperator || (exports.TypeOperator = {}));
const normalWhere = (query, operator, field_to_table, value) => {
    switch (operator) {
        case TypeOperator.EQ:
            query.where(field_to_table, value);
            break;
        case TypeOperator.IN:
            query.whereIn(field_to_table, value);
            break;
        case TypeOperator.NOT_IN:
            query.whereNotIn(field_to_table, value);
            break;
        case TypeOperator.LT:
            query.where(field_to_table, '<', value);
            break;
        case TypeOperator.LTE:
            query.where(field_to_table, '<=', value);
            break;
        case TypeOperator.GT:
            query.where(field_to_table, '>', value);
            break;
        case TypeOperator.GTE:
            query.where(field_to_table, '>=', value);
            break;
        case TypeOperator.CONTAINS:
            query.where(field_to_table, 'like', `%${value}%`);
            break;
        case TypeOperator.START_WITH:
            query.where(field_to_table, 'like', `${value}%`);
            break;
        case TypeOperator.END_WITH:
            query.where(field_to_table, 'like', `%${value}`);
            break;
        case TypeOperator.NOT:
            query.whereNot(field_to_table, value);
            break;
        case TypeOperator.REGEX:
            query.where(field_to_table, '~', value);
            break;
        default:
            break;
    }
    return query;
};
const whereFilter = (client, where, entityTableName, query) => {
    const field = Object.keys(where)[0];
    const operator = Object.keys(where[field])[0];
    const value = Object.values(where[field])[0];
    const field_to_table = (0, snake_case_1.snakeCase)(field);
    if (!query) {
        query = client.from({ e: entityTableName });
    }
    return normalWhere(query, operator, field_to_table, value);
};
exports.whereFilter = whereFilter;
const whereEavFilter = async (client, eavFilter, entityTableName, attributeTableName, valueTableName, query) => {
    const fields = Object.keys(eavFilter);
    let sql;
    if (!query) {
        sql = client.from({ e: entityTableName });
    }
    else {
        sql = query;
    }
    const first = sql
        .clone()
        .innerJoin({ v: valueTableName }, 'e.id', 'v.entity_id')
        .innerJoin({ a: attributeTableName }, 'v.attribute_id', 'a.id');
    const newArr = [];
    fields.forEach((field) => {
        const operator = Object.keys(eavFilter[field])[0];
        const value = Object.values(eavFilter[field])[0];
        const field_to_table = (0, snake_case_1.snakeCase)(field);
        const tempOne = first
            .clone()
            .clearSelect()
            .select('e.user_id')
            .groupBy('e.user_id')
            .andWhere('a.code', field_to_table);
        const tempTwo = normalWhere(tempOne, operator, 'v.value', value);
        newArr.push(tempTwo);
    });
    const results = await Promise.all(newArr);
    const strArr = [];
    results.forEach((result) => {
        strArr.push(...result);
    });
    const total = results.length;
    const check = lodash_1.default.countBy(strArr, 'user_id');
    const userIds = getKeyByValue(check, total);
    if (userIds.length === 0)
        return [];
    return sql.whereIn('e.user_id', userIds);
};
exports.whereEavFilter = whereEavFilter;
const changeSort = (query, sort) => {
    const field = Object.keys(sort)[0];
    const type = sort[field];
    const field_to_table = (0, snake_case_1.snakeCase)(field);
    return query.orderBy(field_to_table, type);
};
exports.changeSort = changeSort;
const getKeyByValue = (obj, value) => {
    return Object.keys(obj).filter((key) => obj[key] === value);
};
