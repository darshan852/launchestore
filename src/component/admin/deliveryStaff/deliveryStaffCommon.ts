import { DeliveryStaffDetail } from "@/src/service/admin/deliveryStaff"

export interface DeliveryStaffTable {
  full_name: string
  phone: string
  email: string
  id: number
  userId: number
  status: string
}

export const convertDeliveryResponse = (data: DeliveryStaffDetail[]) => {
  const newData: DeliveryStaffTable[] = data.map((obj) => {
    const newObj = {
      full_name: obj.full_name,
      phone: obj.phone,
      email: obj.email,
      userId: obj.user_id,
      status: obj.status === "0" ? "Inactive" : "Active",
      id: obj.id,
    }
    return newObj
  })
  return newData
}
