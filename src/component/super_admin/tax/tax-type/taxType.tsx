import { apiClient } from "@/src/service/client"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import { TaxTypeDetail } from "../taxCommon"
import { useRouter } from "next/router"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { MdControlPoint, MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import Swal from "sweetalert2"
import { useDebounce } from "@/src/hooks/useDebounce"

const columns: readonly Column[] = [
  { id: "tax_type", label: "Type", minWidth: 170, type: "text" },
  {
    id: "percentage",
    label: "Tax Percentage ( % )",
    minWidth: 170,
    type: "text",
  },
]

const TaxType = () => {
  const router = useRouter()
  const [taxTypeList, setTaxTypeList] = React.useState<TaxTypeDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const handleGetTaxTypeList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "DESC",
        limit: rowsPerPage,
      }
      const response = await apiClient.getTaxTypeList({ params: params })
      if (response.data.success) {
        setTaxTypeList(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGetTaxTypeList()
  }, [handleGetTaxTypeList, debounceText, page, rowsPerPage])
  const customeAction: CustomeCheckboxAction = {
    label: "Add",
    icon: MdControlPoint,
    iconDirection: "left",
    onClick: () => {
      router.push("/super_admin/tax/tax_type/add")
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
        id: id,
      }
      const response = await apiClient.deleteTaxType({ params: params })
      if (response.data.success) {
        Swal.fire("Delete!", "Delete Successfully", "success")
        handleGetTaxTypeList()
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
      onClick: (value: TaxTypeDetail) => {
        router.push(`/super_admin/tax/tax_type/edit/${value.id}`)
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white mr-2",
    },
    {
      label: "Delete",
      icon: MdDelete,
      iconDirection: "right",
      onClick: (value: TaxTypeDetail) => {
        Swal.fire({
          title: "Are you sure?",
          text: "you want to delete this tax type .",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleDelete(value.id)
          }
        })
      },
      className: "table-delet-icon",
    },
  ]
  return (
    <>
      <CustomeTabel
        columns={columns}
        rows={taxTypeList}
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

export default TaxType
