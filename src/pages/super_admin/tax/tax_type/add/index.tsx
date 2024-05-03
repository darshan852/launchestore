import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import TaxTypeForm from "@/src/component/super_admin/tax/tax-type/taxTypeForm"
import React from "react"

const AddTaxType = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Add Tax Type'>
          <TaxTypeForm />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default AddTaxType
