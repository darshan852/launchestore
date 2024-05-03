import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import EditBranch from "@/src/component/super_admin/branches/editBranch"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"

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
  const branchId = context.params?.slug?.[0] as string

  if (!branchId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      branchId: branchId,
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const EditStoreType = (props: any) => {
  const { branchId } = props
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Edit Branches'>
          <EditBranch branchId={branchId} />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default EditStoreType
