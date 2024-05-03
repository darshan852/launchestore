import { Option } from "@/src/common/formfield/selectField"
import { GetAllCategory } from "@/src/service/admin/category"
import { SubCategoryDetail } from "@/src/service/admin/subCategory"

export interface SubCategoryTabel {
  name: string
  category_id: number
  category_name: string
  id: number
  status: string
}

export const convertResponse = (data: SubCategoryDetail[]) => {
  const newData: SubCategoryTabel[] = []
  data.map((obj) => {
    const newObj = {
      name: obj.name,
      category_id: obj.Category?.id,
      category_name: obj.Category?.name || "",
      id: obj.id,
      status: obj.status,
    }
    newData.push(newObj)
  })
  return newData
}

export const convertCategoryResponse = (data: GetAllCategory[]) => {
  const newData: Option[] = data.map((obj) => {
    const newObj = {
      label: obj.name,
      value: obj.id.toString(),
    }
    return newObj
  })
  return newData
}

export interface AddSubCategoryForm {
  category_id: string
  subCategory: SubField[]
}

export interface SubField {
  name: string
}
