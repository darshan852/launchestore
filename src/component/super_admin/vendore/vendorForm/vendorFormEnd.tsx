import React from "react"
import PhoneInputType from "@/src/common/formfield/phoneInput"
import SelectField, { Option } from "@/src/common/formfield/selectField"
// import TextArea from "@/src/common/formfield/textArea"
import { FormikProps } from "formik"
import { VendoreAddForm, converSelectboxResponse } from "../vendorCommon"
import NewMap from "@/src/common/locationSearch"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { apiClient } from "@/src/service/client"
import vendor from "../../property/vendor.json"

interface VendorFormEndProps {
  formik: FormikProps<VendoreAddForm>
}

const VendorFormEnd: React.FC<VendorFormEndProps> = (props) => {
  const { formik } = props
  const router = useRouter()
  const [themeData, setThemeData] = React.useState<Option[]>([])

  const handleGetTheme = async () => {
    try {
      const response = await apiClient.getThemeList()
      if (response.data.success) {
        setThemeData(converSelectboxResponse(response.data.data))
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      router.push("/super_admin/vendors")
    }
  }

  React.useEffect(() => {
    handleGetTheme()
  }, [])
  const handleLocationChange = (location: string, lat: number, lng: number) => {
    formik.setFieldValue("location", location)
    formik.setFieldValue("latitude", lat)
    formik.setFieldValue("longitude", lng)
  }
  return (
    <>
      {" "}
      <div className='w-[100%] sm:w-[48%]'>
        <PhoneInputType
          label={vendor.phone_label}
          name='mobile_number'
          onBlur={() => formik.handleBlur("mobile_number")}
          onChange={(value: string) =>
            formik.setFieldValue("mobile_number", value)
          }
          value={formik.values.mobile_number}
          error={
            formik.touched.mobile_number && formik.errors.mobile_number
              ? formik.errors.mobile_number
              : null
          }
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <label>{vendor.location_label}</label>
        <NewMap onChange={handleLocationChange} />
        <div style={{ minHeight: "22px" }}>
          {formik.touched.location && formik.errors.location && (
            <span style={{ color: "red" }}>{formik.errors.location}</span>
          )}
        </div>
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.language_support && formik.errors.language_support
              ? formik.errors.language_support
              : null
          }
          label={vendor.primary_lang_label}
          name='language_support'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("language_support", e.target.value)
          }}
          option={[
            {
              label: `${vendor.primary_lang_placeholder}`,
              value: "",
            },
            {
              label: "English",
              value: "1",
            },
            {
              label: "Arabic",
              value: "2",
            },
          ]}
          value={formik.values.language_support}
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.locality && formik.errors.locality
              ? formik.errors.locality
              : null
          }
          label={vendor.locality_label}
          name='locality'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("locality", e.target.value)
          }}
          option={[
            {
              label: `${vendor.locality_placeholder}`,
              value: "",
            },
            {
              label: "Local",
              value: "1",
            },
            {
              label: "InterNational",
              value: "2",
            },
          ]}
          value={formik.values.locality}
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.theme_name && formik.errors.theme_name
              ? formik.errors.theme_name
              : null
          }
          label={vendor.themes_label}
          name='theme_name'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("theme_name", e.target.value)
          }}
          option={[
            {
              label: `${vendor.themes_placeholder}`,
              value: "",
            },
            ...themeData,
          ]}
          value={formik.values.theme_name}
        />
      </div>
    </>
  )
}

export default VendorFormEnd
