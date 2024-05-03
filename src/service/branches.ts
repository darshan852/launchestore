import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { BranchesCommonDetail } from "../component/super_admin/branches/branchesCommon"
import { defaultAxiosInstance } from "./client"

export interface GetBranchDetailRequestData {
  search: string
  page: number
  sorting: string
  limit: number
  vendor_id: number | string
}

export interface GetBranchDetailRequest extends Partial<AxiosRequestConfig> {
  params: GetBranchDetailRequestData
}

export interface GetBranchDetailResponseData extends CommonResponseData {
  data: BranchesCommonDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetBranchDetailResponse extends AxiosResponse {
  data: GetBranchDetailResponseData
}

export function getAllBranchList(
  {
    params,
    url = `${defaultUrl}/branch/branchList`,
    method = "post",
    ...config
  }: GetBranchDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetBranchDetailResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface FilterOption {
  id: number
  server_name: string
}

export interface BranchFilterVendorResponseData extends CommonResponseData {
  data: FilterOption[]
}

export interface BranchFilterVendorResponse extends AxiosResponse {
  data: BranchFilterVendorResponseData
}

export function getBranchVendorOption(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<BranchFilterVendorResponse> {
  return axiosInstance({
    url: `${defaultUrl}/branch/vendorList`,
    method: "get",
  })
}

export interface BranchDetailRequestData {
  id: string
}

export interface BranchDetailRequest extends Partial<AxiosRequestConfig> {
  params: BranchDetailRequestData
}

export interface BranchDetail {
  id: number
  full_name: string
  email: string
  Branch: {
    delivery_by: string
    isOnlinePayment: string
    selfPickUp: string
    isCOD: string
    whatsappFlag: string
    delivery_time_date: string
    yearly_plan: number
  }
}

export interface BranchDetailResponseData extends CommonResponseData {
  data: BranchDetail
}

export interface BranchDetailResponse extends AxiosResponse {
  data: BranchDetailResponseData
}

export function branchDetail(
  {
    params,
    url = `${defaultUrl}/branch/getBranchDetail/${params.id}`,
    method = "get",
    ...config
  }: BranchDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<BranchDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateBranchRequestData {
  user_id: string
  email: string
  delivery_by: string
  isOnlinePayment: string
  selfPickUp: string
  isCOD: string
  whatsappFlag: string
  delivery_time_date: string
  yearly_plan: string
}

export interface UpdateBranchRequest extends Partial<AxiosRequestConfig> {
  params: UpdateBranchRequestData
}

export interface UpdateBranchResponseData extends CommonResponseData {
  data: {}
}

export interface UpdateBranchResponse extends AxiosResponse {
  data: UpdateBranchResponseData
}

export function updateBranch(
  {
    params,
    url = `${defaultUrl}/branch/updateBranch`,
    method = "post",
    ...config
  }: UpdateBranchRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateBranchResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateBranchStatusRequestData {
  branch_id: number
  status: string
}

export interface UpdateBranchStatusRequest extends Partial<AxiosRequestConfig> {
  params: UpdateBranchStatusRequestData
}

export interface UpdateBranchStatusResponseData extends CommonResponseData {
  data: {}
}

export interface UpdateBranchStatusResponse extends AxiosResponse {
  data: UpdateBranchStatusResponseData
}

export function updateBranchStatus(
  {
    params,
    url = `${defaultUrl}/branch/changebranchStatus`,
    method = "post",
    ...config
  }: UpdateBranchStatusRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateBranchStatusResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
