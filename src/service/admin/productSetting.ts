import { AxiosInstance, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

//--------------------------------unit-----------------------------------------------
export interface UnitDetail {
  id: number
  vendor_id: number
  name: string
  status: string
  deletedAt: null | string
  createdAt: string
  updatedAt: string
}

export interface GetUnitListResponseData extends CommonResponseData {
  data: UnitDetail[]
}

export interface GetUnitListResponse extends AxiosResponse {
  data: GetUnitListResponseData
}

export function getUnitList(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetUnitListResponse> {
  return axiosInstance({
    url: `${defaultUrl}/product_variant/listWeight`,
    method: "get",
  })
}

//------------------------package--------------------------------------------------------

export interface PackageDetail {
  id: number
  vendor_id: number
  package: string
  deletedAt: null | string
  createdAt: string
  updatedAt: string
}

export interface GetPackageListResponseData extends CommonResponseData {
  data: PackageDetail[]
}

export interface GetPackageListResponse extends CommonResponseData {
  data: GetPackageListResponseData
}

export function getPackageList(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetPackageListResponse> {
  return axiosInstance({
    url: `${defaultUrl}/product_variant/listPackage`,
    method: "get",
  })
}
