import React, { useState } from "react"
import AdminSidebar from "./adminSidebar"
import AdminHeader from "./adminHeader"
import { adminSidebarOption } from "./adminOption"

const AdminLayout = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={adminSidebarOption}
        />
        <div className='md:pl-56 flex flex-col flex-1'>
          <AdminHeader setSidebarOpen={setSidebarOpen} />
          <main className='flex-1 p-3 pt-5 sm:p-3 sm:pt-5'>{children}</main>
        </div>
      </div>
    </>
  )
}

export default AdminLayout
