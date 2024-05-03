import { FormikProps } from "formik"
import React from "react"
import { VendoreAddForm, converStoreResponse } from "../vendorCommon"
import MultiCheckBox, { Option } from "@/src/common/formfield/multiCheckBox"
import SelectField from "@/src/common/formfield/selectField"
import FileSelect from "@/src/common/formfield/fileSelect"
import TextFieldCommon from "@/src/common/formfield/textField"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import { apiClient } from "@/src/service/client"
import { StoreTypeList } from "@/src/service/storeType"
import vendor from "../../property/vendor.json"

// import { StoreTypeDetail } from "@/component/store-type/storeCommon"
// import { apiClient } from "@/service/client"

interface VendorFormMiddleProps {
  formik: FormikProps<VendoreAddForm>
}

const VendorFormMiddle: React.FC<VendorFormMiddleProps> = (props) => {
  const { formik } = props
  const router = useRouter()

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
      router.push("/super_admin/vendors")
    }
  }

  React.useEffect(() => {
    handleStoreTypeDetail()
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
      {" "}
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.store_type && formik.errors.store_type
              ? formik.errors.store_type
              : null
          }
          label={vendor.store_type_label}
          name='store_type'
          onBlur={formik.handleBlur}
          onChange={(e: { target: { value: any } }) => {
            formik.setFieldValue("store_type", e.target.value)
          }}
          option={[
            {
              label: `${vendor.store_type_placeholder}`,
              value: "",
            },
            ...converStoreResponse(storeType),
          ]}
          value={formik.values.store_type}
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <MultiCheckBox
          error={
            formik.touched.supported_language &&
            formik.errors.supported_language
              ? formik.errors.supported_language.toString()
              : null
          }
          label={vendor.supported_lang_label}
          name='supported_language'
          onBlur={formik.handleBlur}
          onChange={(e: Option) => handleSupportedLang(e)}
          value={formik.values.supported_language}
          options={[
            {
              label: "English",
              value: 1,
            },
            {
              label: " Arabic ",
              value: 2,
            },
          ]}
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <FileSelect
          id='image'
          placeholder={vendor.shop_image_placeholder}
          label={vendor.shop_image_label}
          value={""}
          name='image'
          onChange={(e: { target: { files: any[] } }) => {
            formik.setFieldValue("image", e.target.files[0])
          }}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.image && formik.errors.image
              ? formik.errors.image.toString()
              : null
          }
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <TextFieldCommon
          id='email'
          placeholder={vendor.email_placeholder}
          label={vendor.email_label}
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
      <div className='w-[100%] sm:w-[48%]'>
        <TextFieldCommon
          id='password'
          placeholder={vendor.password_placeholder}
          label={vendor.password_label}
          value={formik.values.password}
          name='password'
          onChange={(e: { target: { value: any } }) =>
            formik.setFieldValue("password", e.target.value)
          }
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password.toString()
              : null
          }
        />
      </div>
      <div className='w-[100%] sm:w-[48%]'>
        <TextFieldCommon
          id='confirm_Pass'
          placeholder={vendor.confirm_pass_placeholder}
          label={vendor.confirm_pass_label}
          value={formik.values.confirm_Pass}
          name='confirm_Pass'
          onChange={(e: { target: { value: any } }) =>
            formik.setFieldValue("confirm_Pass", e.target.value)
          }
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.confirm_Pass && formik.errors.confirm_Pass
              ? formik.errors.confirm_Pass
              : null
          }
        />
      </div>
    </>
  )
}

export default VendorFormMiddle
