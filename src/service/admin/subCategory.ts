import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface SubCategoryDetail {
  id: number
  name: string
  status: string
  Category: {
    id: number
    name: string
  }
}
export interface GetSubCategoryListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetSubCategoryListRequest extends Partial<AxiosRequestConfig> {
  params: GetSubCategoryListRequestData
}

export interface GetSubCategoryResponseData extends CommonResponseData {
  data: SubCategoryDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetSubCategoryResponse extends AxiosResponse {
  data: GetSubCategoryResponseData
}

export function getSubCategoryList(
  {
    params,
    url = `${defaultUrl}/subcategory/list`,
    method = "post",
    ...config
  }: GetSubCategoryListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetSubCategoryResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddSubCategoryRequestData {
  category_id: string
  name: string[]
}

export interface AddSubCategoryRequest extends Partial<AxiosRequestConfig> {
  params: AddSubCategoryRequestData
}

export interface AddSubCategoryResponseData extends CommonResponseData {
  data: AddSubCategoryResponseDetail[]
}

export interface AddSubCategoryResponse extends AxiosResponse {
  data: AddSubCategoryResponseData
}

export interface AddSubCategoryResponseDetail {
  id: number
  branch_id: string
  category_id: string
  name: string
  status: string
  updatedAt: string
  createdAt: string
}

export function addSubCategory(
  {
    params,
    url = `${defaultUrl}/subcategory/add`,
    method = "post",
    ...config
  }: AddSubCategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddSubCategoryResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetSubcategoryDetail {
  id: number
  branch_id: number
  category_id: number
  name: string
  status: string
  createdAt: string
  updatedAt: string
  deletedAt: null
}

export interface GetSubCategoryRequestData {
  id: string
}

export interface GetSubCategoryRequest extends Partial<AxiosRequestConfig> {
  params: GetSubCategoryRequestData
}

export interface GetSubCategoryDetailResponseData extends CommonResponseData {
  data: GetSubcategoryDetail
}

export interface GetSubCategoryDetailResponse extends AxiosResponse {
  data: GetSubCategoryDetailResponseData
}

export function getSubCategoryDetail(
  {
    params,
    url = `${defaultUrl}/subcategory/getsubcategoryDetail/${params.id}`,
    method = "get",
    ...config
  }: GetSubCategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetSubCategoryDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateSubcategoryRequestData {
  category_id: string
  subcategory_id: number
  name: string
}

export interface UpdateSubcategoryRequest extends Partial<AxiosRequestConfig> {
  params: UpdateSubcategoryRequestData
}

export interface UpdateSubCategoryResponseData extends CommonResponseData {
  data: {}
}

export interface UpdateSubCategoryResponse extends AxiosResponse {
  data: UpdateSubCategoryResponseData
}

export function updateSubcategory(
  {
    params,
    url = `${defaultUrl}/subcategory/update`,
    method = "post",
    ...config
  }: UpdateSubcategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateSubCategoryResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface SubCategoryDeleteRequestData {
  ids: number[]
}

export interface SubCategoryDeleteRequest extends Partial<AxiosRequestConfig> {
  params: SubCategoryDeleteRequestData
}

export interface SubCategoryDeleteResponseData extends CommonResponseData {
  data: {}
}

export interface SubCategoryDeleteResponse extends AxiosResponse {
  data: SubCategoryDeleteResponseData
}

export function deleteSubCategory(
  {
    params,
    url = `${defaultUrl}/subcategory/multipleSubcategoryDelete`,
    method = "post",
    ...config
  }: SubCategoryDeleteRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<SubCategoryDeleteResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetAllSubCategoryRequestData {
  category_id: number
}

export interface GetAllSubCategoryRequest extends Partial<AxiosRequestConfig> {
  params: GetAllSubCategoryRequestData
}
export interface GetAllSubCategory {
  id: number
  name: string
}

export interface GetAllSubCategoryResponseData extends CommonResponseData {
  data: GetAllSubCategory[]
}

export interface GetAllSubCategoryResponse extends AxiosResponse {
  data: GetAllSubCategoryResponseData
}

export function getAllSubCategory(
  {
    params,
    url = `${defaultUrl}/product/subcategory_list`,
    method = "post",
    ...config
  }: GetAllSubCategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetAllSubCategoryResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
