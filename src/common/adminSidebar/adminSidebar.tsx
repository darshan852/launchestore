import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { BiX } from "react-icons/bi"
import Image from "next/image"
import SidebarItemListing from "../superAdminSidebar/sidebarItemListing"
import { getLocalStorage } from "@/src/service/localStorage"
import { adminSidebar } from "@/src/service/common"

export interface NavigationItem {
  id: string
  name: string
  href: string
  icon: React.FC<any>
  current: boolean
  multiLevel: boolean
  option?: NavigationItem[]
}

interface SidebarProps {
  setSidebarOpen: any
  sidebarOpen: boolean
  navigation: NavigationItem[]
}
const AdminSidebar = (props: SidebarProps) => {
  const { sidebarOpen, setSidebarOpen, navigation } = props
  const [permission, setPermission] = React.useState<string[]>([])

  React.useEffect(() => {
    const getUserDetail = getLocalStorage("userDetail") || ""
    const role = getUserDetail && JSON.parse(getUserDetail)
    if (role) {
      const permissions = adminSidebar.find((f) => f.role_id === role.id)
      if (permissions) {
        setPermission(permissions?.permissions)
      }
    }
  }, [])

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-56 w-full pt-5 pb-4 bg-lightgreen admin-sidebar'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-2 pt-2 sidebar-close-btn'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <BiX className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center pt-5 px-4'>
                <Image
                  className='h-8 w-[160px] mx-auto'
                  src='/images/logo/superadminlogo.svg'
                  alt='logo'
                  height={32}
                  width={143}
                />
              </div>
              <div className='mt-8 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {navigation.map((item) => (
                    <SidebarItemListing item={item} key={item.name} />
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 admin-sidebar'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex flex-col flex-grow shadow pt-5 bg-lightgreen overflow-y-auto'>
          <div className='flex items-center flex-shrink-0 px-4'>
            <Image
              className='h-8 w-[160px] mx-auto'
              src='/images/logo/superadminlogo.svg'
              alt='applogo'
              height={43}
              width={130}
              quality={80}
            />
          </div>
          <div className='mt-10 flex-grow flex flex-col'>
            <nav className='flex-1 px-2 pb-4 space-y-1'>
              {navigation.map((item) =>
                permission.includes(item.id) ? (
                  <SidebarItemListing item={item} key={item.name} />
                ) : null,
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
