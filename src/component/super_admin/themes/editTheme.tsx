import { useRouter } from "next/navigation"
import React from "react"
import { ThemeDetail } from "./themeCommon"
import ThemesForm from "./themesForm"
import { toast } from "react-toastify"
import { apiClient } from "@/src/service/client"

interface EditThemeProps {
  themeId: string
}

const EditTheme: React.FC<EditThemeProps> = (props) => {
  const { themeId } = props
  const router = useRouter()
  const [themeDetail, setThemeDetail] = React.useState<ThemeDetail>()

  const handleGetTheme = React.useCallback(async (id: number) => {
    try {
      const params = {
        id: id,
      }
      const response = await apiClient.getThemeDetail({ params: params })
      if (response.data.success) {
        setThemeDetail(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      setTimeout(() => {
        router.push("/super_admin/themes")
      }, 1000)
    }
  }, [])

  React.useEffect(() => {
    console.log(themeId)
    if (themeId) {
      handleGetTheme(Number(themeId))
    }
  }, [handleGetTheme, themeId])

  return <>{themeDetail && <ThemesForm data={themeDetail} />}</>
}

export default EditTheme
