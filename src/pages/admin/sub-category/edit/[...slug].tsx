import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import UpdateSubcategory from "@/src/component/admin/subCategory/updateSubcategory"
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
  const id = context.params?.slug?.[0] as string

  if (!id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      id: id.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const UpdateSubCategoryMain = (props: { id: string }) => {
  const { id } = props
  return (
    <AdminLayout>
      <DashboardCard title='Edit Category'>
        <UpdateSubcategory id={id} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default UpdateSubCategoryMain
