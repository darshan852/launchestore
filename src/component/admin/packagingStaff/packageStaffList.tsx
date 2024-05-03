import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { useDebounce } from "@/src/hooks/useDebounce"
import { newClientInstance } from "@/src/service/admin/newClient"
import { PackagingStaffDetail } from "@/src/service/admin/packagingStaff"
import { useRouter } from "next/router"
import React from "react"
import { FaEdit } from "react-icons/fa"
import { MdControlPoint } from "react-icons/md"
import {
  PackagingStaffTable,
  convertPackagingResponse,
} from "./packagingStaffCommon"
import { ToastContainer, toast } from "react-toastify"

const handleChipClass = (value: string) => {
  const className = `${value === "Active" ? "chip-active" : "chip-inactive"} cursor-pointer`
  return className
}
const PackageStaffList = () => {
  const router = useRouter()
  const [packagingStaff, setPackagingStaff] = React.useState<
    PackagingStaffDetail[]
  >([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const handleGetPackagingStaffList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "ASC",
        limit: rowsPerPage,
      }
      const response = await newClientInstance.getPackagingStaffList({
        params: params,
      })
      if (response.data.success) {
        console.log(response)
        setPackagingStaff(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error) {
      console.log(error)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetPackagingStaffList()
  }, [handleGetPackagingStaffList, debounceText, page, rowsPerPage])

  const handleStatusChange = async (value: PackagingStaffTable) => {
    try {
      const params = {
        user_id: value.userId,
        status: value.status === "Active" ? "0" : "1",
      }
      const response = await newClientInstance.updateStaffStatus({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetPackagingStaffList()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const columns: readonly Column[] = [
    { id: "full_name", label: "Name", minWidth: 170, type: "text" },
    { id: "phone", label: "Mobile", minWidth: 170, type: "text" },
    { id: "email", label: "Email", minWidth: 170, type: "text" },
    {
      id: "status",
      label: "Change Status ",
      minWidth: 170,
      type: "chip",
      className: handleChipClass,
      onClick: (value: PackagingStaffTable) => {
        handleStatusChange(value)
      },
    },
  ]

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/admin/staff/packaging-staff/add")
    },
    variant: "contained",
    color: "Primary",
    className: "bg-primary-500 text-white ",
  }

  const action = [
    {
      label: "Edit Product",
      onClick: (e: PackagingStaffTable) =>
        router.push(`/admin/staff/packaging-staff/edit/${e.userId}`),
      iconDirection: "right",
      icon: FaEdit,
    },
  ]

  return (
    <>
      <CustomeTabel
        columns={columns}
        rows={convertPackagingResponse(packagingStaff)}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRecord={totalRecord}
        search={search}
        setSearch={setSearch}
        customeAction={customeAction}
        action={action}
      />
      <ToastContainer />
    </>
  )
}

export default PackageStaffList
