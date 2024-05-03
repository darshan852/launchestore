import { FormikProps } from "formik"
import React from "react"
import { UpdateConfigFormField } from "../configurationCommon"
import TextFieldCommon from "@/src/common/formfield/textField"
import ConfigFormMiddle from "./configFormMiddle"
import ConfigFormEnd from "./configFormEnd"
import TextArea from "@/src/common/formfield/textArea"
import config from "../../property/config.json"

interface ConfigFormStartProps {
  formik: FormikProps<UpdateConfigFormField>
}

const ConfigFormStart: React.FC<ConfigFormStartProps> = (props) => {
  const { formik } = props
  return (
    <>
      <div className='p-2 flex gap-x-4 lg:gap-x-6 gap-y-2 flex-wrap border-b border-bordercolor'>
        <div className='lg:w-[45%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='user_firebase_key'
            placeholder={config.user_firebase_key_placeholder}
            label={config.user_firebase_key_label}
            value={formik.values.user_firebase_key}
            name='user_firebase_key'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.user_firebase_key &&
              formik.errors.user_firebase_key
                ? formik.errors.user_firebase_key
                : null
            }
          />
        </div>
        <div className='lg:w-[45%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='staff_firebase_key'
            placeholder={config.staff_firebase_key_placeholder}
            label={config.staff_firebase_key_label}
            value={formik.values.staff_firebase_key}
            name='staff_firebase_key'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.staff_firebase_key &&
              formik.errors.staff_firebase_key
                ? formik.errors.staff_firebase_key
                : null
            }
          />
        </div>
        <div className='lg:w-[45%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='delivery_firebase_key'
            placeholder={config.delivery_firebase_key_placeholder}
            label={config.delivery_firebase_key_label}
            value={formik.values.delivery_firebase_key}
            name='delivery_firebase_key'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.delivery_firebase_key &&
              formik.errors.delivery_firebase_key
                ? formik.errors.delivery_firebase_key
                : null
            }
          />
        </div>
      </div>
      <div className='p-2 flex flex-wrap gap-x-5'>
        <ConfigFormMiddle formik={formik} />
        <ConfigFormEnd formik={formik} />
        <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='firebase_url'
            placeholder={config.firebase_url_placeholder}
            label={config.firebase_url_label}
            value={formik.values.firebase_url}
            name='firebase_url'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.firebase_url && formik.errors.firebase_url
                ? formik.errors.firebase_url
                : null
            }
          />
        </div>
        <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='firebase_token'
            placeholder={config.firebase_token_placeholder}
            label={config.firebase_token_label}
            value={formik.values.firebase_token}
            name='firebase_token'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.firebase_token && formik.errors.firebase_token
                ? formik.errors.firebase_token
                : null
            }
          />
        </div>
        <div className='w-[100%] sm:w-[60%]'>
          <TextArea
            id='contact_us_address'
            placeholder={config.contact_us_address_placeholder}
            label={config.contact_us_address_label}
            value={formik.values.contact_us_address}
            name='contact_us_address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.contact_us_address &&
              formik.errors.contact_us_address
                ? formik.errors.contact_us_address
                : null
            }
          />
        </div>
      </div>
    </>
  )
}

export default ConfigFormStart
