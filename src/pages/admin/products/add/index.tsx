import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import ProductForm from "@/src/component/admin/product/productForm"
import React from "react"

const AddProduct = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Add Product'>
        <ProductForm />
      </DashboardCard>
    </AdminLayout>
  )
}

export default AddProduct
