import React from "react"
import styled from "@emotion/styled"
import * as Yup from "yup"
import { useFormik } from "formik"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { StoreForm, StoreTypeDetail } from "./storeTypeCommon"
import { apiClient } from "@/src/service/client"
import TextFieldCommon from "@/src/common/formfield/textField"
import common from "../property/common.json"

const ButtonWraper = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
}))

interface StoreTypeFormProps {
  data?: StoreTypeDetail
}
const StoreTypeForm: React.FC<StoreTypeFormProps> = (props) => {
  const { data } = props
  const router = useRouter()
  const [buttonFlag, setButtonFlag] = React.useState<boolean>(false)

  const validationSchema = Yup.object().shape({
    store_name: Yup.string().required(`${common.store_name_error}`),
  })

  const handleUpdateStore = async (values: StoreForm) => {
    if (data) {
      try {
        const params = {
          name: values.store_name,
          id: data.id,
        }
        const response = await apiClient.updateStoreType({ params: params })
        if (response.data.success) {
          toast.success(response.data.message)
          setTimeout(() => {
            router.push("/super_admin/store-type")
            setButtonFlag(false)
          }, 1000)
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
        setButtonFlag(false)
      }
    }
  }

  const handleAddStore = async (values: StoreForm) => {
    try {
      const params = {
        name: values.store_name,
      }
      const response = await apiClient.addStore({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/super_admin/store-type")
          setButtonFlag(false)
        }, 1000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      setButtonFlag(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      store_name: data && data.name ? data.name : "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setButtonFlag(true)

      if (data) {
        handleUpdateStore(values)
      } else {
        handleAddStore(values)
      }
    },
  })

  const handleResetForm = (e: any) => {
    formik.handleReset(e)
    router.push("/super_admin/store-type")
  }
  return (
    <>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <div className='flex flex-col gap-4 sm:flex-row '>
          <TextFieldCommon
            id='store_name'
            placeholder={common.store_name_placeholder}
            label={common.store_name_label}
            value={formik.values.store_name}
            name='store_name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.store_name && formik.errors.store_name
                ? formik.errors.store_name
                : null
            }
          />
          <ButtonWraper>
            <div className='flex items-center gap-2 m-0'>
              <button
                // variant='outlined'
                onClick={(e) => handleResetForm(e)}
                className='inline-flex items-center px-6 py-2 border h-[45px] border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
              >
                {common.cancel_button_label}
              </button>
              <button
                type='submit'
                // disableElevation
                // variant='contained'
                aria-label='Save'
                disabled={buttonFlag}
                className='inline-flex items-center px-6 py-2 border h-[45px] border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
              >
                {common.save_button_label}
              </button>
            </div>
          </ButtonWraper>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default StoreTypeForm
