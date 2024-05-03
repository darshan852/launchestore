import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import EditStore from "@/src/component/super_admin/store-type/editStore"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import React from "react"

export const getStaticPaths: GetStaticPaths = () => {
  // if (!isProduction()) {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const storeId = context.params?.slug?.[0] as string

  if (!storeId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      storeId: storeId.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const EditStoreType = (props: any) => {
  const { storeId } = props
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Edit Store'>
          <EditStore storeId={storeId} />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default EditStoreType
