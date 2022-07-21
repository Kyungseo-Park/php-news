import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthError, ForbiddenError, NotFoundError } from "./error";

// axios는 400 이상의 status 가 오면 다 에러를 리턴한다.
// 이를 커스텀 할 수 있도록 하여 개발자가 정의한 에러일 때만 에러를 던질 수 있도록 인수를 받는다.
export interface RequestConfig extends AxiosRequestConfig {
  suppressStatusCode?: number[];
}

// axios에 넣을 interceptor.응답에 따라 각각 다른 처리를 한다.
// 굳이 axios가 아니더라도 다른 처리를 할 수 있음.
function AxiosAuthInterceptor<T>(response: AxiosResponse<T>): AxiosResponse {
  const status = response.status;

  if (status === 404) {
    throw new NotFoundError();
  }

  if (status === 403) {
    throw new ForbiddenError();
  }

  if (status === 401) {
    throw new AuthError();
  }

  return response;
}

export default async function withAxios(requestConfig: RequestConfig) {
  const instance = axios.create();

  instance.interceptors.response.use((response) => AxiosAuthInterceptor(response));

  const response = await instance.request({
    ...requestConfig,
    baseURL: `https://php-news-api.kkyungvelyy.com/api/v1`,
    validateStatus: (status) => [...(requestConfig.suppressStatusCode || [])].includes(status) || status < 500,
  });

  return response;
}
