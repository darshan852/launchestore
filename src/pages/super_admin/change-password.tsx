import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import ChangePassword from "@/src/component/super_admin/change-password/changePassword"
import React from "react"

const ChangePasswordMain = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Change Password'>
          <ChangePassword />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default ChangePasswordMain
