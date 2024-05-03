import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import ThemesMain from "@/src/component/super_admin/themes/themes"
import React from "react"

const ThemesPage = () => {
  return (
    <AuthGuard>
      <Layout>
        <ThemesMain />
      </Layout>
    </AuthGuard>
  )
}

export default ThemesPage
