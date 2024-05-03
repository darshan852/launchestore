import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import category from "../property/category.json"
import TextFieldCommon from "@/src/common/formfield/textField"
import FileSelect from "@/src/common/formfield/fileSelect"
import Image from "next/image"
import { CategoryForm } from "./categoryCommon"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/router"
import { CategoryDetail } from "@/src/service/admin/category"
import { defaultUrl } from "@/src/service/common"

interface CatoryFormProps {
  categoryDetail?: CategoryDetail
}

const CatoryForm: React.FC<CatoryFormProps> = (props) => {
  const { categoryDetail } = props
  const router = useRouter()
  const [files, setFile] = React.useState<any>({
    file: [],
    filePreview: "",
  })

  React.useEffect(() => {
    if (categoryDetail) {
      formik.setValues({
        ...formik,
        name: categoryDetail.name,
        image: categoryDetail.image,
      })

      const imageData = {
        file: [],
        filePreview: `${defaultUrl}/${categoryDetail.image}`,
      }
      setFile(imageData)
    }
  }, [categoryDetail])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`${category.category_name_error}`),
    image: Yup.string().required(`${category.category_image_error}`),
  })

  const handleUpdateCategory = async (value: CategoryForm, id: string) => {
    try {
      const formData = new FormData()
      formData.append("name", value.name)
      formData.append("category_id", id)
      if (files.file) {
        formData.append("image", files.file)
      }

      const response = await newClientInstance.updateCategory({
        params: formData,
      })
      if (response.data.success) {
        toast.success(response.data.success)
        setTimeout(() => {
          router.push("/admin/category")
        }, 1000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleAddCategory = async (value: CategoryForm) => {
    try {
      const formData = new FormData()
      formData.append("name", value.name)
      formData.append("image", files.file)

      const response = await newClientInstance.addCategory({ params: formData })
      if (response.data.success) {
        toast.success(response.data.success)
        setTimeout(() => {
          router.push("/admin/category")
        }, 1000)
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
      if (categoryDetail) {
        handleUpdateCategory(values, categoryDetail.id.toString())
      } else {
        handleAddCategory(values)
      }
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
  const handleCancel = () => {
    router.push("/admin/category")
  }
  return (
    <div className='w-full'>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex items-center lg:flex-row flex-col md:flex-col sm:flex-row gap-x-5'>
          <div className='w-[100%] lg:w-[45%] md:w-[100%] sm:w-[45%]'>
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
          <div className='w-[100%] lg:w-[45%] md:w-[100%] sm:w-[45%]'>
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
        </div>
        {files.filePreview && (
          <div className='w-[100%] sm:w-[48%]'>
            <Image
              src={files.filePreview}
              width={150}
              height={150}
              className='rounded-[5px] border border-Primary w-[120px] h-[120px] object-contain'
              alt=''
            />
          </div>
        )}
        <div className='flex justify-center items-center mt-5 '>
          <div className='flex items-center gap-2 '>
            <button
              onClick={handleCancel}
              className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
              type='button'
            >
              Cancel
            </button>
            <button
              // variant='contained'
              aria-label='Save'
              type='submit'
              className='inline-flex items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
            >
              {categoryDetail ? "Update" : "Add"} Category
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default CatoryForm
