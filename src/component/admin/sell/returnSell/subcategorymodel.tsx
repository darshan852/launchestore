import React from "react"
import { BiPlus } from "react-icons/bi"

const SubCategoryModalContent = () => {
  return (
    <div>
      <div className='text-center'>
        <button className='flex items-center capitalize gap-x-1 bg-Primary border border-Primary hover:text-Primary text-white transition duration-200 hover:bg-transparent px-6 py-2 rounded-[5px] font-medium  text-[14px] sm:text-[15px]'>
          <BiPlus className='text-[20px] font-semibold' /> Add Subcategory
        </button>
      </div>
    </div>
  )
}

export default SubCategoryModalContent
