import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { TaxTypeDetail } from "../component/super_admin/tax/taxCommon"
import { defaultAxiosInstance } from "./client"

export interface GetTaxTypeListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetTaxTypeListRequest extends Partial<AxiosRequestConfig> {
  params: GetTaxTypeListRequestData
}

export interface GetTaxTypeResponseData extends CommonResponseData {
  data: TaxTypeDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetTaxTypeListResponse extends AxiosResponse {
  data: GetTaxTypeResponseData
}

export function getTaxTypeList(
  {
    params,
    url = `${defaultUrl}/listTaxType`,
    method = "post",
    ...config
  }: GetTaxTypeListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetTaxTypeListResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddTaxTypeRequestData {
  tax_id: string
  tax_type: string[]
  tax_per: string[]
}

export interface AddTaxTypeRequest extends Partial<AxiosRequestConfig> {
  params: AddTaxTypeRequestData
}

export interface AddTaxTypeResponseData extends CommonResponseData {
  data: {}
}

export interface AddTaxTypeResponse extends AxiosResponse {
  data: AddTaxTypeResponseData
}

export function addTaxType(
  {
    params,
    url = `${defaultUrl}/addTaxType`,
    method = "post",
    ...config
  }: AddTaxTypeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddTaxTypeResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface DeleteTaxTypeRequestData {
  id: number
}

export interface DeleteTaxTypeRequest extends Partial<AxiosRequestConfig> {
  params: DeleteTaxTypeRequestData
}

export interface DeleteTaxTypeResponseData extends CommonResponseData {
  data: {}
}

export interface DeleteTaxTypeResponse extends AxiosResponse {
  data: DeleteTaxTypeResponseData
}

export function deleteTaxType(
  {
    params,
    url = `${defaultUrl}/deleteTaxType/${params.id}`,
    method = "delete",
    ...config
  }: DeleteTaxTypeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<DeleteTaxTypeResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface GetTaxTypeDetailRequestData {
  taxtype_id: string
}

export interface GetTaxtTypeDetailRequest extends Partial<AxiosRequestConfig> {
  params: GetTaxTypeDetailRequestData
}

export interface GetTaxTypeDetailResponseData extends CommonResponseData {
  data: TaxTypeDetail
}

export interface GetTaxTypeDetailResponse extends AxiosResponse {
  data: GetTaxTypeDetailResponseData
}

export function getTaxTypeDetail(
  {
    params,
    url = `${defaultUrl}/gettaxtypeDetail/${params.taxtype_id}`,
    method = "get",
    ...config
  }: GetTaxtTypeDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetTaxTypeDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface UpdateTaxTypeRequestData {
  id: string
  tax_type: string
  tax_per: string
}

export interface UpdateTaxTypeRequest extends Partial<AxiosRequestConfig> {
  params: UpdateTaxTypeRequestData
}

export interface UpdateTaxTypeResponsedata extends CommonResponseData {
  data: TaxTypeDetail
}

export interface UpdateTaxTypeResponse extends AxiosResponse {
  data: UpdateTaxTypeResponsedata
}

export function updateTaxType(
  {
    params,
    url = `${defaultUrl}/updateTaxtype`,
    method = "post",
    ...config
  }: UpdateTaxTypeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateTaxTypeResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
