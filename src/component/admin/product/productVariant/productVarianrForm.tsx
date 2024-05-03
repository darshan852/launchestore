import SelectField from "@/src/common/formfield/selectField"
import TextFieldCommon from "@/src/common/formfield/textField"
import { newClientInstance } from "@/src/service/admin/newClient"
import { PackageDetail, UnitDetail } from "@/src/service/admin/productSetting"
import { useFormik } from "formik"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import * as Yup from "yup"
import {
  VariantForms,
  convertPackageResponse,
  convertUnitResponse,
} from "../productCommon"
import FileSelect from "@/src/common/formfield/fileSelect"
import Image from "next/image"
import { PiXCircleBold } from "react-icons/pi"
import { useRouter } from "next/router"
import { replaceAllNumbers } from "@/src/component/super_admin/vendore/vendorCommon"
import { GetVariantDetail } from "@/src/service/admin/productVariant"
import { defaultUrl } from "@/src/service/common"
import { MdDelete } from "react-icons/md"
import Swal from "sweetalert2"

interface ProductVariantFormProps {
  productId?: string
  variantDetail?: GetVariantDetail
}

const ProductVariantForm: React.FC<ProductVariantFormProps> = (props) => {
  const { productId, variantDetail } = props
  const router = useRouter()
  const [unitList, setUnitList] = React.useState<UnitDetail[]>([])
  const [packageList, setPackageList] = React.useState<PackageDetail[]>([])
  const [files, setFiles] = React.useState<any[]>([])
  const [uploadedImage, setImage] = React.useState<any[]>([])

  const handleGetUnitList = async () => {
    try {
      const response = await newClientInstance.GetUnitListResponse()
      if (response.data.success) {
        setUnitList(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleGetPackageList = async () => {
    try {
      const response = await newClientInstance.getPackageList()
      if (response.data.success) {
        setPackageList(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  React.useEffect(() => {
    handleGetUnitList()
    handleGetPackageList()
  }, [])

  React.useEffect(() => {
    if (variantDetail) {
      formik.setValues({
        ...formik,
        limited_stock: variantDetail.limited_stock.toString(),
        bar_code: variantDetail.qr_code,
        weight_id: variantDetail.weight_id.toString(),
        variant: variantDetail.weight_no,
        purchase_price: variantDetail.purchase_price.toString(),
        price: variantDetail.price.toString(),
        package_id: variantDetail.package_id.toString(),
        discount: variantDetail.discount_per.toString(),
        quantity: variantDetail.quantity.toString(),
        max_order_quantity: variantDetail.max_order_qty.toString(),
        image: "",
      })

      setImage(variantDetail.Product_images)
    }
  }, [variantDetail])

  const validationSchema = Yup.object().shape({
    limited_stock: Yup.string().required("Please enter limited stock"),
    bar_code: Yup.string(),
    weight_id: Yup.string(),
    variant: Yup.string().required("Please enter variant"),
    purchase_price: Yup.string().required("Please enter purchase price"),
    price: Yup.string().required("Please enter price"),
    package_id: Yup.string(),
    discount: Yup.string(),
    quantity: Yup.string().required("Please enter quantity"),
    max_order_quantity: Yup.string(),
    image: Yup.mixed(),
  })

  const handleUpdateVariant = async (
    values: VariantForms,
    id: string,
    variantId: string,
  ) => {
    try {
      if (uploadedImage.length === 0 && files.length === 0) {
        formik.errors.image = "Please select image"
      }
      const formData = new FormData()
      formData.append("product_id", id)
      formData.append("id", variantId)
      formData.append("limited_stock", values.limited_stock)
      formData.append("weight_id", values.weight_id)
      formData.append("unit", values.variant)
      formData.append("package_id", values.package_id)
      formData.append("purchase_price", values.purchase_price)
      formData.append("price", values.price)
      formData.append("quantity", values.quantity)
      formData.append("discount_per", values.discount)
      formData.append("bar_code", values.bar_code)
      formData.append("max_order_qty", values.max_order_quantity)
      files.map((file) => {
        console.log(file)
        formData.append("image", file.file)
      })
      const response = await newClientInstance.updateVariant({
        params: formData,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push(`/admin/products/product-variant/${productId}`)
        }, 1500)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleAddVariant = async (values: VariantForms, id: string) => {
    try {
      if (files.length === 0) {
        formik.errors.image = "Please select image"
      }
      const formData = new FormData()
      formData.append("product_id", id)
      formData.append("bar_code", values.bar_code)
      formData.append("limited_stock", values.limited_stock)
      formData.append("weight_id", values.weight_id)
      formData.append("unit", values.variant)
      formData.append("package_id", values.package_id)
      formData.append("purchase_price", values.purchase_price)
      formData.append("price", values.price)
      formData.append("quantity", values.quantity)
      formData.append("discount_per", values.discount)
      formData.append("max_order_qty", values.max_order_quantity)
      files.map((file) => {
        console.log(file)
        formData.append("image", file.file)
      })
      const response = await newClientInstance.addProductVariant({
        params: formData,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push(`/admin/products/product-variant/${productId}`)
        }, 1500)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      limited_stock: "",
      bar_code: "",
      weight_id: "",
      variant: "",
      purchase_price: "",
      price: "",
      package_id: "",
      discount: "",
      quantity: "",
      max_order_quantity: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      if (productId && !variantDetail) {
        handleAddVariant(values, productId)
      } else {
        if (variantDetail) {
          handleUpdateVariant(
            values,
            productId ? productId : "",
            variantDetail.id.toString(),
          )
        }
      }
    },
  })

  const handleFile = (e: any) => {
    const updatedArray = [...files]
    const selectedFile = [...e.target.files]
    selectedFile.map((f: (Blob | MediaSource)[]) => {
      const newFile = {
        file: f,
        filePreview: URL.createObjectURL(f as any),
      }
      updatedArray.push(newFile)
    })
    setFiles(updatedArray)
    formik.setFieldValue("image", e.target.files)
  }

  const handleRemoveImage = (index: number) => {
    const updatedArray = [...files]
    updatedArray.splice(index, 1)
    setFiles(updatedArray)
    if (updatedArray.length === 0) {
      formik.setFieldValue("image", "")
    }
  }

  const handleCancel = () => {
    router.push(`/admin/products/product-variant/${productId}`)
  }

  const handleImageRemove = (id: number, index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this image.",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleDeleteImage(id, index)
      }
    })
  }

  const handleDeleteImage = async (id: number, index: number) => {
    try {
      const params = {
        imageId: id,
      }
      const response = await newClientInstance.removeImage({ params: params })
      if (response.data.success) {
        const updatedArray = [...uploadedImage]
        updatedArray.splice(index, 1)
        setImage(updatedArray)
        Swal.fire("Delete!", response.data.message, "success")
      }
    } catch (error: any) {
      console.error(error)
      Swal.fire("error", error.message, "error")
    }
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex gap-3 flex-wrap'>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='variant'
              placeholder={"Enter Variant Name"}
              label={"Variant Name"}
              value={formik.values.variant}
              name='variant'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.variant && formik.errors.variant
                  ? formik.errors.variant
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='purchase_price'
              placeholder={"Enter Purchase Price :"}
              label={"Purchase Price :"}
              value={formik.values.purchase_price}
              name='purchase_price'
              onChange={(e: { target: { value: string } }) =>
                formik.setFieldValue(
                  "purchase_price",
                  replaceAllNumbers(e.target.value),
                )
              }
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.purchase_price && formik.errors.purchase_price
                  ? formik.errors.purchase_price
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <SelectField
              error={
                formik.touched.weight_id && formik.errors.weight_id
                  ? formik.errors.weight_id
                  : null
              }
              label='Unit : '
              name='weight_id'
              onBlur={formik.handleBlur}
              onChange={(e: { target: { value: any } }) =>
                formik.setFieldValue("weight_id", e.target.value)
              }
              option={[
                {
                  label: "Select Unit",
                  value: "",
                },
                ...convertUnitResponse(unitList),
              ]}
              value={formik.values.weight_id}
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='price'
              placeholder={"Enter MRP"}
              label={"Maximum Retail Price (MRP) : "}
              value={formik.values.price}
              name='price'
              onChange={(e: { target: { value: string } }) =>
                formik.setFieldValue("price", replaceAllNumbers(e.target.value))
              }
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.price && formik.errors.price
                  ? formik.errors.price
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <SelectField
              error={
                formik.touched.package_id && formik.errors.package_id
                  ? formik.errors.package_id
                  : null
              }
              label='Package :'
              name='package_id'
              onBlur={formik.handleBlur}
              onChange={(e: { target: { value: any } }) =>
                formik.setFieldValue("package_id", e.target.value)
              }
              option={[
                {
                  label: "Select Package",
                  value: "",
                },
                ...convertPackageResponse(packageList),
              ]}
              value={formik.values.package_id}
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='discount'
              placeholder={"Enter Discount(%) "}
              label={"Discount(%) :"}
              value={formik.values.discount}
              name='discount'
              onChange={(e: { target: { value: string } }) =>
                formik.setFieldValue(
                  "discount",
                  replaceAllNumbers(e.target.value),
                )
              }
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.discount && formik.errors.discount
                  ? formik.errors.discount
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='quantity'
              placeholder={"Enter Quantity : "}
              label={"Quantity :  "}
              value={formik.values.quantity}
              name='quantity'
              onChange={(e: { target: { value: string } }) =>
                formik.setFieldValue(
                  "quantity",
                  replaceAllNumbers(e.target.value),
                )
              }
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.quantity && formik.errors.quantity
                  ? formik.errors.quantity
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='max_order_quantity'
              placeholder={"Enter Max Order Quantity :"}
              label={"Max Order Quantity : "}
              value={formik.values.max_order_quantity}
              name='max_order_quantity'
              onChange={(e: { target: { value: string } }) =>
                formik.setFieldValue(
                  "max_order_quantity",
                  replaceAllNumbers(e.target.value),
                )
              }
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.max_order_quantity &&
                formik.errors.max_order_quantity
                  ? formik.errors.max_order_quantity
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='bar_code'
              placeholder={"Enter Bar Code :"}
              label={"Bar Code :"}
              value={formik.values.bar_code}
              name='bar_code'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.bar_code && formik.errors.bar_code
                  ? formik.errors.bar_code
                  : null
              }
            />
          </div>
          <div className='w-[100%] sm:w-[48%]'>
            <FileSelect
              id='image'
              placeholder={"Select Image"}
              label={"Image :"}
              value={""}
              name='image'
              onChange={(e: any) => handleFile(e)}
              onBlur={formik.handleBlur}
              variant='outlined'
              multiple
              error={
                formik.touched.image && formik.errors.image
                  ? formik.errors.image
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='limited_stock'
              placeholder={"Enter Limited Stock : "}
              label={"Limited Stock : "}
              value={formik.values.limited_stock}
              name='limited_stock'
              onChange={(e: { target: { value: string } }) =>
                formik.setFieldValue(
                  "limited_stock",
                  replaceAllNumbers(e.target.value),
                )
              }
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.limited_stock && formik.errors.limited_stock
                  ? formik.errors.limited_stock
                  : null
              }
            />
          </div>
          <div className='flex items-center gap-2  w-[48%] overflow-scroll p-2'>
            {files.length > 0 &&
              files.map((file, index) => (
                <div key={index} className='relative'>
                  <Image
                    src={file.filePreview}
                    alt='image'
                    className='w-30 h-30'
                    height={100}
                    width={100}
                    quality={80}
                  />
                  {variantDetail && (
                    <div className='absolute top-0 right-0 cursor-pointer'>
                      <PiXCircleBold
                        className='w-5 h-5'
                        onClick={() => handleRemoveImage(index)}
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        {uploadedImage.length > 0 && (
          <div className='flex items-center gap-2  w-full p-2 mt-5 overflow-scroll'>
            {uploadedImage.map((file, index) => (
              <div key={index} className='relative'>
                <Image
                  src={`${defaultUrl}/${file.image}`}
                  alt='image'
                  className='w-36 h-36'
                  height={100}
                  width={100}
                  quality={80}
                />
                {variantDetail && (
                  <div className='absolute top-0 right-0 cursor-pointer'>
                    <MdDelete
                      className='w-5 h-5'
                      onClick={() => handleImageRemove(file.id, index)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
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
              aria-label='Save'
              type='submit'
              className='inline-flex items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
            >
              Add Variant
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default ProductVariantForm
