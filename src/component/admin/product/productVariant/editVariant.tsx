import { newClientInstance } from "@/src/service/admin/newClient"
import { GetVariantDetail } from "@/src/service/admin/productVariant"
import { useRouter } from "next/router"
import React from "react"
import { toast } from "react-toastify"
import ProductVariantForm from "./productVarianrForm"

interface EditVariantProps {
  variantId: string
}
const EditVariant: React.FC<EditVariantProps> = (props) => {
  const { variantId } = props
  const router = useRouter()

  const [variant, setVariant] = React.useState<GetVariantDetail>()

  const handleGetVariant = React.useCallback(async () => {
    try {
      const params = {
        variantId: variantId,
      }
      const response = await newClientInstance.getVariantDetail({
        params: params,
      })
      if (response.data.success) {
        setVariant(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      setTimeout(() => {
        router.push("/admin/products")
      }, 1500)
    }
  }, [variantId])

  React.useEffect(() => {
    if (variantId) {
      handleGetVariant()
    }
  }, [handleGetVariant, variantId])
  return (
    <>
      {variant && (
        <ProductVariantForm
          variantDetail={variant}
          productId={variant.product_id.toString()}
        />
      )}
    </>
  )
}

export default EditVariant
