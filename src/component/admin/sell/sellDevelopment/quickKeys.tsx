import React, { useState } from "react"
import QuickKeysModel from "./quickKeysModel"
import { RiDeleteBin6Line } from "react-icons/ri"
import { QuickProductDetail } from "@/src/service/admin/sellDevelopment"
import { toast } from "react-toastify"
import { newClientInstance } from "@/src/service/admin/newClient"

interface QuickKeysProps {
  handleGetTempOrder: () => void
  parkedId?: string
}

const QuickKeys = (props: QuickKeysProps) => {
  const { handleGetTempOrder, parkedId } = props

  const [open, setOpen] = useState(false)
  const [quickProductList, setQuickProductList] = useState<
    QuickProductDetail[]
  >([])

  const handleGetQuickProductList = React.useCallback(async () => {
    try {
      const response = await newClientInstance.quickProductList()
      if (response.data.success) {
        setQuickProductList(response.data.data)
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }, [])

  React.useEffect(() => {
    handleGetQuickProductList()
  }, [handleGetQuickProductList])

  const handleRemoveProduct = async (id: number) => {
    try {
      const params = {
        product_id: id,
      }
      const response = await newClientInstance.removeProduct({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetQuickProductList()
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleAddProduct = async (id: number) => {
    try {
      const params = {
        variant_id: id,
        ...(parkedId && { parked_id: parkedId }),
      }
      const response = await newClientInstance.addTempProduct({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetTempOrder()
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <div>
      <div className='quick-keys-wrp bg-white shadow p-4 rounded-[10px] mt-4'>
        <h3 className='md:text-[20px] sm:text-[18px] font-medium border-b border-bordercolor pb-2'>
          Quick Keys
        </h3>
        <div className='quick-keys-content mt-3 flex xl:flex-row lg:flex-col flex-col gap-y-4 xl:gap-y-0 lg:gap-y-4 items-center justify-between xl:py-3 lg:py-2'>
          <h6 className='text-[13px] font-regular leading-5 xxl:max-w-[350px] xl:max-w-[300px] lg:max-w-[100%] sm:max-w-[300px] max-w-[100%] sm:text-left text-center'>
            Create Your Custom Quicks Keys For Most Popular, Product And Speed
            Up Checkout
          </h6>
          <button
            onClick={() => setOpen(true)}
            className='capitalize border border-black leading-5 px-4 py-2 rounded-[5px] text-[14px] md:text-[14px] sm:text-[13px] font-semibold transition hover:border-Primary hover:text-white hover:bg-Primary'
          >
            Set Up Quick Keys
          </button>
          <QuickKeysModel
            open={open}
            setOpen={setOpen}
            handleGetQuickProductList={handleGetQuickProductList}
          />
        </div>
      </div>
      <div className='quick-keys-added-product mt-4'>
        <div className='added-produt-wrp flex items-center xxl:gap-x-5 xl:gap-x-3 sm:gap-x-4 gap-x-4 gap-y-5 flex-wrap'>
          {quickProductList.length > 0 &&
            quickProductList.map((q: QuickProductDetail) => (
              <div
                className='group cursor-pointer relative added-produt-info bg-white inline-block shadow rounded-[10px] min-w-[140px] max-w-[140px]'
                key={q.id}
              >
                <div onClick={() => handleAddProduct(q.id)}>
                  <h3 className='sm:text-[14px] text-[13px] font-medium px-2 py-2 min-h-[60px] flex items-center justify-center text-center'>
                    {q.Product.name}
                  </h3>
                  <p className='xl:text-[13px] sm:text-[12px] text-[12px] rounded-b-[10px] text-center font-medium bg-lightblue text-white py-2'>
                    {q.Weigt_name} {q.Weight.name}
                  </p>
                </div>
                <button
                  className='delet-added-product-btn absolute top-[-12px] opacity-0 group-hover:opacity-100 transition-all duration-500 right-[-12px] w-7 h-7 bg-lightblue flex items-center justify-center text-white rounded-full'
                  onClick={() => handleRemoveProduct(q.id)}
                >
                  <RiDeleteBin6Line className='text-[15px]' />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default QuickKeys
