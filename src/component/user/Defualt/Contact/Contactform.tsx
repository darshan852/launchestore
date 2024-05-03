import PhoneInputType from "@/src/common/formfield/phoneInput"

import TextFieldCommon from "@/src/common/formfield/textField"
import React from "react"

const ContactUsForm = (props: any) => {
  const { formik } = props

  return (
    <>
      <div className='row'>
        <div className='col-xxl-12 mb-1'>
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
          <textarea
            placeholder={"Enter Your Message"}
            id='message'
            name='message'
            value={formik.values.message}
          />
          <div style={{ minHeight: "25px" }}>
            {/* {error && ( */}
            <span style={{ color: "red" }} className='error'>
              {/* {error} */}
            </span>
            {/* )} */}
          </div>
        </div>
        <div className='col-xxl-4 mb-5'>
          <button type='submit' className='common-input-btn'>
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
