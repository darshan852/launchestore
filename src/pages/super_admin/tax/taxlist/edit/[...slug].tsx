import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import UpdateTax from "@/src/component/super_admin/tax/taxlist/updateTax"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const tax_id = context.params?.slug?.[0] as string

  if (!tax_id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tax_id: tax_id,
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const EditTax = (props: { tax_id: string }) => {
  const { tax_id } = props
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Edit Store'>
          <UpdateTax tax_id={tax_id} />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default EditTax
