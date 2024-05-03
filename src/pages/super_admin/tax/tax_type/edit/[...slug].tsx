import React from "react"
import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import EditForm from "@/src/component/super_admin/tax/tax-type/editForm"

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const taxtype_id = context.params?.slug?.[0] as string

  if (!taxtype_id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      taxtype_id: taxtype_id.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const EditTaxType = (props: { taxtype_id: string }) => {
  const { taxtype_id } = props
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Edit Tax Type'>
          <EditForm taxtype_id={taxtype_id} />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default EditTaxType
