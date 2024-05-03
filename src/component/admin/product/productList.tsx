import React from "react"
import { ProductDetail } from "@/src/service/admin/product"
import { useDebounce } from "@/src/hooks/useDebounce"
import { newClientInstance } from "@/src/service/admin/newClient"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { MdControlPoint, MdDelete } from "react-icons/md"
import Swal from "sweetalert2"
import { useRouter } from "next/router"
import { RiDeleteBin7Fill } from "react-icons/ri"
import { FaEdit, FaImage } from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify"
import { ProductTableData, convertProductTableData } from "./productCommon"

const handleChipClass = (value: string) => {
  const className = `${value === "Active" ? "chip-active" : "chip-inactive"} cursor-pointer`
  return className
}

const ProductList = () => {
  const router = useRouter()
  const [productList, setProductList] = React.useState<ProductDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const [isDeletedFlag, setDeletedFlag] = React.useState<boolean>(false)
  const debounceText = useDebounce(search, 500)

  const handleGetProductList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "ASC",
        limit: rowsPerPage,
      }
      const response = await newClientInstance.getProductList({
        params: params,
      })
      if (response.data.success) {
        setProductList(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error) {
      console.log(error)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetProductList()
  }, [handleGetProductList, debounceText, page, rowsPerPage])

  const handleStatusChange = async (value: ProductTableData) => {
    try {
      const params = {
        id: value.id,
        status: value.status === "Active" ? "0" : "1",
      }
      const response = await newClientInstance.updateProductStatus({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetProductList()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const columns: readonly Column[] = [
    { id: "product_name", label: "Product Name", minWidth: 170, type: "text" },
    {
      id: "category_name",
      label: "Category Name ",
      minWidth: 170,
      type: "text",
    },
    {
      id: "subcategory_name",
      label: "Subcategory Name ",
      minWidth: 170,
      type: "text",
    },
    {
      id: "brand_name",
      label: "Brand Name ",
      minWidth: 170,
      type: "text",
    },
    {
      id: "status",
      label: "Change Status ",
      minWidth: 170,
      type: "chip",
      className: handleChipClass,
      onClick: (value: ProductTableData) => {
        handleStatusChange(value)
      },
    },
  ]

  const handleDeleteProduct = async (value: number[]) => {
    try {
      const params = {
        ids: value,
      }
      const response = await newClientInstance.deleteProducts({
        params: params,
      })
      if (response.data.success) {
        Swal.fire("Delete!", response.data.message, "success")
        handleGetProductList()
        setDeletedFlag(true)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const checkBoxAction: CustomeCheckboxAction[] = [
    {
      label: "Delete",
      icon: MdDelete,
      iconDirection: "right",
      onClick: (value: ProductTableData[]) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this product.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDeleteProduct(value.map((v) => v.id))
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
      router.push("/admin/products/add")
    },
    variant: "contained",
    color: "Primary",
    className: "bg-Primary-500 text-white ",
  }

  const action = [
    {
      label: "Manage Variants ",
      onClick: (e: ProductTableData) =>
        router.push(`/admin/products/product-variant/${e.id}`),
      icon: FaEdit,
    },
    {
      label: "Edit Product",
      onClick: (e: ProductTableData) =>
        router.push(`/admin/products/edit/${e.id}`),
      icon: FaEdit,
    },
    {
      label: "Delete Product",
      onClick: (e: ProductTableData) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this product.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDeleteProduct([e.id])
          }
        })
      },
      icon: RiDeleteBin7Fill,
    },
    {
      label: "Product Image",
      onClick: (e: ProductTableData) => {
        router.push(`/admin/products/product-imagelist/${e.id}`)
      },
      icon: FaImage,
    },
  ]
  return (
    <>
      <CustomeTabel
        columns={columns}
        rows={convertProductTableData(productList)}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRecord={totalRecord}
        search={search}
        setSearch={setSearch}
        checkabel
        checkabelAction={checkBoxAction}
        customeAction={customeAction}
        isDeletedFlag={isDeletedFlag}
        tableActionOption={action}
      />
      <ToastContainer />
    </>
  )
}

export default ProductList
