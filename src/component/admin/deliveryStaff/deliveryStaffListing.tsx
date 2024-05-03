import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { useDebounce } from "@/src/hooks/useDebounce"
import { DeliveryStaffDetail } from "@/src/service/admin/deliveryStaff"
import { newClientInstance } from "@/src/service/admin/newClient"
import { useRouter } from "next/router"
import React from "react"
import { FaEdit } from "react-icons/fa"
import { MdControlPoint } from "react-icons/md"
import { ToastContainer, toast } from "react-toastify"
import {
  DeliveryStaffTable,
  convertDeliveryResponse,
} from "./deliveryStaffCommon"

const handleChipClass = (value: string) => {
  const className = `${value === "Active" ? "chip-active" : "chip-inactive"} cursor-pointer`
  return className
}

const DeliveryStaffListing = () => {
  const router = useRouter()
  const [deliveryStaff, setDeliveryStaff] = React.useState<
    DeliveryStaffDetail[]
  >([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const handleGetDeliveryStaffList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "ASC",
        limit: rowsPerPage,
      }
      const response = await newClientInstance.getDeliveryStaffList({
        params: params,
      })
      if (response.data.success) {
        console.log(response)
        setDeliveryStaff(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error) {
      console.log(error)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetDeliveryStaffList()
  }, [handleGetDeliveryStaffList, debounceText, page, rowsPerPage])

  const handleStatusChange = async (value: DeliveryStaffTable) => {
    try {
      const params = {
        user_id: value.userId,
        status: value.status === "Active" ? "0" : "1",
      }
      const response = await newClientInstance.updateDeliveryStaffStatus({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetDeliveryStaffList()
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
      onClick: (value: DeliveryStaffTable) => {
        handleStatusChange(value)
      },
    },
  ]

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/admin/staff/delivery-staff/add")
    },
    variant: "contained",
    color: "Primary",
    className: "bg-primary-500 text-white ",
  }

  const action = [
    {
      label: "Edit Product",
      onClick: (e: DeliveryStaffTable) =>
        router.push(`/admin/staff/delivery-staff/edit/${e.userId}`),
      iconDirection: "right",
      icon: FaEdit,
    },
  ]

  return (
    <>
      <CustomeTabel
        columns={columns}
        rows={convertDeliveryResponse(deliveryStaff)}
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

export default DeliveryStaffListing
