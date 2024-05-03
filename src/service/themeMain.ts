import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { defaultAxiosInstance } from "./client"
import { ThemeDetail } from "../component/super_admin/themes/themeCommon"
// import { ThemeDetail } from "@/component/themes/themeCommon"

export interface AddThemeRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface AddThemeResponseData extends CommonResponseData {
  data: {
    id: number
    theme_key: string
    name: string
    details: string
    preview_url: string
    image: string
    updatedAt: string
    createdAt: string
  }
}

export interface AddThemeResponse extends AxiosResponse {
  data: AddThemeResponseData
}

export function addTheme(
  {
    params,
    url = `${defaultUrl}/addTheme`,
    method = "post",
    ...config
  }: AddThemeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddThemeResponse> {
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

export interface GetThemeRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetThemeRequest extends Partial<AxiosRequestConfig> {
  params: GetThemeRequestData
}

export interface GetThemeResponseData extends CommonResponseData {
  data: ThemeDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetThemeResponse extends AxiosResponse {
  data: GetThemeResponseData
}

export function getAllTheme(
  {
    params,
    url = `${defaultUrl}/listTheme`,
    method = "post",
    ...config
  }: GetThemeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetThemeResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface ThemeDetailRequestData {
  id: number
}
export interface ThemeDetailRequest extends Partial<AxiosRequestConfig> {
  params: ThemeDetailRequestData
}
export interface GetThemeDetailResponseData extends CommonResponseData {
  data: ThemeDetail
}

export interface GetThemeDetailResponse extends AxiosResponse {
  data: GetThemeDetailResponseData
}

export function getThemeDetail(
  {
    params,
    url = `${defaultUrl}/getTheme/${params.id}`,
    method = "get",
    ...config
  }: ThemeDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetThemeDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateThemeDetailRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface UpdateThemeResponseData extends CommonResponseData {
  // data: ThemeDetail
}

export interface UpdateThemeResponse extends AxiosResponse {
  data: UpdateThemeResponseData
}

export function updateTheme(
  {
    params,
    url = `${defaultUrl}/updateTheme`,
    method = "post",
    ...config
  }: UpdateThemeDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateThemeResponse> {
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

export interface DeleteThemeRequestData {
  id: number
}
export interface DeleteThemeRequest extends Partial<AxiosRequestConfig> {
  params: DeleteThemeRequestData
}

export interface DeleteThemeResponseData extends CommonResponseData {
  data: {}
}

export interface DeleteThemeResponse extends AxiosResponse {
  data: DeleteThemeResponseData
}

export function deleteTheme(
  {
    params,
    url = `${defaultUrl}/themeDelete/${params.id}`,
    method = "delete",
    ...config
  }: DeleteThemeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<DeleteThemeResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface ThemeList {
  id: number
  name: string
}
export interface GetThemeWithOutPaginationResponseData
  extends CommonResponseData {
  data: ThemeList[]
}

export interface GetThemeWithOutPaginationResponse extends AxiosResponse {
  data: GetThemeWithOutPaginationResponseData
}

export function getThemeList(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetThemeWithOutPaginationResponse> {
  return axiosInstance({
    url: `${defaultUrl}/allThemeList`,
    method: "get",
  })
}
