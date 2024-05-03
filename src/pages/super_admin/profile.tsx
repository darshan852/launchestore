import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import Profile from "@/src/component/super_admin/profile/profile"
import React from "react"

const ProfileMain = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Profile'>
          <Profile />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default ProfileMain
