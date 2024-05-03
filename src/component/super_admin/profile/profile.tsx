import TextFieldCommon from "@/src/common/formfield/textField"
import { apiClient } from "@/src/service/client"
import { getLocalStorage, setLocalStorage } from "@/src/service/localStorage"
import { useFormik } from "formik"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import * as Yup from "yup"
import common from "../property/common.json"

const Profile = () => {
  const [userDetail, setUserDetail] = React.useState<any>()

  React.useEffect(() => {
    const roleDetail = getLocalStorage("userDetail")
    if (roleDetail) {
      const userDetails = JSON.parse(roleDetail)
      formik.setValues({
        ...formik,
        full_name: userDetails.name,
        email: userDetails.email,
      })
      setUserDetail(userDetails)
    }
  }, [])

  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required(`${common.compony_name_error}`),
    email: Yup.string().required(`${common.email_error}`),
  })

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      formik.setSubmitting(true)
      try {
        const formData = new FormData()
        formData.append("email", values.email)
        formData.append("full_name", values.full_name)

        const response = await apiClient.updateProfile({ params: formData })
        if (response.data.success) {
          console.log(response.data.data)
          const updateData = {
            name: response.data.data.full_name,
            email: userDetail.email,
            id: userDetail.id,
          }
          setLocalStorage("userDetail", JSON.stringify(updateData))
          setUserDetail(updateData)
          toast.success("response.data.message")
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    },
  })

  const handleCancel = () => {
    formik.setValues({
      ...formik,
      full_name: userDetail.name,
      email: userDetail.email,
    })
  }
  return (
    <div className='p-4'>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-wrap gap-x-4 gap-y-2'>
          <div className='xxl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[45%] sm:w-[45%] w-[100%]'>
            <TextFieldCommon
              id='full_name'
              placeholder={common.compony_name_placeholder}
              label={common.compony_name_label}
              value={formik.values.full_name}
              name='full_name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.full_name && formik.errors.full_name
                  ? formik.errors.full_name
                  : null
              }
            />
          </div>
          <div className='xxl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[45%] sm:w-[45%] w-[100%]'>
            <TextFieldCommon
              id='email'
              placeholder={common.email_placeholder}
              label={common.email_label}
              value={formik.values.email}
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
              disabled={true}
            />
          </div>
        </div>
        <div className='flex justify-center items-center mt-5'>
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
              Update
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Profile
