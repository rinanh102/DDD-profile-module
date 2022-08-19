import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpClientResponse, HttpConfig, IHttpClient } from './http-client.interface';
export declare class AxiosHttpClient implements IHttpClient<AxiosInstance> {
    private baseApiUrl;
    protected readonly _instance: AxiosInstance;
    constructor(baseApiUrl: string, options?: {
        config?: AxiosRequestConfig;
    });
    delete<R>(url: string, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    get<R, P = never>(url: string, param?: P | Record<any, any>, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    getInstance(): AxiosInstance;
    patch<P, R>(url: string, data: Record<any, any> | P, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    post<P, R>(url: string, data: Record<any, any> | P, config?: HttpConfig): Promise<HttpClientResponse<R>>;
    put<P, R>(url: string, data: Record<any, any> | P, config?: HttpConfig): Promise<HttpClientResponse<R>>;
}
