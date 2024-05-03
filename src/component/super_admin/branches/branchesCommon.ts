import { Option } from "@/src/common/formfield/selectField"
import { FilterOption } from "@/src/service/branches"

export interface BranchesCommonDetail {
  id: number
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
  Branch: BranchDetail
}

export interface BranchDetail {
  id: number
  vendor_id: number
  user_id: number
  domain_name: string
  gst_number: string
  store_type: string
  name: string
  location: string
  address: string
  latitude: string
  longitude: string
  image: string
  logo_image: string
  product_default_image: string
  active_date: string
  inactive_date: string
  subscription_plan: string
  delivery_by: string
  multiLanguageType: string
  selfPickUp: string
  isOnlinePayment: string
  isCOD: string
  delivery_time_date: string
  selfPickupOpenClosingTiming: string
  currency_code: string
  whatsappFlag: string
  token: string
  billing_date: string
  yearly_plan: number
  createdAt: string
  updatedAt: string
}

export interface BranchTabel {
  name: string
  email: string
  phone: string
  domain_name: string
  location: string
  status: string
  id: number
}

export const convertBranchTabelResponse = (value: BranchesCommonDetail[]) => {
  const newData: BranchTabel[] = []
  value.map((detail) => {
    const newObj = {
      name: detail.Branch.name,
      email: detail.email,
      phone: detail.phone,
      domain_name: detail.Branch.domain_name,
      location: detail.Branch.location,
      status: detail.status === "0" ? "InActive" : "Active",
      id: detail.id,
    }
    newData.push(newObj)
  })
  return newData
}

export const convertFilterOption = (value: FilterOption[]) => {
  const newData: Option[] = []
  value.map((obj) => {
    const newObj = {
      label: obj.server_name,
      value: obj.id.toString(),
    }
    newData.push(newObj)
  })
  return newData
}

export interface UpdateBranchFormField {
  email: string
  delivery_by: string
  isOnlinePayment: string
  selfPickUp: string
  isCOD: string
  whatsappFlag: string
  delivery_time_date: string
  yearly_plan: string
}
