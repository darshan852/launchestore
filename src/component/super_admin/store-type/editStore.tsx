import React from "react"
import StoreTypeForm from "./storeTypeForm"
import { StoreTypeDetail } from "./storeTypeCommon"
import { apiClient } from "@/src/service/client"

interface EditStoreProps {
  storeId: string
}

const EditStore: React.FC<EditStoreProps> = (props) => {
  const { storeId } = props
  const [storeDetail, setStoreDetail] = React.useState<StoreTypeDetail>()

  const handleGetStore = React.useCallback(async (id: number) => {
    try {
      const params = {
        id: id,
      }
      const response = await apiClient.getStoreDetail({ params: params })
      if (response.data.success) {
        setStoreDetail(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  React.useEffect(() => {
    if (storeId) {
      handleGetStore(Number(storeId))
    }
  }, [handleGetStore, storeId])

  return <>{storeDetail && <StoreTypeForm data={storeDetail} />}</>
}

export default EditStore
