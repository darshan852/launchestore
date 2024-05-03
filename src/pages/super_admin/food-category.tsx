import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import FoodCategory from "@/src/component/super_admin/foodCategory/foodCategory"
import React from "react"

const FoodCategoryMain = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Select Store Type For Food Category '>
          <FoodCategory />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default FoodCategoryMain
