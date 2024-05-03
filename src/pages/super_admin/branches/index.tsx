import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import BranchesMain from "@/src/component/super_admin/branches/branches"
import React from "react"

const Branches = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Branches'>
          <BranchesMain />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default Branches
