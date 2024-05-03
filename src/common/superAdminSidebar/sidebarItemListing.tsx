import React, { useState } from "react"
import { NavigationItem } from "./sidebar"
import { useRouter } from "next/router"
import { FiChevronDown } from "react-icons/fi"

interface SidebarItemListingProps {
  item: NavigationItem
}
const SidebarItemListing: React.FC<SidebarItemListingProps> = (props) => {
  const { item } = props
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  React.useEffect(() => {
    if (item.multiLevel && item.option) {
      const seletedPath = item.option?.filter(
        (opt) => opt.href === router.asPath,
      )
      if (seletedPath.length > 0) {
        setIsOpen(true)
      }
    }
  }, [item.multiLevel, item.option, router.asPath])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <>
      {!item.multiLevel ? (
        <button
          className={classNames(
            item.href === router.asPath
              ? "bg-Primary transition text-white rounded-[10px] hover:shadow-sm mb-1"
              : "hover:bg-Primary transition hover:text-white rounded-[10px] hover:shadow-sm mb-1",
            "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full",
          )}
          onClick={() => router.push(item.href)}
        >
          <item.icon
            className={classNames(
              item.href === router.asPath ? "" : "",
              "mr-3 flex-shrink-0 h-4 w-4",
            )}
            aria-hidden='true'
          />
          <span>{item.name}</span>
        </button>
      ) : (
        <>
          <div className='relative'>
            <button
              type='button'
              className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-Primary dark:text-white dark:hover:bg-gray-700'
              aria-controls='dropdown-example'
              onClick={toggleDropdown}
            >
              <item.icon
                className={classNames("", "mr-3 flex-shrink-0 h-4 w-4")}
                aria-hidden='true'
              />
              <span className='flex-1 text-left rtl:text-right whitespace-nowrap group-hover:text-white'>
                {item.name}
              </span>
              <FiChevronDown
                className={`w-5 h-5 text-gray-500 transition duration-300 transform ${isOpen ? "rotate-180" : ""} group-hover:text-white dark:text-gray-400 dark:group-hover:text-white`}
              />
            </button>
            {isOpen && (
              <ul
                id='dropdown-example'
                className='py-2 space-y-2 top-full left-0 z-10 ml-3'
              >
                {item.option &&
                  item.option.map((opt, index) => (
                    <li key={opt.name + index} className='ml-2'>
                      <SidebarItemListing item={opt} />
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SidebarItemListing
