import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import UpdateConfig from "@/src/component/super_admin/configuration/updateConfig"
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
  const configId = context.params?.slug?.[0] as string

  if (!configId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      configId: configId,
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const EditStoreType = (props: { configId: string }) => {
  const { configId } = props
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Edit Configration'>
          <UpdateConfig configId={configId} />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default EditStoreType
