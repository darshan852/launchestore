import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import UpdateApp from "@/src/component/super_admin/update-app/updateApp"
import React from "react"

const UpdateAppMain = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Update Version'>
          <UpdateApp />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default UpdateAppMain
