import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import AddBrand from "@/src/component/admin/brand/addBrand"
import React from "react"

const AddBrandMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Add Brand'>
        <AddBrand />
      </DashboardCard>
    </AdminLayout>
  )
}

export default AddBrandMain
