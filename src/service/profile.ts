import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "./common"
import { defaultAxiosInstance } from "./client"

export interface ChangePasswordRequestData {
  old_password: string
  new_password: string
}

export interface ChangePasswordRequest extends Partial<AxiosRequestConfig> {
  params: ChangePasswordRequestData
}

export interface ChangePasswordResponseData extends CommonResponseData {
  data: {}
}

export interface ChangePasswordResponse extends AxiosResponse {
  data: ChangePasswordResponseData
}

export function changePassword(
  {
    params,
    url = `${defaultUrl}/auth/updatePassword`,
    method = "post",
    ...config
  }: ChangePasswordRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<ChangePasswordResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateProfileRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface UpdateProfileResponseData extends CommonResponseData {
  data: {
    id: number
    vendor_id: number
    user_id: number
    domain_name: string
    gst_number: string
    store_type: string
    full_name: string
    location: string
    address: string
    latitude: string
    longitude: string
    image: string
    logo_image: null | string
    product_default_image: string
    active_date: string
    inactive_date: string
    subscription_plan: number
    delivery_by: string
    multiLanguageType: null
    selfPickUp: string
    isOnlinePayment: string
    isCOD: string
    delivery_time_date: string
    selfPickupOpenClosingTiming: string
    currency_code: string
    whatsappFlag: string
    token: null | string
    billing_date: null
    yearly_plan: number
    createdAt: string
    updatedAt: string
  }
}

export interface UpdateProfileResponse extends AxiosResponse {
  data: UpdateProfileResponseData
}

export function updateProfile(
  {
    params,
    url = `${defaultUrl}/auth/updateProfile`,
    method = "post",
    ...config
  }: UpdateProfileRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateProfileResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
