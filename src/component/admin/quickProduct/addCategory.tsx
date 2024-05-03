import React from "react"
import * as Yup from "yup"
import category from "../property/category.json"
import { useFormik } from "formik"
import TextFieldCommon from "@/src/common/formfield/textField"
import FileSelect from "@/src/common/formfield/fileSelect"
import { FaCirclePlus } from "react-icons/fa6"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ToastContainer, toast } from "react-toastify"
import { CategoryForm } from "../category/categoryCommon"

interface AddCategoryProps {
  handleCategoryValue: (value: string) => void
}
const AddCategory: React.FC<AddCategoryProps> = (props) => {
  const { handleCategoryValue } = props
  const [files, setFile] = React.useState<any>({
    file: [],
    filePreview: "",
  })
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`${category.category_name_error}`),
    image: Yup.string().required(`${category.category_image_error}`),
  })

  const handleAddCategory = async (value: CategoryForm) => {
    try {
      const formData = new FormData()
      formData.append("name", value.name)
      formData.append("image", files.file)

      const response = await newClientInstance.addCategory({ params: formData })
      if (response.data.success) {
        handleCategoryValue(response.data.data.id.toString())
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      handleAddCategory(values)
    },
  })

  const handleFile = (e: any) => {
    console.log(e.target.files)
    const newFile = {
      file: e.target.files[0],
      filePreview: URL.createObjectURL(e.target.files[0]),
    }
    setFile(newFile)
    console.log(newFile)
    formik.setFieldValue("image", newFile.filePreview)
  }
  return (
    <div className='w-full '>
      <form onSubmit={formik.handleSubmit}>
        <div className='w-full'>
          <TextFieldCommon
            id='name'
            placeholder={category.category_name_placeholder}
            label={category.category_name_label}
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
        <div className='w-full'>
          <FileSelect
            id='image'
            placeholder={category.category_image_placeholder}
            label={category.category_name_label}
            value={""}
            name='image'
            onChange={(e: any) => handleFile(e)}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.image && formik.errors.image
                ? formik.errors.image
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

export default AddCategory
