import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import TaxForm from "@/src/component/super_admin/tax/taxlist/taxForm"
import React from "react"

const TaxAdd = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Add Tax '>
          <TaxForm />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default TaxAdd
