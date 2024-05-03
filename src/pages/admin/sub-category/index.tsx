import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import SubCategory from "@/src/component/admin/subCategory/subCategory"
import React from "react"

const SubCategoryMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Sub Category'>
        <SubCategory />
      </DashboardCard>
    </AdminLayout>
  )
}

export default SubCategoryMain
