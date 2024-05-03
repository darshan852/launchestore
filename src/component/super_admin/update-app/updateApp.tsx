import TextFieldCommon from "@/src/common/formfield/textField"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import { replaceAllNumbers } from "../vendore/vendorCommon"
import { apiClient } from "@/src/service/client"
import { ToastContainer, toast } from "react-toastify"
import vendor from "../property/vendor.json"

const UpdateApp = () => {
  const validationSchema = Yup.object().shape({
    android_version: Yup.string().required(`${vendor.android_version_error}`),
    android_isforce: Yup.string().required(`${vendor.android_isforce_error}`),
    ios_isforce: Yup.string().required(`${vendor.ios_isforce_error}`),
    ios_version: Yup.string().required(`${vendor.ios_version_error}`),
  })

  const formik = useFormik({
    initialValues: {
      android_version: "",
      android_isforce: "",
      ios_isforce: "",
      ios_version: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      formik.setSubmitting(true)
      try {
        const response = await apiClient.updateApp({ params: values })
        if (response.data.success) {
          toast.success(response.data.message)
          formik.resetForm()
        }
      } catch (error: any) {
        console.log(error)
        toast.error(error.message)
      } finally {
        formik.setSubmitting(false)
      }
    },
  })
  const handleCancel = (e: any) => {
    formik.resetForm(e)
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex justify-between items-center flex-wrap'>
          <div className='xl:w-[24%] lg:w-[31%] md:w-[48%] sm:w-[48%] w-[100%]'>
            <TextFieldCommon
              id='android_version'
              placeholder={vendor.android_version_placeholder}
              label={vendor.android_version_label}
              value={formik.values.android_version}
              name='android_version'
              onChange={(e: { target: { value: any } }) => {
                formik.setFieldValue("android_version", e.target.value)
              }}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.android_version && formik.errors.android_version
                  ? formik.errors.android_version
                  : null
              }
            />
          </div>
          <div className='xl:w-[24%] lg:w-[31%] md:w-[48%] sm:w-[48%] w-[100%]'>
            <TextFieldCommon
              id='ios_version'
              placeholder={vendor.ios_version_placeholder}
              label={vendor.ios_version_label}
              value={formik.values.ios_version}
              name='ios_version'
              onChange={(e: { target: { value: any } }) => {
                formik.setFieldValue("ios_version", e.target.value)
              }}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.ios_version && formik.errors.ios_version
                  ? formik.errors.ios_version
                  : null
              }
            />
          </div>
          <div className='xl:w-[24%] lg:w-[31%] md:w-[48%] sm:w-[48%] w-[100%]'>
            <TextFieldCommon
              id='android_isforce'
              placeholder={vendor.android_isforce_placeholder}
              label={vendor.android_isforce_label}
              value={formik.values.android_isforce}
              name='android_isforce'
              onChange={(e: { target: { value: any } }) => {
                formik.setFieldValue(
                  "android_isforce",
                  replaceAllNumbers(e.target.value),
                )
              }}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.android_isforce && formik.errors.android_isforce
                  ? formik.errors.android_isforce
                  : null
              }
            />
          </div>
          <div className='xl:w-[24%] lg:w-[31%] md:w-[48%] sm:w-[48%] w-[100%]'>
            <TextFieldCommon
              id='ios_isforce'
              placeholder={vendor.ios_isforce_placeholder}
              label={vendor.ios_isforce_label}
              value={formik.values.ios_isforce}
              name='ios_isforce'
              onChange={(e: { target: { value: any } }) => {
                formik.setFieldValue(
                  "ios_isforce",
                  replaceAllNumbers(e.target.value),
                )
              }}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.ios_isforce && formik.errors.ios_isforce
                  ? formik.errors.ios_isforce
                  : null
              }
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center gap-2 m-3'>
          <button
            // variant='outlined'
            onClick={(e) => handleCancel(e)}
            className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            Cancel
          </button>

          <button
            // variant='contained'
            aria-label='Save'
            type='submit'
            className='inline-flex items-center px-8 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default UpdateApp
