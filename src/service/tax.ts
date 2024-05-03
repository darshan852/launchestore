import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { TaxListDetail } from "../component/super_admin/tax/taxCommon"
import { defaultAxiosInstance } from "./client"

export interface TaxListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface TaxListRequest extends Partial<AxiosRequestConfig> {
  params: TaxListRequestData
}

export interface TaxListResponseData extends CommonResponseData {
  data: TaxListDetail[]
  totalRecords: number
  currentPage: number
}

export interface TaxListResponse extends AxiosResponse {
  data: TaxListResponseData
}

export function getTaxlist(
  {
    params,
    url = `${defaultUrl}/taxList`,
    method = "post",
    ...config
  }: TaxListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<TaxListResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddTaxRequestData {
  tax_name: string
}

export interface AddTaxRequest extends Partial<AxiosRequestConfig> {
  params: AddTaxRequestData
}

export interface AddTaxResponseData extends CommonResponseData {
  data: TaxListDetail
}

export interface AddTaxResponse extends AxiosResponse {
  data: AddTaxResponseData
}

export function addTax(
  {
    params,
    url = `${defaultUrl}/taxAdd`,
    method = "post",
    ...config
  }: AddTaxRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddTaxResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetTaxDetailRequestData {
  tax_id: string
}

export interface GetTaxDetailRequest extends Partial<AxiosRequestConfig> {
  params: GetTaxDetailRequestData
}

export interface GetTaxDetailResponseData extends CommonResponseData {
  data: TaxListDetail
}

export interface GetTaxDetailResponse extends AxiosResponse {
  data: GetTaxDetailResponseData
}

export function getTaxDetail(
  {
    params,
    url = `${defaultUrl}/getTaxDetail/${params.tax_id}`,
    method = "get",
    ...config
  }: GetTaxDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetTaxDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateTaxRequestData {
  id: string
  tax_name: string
}

export interface UpdateTaxRequest extends Partial<AxiosRequestConfig> {
  params: UpdateTaxRequestData
}

export interface UpdateTaxResponsedata extends CommonResponseData {
  data: TaxListDetail
}

export interface UpdateTaxResponse extends AxiosResponse {
  data: UpdateTaxResponsedata
}

export function updateTax(
  {
    params,
    url = `${defaultUrl}/updateTax`,
    method = "post",
    ...config
  }: UpdateTaxRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateTaxResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface DeleteTaxRequestData {
  tax_id: number
}

export interface DeleteTaxRequest extends Partial<AxiosRequestConfig> {
  params: DeleteTaxRequestData
}

export interface DeleteTaxResponseData extends CommonResponseData {
  data: {}
}

export interface DeleteTaxResponse extends AxiosResponse {
  data: DeleteTaxResponseData
}

export function deleteTax(
  {
    params,
    url = `${defaultUrl}/deleteTax/${params.tax_id}`,
    method = "delete",
    ...config
  }: DeleteTaxRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<DeleteTaxResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}
