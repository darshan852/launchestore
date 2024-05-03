import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface PackagingStaffDetail {
  id: number
  branch_id: number
  user_id: number
  vehicle_number: string
  vehicle_name: string
  date_of_birth: null
  proof_type: null
  proof_no: null
  address: null
  token: null
  email_token: string
  email_verify: string
  deletedAt: null
  createdAt: string
  updatedAt: string
  User: UserDetail
}

export interface UserDetail {
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

export interface GetPackagingStaffListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetPackagingStaffListRequest
  extends Partial<AxiosRequestConfig> {
  params: GetPackagingStaffListRequestData
}

export interface GetPackagingStaffResponseData extends CommonResponseData {
  data: PackagingStaffDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetPackagingStaffResponse extends AxiosResponse {
  data: GetPackagingStaffResponseData
}

export function getPackagingStaffList(
  {
    params,
    url = `${defaultUrl}/staff/list`,
    method = "post",
    ...config
  }: GetPackagingStaffListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetPackagingStaffResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddPackagingStaffRequestData {
  name: string
  email: string
  password: string
  phone_no: string
  vehicle_number: string
  vehicle_name: string
}

export interface AddPackagingStaffRequest extends Partial<AxiosRequestConfig> {
  params: AddPackagingStaffRequestData
}

export interface AddPackagingStaffResponseData extends CommonResponseData {
  data: {
    id: number
    full_name: string
    email: string
    password: string
    phone: string
    role: string
    status: string
    updatedAt: string
    createdAt: string
  }
}

export interface AddPackagingStaffResponse extends AxiosResponse {
  data: AddPackagingStaffResponseData
}

export function addPackagingStaff(
  {
    params,
    url = `${defaultUrl}/staff/add`,
    method = "post",
    ...config
  }: AddPackagingStaffRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddPackagingStaffResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetPackageStaffDetailData {
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
  Staff: {
    id: number
    branch_id: number
    user_id: number
    vehicle_number: string
    vehicle_name: string
    date_of_birth: null
    proof_type: null
    proof_no: null
    address: null
    token: null
    email_token: string
    email_verify: string
    deletedAt: null
    createdAt: string
    updatedAt: string
  }
}

export interface GetPackageStaffDetailRequestData {
  package_id: string
}

export interface GetPackageStaffDetailRequest
  extends Partial<AxiosRequestConfig> {
  params: GetPackageStaffDetailRequestData
}

export interface GetPackageStaffDetailResponseData extends CommonResponseData {
  data: GetPackageStaffDetailData
}

export interface GetPackageStaffDetailResponse extends AxiosResponse {
  data: GetPackageStaffDetailResponseData
}

export function getPackageStaffDetail(
  {
    params,
    url = `${defaultUrl}/staff/getStaffDetail/${params.package_id}`,
    method = "get",
    ...config
  }: GetPackageStaffDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetPackageStaffDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateStaffRequestData {
  id: number
  name: string
  phone_no: string
  vehicle_number: string
  vehicle_name: string
}

export interface UpdateStaffRequest extends Partial<AxiosRequestConfig> {
  params: UpdateStaffRequestData
}

export interface UpdateStaffResponseData extends CommonResponseData {
  data: {
    id: number
    branch_id: number
    user_id: number
    vehicle_number: string
    vehicle_name: string
    date_of_birth: null
    proof_type: null
    proof_no: null
    address: null
    token: null
    email_token: string
    email_verify: "1"
    deletedAt: null
    createdAt: string
    updatedAt: string
    User: {
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
}

export interface UpdateStaffResponse extends AxiosResponse {
  data: UpdateStaffResponseData
}

export function updateStaff(
  {
    params,
    url = `${defaultUrl}/staff/update`,
    method = "post",
    ...config
  }: UpdateStaffRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateStaffResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateStaffStatusRequestData {
  status: string
  user_id: number
}

export interface UpdateStaffStatusRequest extends Partial<AxiosRequestConfig> {
  params: UpdateStaffStatusRequestData
}

export interface UpdateStaffStatusResponseData extends CommonResponseData {
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

export interface UpdateStaffStatusResponse extends AxiosResponse {
  data: UpdateStaffStatusResponseData
}

export function updateStaffStatus(
  {
    params,
    url = `${defaultUrl}/staff/updateStatusStaff`,
    method = "post",
    ...config
  }: UpdateStaffStatusRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateStaffStatusResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
