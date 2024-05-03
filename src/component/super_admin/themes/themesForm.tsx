import { useFormik } from "formik"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import * as Yup from "yup"
import { ThemeDetail, ThemeFormData } from "./themeCommon"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { defaultUrl } from "@/src/service/common"
import TextFieldCommon from "@/src/common/formfield/textField"
import FileSelect from "@/src/common/formfield/fileSelect"
import TextArea from "@/src/common/formfield/textArea"
import { apiClient } from "@/src/service/client"
import themes from "../property/theme.json"

interface ThemesFormProps {
  data?: ThemeDetail
}

const ThemesForm: React.FC<ThemesFormProps> = (props) => {
  const { data } = props
  const router = useRouter()
  const [buttonFlag, setButtonFlag] = React.useState<boolean>(false)
  const [files, setFile] = React.useState<any>({
    file: [],
    filePreview: "",
  })
  const [previousFile, setPreviousFile] = React.useState<any>({
    file: [],
    filePreview: "",
  })

  React.useEffect(() => {
    if (data && data.image) {
      const image = {
        file: [],
        filePreview: `${defaultUrl}/${data.image}`,
      }
      setPreviousFile([image])
    }
  }, [data])

  const validationSchema = Yup.object().shape({
    theme_name: Yup.string().required(`${themes.theme_name_error}`),
    theme_key: Yup.string().required(`${themes.theme_key_error}`),
    preview_url: Yup.string().required(`${themes.preview_url_error}`),
    image: Yup.mixed().required(`${themes.image_error}`),
    theme_detail: Yup.string().required(`${themes.theme_detail_error}`),
  })

  const handleAddTheme = async (values: ThemeFormData) => {
    const formData = new FormData()
    console.log(files)
    formData.append("image", files.file)
    formData.append("name", values.theme_name)
    formData.append("details", values.theme_detail)
    formData.append("theme_key", values.theme_key)
    formData.append("preview_url", values.preview_url)
    try {
      const response = await apiClient.addTheme({ params: formData })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/super_admin/themes")
          setButtonFlag(false)
        }, 1000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      setButtonFlag(false)
    }
  }

  const handleUpdateTheme = async (values: ThemeFormData) => {
    if (data && data.id) {
      const formData = new FormData()
      files && formData.append("image", files.file)
      formData.append("name", values.theme_name)
      formData.append("details", values.theme_detail)
      formData.append("theme_key", values.theme_key)
      formData.append("preview_url", values.preview_url)
      formData.append("preview_image", data.image)
      formData.append("theme_id", data.id.toString())
      try {
        const response = await apiClient.updateTheme({ params: formData })
        if (response.data.success) {
          toast.success(response.data.message)
          setTimeout(() => {
            router.push("/super_admin/themes")
            setButtonFlag(false)
          }, 1000)
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
        setButtonFlag(false)
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      theme_name: data ? data.name : "",
      theme_key: data ? data.theme_key : "",
      preview_url: data ? data.preview_url : "",
      image: data ? data.image : "",
      theme_detail: data ? data.details : "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      if (data) {
        handleUpdateTheme(values)
      } else {
        handleAddTheme(values)
      }
    },
  })

  const handleResetForm = (e: any) => {
    formik.handleReset(e)
    router.push("/super_admin/themes")
  }

  const handleFile = (e: any) => {
    console.log(e.target.files)
    const newFile = {
      file: e.target.files[0],
      filePreview: URL.createObjectURL(e.target.files[0]),
    }
    setFile(newFile)
    console.log(newFile)
    formik.setFieldValue("image", e.target.files)
  }
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex gap-x-4 gap-y-2 flex-wrap'>
          <div className='w-[100%] xl:w-[32%] lg:w-[30%] md:w-[48%] sm:w-[48%]'>
            <TextFieldCommon
              id='theme_name'
              placeholder={themes.theme_name_placeholder}
              label={themes.theme_name_label}
              value={formik.values.theme_name}
              name='theme_name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.theme_name && formik.errors.theme_name
                  ? formik.errors.theme_name
                  : null
              }
            />
          </div>
          <div className='w-[100%] xl:w-[32%] lg:w-[30%] md:w-[48%] sm:w-[48%]'>
            <TextFieldCommon
              id='theme_key'
              placeholder={themes.theme_key_placeholder}
              label={themes.theme_key_label}
              value={formik.values.theme_key}
              name='theme_key'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.theme_key && formik.errors.theme_key
                  ? formik.errors.theme_key
                  : null
              }
            />
          </div>
          <div className='w-[100%] xl:w-[32%] lg:w-[30%] md:w-[48%] sm:w-[48%]'>
            <TextFieldCommon
              id='preview_url'
              placeholder={themes.preview_url_placeholder}
              label={themes.preview_url_label}
              value={formik.values.preview_url}
              name='preview_url'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.preview_url && formik.errors.preview_url
                  ? formik.errors.preview_url
                  : null
              }
            />
          </div>
          <div className='w-[100%] sm:w-[48%]'>
            <FileSelect
              id='image'
              placeholder={themes.image_placeholder}
              label={themes.image_label}
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
          <div className='lg:w-[48%] w-[100%]'>
            <TextArea
              row={2}
              id='theme_detail'
              placeholder={themes.theme_detail_placeholder}
              label={themes.theme_detail_label}
              value={formik.values.theme_detail}
              name='theme_detail'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.theme_detail && formik.errors.theme_detail
                  ? formik.errors.theme_detail
                  : null
              }
            />
          </div>
          {data && previousFile.length > 0 && (
            <div className='lg:w-[48%] w-[100%]'>
              <div className='flex flex-col items-start gap-1 m-1'>
                <label>Previous Image</label>
                {previousFile.map((previous: any, index: number) => (
                  <Image
                    src={previous.filePreview}
                    alt=''
                    width={100}
                    height={100}
                    key={index}
                    className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]  rounded-[10px] border-2 border-Primary object-cover'
                  />
                ))}
              </div>
            </div>
          )}
          {files.filePreview && (
            <div className='lg:w-[48%] w-[100%]'>
              <div className='flex flex-col items-start gap-2 m-3'>
                <label>Current Image</label>

                <Image
                  src={files.filePreview}
                  alt=''
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
        <div className='w-full flex justify-center items-center gap-2 m-3'>
          <button
            // variant='outlined'
            onClick={(e) => handleResetForm(e)}
            className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            {themes.cancel_button_label}
          </button>
          <button
            type='submit'
            color='Primary'
            // disableElevation
            // variant='contained'
            aria-label='Save'
            disabled={buttonFlag}
            className='inline-flex items-center px-8 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            {themes.save_button_label}
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default ThemesForm
