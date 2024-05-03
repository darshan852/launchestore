import DashboardCard from "@/src/common/DashboardCard"
import React from "react"
import {
  ConfigDetail,
  ConfigTabel,
  converConfigTabel,
} from "./configurationCommon"
import { toast } from "react-toastify"
import { apiClient } from "@/src/service/client"
import { useDebounce } from "@/src/hooks/useDebounce"
import CustomeTabel, { Column, CustomeCheckboxAction } from "@/src/common/table"
import { FaEdit } from "react-icons/fa"
import { useRouter } from "next/router"

const Configuration = () => {
  const router = useRouter()
  const [configList, setConfigList] = React.useState<ConfigDetail[]>([])
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [totalRecord, setTotalRecord] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>("")
  const debounceText = useDebounce(search, 500)

  const handleGestConfigList = React.useCallback(async () => {
    try {
      const params = {
        search: debounceText,
        page: page,
        sorting: "ASC",
        limit: rowsPerPage,
      }
      const response = await apiClient.getConfigList({ params: params })
      if (response.data.success) {
        setConfigList(response.data.data)
        setTotalRecord(response.data.totalRecords)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [debounceText, page, rowsPerPage])

  React.useEffect(() => {
    handleGestConfigList()
  }, [handleGestConfigList, debounceText, page, rowsPerPage])

  const columns: readonly Column[] = [
    { id: "server_name", label: "Server Name", minWidth: 170, type: "text" },
    {
      id: "instagram_link",
      label: "Instagram Link",
      minWidth: 170,
      type: "text",
    },
    {
      id: "facebook_link",
      label: "Facebook Link",
      minWidth: 170,
      type: "text",
    },
    { id: "twitter_link", label: "Twitter Link", minWidth: 170, type: "link" },
  ]

  const action: CustomeCheckboxAction[] = [
    {
      label: "Edit",
      icon: FaEdit,
      iconDirection: "right",
      onClick: (value: ConfigTabel) => {
        router.push(`/super_admin/configuration/edit/${value.config_id}`)
      },
      color: "inherit",
      className:
        "bg-Primary-500 text-white hover:bg-Primary-200 hover:text-white",
    },
  ]
  return (
    <>
      <DashboardCard title='Configration Key'>
        <CustomeTabel
          columns={columns}
          rows={converConfigTabel(configList)}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalRecord={totalRecord}
          search={search}
          setSearch={setSearch}
          action={action}
        />
      </DashboardCard>
    </>
  )
}

export default Configuration
