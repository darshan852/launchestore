import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import FormStart from "./productForm/formStart"
import FormMiddle from "./productForm/formMiddle"
import { useRouter } from "next/router"
import { ProductFormFields } from "./productCommon"
import { toast } from "react-toastify"
import { newClientInstance } from "@/src/service/admin/newClient"
import { UpdateProductDetail } from "@/src/service/admin/product"

interface ProductFormProps {
  productDetail?: UpdateProductDetail
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
  const { productDetail } = props
  const router = useRouter()
  const [tags, setTags] = React.useState<string[]>([])

  React.useEffect(() => {
    if (productDetail) {
      formik.setValues({
        ...formik,
        name: productDetail.name,
        category_id: productDetail.category_id.toString(),
        brand_id: productDetail.brand_id.toString(),
        subcategory_id: productDetail.subcategory_id.toString(),
        gst: productDetail.gst.toString(),
        content: productDetail.content,
        about: productDetail.about,
        food_type: productDetail.food_type,
        display_priority: productDetail.display_priority.toString(),
        tags: productDetail.Product_searches.map((e) => e.name),
      })
      setTags(productDetail.Product_searches.map((e) => e.name))
    }
  }, [productDetail])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter product name"),
    category_id: Yup.string().required("Please select category"),
    subcategory_id: Yup.string().required("Please select subcategory"),
    brand_id: Yup.string().required("Please select brand"),
    display_priority: Yup.string(),
    content: Yup.string(),
    food_type: Yup.string(),
    about: Yup.string(),
    gst: Yup.string(),
    tags: Yup.array(),
  })

  const handleUpdateProduct = async (value: ProductFormFields, id: number) => {
    try {
      const params = {
        product_id: id,
        category_id: Number(value.category_id),
        subcategory_id: Number(value.subcategory_id),
        brand_id: Number(value.brand_id),
        name: value.name,
        display_priority: value.display_priority,
        food_type: value.food_type,
        about: value.about,
        content: value.content,
        gst: value.gst,
        tags: tags,
      }
      const response = await newClientInstance.updateProduct({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/admin/products")
        }, 1500)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleAddProduct = async (value: ProductFormFields) => {
    try {
      const params = {
        category_id: Number(value.category_id),
        subcategory_id: Number(value.subcategory_id),
        brand_id: Number(value.brand_id),
        name: value.name,
        display_priority: value.display_priority,
        food_type: value.food_type,
        about: value.about,
        content: value.content,
        gst: value.gst,
        tags: tags,
      }
      const response = await newClientInstance.addProduct({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/admin/products")
        }, 1500)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      category_id: "",
      subcategory_id: "",
      brand_id: "",
      food_type: "1",
      display_priority: "",
      content: "",
      about: "",
      gst: "",
      tags: [] as unknown as string[],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("first")
      if (productDetail) {
        handleUpdateProduct(values, productDetail.id)
      } else {
        handleAddProduct(values)
      }
    },
  })

  const handleCancel = () => {
    router.push("/admin/products")
  }
  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex flex-wrap gap-1'>
            <div className='w-[48%] p-2'>
              <FormStart
                formik={formik}
                tags={tags}
                setTags={setTags}
                productDetail={productDetail}
              />
            </div>

            <div className='w-1/2 p-2'>
              <FormMiddle formik={formik} />
            </div>

            <div className='w-full flex justify-center items-center mt-10'>
              <div className='flex items-center gap-2 '>
                <button
                  onClick={handleCancel}
                  type='button'
                  className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
                >
                  Cancel
                </button>
                <button
                  // variant='contained'
                  aria-label='Save'
                  type='button'
                  className='inline-flex items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
                  onClick={() => formik.handleSubmit()}
                >
                  {productDetail ? "Update" : "Add"} Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProductForm
