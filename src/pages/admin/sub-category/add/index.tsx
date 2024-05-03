import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import SubCategoryForm from "@/src/component/admin/subCategory/subCategoryForm"
import React from "react"

const AddSubCategory = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Add Sub Category'>
        <SubCategoryForm />
      </DashboardCard>
    </AdminLayout>
  )
}

export default AddSubCategory
