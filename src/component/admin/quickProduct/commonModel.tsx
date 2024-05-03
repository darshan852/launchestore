import React from "react"
import AddCategory from "./addCategory"
import AddSubcategory from "./addSubcategory"
import AddBrand from "./addBrand"
import CommonTab from "@/src/common/commonTabModel/commonTab"
import { FormikProps } from "formik"
import { ProductFormFields } from "../product/productCommon"
import { GetAllCategory } from "@/src/service/admin/category"
interface CommonModelProps {
  open: boolean
  setOpen: (value: boolean) => void
  formik: FormikProps<ProductFormFields>
  getData: () => void
  category: GetAllCategory[]
  activeTab: number
  setActiveTab: (value: number) => void
  getSubCategory: (id: number) => void
  getBrand: (id: number) => void
}

const CommonModel: React.FC<CommonModelProps> = (props) => {
  const {
    open,
    setOpen,
    formik,
    getData,
    category,
    activeTab,
    setActiveTab,
    getSubCategory,
    getBrand,
  } = props

  const handleCategoryValue = (value: string) => {
    formik.setFieldValue("category_id", value)
    getData()
    getSubCategory(Number(value))
    getBrand(Number(value))
    setOpen(false)
  }
  const handleSubCategoryValue = (value: string) => {
    // formik.setFieldValue("subcategory_id", value)
    getSubCategory(Number(formik.values.category_id))
    setOpen(false)
  }
  const handleBrandValue = (value: string) => {
    // formik.setFieldValue("subcategory_id", value)
    getBrand(Number(formik.values.category_id))
    setOpen(false)
  }
  const tabs = [
    {
      id: 1,
      label: "Category",
      content: <AddCategory handleCategoryValue={handleCategoryValue} />,
    },
    {
      id: 2,
      label: "Subcategory",
      content: (
        <AddSubcategory
          category={category}
          handleSubCategoryValue={handleSubCategoryValue}
        />
      ),
    },
    {
      id: 3,
      label: "Brand",
      content: (
        <AddBrand category={category} handleBrandValue={handleBrandValue} />
      ),
    },
  ]

  return (
    <CommonTab
      open={open}
      setOpen={setOpen}
      tabOption={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  )
}

export default CommonModel
