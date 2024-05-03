import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { VendorCommonDetail } from "../component/super_admin/vendore/vendorCommon"
import { CommonResponseData, defaultUrl } from "./common"
import { defaultAxiosInstance } from "./client"

export interface GetAllVendorListResponseData extends CommonResponseData {
  data: VendorCommonDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetAllVendorListResponse extends AxiosResponse {
  data: GetAllVendorListResponseData
}

export interface GetAllVendorListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetAllVendorListRequest extends Partial<AxiosRequestConfig> {
  params: GetAllVendorListRequestData
}

export function getAllVendor(
  {
    params,
    url = `${defaultUrl}/vendor/getAllVendor`,
    method = "post",
    ...config
  }: GetAllVendorListRequest,
  axiosInstace: AxiosInstance = defaultAxiosInstance,
): Promise<GetAllVendorListResponse> {
  return axiosInstace({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface CreateVendorRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

interface CreateVendore {
  id: number
  full_name: string
  email: string
  phone: string
  role: string
  password: string
  status: string
  updatedAt: string
  createdAt: string
}
export interface CreateVendorResponseData extends CommonResponseData {
  data: CreateVendore
}

export interface CreateVendorResponse extends AxiosResponse {
  data: CreateVendorResponseData
}

export function createVendore(
  {
    params,
    url = `${defaultUrl}/vendor/createVendor`,
    method = "post",
    ...config
  }: CreateVendorRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<CreateVendorResponse> {
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

export interface GetVendorDetail {
  id: number
  vendor_id: null | number
  fname: null | string
  lname: null | string
  full_name: string
  email: string
  password: string
  phone: string
  otp: null | number
  is_verify: null
  role: string
  status: "1"
  createdAt: string
  updatedAt: string
  deletedAt: string
  Vendor: {
    id: number
    user_id: number
    type: string
    store_type: null | string
    display_price_with_gst: null | string
    login_type: string
    server_name: string
    approved_branch: number
    webLogo: string
    favicon_image: null
    webTitle: string
    img_folder: string
    android_version: string
    ios_version: string
    android_isforce: string
    ios_isforce: string
    locality: string
    language_support: string
    theme_name: string
    multi_language: string
    supported_language: string
    is_ecommerce: string
    createdAt: string
    updatedAt: string
  }
}

export interface GetVendorDetailRequestData {
  vendor_id: string
}
export interface GetVendorDetailRequest extends Partial<AxiosRequestConfig> {
  params: GetVendorDetailRequestData
}
export interface GetVendorDetailResponseData extends CommonResponseData {
  data: GetVendorDetail
}

export interface GetVendorDetailResponse extends AxiosResponse {
  data: GetVendorDetailResponseData
}

export function getVendorDetail(
  {
    params,
    url = `${defaultUrl}/vendor/getVendordetail/${params.vendor_id}`,
    method = "get",
    ...config
  }: GetVendorDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetVendorDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateVendoreRequestData {
  user_id: number
  email: string
  login_type: string
  approved: string
  display_price_with_gst: string
  webTitle: string
  language_support: string
  locality: string
  store_type: string
  is_ecommerce: string
  supported_language: number[]
  theme_name: string
  multi_language: string
  android_version: string
  ios_version: string
  android_isforce: string
  ios_isforce: string
}

export interface UpdateVendoreRequest extends Partial<AxiosRequestConfig> {
  params: UpdateVendoreRequestData
}

export interface UpdateVendorResponseData extends CommonResponseData {
  data: GetVendorDetail
}

export interface UpdateVendorResponse extends AxiosResponse {
  data: UpdateVendorResponseData
}

export function updateVendor(
  {
    params,
    url = `${defaultUrl}/vendor/updateVendor`,
    method = "post",
    ...config
  }: UpdateVendoreRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateVendorResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateVendorStatusRequestData {
  user_id: number
  status: string
}

export interface UpdateVendorStatusRequest extends Partial<AxiosRequestConfig> {
  params: UpdateVendorStatusRequestData
}

export interface UpdateVendorStatusResponseData extends CommonResponseData {
  data: {}
}

export interface UpdateVendorStatusResponse extends AxiosResponse {
  data: UpdateVendorStatusResponseData
}

export function updateVendorStatus(
  {
    params,
    url = `${defaultUrl}/vendor/changeStatus`,
    method = "post",
    ...config
  }: UpdateVendorStatusRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateVendorStatusResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
