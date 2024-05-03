import React from "react"
import DashboardCard from "@/src/common/DashboardCard"
import Layout from "@/src/common/superAdminSidebar/layout"
import EditTheme from "@/src/component/super_admin/themes/editTheme"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import AuthGuard from "@/src/component/super_admin/authGuard/authGuard"

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const themeId = context.params?.slug?.[0] as string
  console.log(themeId)

  if (!themeId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      themeId: themeId,
    },
    revalidate: 3600, //should be valid for 1 hour
  }
}

const EditThemePage = (props: any) => {
  const { themeId } = props
  return (
    <AuthGuard>
      <Layout>
        <DashboardCard title='Edit Theme'>
          <EditTheme themeId={themeId} />
        </DashboardCard>
      </Layout>
    </AuthGuard>
  )
}

export default EditThemePage
