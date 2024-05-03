import { FormikProps } from "formik"
import React from "react"
import { EditVendorForm, replaceAllNumbers } from "../vendorCommon"
import TextFieldCommon from "@/src/common/formfield/textField"
import vendor from "../../property/vendor.json"

interface AppVersionFormProps {
  formik: FormikProps<EditVendorForm>
}

const AppVersionForm: React.FC<AppVersionFormProps> = (props) => {
  const { formik } = props
  return (
    <div className='flex justify-between items-center flex-wrap '>
      <div className='w-[100%] lg:w-[20%] md:w-[48%] sm:w-[48%]'>
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
      <div className='w-[100%] lg:w-[20%] md:w-[48%] sm:w-[48%]'>
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
      <div className='w-[100%] lg:w-[20%] md:w-[48%] sm:w-[48%]'>
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
      <div className='w-[100%] lg:w-[20%] md:w-[48%] sm:w-[48%]'>
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
  )
}

export default AppVersionForm
