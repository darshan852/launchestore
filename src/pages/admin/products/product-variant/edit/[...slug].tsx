import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import EditVariant from "@/src/component/admin/product/productVariant/editVariant"
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
  const variantId = context.params?.slug?.[0] as string

  if (!variantId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      variantId: variantId.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const UpdateVariant = (props: { variantId: string }) => {
  const { variantId } = props
  return (
    <AdminLayout>
      <DashboardCard title='Edit Product'>
        <EditVariant variantId={variantId} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default UpdateVariant
