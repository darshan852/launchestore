import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"
import TaxType from "@/src/component/super_admin/tax/tax-type/taxType"

const TaxTypeMain = () => {
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Tax Type'>
          <TaxType />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default TaxTypeMain
