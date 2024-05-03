import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import CategoryListing from "@/src/component/admin/category/category"
import React from "react"

const CategoryMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Category'>
        <CategoryListing />
      </DashboardCard>
    </AdminLayout>
  )
}

export default CategoryMain
