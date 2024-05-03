import SelectField from "@/src/common/formfield/selectField"
import { GetAllCategory } from "@/src/service/admin/category"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import { convertCategoryResponse } from "../subCategory/subCategoryCommon"
import TextFieldCommon from "@/src/common/formfield/textField"
import { FaCirclePlus } from "react-icons/fa6"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ToastContainer } from "react-toastify"

interface AddSubcategoryProps {
  category: GetAllCategory[]
  handleSubCategoryValue: (value: string) => void
}

const AddSubcategory: React.FC<AddSubcategoryProps> = (props) => {
  const { category, handleSubCategoryValue } = props
  const validationSchema = Yup.object().shape({
    category_id: Yup.string().required("Select category Id"),
    name: Yup.string().required("Please Enter SubCategory Name"),
  })

  const handleAddSubCategory = async (value: any) => {
    try {
      const params = {
        category_id: value.category_id,
        name: [value.name],
      }

      const response = await newClientInstance.addSubCategory({
        params: params,
      })
      if (response.data.success) {
        handleSubCategoryValue(response.data.data[0].id.toString())
      }
    } catch (error: any) {
      console.error(error)
    }
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      category_id: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      handleAddSubCategory(values)
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <SelectField
            error={formik.errors.category_id ? formik.errors.category_id : null}
            label='Category Name'
            name='category_id'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) =>
              formik.setFieldValue("category_id", e.target.value)
            }
            option={[
              {
                label: `Select Category`,
                value: "",
              },
              ...convertCategoryResponse(category),
            ]}
            value={formik.values.category_id}
          />
        </div>
        <div>
          <TextFieldCommon
            id='name'
            placeholder='Enter Subcategory Name'
            label='Subcategory Name'
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
        <div className='w-full mt-5 '>
          <button
            // variant='contained'
            aria-label='Save'
            type='submit'
            className='w-full inline-flex gap-2 justify-center items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            <FaCirclePlus />
            Add Category
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default AddSubcategory
