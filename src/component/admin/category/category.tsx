import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { useDebounce } from "@/src/hooks/useDebounce"
import { CategoryDetail } from "@/src/service/admin/category"
import { newClientInstance } from "@/src/service/admin/newClient"
import { useRouter } from "next/router"
import React from "react"
import { FaEdit } from "react-icons/fa"
import { MdControlPoint, MdDelete } from "react-icons/md"
import Swal from "sweetalert2"

const CategoryListing = () => {
  const router = useRouter()
  const [categoryList, setCategoryList] = React.useState<CategoryDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)
  const [isDeletedFlag, setDeletedFlag] = React.useState<boolean>(false)

  const handleGetCategoryList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "ASC",
        limit: rowsPerPage,
      }
      const response = await newClientInstance.getCategoryList({
        params: params,
      })
      if (response.data.success) {
        console.log(response)
        setCategoryList(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error) {
      console.log(error)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetCategoryList()
  }, [handleGetCategoryList, debounceText, page, rowsPerPage])

  const columns: readonly Column[] = [
    { id: "name", label: "Name", minWidth: 170, type: "text" },
    { id: "image", label: "Image", minWidth: 170, type: "image" },
  ]

  const handleDeleteCategory = async (value: number[]) => {
    try {
      const params = {
        ids: value,
      }
      const response = await newClientInstance.deleteCategory({
        params: params,
      })
      if (response.data.success) {
        Swal.fire("Delete!", response.data.message, "success")
        handleGetCategoryList()
        setDeletedFlag(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const action: CustomeCheckboxAction[] = [
    {
      label: "Edit",
      icon: FaEdit,
      iconDirection: "right",
      onClick: (value: CategoryDetail) => {
        router.push(`/admin/category/edit/${value.id}`)
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
      onClick: (value: CategoryDetail) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this category.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDeleteCategory([value.id])
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
      onClick: (value: CategoryDetail[]) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this category.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDeleteCategory(value.map((v) => v.id))
          }
        })
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white",
    },
  ]

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/admin/category/add")
    },
    variant: "contained",
    color: "Primary",
    className: "bg-Primary-500 text-white ",
  }

  return (
    <>
      <CustomeTabel
        columns={columns}
        rows={categoryList}
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
        setDeletedFlag={setDeletedFlag}
      />
    </>
  )
}

export default CategoryListing
