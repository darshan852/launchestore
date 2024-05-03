import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface CategoryListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface CategoryListRequest extends Partial<AxiosRequestConfig> {
  params: CategoryListRequestData
}

export interface CategoryDetail {
  id: number
  branch_id: number
  name: string
  image: string
  status: string
  createdAt: string
  updatedAt: string
}

export interface CategoryListResponseData extends CommonResponseData {
  data: CategoryDetail[]
  totalRecords: number
  currentPage: number
}

export interface CategoryListResponse extends AxiosResponse {
  data: CategoryListResponseData
}

export function getCategoryList(
  {
    params,
    url = `${defaultUrl}/category/category_list`,
    method = "post",
    ...config
  }: CategoryListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<CategoryListResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddCategoryRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface AddCategoryResponseData extends CommonResponseData {
  data: CategoryDetail
}

export interface AddCategoryResponse extends AxiosResponse {
  data: AddCategoryResponseData
}

export function addCategory(
  {
    params,
    url = `${defaultUrl}/category/add`,
    method = "post",
    ...config
  }: AddCategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddCategoryResponse> {
  config.headers = {
    "Content-Type": "multipart/form-data",
  }
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetCategoryRequestData {
  categoryId: string
}

export interface GetCategoryRequest extends Partial<AxiosRequestConfig> {
  params: GetCategoryRequestData
}

export interface GetCategoryDetailResponseData extends CommonResponseData {
  data: CategoryDetail
}

export interface GetCategoryDetailResponse extends AxiosResponse {
  data: GetCategoryDetailResponseData
}

export function getCategoryDetail(
  {
    params,
    url = `${defaultUrl}/category/getcategoryDetail/${params.categoryId}`,
    method = "get",
    ...config
  }: GetCategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetCategoryDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateCategoryRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface UpdateCategoryResponseData extends CommonResponseData {
  data: CategoryDetail
}

export interface UpdateCategoryResponse extends AxiosResponse {
  data: UpdateCategoryResponseData
}

export function updateCategory(
  {
    params,
    url = `${defaultUrl}/category/update`,
    method = "post",
    ...config
  }: UpdateCategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateCategoryResponse> {
  config.headers = {
    "Content-Type": "multipart/form-data",
  }
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface CategoryDeleteRequestData {
  ids: number[]
}

export interface CategoryDeleteRequest extends Partial<AxiosRequestConfig> {
  params: CategoryDeleteRequestData
}

export interface CategoryDeleteResponseData extends CommonResponseData {
  data: {}
}

export interface CategoryDeleteResponse extends AxiosResponse {
  data: CategoryDeleteResponseData
}

export function deleteCategory(
  {
    params,
    url = `${defaultUrl}/category/multipleCategoryDelete`,
    method = "post",
    ...config
  }: CategoryDeleteRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<CategoryDeleteResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetAllCategory {
  id: number
  name: string
}

export interface GetAllCategoryResponseData extends CommonResponseData {
  data: GetAllCategory[]
}

export interface GetAllCategoryResponse extends AxiosResponse {
  data: GetAllCategoryResponseData
}

export function getAllCategory(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetAllCategoryResponse> {
  return axiosInstance({
    url: `${defaultUrl}/subcategory/category_list`,
    method: "get",
  })
}
