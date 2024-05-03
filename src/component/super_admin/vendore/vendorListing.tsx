import React from "react"
import {
  VendorCommonDetail,
  VendorTabelData,
  convertResponse,
} from "./vendorCommon"
import { apiClient } from "@/src/service/client"
import { useDebounce } from "@/src/hooks/useDebounce"
import { ToastContainer, toast } from "react-toastify"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { FaEdit } from "react-icons/fa"
import { MdControlPoint } from "react-icons/md"
import DashboardCard from "@/src/common/DashboardCard"
import { useRouter } from "next/navigation"

const handleChipClass = (value: string) => {
  const className = `${value === "Active" ? "chip-active" : "chip-inactive"} cursor-pointer`
  return className
}

const VendorListing = () => {
  const router = useRouter()
  const [vendorData, setVendorData] = React.useState<VendorCommonDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const handleGetAllVendor = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "DESC",
        limit: rowsPerPage,
      }
      const response = await apiClient.getAllVendor({ params: params })
      if (response.data.success) {
        setVendorData(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetAllVendor()
  }, [handleGetAllVendor, debounceText, page, rowsPerPage])

  const handleChangeStatus = async (value: VendorTabelData) => {
    try {
      const params = {
        user_id: value.vendorId,
        status: value.status === "Active" ? "0" : "1",
      }
      const response = await apiClient.updateVendorStatus({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetAllVendor()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const columns: readonly Column[] = [
    { id: "full_name", label: "Owner Name", minWidth: 170, type: "text" },
    { id: "email", label: "Email", minWidth: 170, type: "text" },
    { id: "phone", label: "Phone Number", minWidth: 170, type: "text" },
    { id: "server_name", label: "Server Name", minWidth: 170, type: "link" },
    {
      id: "status",
      label: "Status",
      minWidth: 170,
      type: "chip",
      className: handleChipClass,
      onClick: (value: VendorTabelData) => {
        handleChangeStatus(value)
      },
    },
  ]

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/super_admin/vendors/add")
    },
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
      onClick: (e: VendorTabelData) => {
        router.push(`/super_admin/vendors/edit/${e.vendorId}`)
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white",
      style: {
        backgroundColor: "#448ed7",
        color: "white",
      },
      intent: "primary",
    },
  ]
  return (
    <>
      <DashboardCard title='Vendors'>
        <CustomeTabel
          columns={columns}
          rows={convertResponse(vendorData)}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalRecord={totalRecord}
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

export default VendorListing
