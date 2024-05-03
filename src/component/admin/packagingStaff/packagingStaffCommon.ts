import { PackagingStaffDetail } from "@/src/service/admin/packagingStaff"

export interface PackagingStaffTable {
  full_name: string
  phone: string
  email: string
  id: number
  userId: number
  status: string
}

export const convertPackagingResponse = (data: PackagingStaffDetail[]) => {
  const newData: PackagingStaffTable[] = data.map((obj) => {
    const newObj = {
      full_name: obj.User.full_name,
      phone: obj.User.phone,
      email: obj.User.email,
      status: obj.User.status === "0" ? "Inactive" : "Active",
      userId: obj.user_id,
      id: obj.id,
    }
    return newObj
  })
  return newData
}
