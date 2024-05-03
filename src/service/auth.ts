import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { defaultUrl } from "./common"
import { defaultAxiosInstance } from "./client"

export interface LoginDetail {
  email: string
  password: string
}

export interface LoginRequest extends Partial<AxiosRequestConfig> {
  params: LoginDetail
}

export interface LoginResponseDetail {
  vendor_id: null | number
  fname: null | string
  lname: null | string
  full_name: string
  email: string
  phone: string
  otp: null | number
  is_verify: null | boolean
  role: string
  status: string
  createdAt: string
  updatedAt: string
  deletedAt: null | string
  vendor: VendorLoginDetail
}

export interface LoginResponseData {
  success: boolean
  data: LoginResponseDetail
  message: string
}

export interface LoginResponse extends AxiosResponse {
  data: LoginResponseData
}

export function login(
  {
    params,
    url = `${defaultUrl}/auth/login`,
    method = "post",
    ...config
  }: LoginRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<LoginResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface VendorLoginDetail {
  id: number
  user_id: number
  type: ""
  store_type: null
  display_price_with_gst: string | null
  login_type: string
  server_name: string
  approved_branch: 1
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
  deletedAt: null | string
  vendors_branches: BranchDetail[]
  foodtype: number
}

export interface BranchDetail {
  id: number
  vendor_id: number
  user_id: number
  domain_name: string
  gst_number: null | string
  store_type: string
  name: string
  location: string
  address: string
  latitude: string
  longitude: string
  image: string
  logo_image: null | string
  product_default_image: null | string
  active_date: string
  inactive_date: string
  subscription_plan: number
  delivery_by: string
  multiLanguageType: null
  selfPickUp: null
  isOnlinePayment: null
  isCOD: null
  delivery_time_date: string
  selfPickupOpenClosingTiming: null
  currency_code: null
  whatsappFlag: null
  token: null
  billing_date: null
  yearly_plan: null
  createdAt: string
  updatedAt: string
  deletedAt: null | string
}
