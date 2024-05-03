import {
  getLocalStorage,
  removeItemFromLocal,
} from "@/src/service/localStorage"
import { Menu, Transition } from "@headlessui/react"
import { useRouter } from "next/router"
import { Fragment } from "react"

import { BiMenuAltLeft } from "react-icons/bi"
import { FaUserAlt, FaUserCircle } from "react-icons/fa"
import { MdOutlineLogout } from "react-icons/md"

interface HeaderProps {
  setSidebarOpen: any
}

const AdminHeader = (props: HeaderProps) => {
  const { setSidebarOpen } = props
  const router = useRouter()

  const logOut = () => {
    const detail = getLocalStorage("userDetail")
    if (detail) {
      const newData = JSON.parse(detail)
      removeItemFromLocal("authToken")
      removeItemFromLocal("userDetail")
      if (
        newData.id === "37fc9d6a-8552-483e-ba00-b235b79bbe4c" ||
        newData.id === "c19bbc5f-5817-45ec-8e27-dc448b4fb548"
      ) {
        router.push("/admin/login")
      } else {
        router.push("/")
      }
    }
  }

  const userNavigation = [
    {
      name: "Your Profile",
      icon: FaUserAlt,
      href: "/super_admin/profile",
      onClick: () => router.push("/super_admin/profile"),
    },
    {
      name: "changePassword",
      icon: FaUserAlt,
      href: "/super_admin/change-password",
      onClick: () => router.push("/super_admin/change-password"),
    },
    {
      name: "Sign out",
      icon: MdOutlineLogout,
      href: "#",
      onClick: logOut,
    },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-lightgreen shadow'>
      <button
        type='button'
        className='px-4 border-r border-Primary text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent md:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <BiMenuAltLeft className='h-6 w-6' aria-hidden='true' />
      </button>
      <div className='flex-1 px-4 flex justify-between'>
        <div className='flex-1 flex'>
          <form className='w-full flex md:ml-0' action='#' method='GET'>
            {/* <label htmlFor='search-field' className='sr-only'>
                Search
              </label>
              <div className='relative w-full text-gray focus-within:text-gray-600'>
                <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                  <BiSearch className='h-5 w-5' aria-hidden='true' />
                </div>
                <input
                  id='search-field'
                  className='block w-full h-full pl-8 pr-3 py-2 bg-lightgreen border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                  placeholder='Search'
                  type='search'
                  name='search'
                />
              </div> */}
          </form>
        </div>
        <div className='ml-4 flex items-center md:ml-6'>
          {/* <button
              type='button'
              className='bg-white p-1 rounded-full text-gray hover:text-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Primary'
            >
              <span className='sr-only'>View notifications</span>
              <BiBell className='h-6 w-6' aria-hidden='true' />
            </button> */}

          {/* Profile dropdown */}
          <Menu as='div' className=' relative'>
            <div>
              <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Primary'>
                <span className='sr-only'>Open user menu</span>
                <div className='h-[35px] w-[35px] text-Primary'>
                  <FaUserCircle className='w-full h-full' />
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-Primary" : "",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full hover:text-white",
                        )}
                        onClick={item.onClick}
                      >
                        <item.icon
                          className={classNames(
                            "text-gray-600 group-hover:text-white",
                            "mr-3 flex-shrink-0 h-4 w-4",
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
