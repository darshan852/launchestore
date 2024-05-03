import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import ProductImage from "@/src/component/admin/product/productImage/productImage"
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
  const productId = context.params?.slug?.[0] as string

  if (!productId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productId: productId.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const ProductImageMain = (props: { productId: string }) => {
  const { productId } = props
  return (
    <AdminLayout>
      <DashboardCard title='Product Image'>
        <ProductImage productId={productId} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default ProductImageMain
