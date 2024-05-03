import { FormikProps } from "formik"
import React from "react"
import { UpdateConfigFormField } from "../configurationCommon"
import TextFieldCommon from "@/src/common/formfield/textField"
import config from "../../property/config.json"

interface ConfigFormMiddleProps {
  formik: FormikProps<UpdateConfigFormField>
}

const ConfigFormMiddle: React.FC<ConfigFormMiddleProps> = (props) => {
  const { formik } = props
  return (
    <>
      <div className='p-2 flex gap-x-4 lg:gap-x-6 gap-y-2 flex-wrap border-b border-bordercolor pt-6 mb-6'>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='key_id'
            placeholder={config.key_id_placeholder}
            label={config.key_id_label}
            value={formik.values.key_id}
            name='key_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.key_id && formik.errors.key_id
                ? formik.errors.key_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='delivery_bandle_id'
            placeholder={config.delivery_bandle_id_placeholder}
            label={config.delivery_bandle_id_label}
            value={formik.values.delivery_bandle_id}
            name='delivery_bandle_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.delivery_bandle_id &&
              formik.errors.delivery_bandle_id
                ? formik.errors.delivery_bandle_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='google_client_id'
            placeholder={config.google_client_id_placeholder}
            label={config.google_client_id_label}
            value={formik.values.google_client_id}
            name='google_client_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.google_client_id && formik.errors.google_client_id
                ? formik.errors.google_client_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='google_secret_id'
            placeholder={config.google_secret_id_placeholder}
            label={config.google_secret_id_label}
            value={formik.values.google_secret_id}
            name='google_secret_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.google_secret_id && formik.errors.google_secret_id
                ? formik.errors.google_secret_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='team_id'
            placeholder={config.team_id_placeholder}
            label={config.team_id_label}
            value={formik.values.team_id}
            name='team_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.team_id && formik.errors.team_id
                ? formik.errors.team_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='facebook_client_id'
            placeholder={config.facebook_client_id_placeholder}
            label={config.facebook_client_id_label}
            value={formik.values.facebook_client_id}
            name='facebook_client_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.facebook_client_id &&
              formik.errors.facebook_client_id
                ? formik.errors.facebook_client_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='facebook_secret_id'
            placeholder={config.facebook_secret_id_placeholder}
            label={config.facebook_secret_id_label}
            value={formik.values.facebook_secret_id}
            name='facebook_secret_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.facebook_secret_id &&
              formik.errors.facebook_secret_id
                ? formik.errors.facebook_secret_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='android_app_link'
            placeholder={config.android_app_link_placeholder}
            label={config.admin_bandle_id_label}
            value={formik.values.android_app_link}
            name='android_app_link'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.android_app_link && formik.errors.android_app_link
                ? formik.errors.android_app_link
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='user_bandle_id'
            placeholder={config.user_bandle_id_placeholder}
            label={config.user_bandle_id_label}
            value={formik.values.user_bandle_id}
            name='user_bandle_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.user_bandle_id && formik.errors.user_bandle_id
                ? formik.errors.user_bandle_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='staff_bandle_id'
            placeholder={config.staff_bandle_id_placeholder}
            label={config.staff_bandle_id_label}
            value={formik.values.staff_bandle_id}
            name='staff_bandle_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.staff_bandle_id && formik.errors.staff_bandle_id
                ? formik.errors.staff_bandle_id
                : null
            }
          />
        </div>
        <div className='xl:w-[30%] lg:w-[31%] md:w-[47%] sm:w-[47%] w-[100%]'>
          <TextFieldCommon
            id='admin_bandle_id'
            placeholder={config.admin_bandle_id_placeholder}
            label={config.admin_bandle_id_label}
            value={formik.values.admin_bandle_id}
            name='admin_bandle_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.admin_bandle_id && formik.errors.admin_bandle_id
                ? formik.errors.admin_bandle_id
                : null
            }
          />
        </div>
      </div>
    </>
  )
}

export default ConfigFormMiddle
