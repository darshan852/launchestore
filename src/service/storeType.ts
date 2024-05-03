import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { defaultAxiosInstance } from "./client"
import { StoreTypeDetail } from "../component/super_admin/store-type/storeTypeCommon"

export interface AddStoreRequestData {
  name: string
}

export interface AddStoreRequest extends Partial<AxiosRequestConfig> {
  params: AddStoreRequestData
}

export interface AddStoreResponseData extends CommonResponseData {
  data: {
    id: string
    name: string
    updatedAt: string
    createdAt: string
  }
}

export interface AddStoreResponse extends AxiosResponse {
  data: AddStoreResponseData
}

export function addStore(
  {
    params,
    method = "post",
    url = `${defaultUrl}/addStore`,
    ...config
  }: AddStoreRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddStoreResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetStoreTypeRequestData {
  sorting: string
  search: string
  page: number
  limit: number
}

export interface GetStoreTypeRequest extends Partial<AxiosRequestConfig> {
  params: GetStoreTypeRequestData
}

export interface GetStoreTypeResponseData extends CommonResponseData {
  data: StoreTypeDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetStoreTypeResponse extends AxiosResponse {
  data: GetStoreTypeResponseData
}

export function getStoreTypeData(
  {
    params,
    url = `${defaultUrl}/getallStoreType`,
    method = "post",
    ...config
  }: GetStoreTypeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetStoreTypeResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateStoreRequestData {
  id: number
  name: string
}
export interface UpdateStoreRequest extends Partial<AxiosRequestConfig> {
  params: UpdateStoreRequestData
}

export interface UpdateStoreResponseData extends CommonResponseData {
  data: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
  }
}

export interface UpdateStoreResponse extends AxiosResponse {
  data: UpdateStoreResponseData
}

export function updateStoreType(
  {
    params,
    url = `${defaultUrl}/updateStoreType`,
    method = "post",
    ...config
  }: UpdateStoreRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateStoreResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface StoreDetailRequestData {
  id: number
}
export interface StoreDetailRequest extends Partial<AxiosRequestConfig> {
  params: StoreDetailRequestData
}
export interface GetStoreTypeDetailResponseData extends CommonResponseData {
  data: StoreTypeDetail
}

export interface GetStoreTypeDetailResponse extends AxiosResponse {
  data: GetStoreTypeDetailResponseData
}

export function getStoreDetail(
  {
    params,
    url = `${defaultUrl}/getStoreType/${params.id}`,
    method = "get",
    ...config
  }: StoreDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetStoreTypeDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface StoreTypeList {
  id: number
  name: string
}

export interface GetStoreWithOutPaginationResponseData
  extends CommonResponseData {
  data: StoreTypeList[]
}

export interface GetStoreWithOutPaginationResponse extends AxiosResponse {
  data: GetStoreWithOutPaginationResponseData
}

export function getStoreList(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetStoreWithOutPaginationResponse> {
  return axiosInstance({
    url: `${defaultUrl}/allStoreTypeList`,
    method: "get",
  })
}
