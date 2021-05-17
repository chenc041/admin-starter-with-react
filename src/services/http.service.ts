import { Observable } from 'rxjs';
import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';
import { inject, injectable } from 'inversify';
import { AXIOS_SERVICE } from '../inject-types/inject.types';

/**
 * 将 axios 封装成 rx 格式的基础http 请求库
 */
@injectable()
export class HttpService {
  constructor(@inject(AXIOS_SERVICE) private readonly instance: AxiosInstance = Axios) {}

  request<T = any>(config: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.makeObservable<T>(this.instance.request, config);
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.makeObservable<T>(this.instance.get, url, config);
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.makeObservable<T>(this.instance.delete, url, config);
  }

  head<T = any>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.makeObservable<T>(this.instance.head, url, config);
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.makeObservable<T>(this.instance.post, url, data, config);
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.makeObservable<T>(this.instance.put, url, data, config);
  }

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.makeObservable<T>(this.instance.patch, url, data, config);
  }

  get axiosRef(): AxiosInstance {
    return this.instance;
  }

  private makeObservable<T>(axios: (...args: any[]) => AxiosPromise<T>, ...args: any[]) {
    return new Observable<AxiosResponse<T>>((subscriber) => {
      const config: AxiosRequestConfig = { ...(args[args.length - 1] || {}) };

      let cancelSource: CancelTokenSource;
      if (!config.cancelToken) {
        cancelSource = Axios.CancelToken.source();
        config.cancelToken = cancelSource.token;
      }

      axios(...args)
        .then((res) => {
          subscriber.next(res);
          subscriber.complete();
        })
        .catch((err) => {
          subscriber.error(err);
        });
      return () => {
        if (config.responseType === 'stream') {
          return;
        }

        if (cancelSource) {
          cancelSource.cancel();
        }
      };
    });
  }
}
