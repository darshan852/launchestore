import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { defaultAxiosInstance } from "./client"
export interface FoodCategoryDetail {
  id: number
  name: string
  store_type_id: number
}

export interface GetFoodCategoryListResponseData extends CommonResponseData {
  data: FoodCategoryDetail[]
}

export interface GetFoodCategoryListResponse extends AxiosResponse {
  data: GetFoodCategoryListResponseData
}

export function getCategoryList(
  axiosinstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetFoodCategoryListResponse> {
  return axiosinstance({
    url: `${defaultUrl}/listFoodcategory`,
    method: "get",
  })
}

export interface ShowFoodCategoryDetail {
  name: string
  store_type_id: number
}

export interface AddFoodCategoryRequestData {
  store_type_id: number[]
}

export interface AddFoodCategoryRequest extends Partial<AxiosRequestConfig> {
  params: AddFoodCategoryRequestData
}

export interface AddFoodCategoryResponseData extends CommonResponseData {
  data: {}
}

export interface AddFoodCategoryResponse extends AxiosResponse {
  data: AddFoodCategoryResponseData
}

export function addFoodCategory(
  {
    params,
    url = `${defaultUrl}/addFoodCategory`,
    method = "post",
    ...config
  }: AddFoodCategoryRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddFoodCategoryResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
