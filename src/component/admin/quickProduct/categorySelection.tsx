import { FormikProps } from "formik"
import React, { useEffect, useState } from "react"
import {
  ProductFormFields,
  convertBrandResponse,
  convertSubCategoryResponse,
} from "../product/productCommon"
import CommonModel from "./commonModel"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ToastContainer, toast } from "react-toastify"
import { GetAllCategory } from "@/src/service/admin/category"
import SelectField from "@/src/common/formfield/selectField"
import subCategoryProperty from "../property/subCategory.json"
import { convertCategoryResponse } from "../subCategory/subCategoryCommon"
import { GetAllSubCategory } from "@/src/service/admin/subCategory"
import { GetAllBrand } from "@/src/service/admin/brand"
import TextFieldCommon from "@/src/common/formfield/textField"
import RadioButton from "@/src/common/formfield/radioButton"
import { getLocalStorage } from "@/src/service/localStorage"

interface CategorySelectionProps {
  formik: FormikProps<ProductFormFields>
  setTags: any
  tags: string[]
}

const CategorySelection: React.FC<CategorySelectionProps> = (props) => {
  const { formik, setTags, tags } = props
  const [open, setOpen] = React.useState<boolean>(false)
  const [activeTab, setActiveTab] = React.useState<number>(1)

  const [brand, setBrand] = React.useState<GetAllBrand[]>([])
  const [category, setCategory] = React.useState<GetAllCategory[]>([])
  const [subCategory, setSubcategory] = React.useState<GetAllSubCategory[]>([])
  const [inputValue, setInputValue] = useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isFood, setIsFood] = React.useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the input field, add tag to array
        if (inputValue.trim() !== "") {
          setTags((prevTags: any) => [...prevTags, inputValue.trim()])
          setInputValue("") // Clear input
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [inputValue])

  useEffect(() => {
    const handleBackspace = (event: KeyboardEvent) => {
      if (event.key === "Backspace" && inputValue === "" && tags.length > 0) {
        // Pressed backspace with empty input, remove last tag from array
        setTags((prevTags: string | any[]) => prevTags.slice(0, -1))
      }
    }

    document.addEventListener("keydown", handleBackspace)

    return () => {
      document.removeEventListener("keydown", handleBackspace)
    }
  }, [tags, inputValue])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      // Pressed enter with non-empty input, add tag to array
      setTags((prevTags: any) => [...prevTags, inputValue.trim()])
      setInputValue("") // Clear input
    }
  }

  const handleGetCategoryList = React.useCallback(async () => {
    try {
      const response = await newClientInstance.getAllCategory()
      if (response.data.success) {
        setCategory(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [])

  React.useEffect(() => {
    handleGetCategoryList()
    const userDetail = getLocalStorage("userDetail")
    if (userDetail) {
      const jsonData = JSON.parse(userDetail)
      if (jsonData.foodtype === 0) {
        setIsFood(false)
      } else {
        setIsFood(true)
      }
    }
  }, [handleGetCategoryList])

  const handleGetSubCategory = async (id: number) => {
    try {
      const params = {
        category_id: id,
      }
      const response = await newClientInstance.getAllSubCategory({
        params: params,
      })
      if (response.data.success) {
        setSubcategory(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleGetBrand = async (id: number) => {
    try {
      const params = {
        category_id: id,
      }
      const response = await newClientInstance.GetAllBrandList({
        params: params,
      })
      if (response.data.success) {
        setBrand(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleCategorySelection = (value: string) => {
    if (value === "add_category") {
      setActiveTab(1)
      setOpen(true)
    } else {
      formik.setFieldValue("category_id", value)
      handleGetSubCategory(Number(value))
      handleGetBrand(Number(value))
    }
  }

  const handleSubCategory = (value: string) => {
    if (value === "add_subcategory") {
      setActiveTab(2)
      setOpen(true)
    } else {
      formik.setFieldValue("subcategory_id", value)
    }
  }
  const handleBrand = (value: string) => {
    if (value === "add_brand") {
      setActiveTab(3)
      setOpen(true)
    } else {
      formik.setFieldValue("brand_id", value)
    }
  }
  const option = [
    {
      id: 1,
      title: "Veg.",
      value: "0",
    },
    {
      id: 2,
      title: "Non Veg.",
      value: "1",
    },
    {
      id: 3,
      title: "None",
      value: "3",
    },
  ]
  return (
    <>
      <div className='w-full'>
        <SelectField
          error={
            formik.errors.category_id && formik.touched.category_id
              ? formik.errors.category_id
              : null
          }
          label={subCategoryProperty.category_id_label}
          name='category_id'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) =>
            handleCategorySelection(e.target.value)
          }
          option={[
            {
              label: `${subCategoryProperty.category_id_placeholder}`,
              value: "",
            },
            {
              label: "Add New Category",
              value: "add_category",
            },
            ...convertCategoryResponse(category),
          ]}
          value={formik.values.category_id}
        />
      </div>

      <div className='w-full'>
        <SelectField
          error={
            formik.touched.subcategory_id && formik.errors.subcategory_id
              ? formik.errors.subcategory_id
              : null
          }
          label='Subcategory'
          name='subcategory_id'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) =>
            handleSubCategory(e.target.value)
          }
          option={[
            {
              label: "Select SubCategory",
              value: "",
            },
            {
              label: "Add New SubCategory",
              value: "add_subcategory",
            },
            ...convertSubCategoryResponse(subCategory),
          ]}
          value={formik.values.subcategory_id}
        />
      </div>
      <div className='w-full'>
        <SelectField
          error={
            formik.touched.brand_id && formik.errors.brand_id
              ? formik.errors.brand_id
              : null
          }
          label='Brand '
          name='brand_id'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) =>
            handleBrand(e.target.value)
          }
          option={[
            {
              label: "Select Brand",
              value: "",
            },
            {
              label: "Add New Brand",
              value: "add_brand",
            },
            ...convertBrandResponse(brand),
          ]}
          value={formik.values.brand_id}
        />
      </div>
      {isFood && (
        <div className='w-full mt-4'>
          <RadioButton
            error={null}
            label='Food Type'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) =>
              formik.setFieldValue("food_type", e.target.value)
            }
            name='food_type'
            value={formik.values.food_type}
            option={option}
          />
        </div>
      )}
      <div className='w-full'>
        <TextFieldCommon
          id='display_priority'
          placeholder={"Enter Display Priority :"}
          label={"Display Priority"}
          value={formik.values.display_priority}
          name='display_priority'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.display_priority && formik.errors.display_priority
              ? formik.errors.display_priority
              : null
          }
        />
      </div>
      <div>
        <div className='common-inputs'>
          <label>Tag</label>
          <input
            ref={inputRef}
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder='Type and press enter to add tags'
            className='mt-2 mb-2 w-full'
          />
        </div>
        <div className='flex gap-1 items-center flex-wrap mb-3'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='tag text-[14px] px-2 py-1 bg-Primary text-white rounded-[5px] mb-2'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className='w-full '>
        <TextFieldCommon
          id='gst'
          placeholder={"Enter GST"}
          label={"GST"}
          value={formik.values.gst}
          name='gst'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.gst && formik.errors.gst ? formik.errors.gst : null
          }
        />
      </div>
      <CommonModel
        open={open}
        setOpen={setOpen}
        formik={formik}
        getData={handleGetCategoryList}
        category={category}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        getSubCategory={handleGetSubCategory}
        getBrand={handleGetBrand}
      />
      <ToastContainer />
    </>
  )
}

export default CategorySelection
