// components/Layout.js

import React, { useState } from "react"
import Sidebar from "./sidebar"
import Header from "./header"
import { Menuitems } from "./navItem"

const Layout = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [open, setOpen] = useState(true)

  return (
    <>
      <div>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={Menuitems}
          open={open}
        />
        <div
          className={`${open ? "md:pl-56" : "md:pl-20"} flex flex-col flex-1`}
        >
          <Header
            setSidebarOpen={setSidebarOpen}
            setOpen={setOpen}
            open={open}
          />
          <main className='flex-1 p-3 pt-3 sm:p-3 sm:pt-5'>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
