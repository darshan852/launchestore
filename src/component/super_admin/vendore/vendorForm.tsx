import React from "react"
import "react-phone-input-2/lib/style.css"
import VendoreFormFooter from "./vendorForm/vendoreFormFooter"
import VendoreFormStart from "./vendorForm/vendoreFormStart"
import VendorFormMiddle from "./vendorForm/vendorFormMiddle"
import VendorFormEnd from "./vendorForm/vendorFormEnd"
import * as Yup from "yup"
import { useFormik } from "formik"
import { apiClient } from "@/src/service/client"
import { useRouter } from "next/router"
import { ToastContainer, toast } from "react-toastify"
import vendor from "../property/vendor.json"

const VendorForm = () => {
  const router = useRouter()
  const [message, setMessage] = React.useState<string>("")
  const validationSchema = Yup.object().shape({
    domain_type: Yup.string().required(`${vendor.domain_type_error}`),
    database: Yup.string(),
    login_type: Yup.string().required(`${vendor.login_type_error}`),
    domain_name: Yup.string().required(`${vendor.domain_name_error}`),
    name: Yup.string().required(`${vendor.shop_name_error}`),
    ownername: Yup.string().required(`${vendor.shop_owner_name_error}`),
    store_type: Yup.string().required(`${vendor.store_type_error}`),
    supported_language: Yup.array(),
    image: Yup.mixed().required(`${vendor.shop_image_error}`),
    email: Yup.string()
      .email(`${vendor.email_error_2}`)
      .required(`${vendor.email_error}`),
    password: Yup.string()
      .required(`${vendor.password_error}`)
      .min(6, `${vendor.password_error2}`),
    confirm_Pass: Yup.string()
      .oneOf([Yup.ref("password"), undefined], `${vendor.confirm_pass_error2}`)
      .required(`${vendor.confirm_pass_error}`),
    mobile_number: Yup.string().required(`${vendor.phone_error}`),
    address: Yup.string().required(`${vendor.address_error}`),
    location: Yup.string().required(`${vendor.locality_error}`),
    latitude: Yup.number().required("latitude is required"),
    longitude: Yup.number().required("longitude is required"),
    language_support: Yup.string().required(`${vendor.primary_lang_error}`),
    theme_name: Yup.string().required(`${vendor.themes_error}`),
    is_ecommerce: Yup.string(),
  })

  const formik = useFormik({
    initialValues: {
      domain_type: "",
      database: "",
      login_type: "",
      domain_name: "",
      name: "",
      ownername: "",
      store_type: "",
      supported_language: [] as number[],
      image: "",
      email: "",
      password: "",
      confirm_Pass: "",
      mobile_number: "",
      address: "",
      location: "",
      locality: "",
      latitude: 0,
      longitude: 0,
      language_support: "",
      theme_name: "",
      is_ecommerce: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      setMessage("")
      const formData = new FormData()
      formData.append("image", values.image)
      formData.append("domain_type", values.domain_type)
      formData.append("database", values.database)
      formData.append("login_type", values.login_type)
      formData.append("domain_name", values.domain_name)
      formData.append("name", values.name)
      formData.append("ownername", values.ownername)
      formData.append("store_type", values.store_type)
      formData.append("email", values.email)
      formData.append("password", values.password)
      formData.append("confirm_Pass", values.confirm_Pass)
      formData.append("mobile_number", values.mobile_number)
      formData.append("address", values.address)
      formData.append("location", values.location)
      formData.append("locality", values.locality)
      formData.append("latitude", values.latitude.toString())
      formData.append("longitude", values.longitude.toString())
      formData.append("language_support", values.language_support)
      formData.append("theme_name", values.theme_name)
      formData.append("is_ecommerce", values.is_ecommerce)
      formData.append(
        "supported_language",
        JSON.stringify(values.supported_language),
      )

      try {
        const response = await apiClient.createVendore({ params: formData })
        if (response.data.success) {
          toast.success(response.data.message)
          setTimeout(() => {
            router.push("/super_admin/vendors")
          }, 1000)
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
      }
    },
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='w-full flex flex-wrap gap-2'>
          <VendoreFormStart formik={formik} />
          <VendorFormMiddle formik={formik} />
          <VendorFormEnd formik={formik} />
          <VendoreFormFooter formik={formik} message={message} />
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default VendorForm
