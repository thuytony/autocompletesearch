import {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import AxiosProvider from './AxiosProvider';

class ApiProvider {
  private readonly axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = AxiosProvider.create()

    this.axiosInstance.interceptors.request.use(
      async requestConfig => {
        // TODO: add token to the header
        return requestConfig
      },
      error => {
        throw error
      },
    )

    /**
     * Response Interceptor
     */
    this.axiosInstance.interceptors.response.use(
      response => {
        if (response.status === 203) {
          throw response.data
        }
        // Otherwise just return the data
        return response
      },
      error => {
        // Pass the response from the API, rather than a status code
        if (error && error.response && error.response.data) {
          throw error.response.data
        }
        throw error
      },
    )
  }

  protected request<T>(
    requestConfig: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.axiosInstance.request(requestConfig)
        resolve(result)
      } catch (error: any) {
        if (error.message === 'Unauthenticated.') {
          // TODO: handle token expired
          reject(error)
        }
        reject(error)
      }
    })
  }

  protected post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.request({
      method: 'POST',
      data,
      url,
    })
  }
  protected get<T>(
    url: string,
    params?: any,
    headers?: RawAxiosRequestHeaders | AxiosHeaders,
  ): Promise<AxiosResponse<T>> {
    console.log('request get: ', url, params, headers);
    return this.request({
      method: 'GET',
      url,
      params,
      headers,
    })
  }
  protected put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.request({
      method: 'PUT',
      data,
      url,
    })
  }
  protected delete<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.request({
      method: 'DELETE',
      data,
      url,
    })
  }

}

export { ApiProvider }
