import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import DeliveryStaffListing from "@/src/component/admin/deliveryStaff/deliveryStaffListing"
import React from "react"

const DeliveryStaffMain = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Delivery'>
        <DeliveryStaffListing />
      </DashboardCard>
    </AdminLayout>
  )
}

export default DeliveryStaffMain
