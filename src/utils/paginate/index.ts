export type Paginate = {
    offset: number;
    limit: number;
    total: number;
};

export class PaginateResult<T> {
    pagination: Paginate;
    data: T[];

    constructor(pagination: Paginate, data: T[]) {
        this.pagination = pagination;
        this.data = data;
    }

    public static create<T>(pagination: Paginate, data: T[]): PaginateResult<T> {
        return new PaginateResult<T>(pagination, data);
    }
}
