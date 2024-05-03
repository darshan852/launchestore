import { apiClient } from "@/src/service/client"
import React from "react"
import { TaxTypeDetail } from "../taxCommon"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/router"
import * as Yup from "yup"
import { useFormik } from "formik"
import TextFieldCommon from "@/src/common/formfield/textField"
import common from "../../property/common.json"

interface EditFormProps {
  taxtype_id: string
}

const EditForm: React.FC<EditFormProps> = (props) => {
  const { taxtype_id } = props
  const router = useRouter()

  const validationSchema = Yup.object().shape({
    tax_type: Yup.string().required(`${common.tax_type_error}`),
    tax_per: Yup.string().required(`${common.tax_per_error}`),
  })

  const [taxTypeDetail, setTaxTypeDetail] = React.useState<TaxTypeDetail>()

  const handleGetTaxTypeDetail = React.useCallback(async (id: string) => {
    try {
      const params = {
        taxtype_id: id,
      }
      const response = await apiClient.getTaxTypeDetail({ params: params })
      if (response.data.success) {
        setTaxTypeDetail(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      setTimeout(() => {
        router.push("/super_admin/tax/taxlist")
      }, 1000)
    }
  }, [])

  React.useEffect(() => {
    if (taxtype_id) {
      handleGetTaxTypeDetail(taxtype_id)
    }
  }, [handleGetTaxTypeDetail, taxtype_id])

  React.useEffect(() => {
    if (taxTypeDetail) {
      formik.setValues({
        ...formik,
        tax_per: taxTypeDetail.percentage.toString(),
        tax_type: taxTypeDetail.tax_type,
      })
    }
  }, [taxTypeDetail])

  const formik = useFormik({
    initialValues: {
      tax_per: "",
      tax_type: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (taxtype_id) {
          const params = {
            ...values,
            id: taxtype_id,
          }
          const response = await apiClient.updateTaxType({ params: params })
          if (response.data.success) {
            toast.success(response.data.message)
            setTimeout(() => {
              router.push("/super_admin/tax/tax_type")
            }, 1000)
          }
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    },
  })

  const handleNumber = (value: string) => {
    return value.replace(/[^0-9.]/g, "")
  }

  const handleCancel = (e: any) => {
    formik.resetForm(e)
    router.push("/super_admin/tax/tax_type")
  }

  return (
    <div className='edit-tax-wrp'>
      <form onSubmit={formik.handleSubmit}>
        <div className='w-full flex gap-x-5 flex-wrap'>
          <TextFieldCommon
            id='tax_type'
            placeholder={common.tax_type_placeholder}
            label={common.tax_type_label}
            value={formik.values.tax_type}
            name='tax_type'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.tax_type && formik.errors.tax_type
                ? formik.errors.tax_type
                : null
            }
          />
          <TextFieldCommon
            id='tax_per'
            placeholder={common.tax_per_placeholder}
            label={common.tax_per_label}
            value={formik.values.tax_per}
            name='tax_per'
            onChange={(e: { target: { value: string } }) =>
              formik.setFieldValue("tax_per", handleNumber(e.target.value))
            }
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.tax_per && formik.errors.tax_per
                ? formik.errors.tax_per
                : null
            }
          />
          <div className='flex justify-start items-center gap-4'>
            <button
              onClick={(e) => handleCancel(e)}
              type='button'
              className='inline-flex h-[40px] sm:h-[45px] items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
            >
              Cancel
            </button>

            <button
              type='submit'
              className='inline-flex h-[40px] sm:h-[45px] items-center px-8 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default EditForm
