import { FormikProps } from "formik"
import React, { useEffect, useState } from "react"
import {
  ProductFormFields,
  convertBrandResponse,
  convertSubCategoryResponse,
} from "../productCommon"
import { newClientInstance } from "@/src/service/admin/newClient"
import { toast } from "react-toastify"
import { GetAllCategory } from "@/src/service/admin/category"
import { convertCategoryResponse } from "../../subCategory/subCategoryCommon"
import SelectField from "@/src/common/formfield/selectField"
import { GetAllSubCategory } from "@/src/service/admin/subCategory"
import { GetAllBrand } from "@/src/service/admin/brand"
import TextFieldCommon from "@/src/common/formfield/textField"
import { UpdateProductDetail } from "@/src/service/admin/product"
import RadioButton from "@/src/common/formfield/radioButton"
import { getLocalStorage } from "@/src/service/localStorage"
interface FormStartProps {
  formik: FormikProps<ProductFormFields>
  tags: string[]
  setTags: any
  productDetail: UpdateProductDetail | undefined
}

const FormStart: React.FC<FormStartProps> = (props) => {
  const { formik, tags, setTags, productDetail } = props
  const [category, setCategory] = React.useState<GetAllCategory[]>([])
  const [subCategory, setSubcategory] = React.useState<GetAllSubCategory[]>([])
  const [brand, setBrand] = React.useState<GetAllBrand[]>([])
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
    if (productDetail) {
      handleGetSubCategory(productDetail.category_id)
      handleGetBrand(productDetail.category_id)
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
    formik.setFieldValue("subcategory_id", "")
    formik.setFieldValue("brand_id", "")
    formik.setFieldValue("category_id", value)
    handleGetSubCategory(Number(value))
    handleGetBrand(Number(value))
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
        <TextFieldCommon
          id='name'
          placeholder={"Enter Product Name"}
          label={"Product Name"}
          value={formik.values.name}
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
      </div>
      <div>
        <SelectField
          error={
            formik.touched.category_id && formik.errors.category_id
              ? formik.errors.category_id
              : null
          }
          label='Category'
          name='category_id'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) =>
            handleCategorySelection(e.target.value)
          }
          option={[
            {
              label: "Select Category",
              value: "",
            },
            ...convertCategoryResponse(category),
          ]}
          value={formik.values.category_id}
        />
      </div>
      <div>
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
            formik.setFieldValue("subcategory_id", e.target.value)
          }
          option={[
            {
              label: "Select SubCategory",
              value: "",
            },
            ...convertSubCategoryResponse(subCategory),
          ]}
          value={formik.values.subcategory_id}
        />
      </div>
      <div>
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
            formik.setFieldValue("brand_id", e.target.value)
          }
          option={[
            {
              label: "Select Brand",
              value: "",
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
      <div className='mb-3'>
        <div className='common-inputs'>
          <label>Tag</label>
          <input
            ref={inputRef}
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder='Type and press enter to add tags'
            className='mt-2 mb-4 w-full'
          />
        </div>
        <div className='flex gap-1 items-center flex-wrap'>
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
    </>
  )
}

export default FormStart
