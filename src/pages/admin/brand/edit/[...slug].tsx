import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import UpdateBrand from "@/src/component/admin/brand/updateBrand"
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
  const brandId = context.params?.slug?.[0] as string

  if (!brandId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      brandId: brandId.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const UpdateBrandMain = (props: { brandId: string }) => {
  const { brandId } = props
  return (
    <AdminLayout>
      <DashboardCard title='Edit Category'>
        <UpdateBrand brandId={brandId} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default UpdateBrandMain
