import SelectField from "@/src/common/formfield/selectField"
import TextFieldCommon from "@/src/common/formfield/textField"
import { GetAllCategory } from "@/src/service/admin/category"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import { convertSubCategoryResponse } from "../product/productCommon"
import { BiXCircle } from "react-icons/bi"
import { FaCirclePlus } from "react-icons/fa6"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ToastContainer, toast } from "react-toastify"

interface AddBrandProps {
  category: GetAllCategory[]
  handleBrandValue: (value: string) => void
}
const AddBrand: React.FC<AddBrandProps> = (props) => {
  const { category, handleBrandValue } = props
  const [selectedCategory, setSelectedCategory] = React.useState<any[]>([])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter brand name"),
    category_ids: Yup.array().min(1, "Please select category"),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      category_ids: [] as unknown as string[],
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const params = {
          name: values.name,
          category_ids: values.category_ids.map((r) => Number(r)),
        }
        const response = await newClientInstance.addBrand({ params: params })
        if (response.data.success) {
          handleBrandValue(response.data.data.id.toString())
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    },
  })

  const handleCategorySelection = (value: string) => {
    const filtercat = category.filter((f) => f.id.toString() === value)
    const updatedArray = [...selectedCategory]
    const findIndex = updatedArray.findIndex((f) => f.id === value)
    if (findIndex === -1) {
      updatedArray.push(filtercat[0])
    }
    setSelectedCategory(updatedArray)
    formik.setFieldValue(
      "category_ids",
      updatedArray.map((e) => e.id),
    )
  }

  const handleRemoveCategory = (index: number) => {
    const updatedArray = [...selectedCategory]
    updatedArray.splice(index, 1)
    setSelectedCategory(updatedArray)
    formik.setFieldValue(
      "category_ids",
      updatedArray.map((e) => e.id),
    )
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextFieldCommon
            id='name'
            placeholder='Enter Brand Name'
            label='Brand Name'
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
              formik.errors.category_ids
                ? formik.errors.category_ids.toString()
                : null
            }
            label='Category Name'
            name='category_id'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) =>
              handleCategorySelection(e.target.value)
            }
            option={[
              {
                label: `Select Category`,
                value: "",
              },
              ...convertSubCategoryResponse(category),
            ]}
            value={""}
          />
        </div>
        <div className='w-full flex flex-wrap gap-1 px-2'>
          {selectedCategory.length > 0 &&
            selectedCategory.map((cat, index) => (
              <div
                key={cat.id}
                className='bg-[black] text-white p-1 flex gap-1 items-center text-lg rounded'
              >
                {cat.name}
                <BiXCircle
                  onClick={() => handleRemoveCategory(index)}
                  className='cursor-pointer'
                />
              </div>
            ))}
        </div>
        <div className='w-full mt-5 '>
          <button
            aria-label='Save'
            type='submit'
            className='w-full inline-flex gap-2 justify-center items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            <FaCirclePlus />
            Add Brand
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default AddBrand
