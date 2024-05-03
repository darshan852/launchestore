import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import ProductList from "@/src/component/admin/product/productList"
import React from "react"

const ProductMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Product'>
        <ProductList />
      </DashboardCard>
    </AdminLayout>
  )
}

export default ProductMain
