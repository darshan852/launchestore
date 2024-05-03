import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import TaxList from "@/src/component/super_admin/tax/taxlist/taxList"
import React from "react"

const TaxlistMain = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Tex List'>
          <TaxList />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default TaxlistMain
