import TextFieldCommon from "@/src/common/formfield/textField"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import CategorySelection from "./categorySelection"
import FormMiddle from "../product/productForm/formMiddle"
import { newClientInstance } from "@/src/service/admin/newClient"
import Swal from "sweetalert2"

const QuickProduct = () => {
  const [tags, setTags] = React.useState<string[]>([])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter product name"),
    category_id: Yup.string().required("Please select category"),
    subcategory_id: Yup.string().required("Please select subcategory"),
    brand_id: Yup.string().required("Please select brand"),
    display_priority: Yup.string(),
    content: Yup.string(),
    food_type: Yup.string(),
    about: Yup.string(),
    gst: Yup.string(),
    tags: Yup.array(),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      category_id: "",
      subcategory_id: "",
      brand_id: "",
      food_type: "1",
      display_priority: "",
      content: "",
      about: "",
      gst: "",
      tags: [] as unknown as string[],
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        const params = {
          category_id: Number(values.category_id),
          subcategory_id: Number(values.subcategory_id),
          brand_id: Number(values.brand_id),
          name: values.name,
          display_priority: values.display_priority,
          food_type: values.food_type,
          about: values.about,
          content: values.content,
          gst: values.gst,
          tags: tags,
        }
        const response = await newClientInstance.addProduct({ params: params })
        if (response.data.success) {
          Swal.fire("Success!", response.data.message, "success")
          formik.resetForm()
          setTags([])
        }
      } catch (error: any) {
        console.error(error)
        Swal.fire("Error!", error.message, "error")
      }
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-wrap gap-1'>
          <div className='w-[48%] p-2'>
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
            <CategorySelection formik={formik} setTags={setTags} tags={tags} />
          </div>
          <div className='w-1/2 p-2'>
            <FormMiddle formik={formik} />
          </div>
          <div className='w-full flex justify-center items-center mt-10'>
            <div className='flex items-center gap-2 '>
              <button
                onClick={formik.handleReset}
                type='button'
                className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
              >
                Cancel
              </button>
              <button
                // variant='contained'
                aria-label='Save'
                type='button'
                className='inline-flex items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
                onClick={() => formik.handleSubmit()}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default QuickProduct
