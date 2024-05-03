import PhoneInputType from "@/src/common/formfield/phoneInput"
import SelectField from "@/src/common/formfield/selectField"

import TextFieldCommon from "@/src/common/formfield/textField"
import React from "react"

const SignUpForm = (props: any) => {
  const { formik } = props

  return (
    <>
      <div className='row'>
        <div className='col-xxl-6 mb-1'>
          <TextFieldCommon
            id='first_name'
            placeholder={"First Name"}
            label={"First Name"}
            name='first_name'
            onBlur={() => formik.handleBlur("first_name")}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("first_name", e.target.value)
            }}
            value={formik.values.first_Name}
            error={
              formik.touched.first_name && formik.errors.first_name
                ? formik.errors.first_name
                : null
            }
          />
        </div>

        <div className='col-xxl-6 mb-1'>
          <TextFieldCommon
            id='last_name'
            placeholder={"Last name"}
            label={"Last name"}
            name='last_name'
            onBlur={() => formik.handleBlur("last_name")}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("last_name", e.target.value)
            }}
            value={formik.values.last_name}
            error={
              formik.touched.last_name && formik.errors.last_name
                ? formik.errors.last_name
                : null
            }
          />
        </div>
        <div className='col-xxl-12 mb-1'>
          <TextFieldCommon
            id='email'
            type='email'
            placeholder={"email"}
            label={"email"}
            name='email'
            onBlur={() => formik.handleBlur("email")}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("email", e.target.value)
            }}
            value={formik.values.email}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
        </div>
        <div className='col-xxl-12 mb-1'>
          <SelectField
            error={
              formik.touched.country_id && formik.errors.country_id
                ? formik.errors.country_id
                : null
            }
            label='Select Country Code'
            name='country_id'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) =>
              formik.setFieldValue("country_id", e.target.value)
            }
            option={[
              {
                label: "Select",
                value: "",
              },
            ]}
            value={formik.values.country_id}
          />
        </div>

        <div className='col-xxl-12 mb-1'>
          <PhoneInputType
            label={"Phone Number"}
            name='mobile_number'
            onBlur={(e: any) => {}}
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
        <div className='col-xxl-12 mb-1'>
          <TextFieldCommon
            id='password'
            type='password'
            placeholder={"password"}
            label={"password"}
            name='password'
            onBlur={() => formik.handleBlur("password")}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("password", e.target.value)
            }}
            value={formik.values.password}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
        </div>

        <div className='col-xxl-12 mb-1'>
          <TextFieldCommon
            id='confirm_Pass'
            type='password'
            placeholder={"confirm Password"}
            label={"confirm Password"}
            name='confirm_Pass'
            onBlur={() => formik.handleBlur("confirm_Pass")}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("confirm_Pass", e.target.value)
            }}
            value={formik.values.confirm_Pass}
            error={
              formik.touched.confirm_Pass && formik.errors.confirm_Pass
                ? formik.errors.confirm_Pass
                : null
            }
          />
        </div>
        <div className='col-xxl-4 mb-4'>
          <button type='submit' className='common-input-btn'>
            Save
          </button>
        </div>
        <h3>
          Already have an account? <a href='./login.php'> Sign in</a>
        </h3>
      </div>
    </>
  )
}

export default SignUpForm
