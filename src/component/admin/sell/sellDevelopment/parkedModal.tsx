import { ParkedSellDetail } from "@/src/service/admin/sellDevelopment"
import React from "react"
import { HiArrowUturnRight } from "react-icons/hi2"
import moment from "moment"
import { useRouter } from "next/router"

interface ParkedModalProps {
  open: boolean
  setOpen: (value: boolean) => void
  parkedSell: ParkedSellDetail[]
}

const ParkedModal = (props: ParkedModalProps) => {
  const { open, parkedSell } = props
  const router = useRouter()

  const getDurationDisplay = (createdDate: string) => {
    const currentDate = moment()
    const durationInDays = currentDate.diff(createdDate, "days")
    const durationInMonths = currentDate.diff(createdDate, "months")
    const durationInYears = currentDate.diff(createdDate, "years")

    if (durationInDays === 0) {
      return `Today`
    } else if (durationInDays <= 30) {
      return `${durationInDays} Days ago`
    } else if (durationInMonths < 12) {
      return `${durationInMonths} Months ago`
    } else {
      return `${durationInYears} Years ago`
    }
  }
  const handleParkedSell = (id: number) => {
    router.push(`/admin/sell/sellDevelopment/${id}`)
  }
  return (
    <>
      {open && (
        <ul className='sell-left-search-listing w-full border  border-lightborder rounded-[5px] p-3 shadow bg-white mt-2'>
          {parkedSell.length > 0 &&
            parkedSell.map((p) => (
              <li
                className='border-b border-bordercolor pb-2 mb-2 cursor-pointer'
                key={p.id}
              >
                <div
                  className='search-listing-wrp flex items-center justify-between'
                  onClick={() => handleParkedSell(p.id)}
                >
                  <div className='search-listin-left'>
                    <h3 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                      Parked By {p.Branch.name}
                    </h3>
                    <p className='font-bold md:text-[12px] sm:text-[11px] text-[11px] text-gray'>
                      {p.Customer?.User.full_name} {p.Customer?.customercode}
                    </p>
                    <p className='font-bold md:text-[12px] sm:text-[11px] text-[11px] text-gray'>
                      {getDurationDisplay(p.createdAt)}
                    </p>
                  </div>
                  <div className='search-listin-right '>
                    <HiArrowUturnRight className='text-lg font-bold' />
                  </div>
                </div>
              </li>
            ))}
          {parkedSell.length === 0 && (
            <li className='border-b border-bordercolor pb-2 mb-2 cursor-pointer'>
              <div className=' flex items-center justify-center w-full'>
                <h3 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                  ! No Data Found
                </h3>
              </div>
            </li>
          )}
        </ul>
      )}
    </>
  )
}

export default ParkedModal
