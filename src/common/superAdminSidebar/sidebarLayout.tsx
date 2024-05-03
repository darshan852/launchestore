// components/Sidebar.js

import React from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
// import ListItemText from "@mui/material/ListItemText"
import { Box, IconButton } from "@mui/material"
import { IoMdClose } from "react-icons/io"
import Image from "next/image"
import { Menuitems } from "./navItem"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Sidebar = ({ open, onClose }: any) => {
  const pathName = usePathname()
  return (
    <Drawer open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role='presentation'
        onClick={onClose}
        className='bg-lightgreen pt-2'
      >
        <div className='flex items-center p-1 justify-end pt-2 pr-2'>
          <IconButton
            onClick={onClose}
            className='sidebar-close-btn border border-solid border-Primary rounded-full p-1'
          >
            <IoMdClose className='fill-Primary' />
          </IconButton>
        </div>
        <Box px={3} mb={4}>
          <div className='height-[70px] width-[160px] overflow-hidden block mt-4 mx-auto'>
            <Image
              src='/images/logo/superadminlogo.svg'
              alt='logo'
              height={70}
              width={160}
              priority
              className='mx-auto'
            />
          </div>
        </Box>
        <Box sx={{ px: "10px" }}>
          <List sx={{ pt: 0 }} className='sidebarNav' component='div'>
            {Menuitems.map((text, index) => (
              <Link
                href={text.href}
                style={{ textDecoration: "none" }}
                key={text.id}
              >
                <ListItem
                  button
                  className={`hover:bg-Primary transition hover:text-white rounded-[10px] hover:shadow-sm mb-1 ${pathName === text.href ? "bg-Primary text-white" : ""}`}
                >
                  <text.icon className='mr-6' />
                  {/* <ListItemText Primary={text.title} /> */}
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Sidebar
