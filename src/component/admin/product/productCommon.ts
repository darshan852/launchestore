import { Option } from "@/src/common/formfield/selectField"
import { GetAllBrand } from "@/src/service/admin/brand"
import { ProductDetail } from "@/src/service/admin/product"
import { PackageDetail, UnitDetail } from "@/src/service/admin/productSetting"
import { GetAllSubCategory } from "@/src/service/admin/subCategory"

export interface ProductFormFields {
  name: string
  category_id: string
  subcategory_id: string
  brand_id: string
  display_priority: string
  food_type: string
  content: string
  about: string
  gst: string
  tags: string[]
}

export const convertSubCategoryResponse = (data: GetAllSubCategory[]) => {
  const newData: Option[] = data.map((obj) => {
    const newObj = {
      label: obj.name,
      value: obj.id.toString(),
    }
    return newObj
  })
  return newData
}
export const convertBrandResponse = (data: GetAllBrand[]) => {
  const newData: Option[] = data.map((obj) => {
    const newObj = {
      label: obj.name,
      value: obj.id.toString(),
    }
    return newObj
  })
  return newData
}

export interface ProductTableData {
  product_name: string
  category_name: string
  subcategory_name: string
  brand_name: string
  status: string
  id: number
}

export const convertProductTableData = (data: ProductDetail[]) => {
  const newData: ProductTableData[] = data.map((obj) => {
    const newObj = {
      product_name: obj.product_name,
      category_name: obj.category_name,
      subcategory_name: obj.subcategory_name,
      brand_name: obj.brand_name,
      status: obj.status === "0" ? "InActive" : "Active",
      id: obj.id,
    }
    return newObj
  })

  return newData
}

export const convertUnitResponse = (data: UnitDetail[]) => {
  const newData: Option[] = data.map((obj) => {
    const newObj = {
      label: obj.name,
      value: obj.id.toString(),
    }
    return newObj
  })
  return newData
}

export const convertPackageResponse = (data: PackageDetail[]) => {
  const newData: Option[] = data.map((obj) => {
    const newObj = {
      label: obj.package,
      value: obj.id.toString(),
    }
    return newObj
  })
  return newData
}

export interface VariantForms {
  limited_stock: string
  bar_code: string
  weight_id: string
  variant: string
  purchase_price: string
  price: string
  package_id: string
  discount: string
  quantity: string
  max_order_quantity: string
  image: string
}
