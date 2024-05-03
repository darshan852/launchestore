import { newClientInstance } from "@/src/service/admin/newClient"
import { UpdateProductDetail } from "@/src/service/admin/product"
import { useRouter } from "next/router"
import React from "react"
import ProductForm from "./productForm"

interface EditProductProps {
  productId: string
}

const EditProduct: React.FC<EditProductProps> = (props) => {
  const { productId } = props
  const router = useRouter()
  const [ProductDetail, setProductDetail] =
    React.useState<UpdateProductDetail>()

  const handleGetProductDetail = React.useCallback(async () => {
    try {
      const params = {
        productId: productId,
      }
      const response = await newClientInstance.getProductDetail({
        params: params,
      })
      if (response.data.success) {
        setProductDetail(response.data.data)
      }
    } catch (error) {
      console.error(error)
      setTimeout(() => {
        router.push("/admin/products")
      }, 1500)
    }
  }, [productId])

  React.useEffect(() => {
    handleGetProductDetail()
  }, [handleGetProductDetail])
  return <>{ProductDetail && <ProductForm productDetail={ProductDetail} />}</>
}
export default EditProduct
