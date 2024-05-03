import React from "react"
import QuickKeys from "./quickKeys"
import SellModel from "./sellModel"
import SellSearch from "./sellSearch"
import {
  CartDetailData,
  CustomerDetail,
  ParkedSellDetail,
  Parked_order_details,
  TempOrderData,
  TempOrderDetail,
} from "@/src/service/admin/sellDevelopment"
import { newClientInstance } from "@/src/service/admin/newClient"
import { toast } from "react-toastify"
import ParkedModal from "./parkedModal"
import { useRouter } from "next/router"

interface SellDevelopmentMainProps {
  parkedId?: string
}

const SellDevelopmentMain = (props: SellDevelopmentMainProps) => {
  const { parkedId } = props
  const router = useRouter()
  const [tempOrder, setTempOrder] = React.useState<TempOrderData | null>()
  const [cartData, setCartData] = React.useState<TempOrderDetail[]>([])
  const [parkedOrder, setParkedOrder] = React.useState<Parked_order_details[]>(
    [],
  )
  const [parkedData, setParkedData] = React.useState<CartDetailData>()
  const [open, setOpen] = React.useState<boolean>(false)
  const [selectedCustomer, setCustomer] = React.useState<CustomerDetail | null>(
    null,
  )

  const [parkedSell, setParkedSell] = React.useState<ParkedSellDetail[]>([])
  const [parkedFlag, setParkedFlag] = React.useState<boolean>(false)

  const handleGetParkSell = React.useCallback(async () => {
    try {
      const response = await newClientInstance.getParkedSellList()
      if (response.data.success) {
        setParkedSell(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [])

  React.useEffect(() => {
    handleGetParkSell()
  }, [handleGetParkSell])

  const handleGetTempOrder = React.useCallback(async () => {
    try {
      const params = {
        parked_id: parkedId ? parkedId : "",
      }
      const response = await newClientInstance.getTempOrder({ params: params })
      if (response.data.success) {
        if (parkedId) {
          setParkedData(response.data.data.cartDetail)
          response.data.data.cartDetail?.Parked_order_details &&
            setParkedOrder(response.data.data.cartDetail?.Parked_order_details)
          setTempOrder(response.data.data)
        } else {
          setTempOrder(response.data.data)
          response.data.data.tempOrder &&
            setCartData(response.data.data.tempOrder)
        }
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [parkedId])

  React.useEffect(() => {
    handleGetTempOrder()
  }, [handleGetTempOrder])

  const handleParkedOrder = async () => {
    const sub_total = cartData
      .map((item: TempOrderDetail) => item.discount_price * item.quantity)
      .reduce(
        (prevValue: number, currValue: number) => prevValue + currValue,
        0,
      )

    const saving = cartData
      .map((item: TempOrderDetail) => item.actual_price * item.quantity)
      .reduce(
        (prevValue: number, currValue: number) => prevValue + currValue,
        0,
      )

    try {
      const params = {
        ...(selectedCustomer && { customer_id: selectedCustomer.id }),
        register_id: 1,
        payable_amount: (
          sub_total + (tempOrder?.gst ? tempOrder?.gst : 0)
        ).toString(),
        total_saving: (saving - sub_total).toFixed(2).toString(),
        sub_total: sub_total.toString(),
        park_gst_amt: tempOrder?.gst ? tempOrder?.gst.toString() : "0",
        order_temp_id: cartData.map((e) => e.id),
      }
      const response = await newClientInstance.addParkedOrder({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        handleGetTempOrder()
        handleGetParkSell()
        setParkedFlag(true)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleDiscardSell = async () => {
    try {
      const params = {
        parked_id: parkedId ? parkedId : "",
      }
      const response = await newClientInstance.discardSell({ params: params })
      if (response.data.success) {
        setParkedFlag(true)
        setCustomer(null)
        if (parkedId) {
          router.push("/admin/sell/sellDevelopment")
        } else {
          handleGetTempOrder()
        }
        toast.success(response.data.message)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }
  return (
    <div className='sell-main-wrp grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  gap-4'>
      <div className='sell-left-main'>
        <SellSearch
          handleGetTempOrder={handleGetTempOrder}
          parkedId={parkedId}
        />
        <QuickKeys
          handleGetTempOrder={handleGetTempOrder}
          parkedId={parkedId}
        />
      </div>

      <div className='sell-right-main lg:mt-0 sm:mt-10 mt-10 '>
        <div className='sell-right-top-btns flex items-center justify-end gap-x-2 gap-y-3 sm:flex-nowrap flex-wrap'>
          {!parkedId && (
            <button
              className='capitalize   border shadow border-Primary px-3 py-[7px] rounded-[5px] text-white text-[14px] font-medium bg-Primary'
              onClick={() => setOpen(!open)}
            >
              Retrieve Sale
            </button>
          )}
          {parkedId && (
            <button
              className='capitalize   border shadow border-Primary px-3 py-[7px] rounded-[5px] text-white text-[14px] font-medium bg-Primary'
              onClick={() => router.push("/admin/sell/sellDevelopment")}
            >
              Back to Main Cart
            </button>
          )}

          {!parkedId && (
            <button
              onClick={handleParkedOrder}
              disabled={cartData.length === 0}
              className='capitalize border shadow border-Primary px-3 py-[7px] rounded-[5px] text-Primary text-[14px] font-medium disabled:bg-slate-500 disabled:text-white'
            >
              Park Sale
            </button>
          )}
          <button
            onClick={handleDiscardSell}
            disabled={
              !parkedId ? cartData.length === 0 : parkedOrder.length === 0
            }
            className='capitalize border shadow border-Primary px-3 py-[7px] rounded-[5px] text-Primary text-[14px] font-medium disabled:bg-slate-500 disabled:text-white'
          >
            Discard Sale
          </button>
        </div>
        <ParkedModal open={open} setOpen={setOpen} parkedSell={parkedSell} />

        <SellModel
          cartData={cartData}
          handleGetTempOrder={handleGetTempOrder}
          tempOrder={tempOrder}
          setCartData={setCartData}
          parkedOrder={parkedOrder}
          parkedData={parkedData}
          parkedId={parkedId ? parkedId : ""}
          setParkedOrder={setParkedOrder}
          selectedCustomer={selectedCustomer}
          setCustomer={setCustomer}
          parkedFlag={parkedFlag}
          setParkedFlag={setParkedFlag}
        />
      </div>
    </div>
  )
}

export default SellDevelopmentMain
