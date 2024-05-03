import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import DiscardSell from "./discardSell"
import AddCategoryModel from "./addcategory"

const ReturnSell = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='returnsell-main grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4'>
      <div className='returnsell-left-main'>
        <div className='sell-left-search-wrp common-inputs w-full relative'>
          <div className='relative'>
            <BiSearch className='absolute top-[50%] text-Primary left-2 text-[20px] translate-y-[-50%]' />
            <input
              type='text'
              className='w-full '
              placeholder='Search order or sell number...'
              id='search_prod'
            />
          </div>
          {/* --------sell-left-search-listing------- */}
          <ul className='sell-left-search-listing w-full border border-lightborder rounded-[5px] p-3 shadow bg-white mt-2'>
            <li className='border-b border-bordercolor pb-2 mb-2 cursor-pointer'>
              <div className='search-listing-wrp flex items-center justify-between'>
                <div className='search-listin-left'>
                  <h3 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                    Order #9123746508
                  </h3>
                  <p className='font-bold md:text-[13px] sm:text-[11px] text-[11px] text-gray'>
                    <span>10/03/2023 </span>
                    <span>11:13 AM</span>
                  </p>
                </div>
                <div className='search-listin-right'>
                  <h4 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                    Rs 10.00
                  </h4>
                </div>
              </div>
            </li>
            <li className='border-b border-bordercolor pb-2 mb-2'>
              <div className='search-listing-wrp flex items-center justify-between'>
                <div className='search-listin-left'>
                  <h3 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                    Order #9123746508
                  </h3>
                  <p className='font-bold md:text-[13px] sm:text-[11px] text-[11px] text-gray'>
                    <span>10/03/2023 </span>
                    <span>11:13 AM</span>
                  </p>
                </div>
                <div className='search-listin-right'>
                  <h4 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                    Rs 10.00
                  </h4>
                </div>
              </div>
            </li>
            <li className=''>
              <div className='search-listing-wrp flex items-center justify-between'>
                <div className='search-listin-left'>
                  <h3 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                    Order #9123746508
                  </h3>
                  <p className='font-bold md:text-[13px] sm:text-[11px] text-[11px] text-gray'>
                    <span>10/03/2023 </span>
                    <span>11:13 AM</span>
                  </p>
                </div>
                <div className='search-listin-right'>
                  <h4 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                    Rs 10.00
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='quick-keys-added-product mt-5'>
          <div className='added-produt-wrp flex items-center xxl:gap-x-5 xl:gap-x-3 sm:gap-x-4 gap-x-4 gap-y-5 flex-wrap'>
            <div className='group cursor-pointer relative added-produt-info bg-white inline-block shadow rounded-[10px] min-w-[140px] max-w-[140px]'>
              <h3 className='sm:text-[14px] text-[13px] font-medium px-2 py-2 min-h-[60px] flex items-center justify-center text-center'>
                Fresh Banana
              </h3>
              <p className='xl:text-[13px] sm:text-[12px] text-[12px] rounded-b-[10px] text-center font-medium bg-lightblue text-white py-2'>
                1 kg
              </p>
            </div>

            <div className='group cursor-pointer relative added-produt-info bg-white inline-block shadow rounded-[10px] min-w-[140px] max-w-[140px]'>
              <h3 className='sm:text-[14px] text-[13px] font-medium px-2 py-2 min-h-[60px] flex items-center justify-center text-center'>
                GREEN CHILLY
              </h3>
              <p className='xl:text-[13px] sm:text-[12px] text-[12px] rounded-b-[10px] text-center font-medium bg-lightblue text-white py-2'>
                500 gram
              </p>
            </div>

            <div className='group cursor-pointer relative added-produt-info bg-white inline-block shadow rounded-[10px] min-w-[140px] max-w-[140px]'>
              <h3 className='sm:text-[14px] text-[13px] font-medium px-2 py-2 min-h-[60px] flex items-center justify-center text-center'>
                Fresh Banana
              </h3>
              <p className='xl:text-[13px] sm:text-[12px] text-[12px] rounded-b-[10px] text-center font-medium bg-lightblue text-white py-2'>
                500 gram
              </p>
            </div>

            <div className='group cursor-pointer relative dded-produt-info bg-white inline-block shadow rounded-[10px] min-w-[140px] max-w-[140px]'>
              <h3 className='sm:text-[14px] text-[13px] font-medium px-2 py-2 min-h-[60px] flex items-center justify-center text-center'>
                Bhindi
              </h3>
              <p className='xl:text-[13px] sm:text-[12px] text-[12px] rounded-b-[10px] text-center font-medium bg-lightblue text-white py-2'>
                500 gram
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='returnsell-right-main'>
        <div className='returnsell-right-top-btns flex items-center justify-end gap-x-2 gap-y-3 sm:flex-nowrap flex-wrap'>
          <button
            onClick={() => setOpen(true)}
            className='capitalize border shadow border-Primary px-3 py-[7px] rounded-[5px] text-white text-[14px] font-medium bg-Primary'
          >
            Discard Sale
          </button>
          <AddCategoryModel open={open} setOpen={setOpen} />
        </div>
        <DiscardSell />
      </div>
    </div>
  )
}

export default ReturnSell
