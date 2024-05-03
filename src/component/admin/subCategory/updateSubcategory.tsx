import React from "react"
import * as Yup from "yup"
import subCategory from "../property/subCategory.json"
import { useFormik } from "formik"
import { GetSubcategoryDetail } from "@/src/service/admin/subCategory"
import { newClientInstance } from "@/src/service/admin/newClient"
import { useRouter } from "next/router"
import SelectField from "@/src/common/formfield/selectField"
import { convertCategoryResponse } from "./subCategoryCommon"
import { ToastContainer, toast } from "react-toastify"
import { GetAllCategory } from "@/src/service/admin/category"
import TextFieldCommon from "@/src/common/formfield/textField"

interface UpdateSubcategoryProps {
  id: string
}

const UpdateSubcategory = (props: UpdateSubcategoryProps) => {
  const { id } = props
  const router = useRouter()
  const [subCategorylist, setSubCategory] =
    React.useState<GetSubcategoryDetail>()

  const [category, setCategory] = React.useState<GetAllCategory[]>([])

  const handleGetCategoryList = React.useCallback(async () => {
    try {
      const response = await newClientInstance.getAllCategory()
      if (response.data.success) {
        setCategory(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      setTimeout(() => {
        router.push("/admin/sub-category")
      }, 2000)
    }
  }, [])

  const handleGetSubCategoryDetail = React.useCallback(async () => {
    try {
      const params = {
        id: id,
      }
      const response = await newClientInstance.getSubCategoryDetail({
        params: params,
      })
      if (response.data.success) {
        setSubCategory(response.data.data)
        handleGetCategoryList()
      }
    } catch (error) {
      console.error(error)
      router.push("/admin/category")
    }
  }, [id])

  React.useEffect(() => {
    handleGetSubCategoryDetail()
  }, [handleGetSubCategoryDetail])

  React.useEffect(() => {
    if (subCategorylist) {
      formik.setValues({
        ...formik,
        category_id: subCategorylist.category_id.toString(),
        name: subCategorylist.name,
      })
    }
  }, [subCategorylist])

  const validationSchema = Yup.object().shape({
    category_id: Yup.string().required(`${subCategory.category_id_error}`),
    name: Yup.string().required(`${subCategory.name_error}`),
  })

  const formik = useFormik({
    initialValues: {
      category_id: "",
      name: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        if (subCategorylist) {
          const params = {
            category_id: values.category_id,
            subcategory_id: subCategorylist.id,
            name: values.name,
          }
          const response = await newClientInstance.updateSubcategory({
            params: params,
          })
          if (response.data.success) {
            toast.success(response.data.message)
            setTimeout(() => {
              router.push("/admin/sub-category")
            }, 1000)
          }
        }
      } catch (error: any) {
        console.log(error)
        toast.error(error.message)
      }
    },
  })

  const handleCancel = () => {
    router.push("/admin/sub-category")
  }
  return (
    <>
      <div className=''>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex items-center sm:flex-row flex-col gap-x-5 gap-y-2'>
            <div className='w-[100%] lg:w-[45%] md:w-[45%] sm:w-[45%]'>
              <SelectField
                error={
                  formik.touched.category_id && formik.errors.category_id
                    ? formik.errors.category_id
                    : null
                }
                label={subCategory.category_id_label}
                name='category_id'
                onBlur={formik.handleBlur}
                onChange={(e: { target: { value: any } }) =>
                  formik.setFieldValue("category_id", e.target.value)
                }
                option={[
                  {
                    label: `${subCategory.category_id_placeholder}`,
                    value: "",
                  },
                  ...convertCategoryResponse(category),
                ]}
                value={formik.values.category_id}
              />
            </div>
            <div className='w-[100%] lg:w-[45%] md:w-[45%] sm:w-[45%]'>
              <TextFieldCommon
                id='name'
                placeholder={subCategory.name_placeholder}
                label={subCategory.name_label}
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
          </div>

          <div className='flex justify-center items-center gap-4 m-8'>
            <button
              onClick={handleCancel}
              type='button'
              className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
            >
              {/* {common.cancel_button_label} */}
              Cancel
            </button>

            <button
              type='submit'
              className='inline-flex items-center px-8 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
            >
              {/* {common.save_button_label} */}
              Update subCategory
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  )
}

export default UpdateSubcategory
