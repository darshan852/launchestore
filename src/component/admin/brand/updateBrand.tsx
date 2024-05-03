import { UpdateBrandDetail } from "@/src/service/admin/brand"
import { newClientInstance } from "@/src/service/admin/newClient"
import React from "react"
import { toast } from "react-toastify"
import AddBrand from "./addBrand"

interface UpdateBrandProps {
  brandId: string
}
const UpdateBrand: React.FC<UpdateBrandProps> = (props) => {
  const { brandId } = props
  const [brandDetail, setBrandDetail] = React.useState<UpdateBrandDetail>()

  const handleGetBrandDetail = React.useCallback(async () => {
    try {
      const params = {
        brandId: brandId,
      }
      const response = await newClientInstance.getBrandDetail({
        params: params,
      })
      if (response.data.success) {
        setBrandDetail(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [brandId])

  React.useEffect(() => {
    handleGetBrandDetail()
  }, [handleGetBrandDetail])
  return <>{brandDetail && <AddBrand brandDetail={brandDetail} />}</>
}

export default UpdateBrand
