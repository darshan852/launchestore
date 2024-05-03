import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface DeliveryStaffDetail {
  id: number
  user_id: number
  fname: null
  lname: null
  full_name: string
  email: string
  password: string
  phone: string
  otp: null
  is_verify: string
  role: string
  status: string
  deletedAt: null
  createdAt: string
  updatedAt: string
}

export interface GetDeliveryStaffListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetDeliveryStaffListRequest
  extends Partial<AxiosRequestConfig> {
  params: GetDeliveryStaffListRequestData
}

export interface GetDeliveryStaffResponseData extends CommonResponseData {
  data: DeliveryStaffDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetDeliveryStaffResponse extends AxiosResponse {
  data: GetDeliveryStaffResponseData
}

export function getDeliveryStaffList(
  {
    params,
    url = `${defaultUrl}/delivery_user/list`,
    method = "post",
    ...config
  }: GetDeliveryStaffListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetDeliveryStaffResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddDeliveryStaffRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface AddDeliveryStaffResponseData extends CommonResponseData {
  data: {}
}

export interface AddDeliveryStaffResponse extends AxiosResponse {
  data: AddDeliveryStaffResponseData
}

export function addDeliveryStaff(
  {
    params,
    url = `${defaultUrl}/delivery_user/add`,
    method = "post",
    ...config
  }: AddDeliveryStaffRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddDeliveryStaffResponse> {
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

export interface GetDeliveryStaffDetailRequestData {
  delivery_id: string
}

export interface GetDeliveryStaffDetailRequest
  extends Partial<AxiosRequestConfig> {
  params: GetDeliveryStaffDetailRequestData
}

export interface GetDeliveryStaffDetailData {
  id: number
  vendor_id: null
  fname: null
  lname: null
  full_name: string
  email: string
  password: string
  phone: string
  otp: null
  is_verify: string
  role: string
  status: string
  deletedAt: null
  createdAt: string
  updatedAt: string
  Delivery_user: {
    id: number
    branch_id: number
    user_id: number
    image: string
    vehicle_name: string
    vehicle_type: string
    vehicle_number: string
    id_proof_number: string
    id_proof_image: string
    token: null
    multiLanguageType: null
    current_status: null
    deletedAt: null
    createdAt: string
    updatedAt: string
  }
}

export interface GetDeliveryStaffDetailResponseData extends CommonResponseData {
  data: GetDeliveryStaffDetailData
}

export interface GetDeliveryStaffDetailResponse extends AxiosResponse {
  data: GetDeliveryStaffDetailResponseData
}

export function getDeliveryStaffDetail(
  {
    params,
    url = `${defaultUrl}/delivery_user/getDeliveryDetail/${params.delivery_id}`,
    method = "get",
    ...config
  }: GetDeliveryStaffDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetDeliveryStaffDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateDeliveryStaffRequest
  extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface UpdateDeliveryStaffResponseData extends CommonResponseData {
  data: {}
}

export interface UpdateDeliveryStaffResponse extends AxiosResponse {
  data: UpdateDeliveryStaffResponseData
}

export function updateDeliveryStaff(
  {
    params,
    url = `${defaultUrl}/delivery_user/update`,
    method = "post",
    ...config
  }: UpdateDeliveryStaffRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateDeliveryStaffResponse> {
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

export interface UpdateDeliveryStaffStatusRequestData {
  status: string
  user_id: number
}

export interface UpdateDeliveryStaffStatusRequest
  extends Partial<AxiosRequestConfig> {
  params: UpdateDeliveryStaffStatusRequestData
}

export interface UpdateDeliveryStaffStatusResponseData
  extends CommonResponseData {
  data: {
    id: number
    vendor_id: null
    fname: null
    lname: null
    full_name: string
    email: string
    password: string
    phone: string
    otp: null
    is_verify: string
    role: string
    status: string
    deletedAt: null
    createdAt: string
    updatedAt: string
  }
}

export interface UpdateDeliveryStaffStatusResponse extends AxiosResponse {
  data: UpdateDeliveryStaffStatusResponseData
}

export function updateDeliveryStaffStatus(
  {
    params,
    url = `${defaultUrl}/delivery_user/updateStatusDelivery`,
    method = "post",
    ...config
  }: UpdateDeliveryStaffStatusRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateDeliveryStaffStatusResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
