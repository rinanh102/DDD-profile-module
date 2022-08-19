export declare type HttpConfig = {
    headers?: any;
    params?: any;
    clearCacheEntry?: boolean;
} & Record<any, any>;
export interface IHttpClient<T> {
    get<R, P = never>(url: string, param?: P | Record<any, any>, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    post<P, R>(url: string, data: P | Record<any, any>, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    put<P, R>(url: string, data: P | Record<any, any>, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    patch<P, R>(url: string, data: P | Record<any, any>, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    delete<R>(url: string, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    getInstance(): T;
}
export interface HttpClientResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
}
