import { Option } from "@/src/common/formfield/selectField"
import { StoreTypeList } from "@/src/service/storeType"
import { ThemeList } from "@/src/service/themeMain"

export interface VendorCommonDetail {
  id: 7
  vendor_id: null | number
  fname: null | string
  lname: null | string
  full_name: string
  email: string
  password: string
  phone: string
  otp: null | number
  is_verify: null | boolean
  role: string
  status: string
  createdAt: string
  updatedAt: string
  deletedAt: null | string
  Vendor: VendorDetail
}

export interface VendorDetail {
  id: number
  user_id: number
  type: string
  store_type: null
  display_price_with_gst: null
  login_type: string
  server_name: string
  approved_branch: number
  webLogo: string
  favicon_image: null | string
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

export interface VendorTabelData {
  full_name: string
  email: string
  phone: string
  server_name: string
  status: string
  vendorId: number
}

export function convertResponse(data: VendorCommonDetail[]) {
  const newData: VendorTabelData[] = []
  data.map((obj) => {
    const newObj = {
      full_name: obj.full_name,
      email: obj.email,
      phone: obj.phone,
      server_name: obj.Vendor.server_name,
      status: obj.status === "1" ? "Active" : "InActive",
      vendorId: obj.id,
    }
    newData.push(newObj)
  })
  return newData
}

export interface VendoreAddForm {
  domain_type: string
  database: string
  login_type: string
  domain_name: string
  name: string
  ownername: string
  store_type: string
  supported_language: any[]
  image: any
  email: string
  password: string
  confirm_Pass: string
  mobile_number: string
  address: string
  location: string
  locality: string
  latitude: number
  longitude: number
  language_support: string
  theme_name: string
  is_ecommerce: string
}

export function converSelectboxResponse(value: ThemeList[]) {
  const newData: Option[] = []
  value.map((obj) => {
    const newObj = {
      label: obj.name,
      value: obj.name,
    }
    newData.push(newObj)
  })
  return newData
}

export function converStoreResponse(value: StoreTypeList[]) {
  const newData: Option[] = []
  value.map((obj) => {
    const newObj = {
      label: obj.name,
      value: obj.name,
    }
    newData.push(newObj)
  })
  return newData
}

export interface EditVendorForm {
  email: string
  login_type: string
  approved: string
  display_price_with_gst: string
  webTitle: string
  language_support: string
  locality: string
  store_type: string
  is_ecommerce: string
  supported_language: any[]
  theme_name: string
  multi_language: string
  android_version: string
  ios_version: string
  android_isforce: string
  ios_isforce: string
}

export function replaceAllNumbers(str: string) {
  return str.replace(/\D/g, "") // Replace all digits with 'replacement'
}
