import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import {
  ConfigDetail,
  UpdateConfigFormField,
} from "../component/super_admin/configuration/configurationCommon"
import { defaultAxiosInstance } from "./client"

export interface GetConfigListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetConfigListRequest extends Partial<AxiosRequestConfig> {
  params: GetConfigListRequestData
}

export interface GetConfigListResponseData extends CommonResponseData {
  data: ConfigDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetConfigListResponse extends AxiosResponse {
  data: GetConfigListResponseData
}

export function getConfigList(
  {
    params,
    url = `${defaultUrl}/configrationList`,
    method = "post",
    ...config
  }: GetConfigListRequest,
  axiosInstace: AxiosInstance = defaultAxiosInstance,
): Promise<GetConfigListResponse> {
  return axiosInstace({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetConfigDetailRequestData {
  configId: string
}

export interface GetConfigDetailRequest extends Partial<AxiosRequestConfig> {
  params: GetConfigDetailRequestData
}

export interface GetConfigDetailResponseData extends CommonResponseData {
  data: ConfigDetail
}

export interface GetConfigDetailResponse extends AxiosResponse {
  data: GetConfigDetailResponseData
}

export function getConfigDetail(
  {
    params,
    url = `${defaultUrl}/getconfigrationDetail/${params.configId}`,
    method = "get",
    ...config
  }: GetConfigDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetConfigDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateConfigRequestData extends UpdateConfigFormField {
  id: string
}

export interface UpdateConfigRequest extends Partial<AxiosRequestConfig> {
  params: UpdateConfigRequestData
}

export interface UpdateConfigResponseData extends CommonResponseData {
  data: {}
}

export interface UpdateConfigResponse extends AxiosResponse {
  data: UpdateConfigResponseData
}

export function updateConfig(
  {
    params,
    url = `${defaultUrl}/updateConfigration`,
    method = "post",
    ...config
  }: UpdateConfigRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateConfigResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
