import React from "react"
import SelectField from "@/src/common/formfield/selectField"
import { FormikProps } from "formik"
import { VendoreAddForm } from "../vendorCommon"
import { useRouter } from "next/router"
import TextArea from "@/src/common/formfield/textArea"
import vendor from "../../property/vendor.json"

interface VendoreFormFooterProps {
  formik: FormikProps<VendoreAddForm>
  message?: string | undefined
}

const VendoreFormFooter: React.FC<VendoreFormFooterProps> = (props) => {
  const { formik, message } = props
  const router = useRouter()

  const handleCancel = (e: any) => {
    formik.resetForm(e)
    router.push("/super_admin/vendors")
  }
  return (
    <>
      {" "}
      <div className='w-[100%] sm:w-[48%]'>
        <SelectField
          error={
            formik.touched.is_ecommerce && formik.errors.is_ecommerce
              ? formik.errors.is_ecommerce
              : null
          }
          label={vendor.web_type_label}
          name='is_ecommerce'
          onBlur={formik.handleBlur}
          onChange={(e: any) => {
            formik.setFieldValue("is_ecommerce", e.target.value)
          }}
          option={[
            {
              label: `${vendor.web_type_placeholder}`,
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
      <div className='w-[100%] sm:w-[48%]'>
        <TextArea
          row={3}
          id='address'
          placeholder={vendor.address_placeholder}
          label={vendor.address_label}
          value={formik.values.address}
          name='address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant='outlined'
          error={
            formik.touched.address && formik.errors.address
              ? formik.errors.address
              : null
          }
        />
      </div>
      <div className='text-[red] w-full flex justify-center'>
        <span>{message}</span>
      </div>
      <div className='w-full flex justify-center items-center gap-2 m-1'>
        <button
          onClick={(e) => handleCancel(e)}
          type='button'
          className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
        >
          Cancel
        </button>

        <button
          type='submit'
          className='inline-flex items-center px-8 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
        >
          Save
        </button>
        {/* <Button
          variant='outlined'
          size='medium'
          sx={{ width: "150px", padding: "10px" }}
          onClick={(e) => handleCancel(e)}
          
        >
          Cancel
        </Button>
        
        <Button
          color='primary'
          variant='contained'
          aria-label='Save'
          size='small'
          sx={{ width: "150px", padding: "10px" }}
          type='submit'
          className="bg-Secondary"
        >
          Save
        </Button> */}
      </div>
    </>
  )
}

export default VendoreFormFooter
