import React from "react"
import { UpdateConfigFormField } from "../configurationCommon"
import { FormikProps } from "formik"
import TextFieldCommon from "@/src/common/formfield/textField"
import config from "../../property/config.json"
interface ConfigFormEndProps {
  formik: FormikProps<UpdateConfigFormField>
}

const ConfigFormEnd: React.FC<ConfigFormEndProps> = (props) => {
  const { formik } = props
  return (
    <>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='p8_file'
          placeholder={config.p8_file_placeholder}
          label={config.p8_file_label}
          value={formik.values.p8_file}
          name='p8_file'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.p8_file && formik.errors.p8_file
              ? formik.errors.p8_file
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='twitter_link'
          placeholder={config.twitter_link_placeholder}
          label={config.twitter_link_label}
          value={formik.values.twitter_link}
          name='twitter_link'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.twitter_link && formik.errors.twitter_link
              ? formik.errors.twitter_link
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='google_plus_link'
          placeholder={config.google_plus_link_placeholder}
          label={config.google_plus_link_label}
          value={formik.values.google_plus_link}
          name='google_plus_link'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.google_plus_link && formik.errors.google_plus_link
              ? formik.errors.google_plus_link
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='instagram_link'
          placeholder={config.instagram_link_placeholder}
          label={config.instagram_link_label}
          value={formik.values.instagram_link}
          name='instagram_link'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.instagram_link && formik.errors.instagram_link
              ? formik.errors.instagram_link
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='facebook_link'
          placeholder={config.facebook_link_placeholder}
          label={config.facebook_link_label}
          value={formik.values.facebook_link}
          name='facebook_link'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.facebook_link && formik.errors.facebook_link
              ? formik.errors.facebook_link
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='ios_app_link'
          placeholder={config.ios_app_link_placeholder}
          label={config.ios_app_link_label}
          value={formik.values.ios_app_link}
          name='ios_app_link'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.ios_app_link && formik.errors.ios_app_link
              ? formik.errors.ios_app_link
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='contact_email'
          placeholder={config.contact_email_placeholder}
          label={config.contact_email_placeholder}
          value={formik.values.contact_email}
          name='contact_email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.contact_email && formik.errors.contact_email
              ? formik.errors.contact_email
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='contact_number'
          placeholder={config.contact_number_placeholder}
          label={config.contact_number_label}
          value={formik.values.contact_number}
          name='contact_number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.contact_number && formik.errors.contact_number
              ? formik.errors.contact_number
              : null
          }
        />
      </div>
      <div className='xl:w-[23%] lg:w-[30%] md:w-[47%] sm:w-[47%] w-[100%]'>
        <TextFieldCommon
          id='firebase_node'
          placeholder={config.firebase_node_placeholder}
          label={config.firebase_node_label}
          value={formik.values.firebase_node}
          name='firebase_node'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.firebase_node && formik.errors.firebase_node
              ? formik.errors.firebase_node
              : null
          }
        />
      </div>
    </>
  )
}

export default ConfigFormEnd
