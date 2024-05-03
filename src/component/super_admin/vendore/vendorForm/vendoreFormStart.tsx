import React from "react"
import { FormikProps } from "formik"
import { VendoreAddForm } from "../vendorCommon"
import SelectField from "@/src/common/formfield/selectField"
import TextFieldCommon from "@/src/common/formfield/textField"
import vendor from "../../property/vendor.json"

interface VendoreFormStartProps {
  formik: FormikProps<VendoreAddForm>
}
const VendoreFormStart: React.FC<VendoreFormStartProps> = (props) => {
  const { formik } = props
  return (
    <>
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.domain_type && formik.errors.domain_type
              ? formik.errors.domain_type
              : null
          }
          label={vendor.domain_type_label}
          name='domain_type'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("domain_type", e.target.value)
          }}
          option={[
            {
              label: `${vendor.domain_type_placeholder}`,
              value: "",
            },
            {
              label: "Sub Domain",
              value: "1",
            },
          ]}
          value={formik.values.domain_type}
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.database && formik.errors.database
              ? formik.errors.database
              : null
          }
          label={vendor.database_label}
          name='database'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("database", e.target.value)
          }}
          option={[
            {
              label: `${vendor.database_placeholder}`,
              value: "",
            },
            {
              label: "Stagging",
              value: "1",
            },
          ]}
          value={formik.values.database}
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.login_type && formik.errors.login_type
              ? formik.errors.login_type
              : null
          }
          label={vendor.locality_label}
          name='login_type'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("login_type", e.target.value)
          }}
          option={[
            {
              label: `${vendor.locality_placeholder}`,
              value: "",
            },
            {
              label: "Login With Email",
              value: "1",
            },
            {
              label: "Login With Mobile",
              value: "2",
            },
          ]}
          value={formik.values.login_type}
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <TextFieldCommon
          id='domain_name'
          placeholder={vendor.domain_name_placeholder}
          label={vendor.domain_name_label}
          value={formik.values.domain_name}
          name='domain_name'
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("domain_name", e.target.value)
          }}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.domain_name && formik.errors.domain_name
              ? formik.errors.domain_name
              : null
          }
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <TextFieldCommon
          id='name'
          placeholder={vendor.shop_name_placeholder}
          label={vendor.shop_name_label}
          value={formik.values.name}
          name='name'
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("name", e.target.value)
          }}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <TextFieldCommon
          id='ownername'
          placeholder={vendor.shop_owner_name_placeholder}
          label={vendor.shop_owner_name_label}
          value={formik.values.ownername}
          name='ownername'
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("ownername", e.target.value)
          }}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.ownername && formik.errors.ownername
              ? formik.errors.ownername
              : null
          }
        />
      </div>
    </>
  )
}

export default VendoreFormStart
