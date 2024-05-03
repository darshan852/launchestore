import React from "react"
import { TaxListDetail } from "../taxCommon"
import { useDebounce } from "@/src/hooks/useDebounce"
import { useRouter } from "next/router"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { MdControlPoint, MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { apiClient } from "@/src/service/client"
import { ToastContainer, toast } from "react-toastify"
import Swal from "sweetalert2"

const columns: readonly Column[] = [
  { id: "tax_name", label: "Tax Name", minWidth: 170, type: "text" },
]

const TaxList = () => {
  const router = useRouter()
  const [taxList, setTaxList] = React.useState<TaxListDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const handleGetTaxList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "DESC",
        limit: rowsPerPage,
      }
      const response = await apiClient.getTaxlist({ params: params })
      if (response.data.success) {
        setTaxList(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetTaxList()
  }, [handleGetTaxList, debounceText, page, rowsPerPage])

  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/super_admin/tax/taxlist/add")
    },
    variant: "contained",
    color: "Primary",
    style: {
      borderRadius: "none",
    },
  }

  const handleDelete = async (id: number) => {
    try {
      const params = {
        tax_id: id,
      }
      const response = await apiClient.deleteTax({ params: params })
      if (response.data.success) {
        Swal.fire("Delete!", "Delete Successfully", "success")
        handleGetTaxList()
      }
    } catch (error: any) {
      console.log(error)
      Swal.fire("Error!", error.message, "success")
    }
  }

  const action: CustomeCheckboxAction[] = [
    {
      label: "Edit",
      icon: FaEdit,
      iconDirection: "right",
      onClick: (value: TaxListDetail) => {
        router.push(`/super_admin/tax/taxlist/edit/${value.id}`)
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white mr-2",
    },
    {
      label: "Delete",
      icon: MdDelete,
      iconDirection: "right",
      onClick: (value: TaxListDetail) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this tax.",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDelete(value.id)
          }
        })
      },
      className: "table-delet-icon text-white",
    },
  ]
  return (
    <>
      <CustomeTabel
        columns={columns}
        rows={taxList}
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
      <ToastContainer />
    </>
  )
}

export default TaxList
