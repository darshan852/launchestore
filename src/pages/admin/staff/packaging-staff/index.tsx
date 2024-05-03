import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import PackageStaffList from "@/src/component/admin/packagingStaff/packageStaffList"
import React from "react"

const PackageStaffMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Staff'>
        <PackageStaffList />
      </DashboardCard>
    </AdminLayout>
  )
}

export default PackageStaffMain
