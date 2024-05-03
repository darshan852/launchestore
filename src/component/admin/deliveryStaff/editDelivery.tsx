import { GetDeliveryStaffDetailData } from "@/src/service/admin/deliveryStaff"
import { newClientInstance } from "@/src/service/admin/newClient"
import { useRouter } from "next/router"
import React from "react"
import DeliveryStaffForm from "./addForm"

interface EditDeliveryProps {
  delivery_id: string
}
const EditDelivery: React.FC<EditDeliveryProps> = (props) => {
  const { delivery_id } = props
  const router = useRouter()
  const [deliveryDetail, setDeliveryDetail] =
    React.useState<GetDeliveryStaffDetailData>()

  const handleGetDeliveryDetail = React.useCallback(async () => {
    try {
      const params = {
        delivery_id: delivery_id,
      }
      const response = await newClientInstance.getDeliveryStaffDetail({
        params: params,
      })
      if (response.data.success) {
        setDeliveryDetail(response.data.data)
      }
    } catch (error) {
      console.error(error)
      router.push("/admin/staff/delivery-staff")
    }
  }, [delivery_id])

  React.useEffect(() => {
    handleGetDeliveryDetail()
  }, [handleGetDeliveryDetail])

  return (
    <>
      {deliveryDetail && <DeliveryStaffForm deliveryDetail={deliveryDetail} />}
    </>
  )
}

export default EditDelivery
