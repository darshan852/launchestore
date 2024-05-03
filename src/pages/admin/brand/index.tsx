import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import Brand from "@/src/component/admin/brand/brand"
import React from "react"

const BrandMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Brand'>
        <Brand />
      </DashboardCard>
    </AdminLayout>
  )
}

export default BrandMain
