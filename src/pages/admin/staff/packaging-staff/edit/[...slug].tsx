import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import UpdatePackage from "@/src/component/admin/packagingStaff/editPackage"
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
  const staffId = context.params?.slug?.[0] as string

  if (!staffId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      staffId: staffId.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const UpdatePackageMain = (props: { staffId: string }) => {
  const { staffId } = props
  return (
    <AdminLayout>
      <DashboardCard title='Edit Staff'>
        <UpdatePackage staffId={staffId} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default UpdatePackageMain
