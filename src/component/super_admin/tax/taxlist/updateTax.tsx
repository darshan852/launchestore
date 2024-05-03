import React from "react"
import { TaxListDetail } from "../taxCommon"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { apiClient } from "@/src/service/client"
import TaxForm from "./taxForm"

interface UpdateTaxProps {
  tax_id: string
}

const UpdateTax: React.FC<UpdateTaxProps> = (props) => {
  const { tax_id } = props
  const router = useRouter()
  const [taxDetail, setTaxDetail] = React.useState<TaxListDetail>()

  const handleGetTaxDetail = React.useCallback(async (id: string) => {
    try {
      const params = {
        tax_id: id,
      }
      const response = await apiClient.getTaxDetail({ params: params })
      if (response.data.success) {
        setTaxDetail(response.data.data)
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
    if (tax_id) {
      handleGetTaxDetail(tax_id)
    }
  }, [handleGetTaxDetail, tax_id])
  return <>{taxDetail && <TaxForm tax={taxDetail} />}</>
}

export default UpdateTax
