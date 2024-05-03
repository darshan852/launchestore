import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface BrandDetail {
  id: number
  name: string
  branch_id: number
  status: string
  category_name: string
}

export interface BrandListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface BrandListRequest extends Partial<AxiosRequestConfig> {
  params: BrandListRequestData
}

export interface BrandListResponseData extends CommonResponseData {
  data: BrandDetail[]
  totalRecords: number
  currentPage: number
}

export interface BrandListResponse extends AxiosResponse {
  data: BrandListResponseData
}

export function getBrandList(
  {
    params,
    url = `${defaultUrl}/brand/list`,
    method = "post",
    ...config
  }: BrandListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<BrandListResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddBrandRequestData {
  name: string
  category_ids: number[]
}

export interface AddBrandRequest extends Partial<AxiosRequestConfig> {
  params: AddBrandRequestData
}

export interface AddBrandResponseData extends CommonResponseData {
  data: {
    id: number
    name: string
    branch_id: string
    status: string
    updatedAt: string
    createdAt: string
  }
}

export interface AddBrandResponse extends AxiosResponse {
  data: AddBrandResponseData
}

export function addBrand(
  {
    params,
    url = `${defaultUrl}/brand/add`,
    method = "post",
    ...config
  }: AddBrandRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddBrandResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateBrandDetail {
  id: number
  branch_id: number
  name: string
  status: string
  createdAt: string
  updatedAt: string
  deletedAt: null | string
  Brand_categories: BrandCategory[]
}

export interface BrandCategory {
  id: number
  brand_category: {
    name: string
    id: number
  }
}

export interface GetBrandDetailRequestData {
  brandId: string
}

export interface GetBrandDetailRequest extends Partial<AxiosRequestConfig> {
  params: GetBrandDetailRequestData
}

export interface GetBrandResponseData extends CommonResponseData {
  data: UpdateBrandDetail
}

export interface GetBrandResponse extends AxiosResponse {
  data: GetBrandResponseData
}

export function getBrandDetail(
  {
    params,
    url = `${defaultUrl}/brand/getBrandDetail/${params.brandId}`,
    method = "get",
    ...config
  }: GetBrandDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetBrandResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateBrandRequestData {
  name: string
  brand_id: number
  category_ids: number[]
}

export interface UpdateBrandRequest extends Partial<AxiosRequestConfig> {
  params: UpdateBrandRequestData
}

export interface UpdateBrandResponseData extends CommonResponseData {
  data: {}
}

export interface UpdateBrandResponse extends AxiosResponse {
  data: UpdateBrandResponseData
}

export function updateBrand(
  {
    params,
    url = `${defaultUrl}/brand/update`,
    method = "post",
    ...config
  }: UpdateBrandRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateBrandResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface BrandDeleteRequestData {
  ids: number[]
}

export interface BrandDeleteRequest extends Partial<AxiosRequestConfig> {
  params: BrandDeleteRequestData
}

export interface BrandDeleteResponseData extends CommonResponseData {
  data: {}
}

export interface BrandDeleteResponse extends AxiosResponse {
  data: BrandDeleteResponseData
}

export function deleteBrand(
  {
    params,
    url = `${defaultUrl}/brand/multipleBrandDelete`,
    method = "post",
    ...config
  }: BrandDeleteRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<BrandDeleteResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetAllBrandRequestData {
  category_id: number
}

export interface GetAllBrandRequest extends Partial<AxiosRequestConfig> {
  params: GetAllBrandRequestData
}
export interface GetAllBrand {
  id: number
  name: string
}

export interface GetAllBrandResponseData extends CommonResponseData {
  data: GetAllBrand[]
}

export interface GetAllBrandResponse extends AxiosResponse {
  data: GetAllBrandResponseData
}

export function GetAllBrandList(
  {
    params,
    url = `${defaultUrl}/product/brand_list`,
    method = "post",
    ...config
  }: GetAllBrandRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetAllBrandResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
