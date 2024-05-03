import { newClientInstance } from "@/src/service/admin/newClient"
import { GetPackageStaffDetailData } from "@/src/service/admin/packagingStaff"
import { useRouter } from "next/router"
import React from "react"
import PackagingStaffForm from "./packagingStaffForm"

interface UpdatePackageProps {
  staffId: string
}

const UpdatePackage: React.FC<UpdatePackageProps> = (props) => {
  const { staffId } = props
  const router = useRouter()
  const [packageDetail, setPackagingDetail] =
    React.useState<GetPackageStaffDetailData>()

  const handleGetPackagingDetail = React.useCallback(async () => {
    try {
      const params = {
        package_id: staffId,
      }
      const response = await newClientInstance.getPackageStaffDetail({
        params: params,
      })
      if (response.data.success) {
        setPackagingDetail(response.data.data)
      }
    } catch (error) {
      console.error(error)
      router.push("/admin/staff/packaging-staff")
    }
  }, [staffId])

  React.useEffect(() => {
    handleGetPackagingDetail()
  }, [handleGetPackagingDetail])

  return (
    <>{packageDetail && <PackagingStaffForm packageDetail={packageDetail} />}</>
  )
}

export default UpdatePackage
