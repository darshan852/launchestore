import React from "react"
import {
  BranchTabel,
  BranchesCommonDetail,
  convertBranchTabelResponse,
  convertFilterOption,
} from "./branchesCommon"
import { useDebounce } from "@/src/hooks/useDebounce"
import { apiClient } from "@/src/service/client"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { FaEdit } from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify"
import { FilterOption } from "@/src/service/branches"
import SelectField from "@/src/common/formfield/selectField"
import { useRouter } from "next/router"

const handleChipClass = (value: string) => {
  const className = `${value === "Active" ? "chip-active" : "chip-inactive"} `
  return className
}

const BranchesMain = () => {
  const router = useRouter()
  const [branchList, setBranchList] = React.useState<BranchesCommonDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const [selectedVendor, setSelectedVendor] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)
  const [vendorList, setVendorList] = React.useState<FilterOption[]>([])

  const handleGetVendorOption = async () => {
    try {
      const response = await apiClient.getBranchVendorOption()
      if (response.data.data) {
        setVendorList(response.data.data)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleGetBranchList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "ASC",
        limit: rowsPerPage,
        vendor_id: selectedVendor,
      }
      const response = await apiClient.getAllBranchList({ params: params })
      if (response.data.success) {
        setBranchList(response.data.data)
        setTotalRecord(response.data.totalRecords)
        handleGetVendorOption()
      }
    } catch (error) {
      console.log(error)
    }
  }, [debounceText, page, rowsPerPage, selectedVendor])

  React.useEffect(() => {
    handleGetBranchList()
  }, [handleGetBranchList, debounceText, page, rowsPerPage, selectedVendor])

  const handleStatusChange = async (value: BranchTabel) => {
    try {
      const params = {
        branch_id: value.id,
        status: value.status === "Active" ? "0" : "1",
      }
      const response = await apiClient.updateBranchStatus({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetBranchList()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const columns: readonly Column[] = [
    { id: "name", label: "Name", minWidth: 170, type: "text" },
    { id: "email", label: "Branch Email", minWidth: 170, type: "text" },
    { id: "phone", label: "Phone Number", minWidth: 170, type: "text" },
    { id: "domain_name", label: "Domain", minWidth: 170, type: "link" },
    { id: "location", label: "Location", minWidth: 170, type: "link" },
    {
      id: "status",
      label: "Status",
      minWidth: 170,
      type: "chip",
      className: handleChipClass,
      onClick: (value: BranchTabel) => {
        handleStatusChange(value)
      },
    },
  ]

  const action: CustomeCheckboxAction[] = [
    {
      label: "Edit",
      icon: FaEdit,
      iconDirection: "right",
      onClick: (e: BranchTabel) => {
        router.push(`/super_admin/branches/edit/${e.id}`)
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white",
    },
  ]

  return (
    <>
      <div className='flex gap-x-2 flex-col sm:flex-row mb-8 sm:mb-0'>
        <div className='w-[100%] lg:w-[30%] md:w-[40%] sm:w-[40%]'>
          <SelectField
            error={null}
            label=''
            name='domain_type'
            onChange={(e: any) => {
              setSelectedVendor(e.target.value)
            }}
            option={[
              {
                label: "Select Vendor",
                value: "",
              },
              ...convertFilterOption(vendorList),
            ]}
            value={selectedVendor}
          />
        </div>
        <div className=''>
          <button
            // variant='contained'
            onClick={() => setSelectedVendor("")}
            className='inline-flex items-center gap-1 px-3 py-2 border h-[45px] border-Secondary text-sm sm-text-md sm-px-5 font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
          >
            Reset
          </button>
        </div>
      </div>
      <CustomeTabel
        columns={columns}
        rows={convertBranchTabelResponse(branchList)}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRecord={totalRecord}
        search={search}
        setSearch={setSearch}
        action={action}
      />
      <ToastContainer />
    </>
  )
}

export default BranchesMain
