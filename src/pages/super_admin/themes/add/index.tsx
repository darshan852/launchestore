import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import ThemesForm from "@/src/component/super_admin/themes/themesForm"
import React from "react"

const AddTheme = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Add Theme'>
          <ThemesForm />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default AddTheme
