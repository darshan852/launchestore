import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { defaultAxiosInstance } from "./client"

export interface UpdateAppRequestData {
  android_version: string
  ios_version: string
  android_isforce: string
  ios_isforce: string
}

export interface UpdateAppRequest extends Partial<AxiosRequestConfig> {
  params: UpdateAppRequestData
}

export interface UpdateResponseData extends CommonResponseData {
  data: number[]
}

export interface UpdateAppResponse extends AxiosResponse {
  data: UpdateResponseData
}

export function updateApp(
  {
    params,
    url = `${defaultUrl}/updateAppversion`,
    method = "post",
    ...config
  }: UpdateAppRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateAppResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
