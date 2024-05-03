import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import UpdateBranchForm from "./updateBranchForm"
import { useRouter } from "next/router"
import { apiClient } from "@/src/service/client"
import { BranchDetail } from "@/src/service/branches"
import { toast } from "react-toastify"
import { UpdateBranchFormField } from "./branchesCommon"
import branch from "../property/branch.json"

interface EditBranchProps {
  branchId: string
}

const EditBranch: React.FC<EditBranchProps> = (props) => {
  const { branchId } = props
  const [branchDetail, setBranchDetail] = React.useState<BranchDetail>()
  const router = useRouter()

  const handleGetBranchDetail = React.useCallback(async (branchId: string) => {
    try {
      const params = {
        id: branchId,
      }
      const response = await apiClient.branchDetail({ params: params })
      if (response.data.success) {
        setBranchDetail(response.data.data)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
      setTimeout(() => {
        router.push("/super_admin/branches")
      }, 1000)
    }
  }, [])

  React.useEffect(() => {
    if (branchId) {
      handleGetBranchDetail(branchId.toString())
    }
  }, [branchId, handleGetBranchDetail])

  React.useEffect(() => {
    formik.setValues({
      ...formik,
      email: branchDetail ? branchDetail.email : "",
      delivery_by: branchDetail?.Branch ? branchDetail.Branch.delivery_by : "",
      isOnlinePayment: branchDetail?.Branch
        ? branchDetail.Branch.isOnlinePayment
        : "",
      selfPickUp: branchDetail?.Branch ? branchDetail.Branch.selfPickUp : "",
      isCOD: branchDetail?.Branch ? branchDetail.Branch.isCOD : "",
      whatsappFlag: branchDetail?.Branch
        ? branchDetail.Branch.whatsappFlag
        : "",
      delivery_time_date: branchDetail?.Branch
        ? branchDetail.Branch.delivery_time_date
        : "",
      yearly_plan: branchDetail?.Branch
        ? branchDetail.Branch.yearly_plan?.toString()
        : "",
    })
  }, [branchDetail])

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(`${branch.email_error}`)
      .required(`${branch.email_error_2}`),
    delivery_by: Yup.string(),
    isOnlinePayment: Yup.string(),
    selfPickUp: Yup.string(),
    isCOD: Yup.string(),
    whatsappFlag: Yup.string(),
    delivery_time_date: Yup.string(),
    yearly_plan: Yup.string(),
  })

  const formik = useFormik({
    initialValues: {
      email: branchDetail ? branchDetail.email : "",
      delivery_by: branchDetail?.Branch ? branchDetail.Branch.delivery_by : "",
      isOnlinePayment: branchDetail?.Branch
        ? branchDetail.Branch.isOnlinePayment
        : "",
      selfPickUp: branchDetail?.Branch ? branchDetail.Branch.selfPickUp : "",
      isCOD: branchDetail?.Branch ? branchDetail.Branch.isCOD : "",
      whatsappFlag: branchDetail?.Branch
        ? branchDetail.Branch.whatsappFlag
        : "",
      delivery_time_date: branchDetail?.Branch
        ? branchDetail.Branch.delivery_time_date
        : "",
      yearly_plan: branchDetail?.Branch
        ? branchDetail.Branch.yearly_plan?.toString()
        : "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      formik.setSubmitting(true)
      handleUpdateBranch(values)
    },
  })

  const handleUpdateBranch = async (value: UpdateBranchFormField) => {
    if (branchDetail?.id) {
      const params = {
        ...value,
        user_id: branchDetail?.id.toString(),
      }
      try {
        const response = await apiClient.updateBranch({ params: params })
        if (response.data.success) {
          toast.success(response.data.message)
          router.push("/super_admin/branches")
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      } finally {
        formik.setSubmitting(false)
      }
    }
  }

  const handleCancel = (e: any) => {
    formik.resetForm(e)
    router.push("/super_admin/branches")
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <UpdateBranchForm formik={formik} />
        <div className='w-full flex justify-center items-center gap-x-2 m-3'>
          <button
            // variant='outlined'
            onClick={(e) => handleCancel(e)}
            className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            {branch.cancel_button_label}
          </button>
          <button
            // variant='contained'
            aria-label='Save'
            type='submit'
            className='inline-flex items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            {branch.update_button_label}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditBranch
