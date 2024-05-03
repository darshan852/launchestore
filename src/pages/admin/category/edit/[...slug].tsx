import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import EditCategory from "@/src/component/admin/category/editCategory"
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
  const categoryId = context.params?.slug?.[0] as string

  if (!categoryId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      categoryId: categoryId.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const UpdateCategory = (props: { categoryId: string }) => {
  const { categoryId } = props
  return (
    <AdminLayout>
      <DashboardCard title='Edit Category'>
        <EditCategory categoryId={categoryId} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default UpdateCategory
