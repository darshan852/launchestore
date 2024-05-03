import React from "react"
import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import VendorForm from "@/src/component/super_admin/vendore/vendorForm"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"

const AddVendore = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Add Store'>
          <VendorForm />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default AddVendore
