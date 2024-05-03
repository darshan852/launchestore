import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import SellDevelopmentMain from "@/src/component/admin/sell/sellDevelopment/sellDevelopment"
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
  const parkedId = context.params?.slug?.[0] as string

  if (!parkedId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      parkedId: parkedId.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const UpdateBrandMain = (props: { parkedId: string }) => {
  const { parkedId } = props
  return (
    <AdminLayout>
      <DashboardCard title=''>
        <SellDevelopmentMain parkedId={parkedId} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default UpdateBrandMain
