export declare type Paginate = {
    offset: number;
    limit: number;
    total: number;
};
export declare class PaginateResult<T> {
    pagination: Paginate;
    data: T[];
    constructor(pagination: Paginate, data: T[]);
    static create<T>(pagination: Paginate, data: T[]): PaginateResult<T>;
}
