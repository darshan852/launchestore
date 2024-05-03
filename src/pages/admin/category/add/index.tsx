import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import CatoryForm from "@/src/component/admin/category/catoryForm"
import React from "react"

const AddCategory = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Add Category'>
        <CatoryForm />
      </DashboardCard>
    </AdminLayout>
  )
}

export default AddCategory
