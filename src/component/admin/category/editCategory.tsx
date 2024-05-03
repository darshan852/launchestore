import { CategoryDetail } from "@/src/service/admin/category"
import { newClientInstance } from "@/src/service/admin/newClient"
import { useRouter } from "next/router"
import React from "react"
import CatoryForm from "./catoryForm"

interface EditCategoryProps {
  categoryId: string
}

const EditCategory: React.FC<EditCategoryProps> = (props) => {
  const { categoryId } = props
  const router = useRouter()
  const [categoryDetail, setCategoryDetail] = React.useState<CategoryDetail>()

  const handleGetCategoryDetail = React.useCallback(async () => {
    try {
      const params = {
        categoryId: categoryId,
      }
      const response = await newClientInstance.getCategoryDetail({
        params: params,
      })
      if (response.data.success) {
        setCategoryDetail(response.data.data)
      }
    } catch (error) {
      console.error(error)
      router.push("/admin/category")
    }
  }, [categoryId])

  React.useEffect(() => {
    handleGetCategoryDetail()
  }, [handleGetCategoryDetail])

  return <>{categoryDetail && <CatoryForm categoryDetail={categoryDetail} />}</>
}

export default EditCategory
