import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { HttpClientResponse, HttpConfig, IHttpClient } from './http-client.interface';
export class AxiosHttpClient implements IHttpClient<AxiosInstance> {
    protected readonly _instance: AxiosInstance;

    constructor(
        private baseApiUrl: string,
        options?: {
            config?: AxiosRequestConfig;
        },
    ) {
        const config = options && options.config ? options.config : {};
        this._instance = axios.create({
            paramsSerializer: (params: any) => qs.stringify(params),
            ...config,
            baseURL: baseApiUrl,
        });
    }

    delete<R>(url: string, config?: HttpConfig): Promise<HttpClientResponse<R>> {
        return this._instance.delete<R, AxiosResponse<R>>(url, config);
    }

    get<R, P = never>(
        url: string,
        param?: P | Record<any, any>,
        config?: HttpConfig,
    ): Promise<HttpClientResponse<R>> {
        return this._instance.get<P, AxiosResponse<R>>(url, {
            ...config,
            params: param,
        });
    }

    getInstance(): AxiosInstance {
        return this._instance;
    }

    patch<P, R>(
        url: string,
        data: Record<any, any> | P,
        config?: HttpConfig,
    ): Promise<HttpClientResponse<R>> {
        return this._instance.patch<P, AxiosResponse<R>>(url, data, config);
    }

    post<P, R>(url: string, data: Record<any, any> | P, config?: HttpConfig): Promise<HttpClientResponse<R>> {
        return this._instance.post<P, AxiosResponse<R>>(url, data, config);
    }

    put<P, R>(url: string, data: Record<any, any> | P, config?: HttpConfig): Promise<HttpClientResponse<R>> {
        return this._instance.put<P, AxiosResponse<R>>(url, data, config);
    }
}
