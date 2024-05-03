import Button from "@/src/common/button"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { useDebounce } from "@/src/hooks/useDebounce"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ProductVariantList } from "@/src/service/admin/productVariant"
import { useRouter } from "next/router"
import React from "react"
import { FaEdit } from "react-icons/fa"
import { MdControlPoint, MdDelete } from "react-icons/md"
import { toast } from "react-toastify"
import Swal from "sweetalert2"

interface ProductVariantProps {
  productId: string
}

const ProductVariant: React.FC<ProductVariantProps> = (props) => {
  const { productId } = props
  const router = useRouter()
  const [variant, setVariant] = React.useState<ProductVariantList[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const [isDeletedFlag, setDeletedFlag] = React.useState<boolean>(false)
  const debounceText = useDebounce(search, 500)

  const handleGetProductVariant = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "ASC",
        limit: rowsPerPage,
        product_id: Number(productId),
      }
      const response = await newClientInstance.getProductVariantList({
        params: params,
      })
      if (response.data.success) {
        setVariant(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error) {
      console.log(error)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetProductVariant()
  }, [handleGetProductVariant, debounceText, page, rowsPerPage])

  const columns: readonly Column[] = [
    { id: "product_name", label: "Product Name", minWidth: 170, type: "text" },
    {
      id: "variants",
      label: "Variant",
      minWidth: 170,
      type: "text",
    },
    {
      id: "purchase_price",
      label: "Purchase Price",
      minWidth: 170,
      type: "text",
    },
    {
      id: "price",
      label: "Maximum Retail Price(MRP)",
      minWidth: 170,
      type: "text",
    },
    {
      id: "discount_per",
      label: "Discount(In%)",
      minWidth: 170,
      type: "text",
    },
    {
      id: "quantity",
      label: "Quantity",
      minWidth: 170,
      type: "text",
    },
  ]

  const handleDeleteProductVariant = async (value: number[]) => {
    try {
      const params = {
        ids: value,
      }
      const response = await newClientInstance.deleteVariant({
        params: params,
      })
      if (response.data.success) {
        Swal.fire("Delete!", response.data.message, "success")
        handleGetProductVariant()
        setDeletedFlag(true)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const action: CustomeCheckboxAction[] = [
    {
      label: "Edit",
      icon: FaEdit,
      iconDirection: "right",
      onClick: (value: ProductVariantList) => {
        router.push(`/admin/products/product-variant/edit/${value.id}`)
        console.log("first")
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white",
    },
    {
      label: "Delete",
      icon: MdDelete,
      iconDirection: "right",
      onClick: (value: ProductVariantList) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this variant.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDeleteProductVariant([value.id])
          }
        })
      },
      className:
        "bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 table-delet-icon text-white ml-2 text-white",
    },
  ]
  const checkBoxAction: CustomeCheckboxAction[] = [
    {
      label: "Delete",
      icon: MdDelete,
      iconDirection: "right",
      onClick: (value: ProductVariantList[]) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this variant.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDeleteProductVariant(value.map((v) => v.id))
          }
        })
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white ",
    },
  ]

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push(`/admin/products/product-variant/add/${productId}`)
    },
    variant: "contained",
    color: "Primary",
    className: "bg-Primary-500 text-white ",
  }

  return (
    <div>
      <CustomeTabel
        columns={columns}
        rows={variant}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRecord={totalRecord}
        search={search}
        setSearch={setSearch}
        action={action}
        checkabel
        checkabelAction={checkBoxAction}
        customeAction={customeAction}
        isDeletedFlag={isDeletedFlag}
      />
      <div className='w-full flex items-center justify-center'>
        <Button intent={"blue"} onClick={() => router.push("/admin/products")}>
          Back
        </Button>
      </div>
    </div>
  )
}

export default ProductVariant
