import DashboardCard from "@/src/common/DashboardCard"
import AdminLayout from "@/src/common/adminSidebar/adminLayout"
import DeliveryStaffForm from "@/src/component/admin/deliveryStaff/addForm"
import React from "react"

const AddDeliveryStaff = () => {
  return (
    <AdminLayout>
      <DashboardCard title='Add Delivery'>
        <DeliveryStaffForm />
      </DashboardCard>
    </AdminLayout>
  )
}

export default AddDeliveryStaff
