import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import EditDelivery from "@/src/component/admin/deliveryStaff/editDelivery"
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
  const delivery_id = context.params?.slug?.[0] as string

  if (!delivery_id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      delivery_id: delivery_id.toString(),
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const UpdateDeliverStaffMain = (props: { delivery_id: string }) => {
  const { delivery_id } = props
  return (
    <AdminLayout>
      <DashboardCard title='Edit Delivery'>
        <EditDelivery delivery_id={delivery_id} />
      </DashboardCard>
    </AdminLayout>
  )
}

export default UpdateDeliverStaffMain
