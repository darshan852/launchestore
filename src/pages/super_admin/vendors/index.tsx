import React from "react"
import Layout from "@/src/common/superAdminSidebar/layout"
import VendorListing from "@/src/component/super_admin/vendore/vendorListing"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"

const Vendors = () => {
  return (
    <AuthGuard>
      <Layout>
        <VendorListing />
      </Layout>
    </AuthGuard>
  )
}

export default Vendors
