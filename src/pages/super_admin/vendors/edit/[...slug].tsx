import React from "react"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import EditVendor from "@/src/component/super_admin/vendore/editVendor"
import Layout from "@/src/common/superAdminSidebar/layout"
import DashboardCard from "@/src/common/DashboardCard"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const vendorId = context.params?.slug?.[0] as string

  if (!vendorId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      vendorId: vendorId,
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}
const EditVendoreMain = (props: { vendorId: string }) => {
  const { vendorId } = props
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Edit Vendor'>
          <EditVendor vendorId={vendorId} />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default EditVendoreMain
