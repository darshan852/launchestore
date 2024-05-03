import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import StoreType from "@/src/component/super_admin/store-type/storeType"
import React from "react"

const index = () => {
  return (
    <AuthGuard>
      <Layout>
        <StoreType />
      </Layout>
    </AuthGuard>
  )
}

export default index
