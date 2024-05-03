import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import React from "react"

const index = () => {
  return (
    <AuthGuard>
      <Layout>
        <div>Dashboard</div>
      </Layout>
    </AuthGuard>
  )
}

export default index
