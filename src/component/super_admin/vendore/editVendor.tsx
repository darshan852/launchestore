import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import FormStart from "./vendorEditForm/formStart"
import FormMiddle from "./vendorEditForm/formMiddle"
import AppVersionForm from "./vendorEditForm/appVersionForm"
import { useRouter } from "next/router"
import { GetVendorDetail } from "@/src/service/vendore"
import { toast } from "react-toastify"
import { apiClient } from "@/src/service/client"
import vendor from "../property/vendor.json"

interface EditVendorProps {
  vendorId: string
}
const EditVendor: React.FC<EditVendorProps> = (props) => {
  const { vendorId } = props
  const router = useRouter()
  const [vendoreDetail, setVendorDetail] = React.useState<GetVendorDetail>()
  const [message, setMessage] = React.useState<string>("")

  const getVendorDetail = async (id: string) => {
    try {
      const params = {
        vendor_id: id,
      }
      const response = await apiClient.getVendorDetail({ params: params })
      if (response.data.success) {
        setVendorDetail(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  React.useEffect(() => {
    if (vendorId) {
      getVendorDetail(vendorId)
    }
  }, [vendorId])

  React.useEffect(() => {
    formik.setValues({
      ...formik,
      email: vendoreDetail ? vendoreDetail.email : "",
      login_type: vendoreDetail ? vendoreDetail.Vendor.login_type : "",
      approved: vendoreDetail
        ? vendoreDetail.Vendor.approved_branch.toString()
        : "",
      display_price_with_gst: vendoreDetail?.Vendor.display_price_with_gst
        ? vendoreDetail.Vendor.display_price_with_gst
        : "",
      webTitle: vendoreDetail ? vendoreDetail.Vendor.webTitle : "",
      language_support: vendoreDetail
        ? vendoreDetail.Vendor.language_support
        : "",
      locality: vendoreDetail ? vendoreDetail.Vendor.locality : "",
      store_type: vendoreDetail?.Vendor.store_type
        ? vendoreDetail.Vendor.store_type
        : "",
      is_ecommerce: vendoreDetail ? vendoreDetail.Vendor.is_ecommerce : "",
      supported_language: vendoreDetail
        ? JSON.parse(vendoreDetail.Vendor.supported_language)
        : ([] as number[]),
      theme_name: vendoreDetail ? vendoreDetail.Vendor.theme_name : "",
      multi_language: vendoreDetail ? vendoreDetail.Vendor.multi_language : "",
      android_version: vendoreDetail
        ? vendoreDetail.Vendor.android_version
        : "",
      ios_version: vendoreDetail ? vendoreDetail.Vendor.ios_version : "",
      android_isforce: vendoreDetail
        ? vendoreDetail.Vendor.android_isforce
        : "",
      ios_isforce: vendoreDetail ? vendoreDetail.Vendor.ios_isforce : "",
    })
  }, [vendoreDetail])

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(`${vendor.email_error_2}`)
      .required(`${vendor.email_error}`),
    login_type: Yup.string().required(`${vendor.login_type_error}`),
    approved: Yup.string().required(`${vendor.approved_branch_error}`),
    display_price_with_gst: Yup.string().required(
      `${vendor.price_with_gst_error}`,
    ),
    webTitle: Yup.string().required(`${vendor.web_title_error}`),
    language_support: Yup.string().required(`${vendor.supported_lang_error}`),
    locality: Yup.string(),
    store_type: Yup.string(),
    is_ecommerce: Yup.string(),
    supported_language: Yup.array(),
    theme_name: Yup.string().required(`${vendor.themes_error}`),
    multi_language: Yup.string(),
    android_version: Yup.string().required(`${vendor.android_version_error}`),
    ios_version: Yup.string().required(`${vendor.ios_version_error}`),
    android_isforce: Yup.string().required(`${vendor.android_isforce_error}`),
    ios_isforce: Yup.string().required(`${vendor.ios_isforce_error}`),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      login_type: "",
      approved: "",
      display_price_with_gst: "",
      webTitle: "",
      language_support: "",
      locality: "",
      store_type: "",
      is_ecommerce: "",
      supported_language: [] as number[],
      theme_name: "",
      multi_language: "",
      android_version: "",
      ios_version: "",
      android_isforce: "",
      ios_isforce: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true)
      console.log(values)
      if (vendoreDetail?.Vendor.user_id) {
        const params = {
          email: values.email,
          login_type: values.login_type,
          approved: values.approved,
          display_price_with_gst: values.display_price_with_gst,
          webTitle: values.webTitle,
          language_support: values.language_support,
          locality: values.locality,
          store_type: values.store_type,
          is_ecommerce: values.is_ecommerce,
          supported_language: values.supported_language,
          theme_name: values.theme_name,
          multi_language: values.multi_language,
          android_version: values.android_version,
          ios_version: values.ios_version,
          android_isforce: values.android_isforce,
          ios_isforce: values.ios_isforce,
          user_id: vendoreDetail.Vendor.user_id,
        }
        try {
          const response = await apiClient.updateVendor({ params: params })
          if (response.data.success) {
            toast.success(response.data.message)
            router.push("/super_admin/vendors")
          }
        } catch (error: any) {
          console.error(error)
          if (error.errors.length > 0) {
            let errormessage = ""
            error.errors.map((e: any) => {
              // if (e.path === "email") {
              //   formik.errors.email = e.msg
              // }
              errormessage = errormessage + e.msg + " , "
            })
            setMessage(errormessage)
          }
        } finally {
          formik.setSubmitting(false)
        }
      }
    },
  })
  const handleCancel = (e: any) => {
    formik.resetForm(e)
    router.push("/super_admin/vendors")
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='p-2 flex gap-2 flex-wrap'>
          <FormStart formik={formik} />
          <FormMiddle formik={formik} />
        </div>
        <AppVersionForm formik={formik} />
        <div className='text-[red] w-full flex justify-center'>
          <span>{message}</span>
        </div>
        <div className='w-full flex justify-center items-center gap-2 m-3'>
          <button
            // variant='outlined'
            onClick={(e) => handleCancel(e)}
            className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            {vendor.vendor_form_button2}
          </button>
          <button
            color='Primary'
            // variant='contained'
            aria-label='Save'
            type='submit'
            className='inline-flex items-center px-8 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            {vendor.vendor_form_button3}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditVendor
