import { FormikProps } from "formik"
import React from "react"
import {
  EditVendorForm,
  converStoreResponse,
  replaceAllNumbers,
} from "../vendorCommon"
import TextFieldCommon from "@/src/common/formfield/textField"
import SelectField from "@/src/common/formfield/selectField"
import { StoreTypeList } from "@/src/service/storeType"
import { apiClient } from "@/src/service/client"
import { toast } from "react-toastify"

interface FormStartProps {
  formik: FormikProps<EditVendorForm>
}
const FormStart: React.FC<FormStartProps> = (props) => {
  const { formik } = props
  const [storeType, setStoreType] = React.useState<StoreTypeList[]>([])

  const handleStoreTypeDetail = async () => {
    try {
      const response = await apiClient.getStoreList()
      if (response.data.success) {
        setStoreType(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      //   router.push("/super_admin/vendors")
    }
  }

  React.useEffect(() => {
    handleStoreTypeDetail()
  }, [])

  return (
    <>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <TextFieldCommon
          id='email'
          placeholder='Enter Email Address *'
          label='Email Address :'
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
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.login_type && formik.errors.login_type
              ? formik.errors.login_type
              : null
          }
          label='Login Type'
          name='login_type'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("login_type", e.target.value)
          }}
          option={[
            {
              label: "Select Login Type",
              value: "",
            },
            {
              label: "Login With Email",
              value: "0",
            },
            {
              label: "Login With Mobile",
              value: "1",
            },
          ]}
          value={formik.values.login_type}
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <TextFieldCommon
          id='approved'
          placeholder='Approved '
          label='Approved Branch'
          value={formik.values.approved}
          name='approved'
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("approved", replaceAllNumbers(e.target.value))
          }}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.approved && formik.errors.approved
              ? formik.errors.approved
              : null
          }
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.display_price_with_gst &&
            formik.errors.display_price_with_gst
              ? formik.errors.display_price_with_gst
              : null
          }
          label='Display Price With Gst'
          name='display_price_with_gst'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("display_price_with_gst", e.target.value)
          }}
          option={[
            {
              label: "Select gst display mode",
              value: "",
            },
            {
              label: "With Gst",
              value: "1",
            },
            {
              label: "Without Gst",
              value: "2",
            },
          ]}
          value={formik.values.display_price_with_gst}
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <TextFieldCommon
          id='webTitle'
          placeholder='Web Title '
          label='Web Title'
          value={formik.values.webTitle}
          name='webTitle'
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("webTitle", e.target.value)
          }}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.webTitle && formik.errors.webTitle
              ? formik.errors.webTitle
              : null
          }
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.language_support && formik.errors.language_support
              ? formik.errors.language_support.toString()
              : null
          }
          label='Primary Language'
          name='language_support'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("language_support", e.target.value)
          }}
          option={[
            {
              label: "Select Language",
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
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.locality && formik.errors.locality
              ? formik.errors.locality
              : null
          }
          label='Locality'
          name='locality'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("locality", e.target.value)
          }}
          option={[
            {
              label: "Select Locality",
              value: "",
            },
            {
              label: "Local",
              value: "0",
            },
            {
              label: "InterNational",
              value: "1",
            },
          ]}
          value={formik.values.locality}
        />
      </div>
      <div className='w-[100%] lg:w-[32%] md:w-[48%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.store_type && formik.errors.store_type
              ? formik.errors.store_type
              : null
          }
          label='Store Type'
          name='store_type'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("store_type", e.target.value)
          }}
          option={[
            {
              label: "Select Store Type",
              value: "",
            },
            ...converStoreResponse(storeType),
          ]}
          value={formik.values.store_type}
        />
      </div>
    </>
  )
}

export default FormStart
