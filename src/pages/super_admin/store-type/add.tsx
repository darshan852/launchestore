import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import StoreTypeForm from "@/src/component/super_admin/store-type/storeTypeForm"
import React from "react"

const Add = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Add Store'>
          <StoreTypeForm />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default Add
