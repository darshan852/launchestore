import { FormikProps } from "formik"
import React from "react"
import { EditVendorForm, converSelectboxResponse } from "../vendorCommon"
import { apiClient } from "@/src/service/client"
import { toast } from "react-toastify"
import SelectField from "@/src/common/formfield/selectField"
import MultiCheckBox, { Option } from "@/src/common/formfield/multiCheckBox"
import { ThemeList } from "@/src/service/themeMain"

interface FormMiddleProps {
  formik: FormikProps<EditVendorForm>
}

const FormMiddle: React.FC<FormMiddleProps> = (props) => {
  const { formik } = props

  const [themeData, setThemeData] = React.useState<ThemeList[]>([])

  const handleGetTheme = async () => {
    try {
      const response = await apiClient.getThemeList()
      if (response.data.success) {
        setThemeData(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      //   router.push("/super_admin/vendors")
    }
  }

  React.useEffect(() => {
    handleGetTheme()
  }, [])
  const handleSupportedLang = (value: Option) => {
    const updatedArray = [...formik.values.supported_language]
    const findIndex = updatedArray.findIndex((f) => f === value.value)
    if (findIndex === -1) {
      updatedArray.push(value.value)
    } else {
      updatedArray.splice(findIndex, 1)
    }
    formik.setFieldValue("supported_language", updatedArray)
  }
  return (
    <>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.is_ecommerce && formik.errors.is_ecommerce
              ? formik.errors.is_ecommerce
              : null
          }
          label='Web Type'
          name='is_ecommerce'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("is_ecommerce", e.target.value)
          }}
          option={[
            {
              label: "Select Web Type",
              value: "",
            },
            {
              label: "E-commerce",
              value: "1",
            },
            {
              label: "Information",
              value: "2",
            },
          ]}
          value={formik.values.is_ecommerce}
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <MultiCheckBox
          error={
            formik.touched.supported_language &&
            formik.errors.supported_language
              ? formik.errors.supported_language.toString()
              : null
          }
          label='Supported Language'
          name='supported_language'
          onBlur={formik.handleBlur}
          onChange={(e: Option) => handleSupportedLang(e)}
          value={formik.values.supported_language}
          options={[
            {
              label: "English",
              value: "0",
            },
            {
              label: "Arabic ",
              value: "1",
            },
          ]}
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.theme_name && formik.errors.theme_name
              ? formik.errors.theme_name
              : null
          }
          label='Themes'
          name='theme_name'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("theme_name", e.target.value)
          }}
          option={[
            {
              label: "Select Theme",
              value: "",
            },
            ...converSelectboxResponse(themeData),
          ]}
          value={formik.values.theme_name}
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.multi_language && formik.errors.multi_language
              ? formik.errors.multi_language
              : null
          }
          label='Multi Language'
          name='multi_language'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("multi_language", e.target.value)
          }}
          option={[
            {
              label: "Disabled",
              value: "0",
            },
            {
              label: "Enabled",
              value: "1",
            },
          ]}
          value={formik.values.multi_language}
        />
      </div>
    </>
  )
}

export default FormMiddle
