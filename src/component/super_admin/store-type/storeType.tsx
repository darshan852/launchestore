"use client"
import React from "react"
// import StoreTypeForm from "./storeTypeForm"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { StoreTypeDetail } from "./storeTypeCommon"
import { useDebounce } from "@/src/hooks/useDebounce"
import { MdControlPoint } from "react-icons/md"
import { apiClient } from "@/src/service/client"
import { FaEdit } from "react-icons/fa"
import DashboardCard from "@/src/common/DashboardCard"

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170, type: "text" },
]

const indexColumn: Column = {
  id: "index",
  label: "S.No",
  minWidth: 170,
  type: "text",
}

const StoreType = () => {
  const router = useRouter()
  const [storeData, setStoreData] = React.useState<StoreTypeDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/super_admin/store-type/add")
    },
    variant: "contained",
    color: "Primary",
    style: {
      borderRadius: "none",
    },
  }

  const action: CustomeCheckboxAction[] = [
    {
      label: "Edit",
      icon: FaEdit,
      iconDirection: "right",
      onClick: (e: StoreTypeDetail) => {
        router.push(`/super_admin/store-type/edit/${e.id}`)
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white",
    },
  ]

  const handleGetStoreData = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "DESC",
        limit: rowsPerPage,
      }
      const response = await apiClient.getStoreTypeData({ params: params })
      if (response.data.success) {
        setStoreData(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetStoreData()
  }, [handleGetStoreData, debounceText, page, rowsPerPage])
  return (
    <>
      <DashboardCard title='Store'>
        <CustomeTabel
          columns={columns}
          rows={storeData}
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
      <ToastContainer />
    </>
  )
}

export default StoreType
