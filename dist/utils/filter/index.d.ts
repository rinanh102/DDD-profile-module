import { Nullable, Optional } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
import { Knex } from 'knex';
export declare type FilterDto = {
    offset?: string;
    limit?: string;
    where?: any;
    whereEav?: EavFilter;
    sort?: Optional<Sort>;
};
export declare type Filter = {
    offset: number;
    limit: number;
    where?: any;
    whereEav?: EavFilter;
    sort?: Optional<Sort>;
};
export declare type EavFilter = {
    [code: string]: Operator<any>;
};
export declare type WhereFilter = EavFilter;
export declare type TypeSort = 'asc' | 'desc';
export declare type Sort<T = any> = {
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
export declare enum TypeOperator {
    EQ = "eq",
    IN = "in",
    NOT_IN = "notIn",
    LT = "lt",
    LTE = "lte",
    GT = "gt",
    GTE = "gte",
    CONTAINS = "contains",
    START_WITH = "startWith",
    END_WITH = "endWith",
    NOT = "not",
    NESTED_NOT = "nestedNot",
    REGEX = "regex"
}
export declare const whereFilter: (client: KnexClient, where: WhereFilter, entityTableName: string, query?: Knex.QueryBuilder) => Knex.QueryBuilder;
export declare const whereEavFilter: (client: KnexClient, eavFilter: EavFilter, entityTableName: string, attributeTableName: string, valueTableName: string, query?: Knex.QueryBuilder) => Promise<Knex.QueryBuilder>;
export declare const changeSort: (query: Knex.QueryBuilder, sort: Sort) => Knex.QueryBuilder;
