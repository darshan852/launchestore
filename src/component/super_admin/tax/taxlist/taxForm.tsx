import TextFieldCommon from "@/src/common/formfield/textField"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import React from "react"
import { toast } from "react-toastify"
import * as Yup from "yup"
import { TaxFormField, TaxListDetail } from "../taxCommon"
import { apiClient } from "@/src/service/client"
import common from "../../property/common.json"

interface TaxFormProps {
  tax?: TaxListDetail
}

const TaxForm: React.FC<TaxFormProps> = (props) => {
  const { tax } = props
  const router = useRouter()
  const validationSchema = Yup.object().shape({
    tax_name: Yup.string().required(`${common.tax_error}`),
  })

  React.useEffect(() => {
    if (tax) {
      formik.setValues({
        ...formik,
        tax_name: tax?.tax_name ? tax.tax_name : "",
      })
    }
  }, [tax])

  const handleUpdateTax = async (value: TaxFormField, taxId: string) => {
    try {
      const params = {
        tax_name: value.tax_name,
        id: taxId,
      }
      const response = await apiClient.updateTax({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/super_admin/tax/taxlist")
        }, 1000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleAddTax = async (value: TaxFormField) => {
    try {
      const response = await apiClient.addTax({ params: value })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/super_admin/tax/taxlist")
        }, 1000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }
  const formik = useFormik({
    initialValues: {
      tax_name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      if (tax) {
        handleUpdateTax(values, tax.id.toString())
      } else {
        handleAddTax(values)
      }
    },
  })
  const handleCancel = (e: any) => {
    router.push("/super_admin/tax/taxlist")
    formik.resetForm(e)
  }
  return (
    <div className=''>
      <form
        onSubmit={formik.handleSubmit}
        className='flex items-start sm:items-center gap-2 sm:gap-5 sm:flex-row flex-col'
      >
        <div className='w-[260px] sm:w-[300px]'>
          <TextFieldCommon
            id='tax_name'
            placeholder={common.tax_placeholder}
            label={common.tax_label}
            value={formik.values.tax_name}
            name='tax_name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.tax_name && formik.errors.tax_name
                ? formik.errors.tax_name
                : null
            }
          />
        </div>
        <div className='w-full flex justify-start items-center gap-3'>
          <button
            onClick={(e) => handleCancel(e)}
            type='button'
            className='inline-flex h-auto sm:h-[45px] items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            {common.cancel_button_label}
          </button>

          <button
            type='submit'
            className='inline-flex h-auto sm:h-[45px] items-center px-8 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            {common.save_button_label}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaxForm
