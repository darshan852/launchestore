import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import ConfigFormStart from "./configUpdateForm/configFormStart"
import { ToastContainer, toast } from "react-toastify"
import { apiClient } from "@/src/service/client"
import { ConfigDetail } from "./configurationCommon"
import { useRouter } from "next/router"
import config from "../property/config.json"

interface UpdateConfigProps {
  configId: string
}

const UpdateConfig: React.FC<UpdateConfigProps> = (props) => {
  const { configId } = props
  const router = useRouter()
  const [configDetail, setConfigDetail] = React.useState<ConfigDetail>()
  const handleGetConfigDetail = React.useCallback(async (id: string) => {
    try {
      const params = {
        configId: id,
      }
      const response = await apiClient.getConfigDetail({ params: params })
      if (response.data.success) {
        setConfigDetail(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [])

  React.useEffect(() => {
    if (configId) {
      handleGetConfigDetail(configId)
    }
  }, [handleGetConfigDetail, configId])

  React.useEffect(() => {
    if (configDetail) {
      formik.setValues({
        ...formik,
        user_firebase_key: configDetail.user_firebase_key
          ? configDetail.user_firebase_key
          : "",
        staff_firebase_key: configDetail.staff_firebase_key
          ? configDetail.staff_firebase_key
          : "",
        delivery_firebase_key: configDetail.delivery_firebase_key
          ? configDetail.delivery_firebase_key
          : "",
        key_id: configDetail.key_id ? configDetail.key_id : "",
        team_id: configDetail.team_id ? configDetail.team_id : "",
        user_bandle_id: configDetail.user_bandle_id
          ? configDetail.user_bandle_id
          : "",
        staff_bandle_id: configDetail.staff_bandle_id
          ? configDetail.staff_bandle_id
          : "",
        admin_bandle_id: configDetail.admin_bandle_id
          ? configDetail.admin_bandle_id
          : "",
        delivery_bandle_id: configDetail.delivery_bandle_id
          ? configDetail.delivery_bandle_id
          : "",
        facebook_client_id: configDetail.facebook_client_id
          ? configDetail.facebook_client_id
          : "",
        facebook_secret_id: configDetail.facebook_secret_id
          ? configDetail.facebook_secret_id
          : "",
        google_client_id: configDetail.google_client_id
          ? configDetail.google_client_id
          : "",
        google_secret_id: configDetail.google_secret_id
          ? configDetail.google_secret_id
          : "",
        android_app_link: configDetail.android_app_link
          ? configDetail.android_app_link
          : "",
        ios_app_link: configDetail.ios_app_link
          ? configDetail.ios_app_link
          : "",
        contact_number: configDetail.contact_number
          ? configDetail.contact_number
          : "",
        contact_email: configDetail.contact_email
          ? configDetail.contact_email
          : "",
        contact_us_address: configDetail.contact_us_address
          ? configDetail.contact_us_address
          : "",
        facebook_link: configDetail.facebook_link
          ? configDetail.facebook_link
          : "",
        instagram_link: configDetail.instagram_link
          ? configDetail.instagram_link
          : "",
        twitter_link: configDetail.twitter_link
          ? configDetail.twitter_link
          : "",
        google_plus_link: configDetail.google_plus_link
          ? configDetail.google_plus_link
          : "",
        p8_file: configDetail.p8_file ? configDetail.p8_file : "",
        firebase_url: configDetail.firebase_url
          ? configDetail.firebase_url
          : "",
        firebase_token: configDetail.firebase_token
          ? configDetail.firebase_token
          : "",
        firebase_node: configDetail.firebase_node
          ? configDetail.firebase_node
          : "",
      })
    }
  }, [configDetail])

  const validationSchema = Yup.object().shape({
    user_firebase_key: Yup.string(),
    staff_firebase_key: Yup.string().required(
      `${config.staff_firebase_key_error}`,
    ),
    delivery_firebase_key: Yup.string(),
    key_id: Yup.string().required(`${config.key_id_error}`),
    team_id: Yup.string().required(`${config.team_id_error}`),
    user_bandle_id: Yup.string(),
    staff_bandle_id: Yup.string().required(`${config.staff_bandle_id_error}`),
    admin_bandle_id: Yup.string(),
    delivery_bandle_id: Yup.string().required(
      `${config.delivery_bandle_id_error}`,
    ),
    facebook_client_id: Yup.string(),
    facebook_secret_id: Yup.string(),
    google_client_id: Yup.string(),
    google_secret_id: Yup.string(),
    android_app_link: Yup.string(),
    ios_app_link: Yup.string(),
    contact_number: Yup.string().required(`${config.contact_number_error}`),
    contact_email: Yup.string()
      .email(`${config.contact_email_error2}`)
      .required(`${config.contact_email_error}`),
    contact_us_address: Yup.string(),
    facebook_link: Yup.string(),
    instagram_link: Yup.string(),
    twitter_link: Yup.string(),
    google_plus_link: Yup.string(),
    p8_file: Yup.string(),
    firebase_url: Yup.string(),
    firebase_token: Yup.string(),
    firebase_node: Yup.string(),
  })

  const formik = useFormik({
    initialValues: {
      user_firebase_key: "",
      staff_firebase_key: "",
      delivery_firebase_key: "",
      key_id: "",
      team_id: "",
      user_bandle_id: "",
      staff_bandle_id: "",
      admin_bandle_id: "",
      delivery_bandle_id: "",
      facebook_client_id: "",
      facebook_secret_id: "",
      google_client_id: "",
      google_secret_id: "",
      android_app_link: "",
      ios_app_link: "",
      contact_number: "",
      contact_email: "",
      contact_us_address: "",
      facebook_link: "",
      instagram_link: "",
      twitter_link: "",
      google_plus_link: "",
      p8_file: "",
      firebase_url: "",
      firebase_token: "",
      firebase_node: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true)
      try {
        if (configId) {
          const params = {
            ...values,
            id: configId,
          }
          const response = await apiClient.updateConfig({ params: params })
          if (response.data.success) {
            toast.success(response.data.message)
            setTimeout(() => {
              router.push("/super_admin/configuration")
            }, 1000)
          }
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
    router.push("/super_admin/configuration")
    formik.resetForm(e)
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <ConfigFormStart formik={formik} />
          <div className='w-full flex justify-center items-center gap-4'>
            <button
              onClick={(e) => handleCancel(e)}
              type='button'
              className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
            >
              {config.cancel_button_label}
            </button>

            <button
              type='submit'
              className='inline-flex items-center px-8 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary hover:bg-transparent hover:text-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
            >
              {config.update_button_label}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default UpdateConfig
