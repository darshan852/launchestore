import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import Configuration from "@/src/component/super_admin/configuration/configuration"
import React from "react"

const ConfigurationMain = () => {
  return (
    <AuthGuard>
      <Layout>
        <Configuration />
      </Layout>
    </AuthGuard>
  )
}

export default ConfigurationMain
