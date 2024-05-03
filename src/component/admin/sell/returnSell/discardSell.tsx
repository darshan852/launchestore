import React from "react"
import { HiPlus } from "react-icons/hi"
import { HiMiniXMark } from "react-icons/hi2"
import { AiOutlineMinus } from "react-icons/ai"
import { FaTags } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"

const DiscardSell = () => {
  return (
    <div className='bg-white sm:p-5 p-3 mt-0 sell-right-search-wrp'>
      <ul className='discardsell-product-listing-main bg-white sm:p-5 p-3 mt-4 max-h-[300px] h-full overflow-y-scroll space-y-5'>
        <li className='relative discardsell-product-listing-wrp border border-lightborder p-3 rounded-[5px] flex xl:items-center lg:items-start md:items-center justify-between xl:flex-row lg:flex-col flex-col xl:gap-y-0 lg:gap-y-2 gap-y-2 mt-3'>
          <div className='product-listing-left'>
            <h3 className='xxl:text-[14px] xl:text-[14px] font-medium mb-2'>
              Test <span> (Purchased : 1)</span>
            </h3>
            <div className='flex items-center gap-x-2'>
              <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] text-Primary'>
                1 kg
              </h5>
              <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] flex items-center'>
                <span>7</span>
                <HiMiniXMark />
                <span>170.00</span>
              </h5>
              <h5 className='xxl:text-[14px] xl:text-[12px] lg:text-[14px] sm:text-[13px] text-[13px]'>
                (Rs <span className='line-through'>190.00</span>)
              </h5>
            </div>
          </div>
          <div className='product-listing-right flex items-center xxl:gap-x-4 sm:gap-x-3 gap-x-3'>
            <div className='qty-btn common-inputs'>
              <label htmlFor=''>Qty</label>
              <div className='relative w-[70px] overflow-hidden flex items-center rounded-[5px] border border-Primary'>
                <span className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'>
                  <HiPlus className='' />
                </span>
                <input type='text' value={"777"} />
                <span className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'>
                  <AiOutlineMinus className='' />
                </span>
              </div>
            </div>
            <div className='dis-btn common-inputs'>
              <label htmlFor=''>Dis</label>
              <input type='text' value={"20"} className='block' />
            </div>
            <h3 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[13px] text-[13px] text-black font-semibold'>
              Rs 1190.00
            </h3>
          </div>
          <button className='delet-added-product-btn absolute top-[-12px] right-[10px] w-7 h-7 bg-red-500 flex items-center justify-center text-white rounded-full'>
            <RiDeleteBin5Line className='text-[15px]' />
          </button>
        </li>

        <li className='relative discardsell-product-listing-wrp border border-lightborder p-3 rounded-[5px] flex xl:items-center lg:items-start md:items-center justify-between xl:flex-row lg:flex-col flex-col xl:gap-y-0 lg:gap-y-2 gap-y-2 mt-3'>
          <div className='product-listing-left'>
            <h3 className='xxl:text-[14px] xl:text-[14px] font-medium mb-2'>
              Test <span> (Purchased : 1)</span>
            </h3>
            <div className='flex items-center gap-x-2'>
              <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] text-Primary'>
                1 kg
              </h5>
              <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] flex items-center'>
                <span>7</span>
                <HiMiniXMark />
                <span>170.00</span>
              </h5>
              <h5 className='xxl:text-[14px] xl:text-[12px] lg:text-[14px] sm:text-[13px] text-[13px]'>
                (Rs <span className='line-through'>190.00</span>)
              </h5>
            </div>
          </div>
          <div className='product-listing-right flex items-center xxl:gap-x-4 sm:gap-x-3 gap-x-3'>
            <div className='qty-btn common-inputs'>
              <label htmlFor=''>Qty</label>
              <div className='relative w-[70px] overflow-hidden flex items-center rounded-[5px] border border-Primary'>
                <span className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'>
                  <HiPlus className='' />
                </span>
                <input type='text' value={"777"} />
                <span className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'>
                  <AiOutlineMinus className='' />
                </span>
              </div>
            </div>
            <div className='dis-btn common-inputs'>
              <label htmlFor=''>Dis</label>
              <input type='text' value={"20"} className='block' />
            </div>
            <h3 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[13px] text-[13px] text-black font-semibold'>
              Rs 1190.00
            </h3>
          </div>
          <button className='delet-added-product-btn absolute top-[-12px] right-[10px] w-7 h-7 bg-red-500 flex items-center justify-center text-white rounded-full'>
            <RiDeleteBin5Line className='text-[15px]' />
          </button>
        </li>

        <li className='relative discardsell-product-listing-wrp border border-lightborder p-3 rounded-[5px] flex xl:items-center lg:items-start md:items-center justify-between xl:flex-row lg:flex-col flex-col xl:gap-y-0 lg:gap-y-2 gap-y-2 mt-3'>
          <div className='product-listing-left'>
            <h3 className='xxl:text-[14px] xl:text-[14px] font-medium mb-2'>
              Test <span> (Purchased : 1)</span>
            </h3>
            <div className='flex items-center gap-x-2'>
              <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] text-Primary'>
                1 kg
              </h5>
              <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] flex items-center'>
                <span>7</span>
                <HiMiniXMark />
                <span>170.00</span>
              </h5>
              <h5 className='xxl:text-[14px] xl:text-[12px] lg:text-[14px] sm:text-[13px] text-[13px]'>
                (Rs <span className='line-through'>190.00</span>)
              </h5>
            </div>
          </div>
          <div className='product-listing-right flex items-center xxl:gap-x-4 sm:gap-x-3 gap-x-3'>
            <div className='qty-btn common-inputs'>
              <label htmlFor=''>Qty</label>
              <div className='relative w-[70px] overflow-hidden flex items-center rounded-[5px] border border-Primary'>
                <span className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'>
                  <HiPlus className='' />
                </span>
                <input type='text' value={"777"} />
                <span className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'>
                  <AiOutlineMinus className='' />
                </span>
              </div>
            </div>
            <div className='dis-btn common-inputs'>
              <label htmlFor=''>Dis</label>
              <input type='text' value={"20"} className='block' />
            </div>
            <h3 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[13px] text-[13px] text-black font-semibold'>
              Rs 1190.00
            </h3>
          </div>
          <button className='delet-added-product-btn absolute top-[-12px] right-[10px] w-7 h-7 bg-red-500 flex items-center justify-center text-white rounded-full'>
            <RiDeleteBin5Line className='text-[15px]' />
          </button>
        </li>
      </ul>

      <div className='payment-wrp sm:p-5 p-3 bg-[#f9f9f9] shadow mt-5 flex flex-col gap-y-3'>
        <div className='promocode-wrp common-inputs flex items-center flex-col sm:flex-row sm:gap-y-0 gap-y-4 gap-x-4 justify-center mb-4 mt-3'>
          <div className='relative sm:w-[auto] w-full'>
            <FaTags className='absolute top-[50%] translate-y-[-50%] left-2 text-Secondary' />
            <input
              type='text'
              placeholder='Enter Promocode'
              className='bg-white sm:w-[auto] w-full'
            />
          </div>
          <button className='bg-Secondary border border-Secondary transition duration-200 hover:bg-transparent px-6 py-2 rounded-[5px] font-semibold h-[45px] text-[15px] sm:w-[auto] w-full'>
            Apply
          </button>
        </div>

        <div className='total-payment-info'>
          <div className='flex items-center justify-between'>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
              Products Subtotal
            </p>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
              Rs 1197.00
            </p>
          </div>
        </div>
        <div className='total-payment-info'>
          <div className='flex items-center justify-between'>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
              Products GST
            </p>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
              Rs 0.00
            </p>
          </div>
        </div>

        <div className='payment-type-wrp flex xxl:flex-row sm:flex-col flex-col xxl:gap-y-0 sm:gap-y-4 gap-y-4 items-center justify-center mt-4'>
          <button className='pay-payment-btn bg-Secondary px-4 py-2 rounded-[5px] w-full max-w-[220px] flex items-center justify-between'>
            <span className='xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px] text-black font-semibold'>
              Refund
            </span>
            <span className='xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px] text-black font-semibold'>
              Rs 902.92
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiscardSell
