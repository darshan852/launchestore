import TextFieldCommon from "@/src/common/formfield/textField"
import { apiClient } from "@/src/service/client"
import { useFormik } from "formik"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import * as Yup from "yup"
import common from "../property/common.json"

const ChangePassword = () => {
  const validationSchema = Yup.object().shape({
    old_password: Yup.string().required(`${common.old_password_error}`),
    new_password: Yup.string()
      .required(`${common.new_password_error}`)
      .min(6, `${common.new_password_error2}`),
    confirm_password: Yup.string()
      .oneOf(
        [Yup.ref("new_password"), undefined],
        `${common.confirm_password_error}`,
      )
      .required(`${common.confirm_password_error2}`),
  })

  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      formik.setSubmitting(true)
      try {
        const params = {
          old_password: values.old_password,
          new_password: values.new_password,
        }
        const response = await apiClient.changePassword({ params: params })
        if (response.data.success) {
          toast.success(response.data.message)
          formik.resetForm()
        }
      } catch (error: any) {
        console.error(error)
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
        <div className='flex sm:flex-row sm:items-start mt-1 flex-col items-start gap-x-5'>
          <div className='xl:min-w-[15%] lg:min-w-[20%] md:min-w-[30%] sm:min-w-[25%] min-w-[30%] pt-0 sm:pt-2'>
            <label htmlFor='oldpassword'>{common.old_password_label}</label>
          </div>
          <div className='w-[100%] sm:w-[60%] mt-2'>
            <TextFieldCommon
              type='password'
              id='old_password'
              placeholder={common.old_password_placeholder}
              label=''
              value={formik.values.old_password}
              name='old_password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.old_password && formik.errors.old_password
                  ? formik.errors.old_password
                  : null
              }
            />
          </div>
        </div>
        <div className='flex sm:flex-row sm:items-start mt-1 flex-col items-start gap-x-5'>
          <div className='xl:min-w-[15%] lg:min-w-[20%] md:min-w-[30%] sm:min-w-[25%] min-w-[30%] pt-0 sm:pt-2'>
            <label htmlFor='oldpassword'>{common.new_password_label}</label>
          </div>
          <div className='w-[100%] sm:w-[60%] mt-2'>
            <TextFieldCommon
              type='password'
              id='new_password'
              placeholder={common.new_password_placeholder}
              label=''
              value={formik.values.new_password}
              name='new_password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.new_password && formik.errors.new_password
                  ? formik.errors.new_password
                  : null
              }
            />
          </div>
        </div>
        <div className='flex sm:flex-row sm:items-start mt-1 flex-col items-start gap-x-5'>
          <div className='xl:min-w-[15%] lg:min-w-[20%] md:min-w-[30%] sm:min-w-[25%] min-w-[30%] pt-0 sm:pt-2'>
            <label htmlFor='oldpassword'>{common.confirm_password_label}</label>
          </div>
          <div className='w-[100%] sm:w-[60%] mt-2'>
            <TextFieldCommon
              type='password'
              id='confirm_password'
              placeholder={common.confirm_password_placeholder}
              label=''
              value={formik.values.confirm_password}
              name='confirm_password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
                  ? formik.errors.confirm_password
                  : null
              }
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center gap-4 mt-5 mb-5'>
          <button
            onClick={(e) => handleCancel(e)}
            type='button'
            className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            {common.cancel_button_label}
          </button>

          <button
            type='submit'
            className='inline-flex items-center px-8 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            {common.update_button_label}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default ChangePassword
