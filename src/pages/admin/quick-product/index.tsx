import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import QuickProduct from "@/src/component/admin/quickProduct/quickProduct"
import React from "react"

const QuickProductMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Quick Add Product'>
        <QuickProduct />
      </DashboardCard>
    </AdminLayout>
  )
}

export default QuickProductMain
