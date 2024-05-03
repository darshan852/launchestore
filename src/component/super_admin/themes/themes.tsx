import React from "react"

import { toast } from "react-toastify"

import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { useDebounce } from "@/src/hooks/useDebounce"
import { apiClient } from "@/src/service/client"
import { MdControlPoint, MdDelete } from "react-icons/md"
import DashboardCard from "@/src/common/DashboardCard"
import { ThemeDetail } from "./themeCommon"
import { FaEdit } from "react-icons/fa"

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170, type: "text" },
  { id: "theme_key", label: "Key", minWidth: 170, type: "text" },
  { id: "image", label: "Image", minWidth: 170, type: "image" },
  { id: "details", label: "Details", minWidth: 170, type: "text" },
]

const indexColumn: Column = {
  id: "index",
  label: "Index",
  minWidth: 170,
  type: "text",
}

const ThemesMain = () => {
  const router = useRouter()
  const [themeList, setThemeList] = React.useState<ThemeDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const handleGetTheme = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "DESC",
        limit: rowsPerPage,
      }
      const response = await apiClient.getAllTheme({ params: params })
      if (response.data.success) {
        setThemeList(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [debounceText, page, rowsPerPage])

  const handleDelete = async (id: number) => {
    try {
      const params = {
        id: id,
      }
      const response = await apiClient.deleteTheme({ params: params })
      if (response.data.success) {
        Swal.fire("Delete!", "Delete Successfully", "success")
        handleGetTheme()
      }
    } catch (error: any) {
      console.log(error)
      Swal.fire("Error!", error.message, "success")
    }
  }

  React.useEffect(() => {
    handleGetTheme()
  }, [handleGetTheme, debounceText, page, rowsPerPage])

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/super_admin/themes/add")
    },
    variant: "contained",
    color: "Primary",
    className: "bg-Primary-500 text-white ",
  }

  const action: CustomeCheckboxAction[] = [
    {
      label: "Edit",
      icon: FaEdit,
      iconDirection: "right",
      onClick: (value: ThemeDetail) => {
        router.push(`/super_admin/themes/edit/${value.id}`)
      },
      className: "bg-Primary-500 text-white",
    },
    {
      label: "Delete",
      icon: MdDelete,
      iconDirection: "right",
      onClick: (value: ThemeDetail) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this theme.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDelete(value.id)
          }
        })
      },
      className:
        "bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 table-delet-icon text-white ml-2 text-white",
    },
  ]

  return (
    <DashboardCard title=' Theme'>
      <CustomeTabel
        columns={columns}
        rows={themeList}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRecord={totalRecord}
        showIndex
        indexColumn={indexColumn}
        search={search}
        setSearch={setSearch}
        action={action}
        customeAction={customeAction}
      />
    </DashboardCard>
  )
}

export default ThemesMain
