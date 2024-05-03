import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import PackagingStaffForm from "@/src/component/admin/packagingStaff/packagingStaffForm"
import React from "react"

const PackagingStaffFormMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Add Staff'>
        <PackagingStaffForm />
      </DashboardCard>
    </AdminLayout>
  )
}

export default PackagingStaffFormMain
