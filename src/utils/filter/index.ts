import { Nullable, Optional } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { Knex } from 'knex';
import _ from 'lodash';
import { snakeCase } from 'snake-case';

export type FilterDto = {
    offset?: string;
    limit?: string;
    where?: any;
    whereEav?: EavFilter;
    sort?: Optional<Sort>;
};

export type Filter = {
    offset: number;
    limit: number;
    where?: any;
    whereEav?: EavFilter;
    sort?: Optional<Sort>;
};

export type EavFilter = {
    [code: string]: Operator<any>;
};

export type WhereFilter = EavFilter;

export type TypeSort = 'asc' | 'desc';

export type Sort<T = any> = {
    [P in keyof T]?: TypeSort;
};

export declare type Operator<T> = {
    eq?: Nullable<T>;
    in?: Nullable<T>[];
    notIn?: Nullable<T>[];
    lt?: T;
    lte?: T;
    gt?: T;
    gte?: T;
    contains?: string;
    startWith?: string;
    endWith?: string;
    not?: Nullable<T>;
    nestedNot?: Operator<T>;
    regex?: string;
};

export enum TypeOperator {
    EQ = 'eq',
    IN = 'in',
    NOT_IN = 'notIn',
    LT = 'lt',
    LTE = 'lte',
    GT = 'gt',
    GTE = 'gte',
    CONTAINS = 'contains',
    START_WITH = 'startWith',
    END_WITH = 'endWith',
    NOT = 'not',
    NESTED_NOT = 'nestedNot',
    REGEX = 'regex',
}

const normalWhere = (
    query: Knex.QueryBuilder,
    operator: TypeOperator,
    field_to_table: string,
    value: any,
): Knex.QueryBuilder => {
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

export const whereFilter = (
    client: KnexClient,
    where: WhereFilter,
    entityTableName: string,
    query?: Knex.QueryBuilder,
): Knex.QueryBuilder => {
    const field = Object.keys(where)[0];
    const operator = Object.keys(where[field])[0] as TypeOperator;
    const value = Object.values(where[field])[0];
    const field_to_table = snakeCase(field);
    if (!query) {
        query = client.from({ e: entityTableName });
    }
    return normalWhere(query, operator, field_to_table, value);
};

export const whereEavFilter = async (
    client: KnexClient,
    eavFilter: EavFilter,
    entityTableName: string,
    attributeTableName: string,
    valueTableName: string,
    query?: Knex.QueryBuilder,
): Promise<Knex.QueryBuilder> => {
    const fields = Object.keys(eavFilter);
    let sql: Knex.QueryBuilder;
    if (!query) {
        sql = client.from({ e: entityTableName });
    } else {
        sql = query;
    }
    const first = sql
        .clone()
        .innerJoin({ v: valueTableName }, 'e.id', 'v.entity_id')
        .innerJoin({ a: attributeTableName }, 'v.attribute_id', 'a.id');
    const newArr: Knex.QueryBuilder[] = [];

    fields.forEach((field) => {
        const operator = Object.keys(eavFilter[field])[0] as TypeOperator;
        const value = Object.values(eavFilter[field])[0];
        const field_to_table = snakeCase(field);

        const tempOne = first
            .clone()
            .clearSelect()
            .select<string[]>('e.user_id')
            .groupBy('e.user_id')
            .andWhere('a.code', field_to_table);
        const tempTwo = normalWhere(tempOne, operator, 'v.value', value);
        newArr.push(tempTwo);
    });

    const results = await Promise.all(newArr);
    const strArr: { user_id: string }[] = [];
    results.forEach((result) => {
        strArr.push(...result);
    });

    const total = results.length;

    const check = _.countBy(strArr, 'user_id');

    const userIds = getKeyByValue(check, total);

    if (userIds.length === 0) return [];

    return sql.whereIn('e.user_id', userIds);
};

export const changeSort = (query: Knex.QueryBuilder, sort: Sort): Knex.QueryBuilder => {
    const field = Object.keys(sort)[0];
    const type = sort[field];
    const field_to_table = snakeCase(field);
    return query.orderBy(field_to_table, type);
};

const getKeyByValue = (obj: any, value: number) => {
    return Object.keys(obj).filter((key) => obj[key] === value);
};
