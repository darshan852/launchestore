import React, { useState } from "react"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import CategoryModalContent from "./categorymodalcontent"
import SubCategoryModalContent from "./subcategorymodel"
import BrandModalContent from "./brandmodalcontent"
import { RxCrossCircled } from "react-icons/rx"
// import { RxCrossCircled } from "react-icons/rx"
// import { BiSearch } from "react-icons/bi"
// import { AiOutlineQrcode } from "react-icons/ai"
// import { CheckIcon } from '@heroicons/react/outline'
interface AddCategoryModelProps {
  open: boolean
  setOpen: any
}

const AddCategoryModel = (props: AddCategoryModelProps) => {
  const { open, setOpen } = props
  const [activeTab, setActiveTab] = useState(1)

  const tabs = [
    { id: 1, label: "Category", content: <CategoryModalContent /> },
    { id: 2, label: "Subcategory", content: <SubCategoryModalContent /> },
    { id: 3, label: "Brand", content: <BrandModalContent /> },
  ]
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto bg-[rgba(0,0,0,0.4)]'
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative w-full h-full max-w-[500px] inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle'>
              <div className='add-category-modal px-3 sm:px-10 pt-12 pb-5 sm:pt-14 sm:pb-10'>
                <button className='modal-close-btn absolute top-3 right-3 text-[25px]'>
                  <RxCrossCircled className='text-Primary' />
                </button>
                <div className='flex bg-[#f9f9f9] shadow rounded-[5px] overflow-hidden'>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`${
                        tab.id === activeTab
                          ? "text-white bg-Primary font-semibold"
                          : "text-black font-semibold"
                      } flex-1 text-center py-2 sm:py-3 text-[12px] sm:text-[16px] focus:outline-none`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className='pt-5 pb-5'>
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`${tab.id === activeTab ? "block" : "hidden"}`}
                    >
                      {tab.content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddCategoryModel
