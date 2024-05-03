import React, { useState } from "react"
import { HiPlus } from "react-icons/hi"
import { HiMiniXMark } from "react-icons/hi2"
import { AiOutlineMinus } from "react-icons/ai"
import CustomerModel from "./customerModel"
import { FaTags } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import {
  CartDetailData,
  CheckPromocodeDetail,
  CustomerDetail,
  GetCartBasedDiscountData,
  Parked_order_details,
  TempOrderData,
  TempOrderDetail,
} from "@/src/service/admin/sellDevelopment"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/router"
import { useDebounce } from "@/src/hooks/useDebounce"

const notificationMethods = [
  { id: "0", title: "Cash" },
  { id: "1", title: "Online" },
]

interface SellModelProps {
  handleGetTempOrder: () => void
  tempOrder: TempOrderData | null | undefined
  cartData: TempOrderDetail[]
  setCartData: (value: TempOrderDetail[]) => void
  parkedOrder: Parked_order_details[] | undefined
  parkedData: CartDetailData | undefined
  parkedId: string
  setParkedOrder: (value: Parked_order_details[]) => void
  selectedCustomer: CustomerDetail | null
  setCustomer: any
  parkedFlag: boolean
  setParkedFlag: (value: boolean) => void
}

const SellModel: React.FC<SellModelProps> = (props) => {
  const {
    cartData,
    handleGetTempOrder,
    tempOrder,
    setCartData,
    parkedData,
    parkedOrder,
    parkedId,
    setParkedOrder,
    selectedCustomer,
    setCustomer,
    setParkedFlag,
    parkedFlag,
  } = props
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = React.useState<string>("")
  const [searchData, setSearchData] = React.useState<CustomerDetail[]>([])
  const [searchFlag, setSearchFlag] = React.useState<boolean>(false)

  const [cartDis, setCartDis] =
    React.useState<GetCartBasedDiscountData | null>()
  const [updatedGst, setUpdatedGst] = React.useState<number>(0)
  const [promo, setPromo] = React.useState<string>("")
  const [promoDetail, setPromoDetail] =
    React.useState<CheckPromocodeDetail | null>()
  const [paymentMethod, setMethod] = React.useState<string>("0")
  const debounceText = useDebounce(search, 500)

  const cartTotal = cartData
    .map((item: TempOrderDetail) => item.discount_price * item.quantity)
    .reduce((prevValue: number, currValue: number) => prevValue + currValue, 0)

  const parkedTotal =
    parkedOrder &&
    parkedOrder
      .map(
        (item: Parked_order_details) =>
          Number(item.discount_price) * item.quantity,
      )
      .reduce(
        (prevValue: number, currValue: number) => prevValue + currValue,
        0,
      )

  const handleGetCartBasedDiscount = async (sub_total: number) => {
    try {
      const params = {
        sub_total: sub_total,
      }
      const response = await newClientInstance.getCartBasedDiscount({
        params: params,
      })
      if (response.data.success) {
        setCartDis(response.data.data)
      } else {
        setCartDis(null)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  React.useEffect(() => {
    if (cartData && tempOrder) {
      const total = cartData
        .map((item: TempOrderDetail) => item.discount_price * item.quantity)
        .reduce(
          (prevValue: number, currValue: number) => prevValue + currValue,
          0,
        )
      total !== 0 && handleGetCartBasedDiscount(total)
      setPromo("")
      setPromoDetail(null)
    }
    if (parkedOrder) {
      const parkedTotal =
        parkedOrder &&
        parkedOrder
          .map(
            (item: Parked_order_details) =>
              Number(item.discount_price) * item.quantity,
          )
          .reduce(
            (prevValue: number, currValue: number) => prevValue + currValue,
            0,
          )
      parkedTotal !== 0 && handleGetCartBasedDiscount(parkedTotal)
      setPromo("")
      setPromoDetail(null)
    }
    if (parkedData && parkedData.Customer) {
      handleSelectCustomer(parkedData.Customer)
    }
    setUpdatedGst(0)
  }, [cartData, parkedData, parkedOrder, tempOrder])

  React.useEffect(() => {
    if (parkedFlag) {
      setPromo("")
      setPromoDetail(null)
      setCartDis(null)
      setSearch("")
      setSearchData([])
      setParkedFlag(false)
    }
  }, [parkedFlag, setParkedFlag])

  const handleSearch = React.useCallback(async (value: string) => {
    setSearch(value)
    setSearchFlag(true)
    if (value !== "") {
      try {
        const params = {
          search: value,
        }
        const response = await newClientInstance.searchCustomer({
          params: params,
        })
        if (response.data.success) {
          setSearchData(response.data.data)
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    } else {
      setSearchData([])
      setSearchFlag(false)
      // setCustomer()
    }
  }, [])

  React.useEffect(() => {
    if (debounceText) {
      handleSearch(debounceText)
    }
  }, [debounceText, handleSearch])

  const handleSelectCustomer = (c: CustomerDetail) => {
    setCustomer(c)
    setSearchData([])
    setSearchFlag(false)
    // setSearch(c.User.full_name)
  }

  const handleCloseCustomerModel = () => {
    setSearchFlag(false)
    setSearchData([])
    setSearch("")
  }

  const handleAddQty = async (
    qty: number,
    orderTempId: number,
    type: string,
  ) => {
    try {
      const params = {
        qty: qty + 1,
        ...(parkedId !== "" && { parked_id: parkedId }),
        ...(type === "temp"
          ? { orderTempId: orderTempId.toString() }
          : { parkedDetailId: orderTempId }),
      }
      const response = await newClientInstance.updateQty({ params: params })
      if (response.data.success) {
        handleGetTempOrder()
        // toast.success(response.data.message)
        setPromo("")
        handleGetCartBasedDiscount(
          parkedId && parkedTotal ? parkedTotal : cartTotal,
        )
        setPromoDetail(null)
        setUpdatedGst(0)
      } else {
        toast.info(response.data.message)
        // handleGetTempOrder()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleminusQty = async (
    qty: number,
    orderTempId: number,
    type: string,
  ) => {
    try {
      const params = {
        qty: qty - 1,
        ...(parkedId !== "" && { parked_id: parkedId }),
        ...(type === "temp"
          ? { orderTempId: orderTempId.toString() }
          : { parkedDetailId: orderTempId }),
      }
      const response = await newClientInstance.updateQty({ params: params })
      if (response.data.success) {
        handleGetTempOrder()
        // toast.success(response.data.message)
        setPromo("")
        handleGetCartBasedDiscount(
          parkedId && parkedTotal ? parkedTotal : cartTotal,
        )
        setPromoDetail(null)
        setUpdatedGst(0)
      } else {
        toast.info(response.data.message)
        handleGetTempOrder()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleQtyChange = (value: string, index: number) => {
    const updatedArray = [...cartData]
    updatedArray[index].quantity = Number(value)
    setCartData(updatedArray)
  }

  const handleParkedQtyChange = (value: string, index: number) => {
    if (parkedOrder) {
      const updatedArray = [...parkedOrder]
      updatedArray[index].quantity = Number(value)
      setParkedOrder(updatedArray)
    }
  }

  const handleQtyUpdate = async (
    qty: number,
    orderTempId: number,
    type: string,
  ) => {
    try {
      const params = {
        qty: qty,
        ...(parkedId !== "" && { parked_id: parkedId }),
        ...(type === "temp"
          ? { orderTempId: orderTempId.toString() }
          : { parkedDetailId: orderTempId }),
      }
      const response = await newClientInstance.updateQty({ params: params })
      if (response.data.success) {
        handleGetTempOrder()
        // toast.success(response.data.message)
        setPromo("")
        handleGetCartBasedDiscount(
          parkedId && parkedTotal ? parkedTotal : cartTotal,
        )
        setPromoDetail(null)
        setUpdatedGst(0)
      } else {
        toast.info(response.data.message)
        handleGetTempOrder()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleDiscountChange = (value: string, index: number) => {
    const updatedArray = [...cartData]
    updatedArray[index].discount = Number(value)
    setCartData(updatedArray)
  }

  const handleParkedDiscountChange = (value: string, index: number) => {
    if (parkedOrder) {
      const updatedArray = [...parkedOrder]
      updatedArray[index].discount = value
      setParkedOrder(updatedArray)
    }
  }

  const handleDiscountUpdate = async (
    dis: number,
    orderTempId: number,
    type: string,
  ) => {
    try {
      const params = {
        discount: dis,
        ...(type === "temp" && { orderTempId: orderTempId.toString() }),
        ...(type === "parked" && { parkedDetailId: orderTempId }),
        ...(type === "parked" && { parked_id: parkedId }),
      }
      const response = await newClientInstance.updateProductDiscount({
        params: params,
      })
      if (response.data.success) {
        handleGetTempOrder()
        // toast.success(response.data.message)
        setPromo("")
        handleGetCartBasedDiscount(
          parkedId && parkedTotal ? parkedTotal : cartTotal,
        )
        setPromoDetail(null)
        setUpdatedGst(0)
      } else {
        toast.info(response.data.message)
        handleGetTempOrder()
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleRemoveTempProduct = async (tempId: number, type: string) => {
    try {
      const params = {
        ...(type === "temp" && { orderTempId: tempId }),
        ...(type === "parked" && { parkedDetailId: tempId }),
        ...(type === "parked" && { parked_id: parkedId }),
      }
      const response = await newClientInstance.removeTempProduct({
        params: params,
      })
      if (response.data.success) {
        handleGetTempOrder()
        // toast.success(response.data.message)
        setPromo("")
        handleGetCartBasedDiscount(
          parkedId && parkedTotal ? parkedTotal : cartTotal,
        )
        setPromoDetail(null)
        setUpdatedGst(0)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handlePromo = async () => {
    try {
      if (cartTotal || parkedTotal) {
        const params = {
          promocode: promo,
          total_price:
            cartTotal !== 0
              ? cartTotal.toString()
              : parkedTotal
                ? parkedTotal.toString()
                : "",
        }
        const response = await newClientInstance.checkPromoCode({
          params: params,
        })
        if (response.data.success) {
          toast.success(response.data.message)
          setPromoDetail(response.data.data)
          // setPromo("")
        } else {
          toast.info(response.data.message)
        }
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleAddOrder = async (
    type: string,
    total: number,
    sub_total: number,
  ) => {
    let payAmt = "0"
    let variantIds: number[] = []
    let saving = 0
    if (type === "temp") {
      payAmt =
        cartDis && tempOrder
          ? (
              cartTotal +
              (tempOrder?.gst ? tempOrder?.gst : 0) -
              Number(cartDis?.shopping_based_discount)
            )
              .toFixed(2)
              .toString()
          : promoDetail && tempOrder?.gst
            ? (
                cartTotal +
                (tempOrder?.gst ? tempOrder?.gst : 0) -
                Number(promoDetail.calculateVal)
              ).toString()
            : (cartTotal + (tempOrder?.gst ? tempOrder?.gst : 0))
                .toFixed(2)
                .toString()

      variantIds = cartData.map((c) => c.Product_variant.id)
      const p = cartData
        .map((item: TempOrderDetail) => item.actual_price * item.quantity)
        .reduce(
          (prevValue: number, currValue: number) => prevValue + currValue,
          0,
        )
      saving = p + (tempOrder?.gst ? tempOrder?.gst : 0)
    } else {
      payAmt =
        cartDis && tempOrder && parkedTotal
          ? parkedTotal +
            (
              (tempOrder?.produtc_gst ? tempOrder?.produtc_gst : 0) -
              Number(cartDis?.shopping_based_discount)
            )
              .toFixed(2)
              .toString()
          : promoDetail && parkedTotal && tempOrder?.produtc_gst
            ? (
                parkedTotal +
                (tempOrder?.produtc_gst ? tempOrder?.produtc_gst : 0) -
                Number(promoDetail.calculateVal)
              ).toString()
            : (
                (parkedTotal ? parkedTotal : 0) +
                (tempOrder?.produtc_gst ? tempOrder?.produtc_gst : 0)
              )
                .toFixed(2)
                .toString()

      variantIds = parkedOrder
        ? parkedOrder.map((c) => c.Product_variant.id)
        : []

      const p =
        parkedOrder &&
        parkedOrder
          .map(
            (item: Parked_order_details) =>
              Number(item.actual_price) * item.quantity,
          )
          .reduce(
            (prevValue: number, currValue: number) => prevValue + currValue,
            0,
          )
      if (p) {
        saving = p + (tempOrder?.produtc_gst ? tempOrder?.produtc_gst : 0)
        console.log(saving, saving - Number(payAmt), Number(payAmt))
      }
    }
    try {
      const params = {
        ...(selectedCustomer && { customer_id: selectedCustomer?.id }),
        register_id: 1,
        payable_amount: payAmt?.toString(),
        total_saving: (saving - Number(payAmt)).toFixed(2).toString(),
        total: total.toString(),
        sub_total: sub_total.toString(),
        shopping_based_discount: cartDis
          ? cartDis.shopping_based_discount
          : "0",
        promocode: promo,
        promocode_applied: promoDetail ? true : false,
        payment_type: paymentMethod,
        parked_id: parkedId ? Number(parkedId) : 0,
        product_variant_id: variantIds,
      }
      console.log(params)
      const response = await newClientInstance.addOrder({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        if (!parkedId) {
          handleGetTempOrder()
          setSearch("")
          setCustomer(null)
          setPromo("")
          setCartDis(null)
          setPromoDetail(null)
          setUpdatedGst(0)
        } else {
          router.push("/admin/sell/sellDevelopment")
        }
      } else {
        toast.error(response.data.message)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='sell-right-wrapper sell-right-search-wrp bg-white sm:p-5 p-3 rounded-[10px] mt-4'>
      <div>
        <div className='relative common-inputs'>
          <HiPlus className='absolute top-[50%] text-Primary left-2 text-[20px] translate-y-[-50%]' />
          <input
            type='text'
            className='w-full '
            placeholder='Add Customer.....'
            id='search_prod'
            name='customer_search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ---------sell-right-search-listing------- */}
        {searchFlag && (
          <ul className='sell-right-search-listing w-full border border-lightborder rounded-[5px] p-3 shadow bg-white mt-2'>
            {searchData.length > 0 &&
              searchData.map((s) => (
                <li
                  className='border-b border-bordercolor pb-2 mb-2 cursor-pointer'
                  key={s.id}
                  onClick={() => handleSelectCustomer(s)}
                >
                  <div className='search-listing-wrp flex items-center gap-x-4 gap-y-4'>
                    <div className='search-listin-left sm:w-10 sm:h-10 w-8 h-8 rounded-[5px] bg-Primary flex items-center justify-center'>
                      <h3 className='font-bold xl:text-[18px] sm:text-[16px] text-[14px] text-white uppercase'>
                        {s.User.full_name.charAt(0).toUpperCase()}
                      </h3>
                    </div>
                    <div className='search-listin-right'>
                      <h4 className='font-bold xl:text-[15px] sm:text-[14px]  text-[14px] text-black'>
                        {s.User.full_name}
                      </h4>
                      <p className='font-bold xl:text-[11px] sm:text-[10px] text-[10px] text-gray'>
                        {s.customercode}
                      </p>
                    </div>
                  </div>
                </li>
              ))}

            <li className='cursor-pointer'>
              <div
                className='search-listing-wrp flex items-center gap-x-4 gap-y-4 p-2 bg-[rgba(0,0,0,0.1)] rounded-[5px]'
                onClick={() => setOpen(true)}
              >
                <div className='search-listin-left w-7 h-7 rounded-[5px] bg-Primary flex items-center justify-center'>
                  <h3 className='font-bold text-[16px] text-white uppercase'>
                    <HiPlus />
                  </h3>
                </div>
                <div className='search-listin-right'>
                  <h4 className='font-bold text-[14px] text-black'>
                    Add {search} as a customer
                  </h4>
                </div>
              </div>
              <CustomerModel
                open={open}
                setOpen={setOpen}
                handleCloseCustomerModel={handleCloseCustomerModel}
              />
            </li>
          </ul>
        )}
      </div>

      {/* -------sell-product-listing-main-------- */}
      <ul className='sell-product-listing-main mt-5 max-h-[300px] overflow-y-scroll space-y-5'>
        {selectedCustomer && (
          <li className='cursor-pointer'>
            <div className='search-listing-wrp flex items-center gap-x-4 gap-y-4 p-2 bg-[rgba(0,0,0,0.1)] rounded-[5px]'>
              <div className='search-listin-left sm:w-10 sm:h-10 w-8 h-8 rounded-[5px] bg-Primary flex items-center justify-center'>
                <h3 className='font-bold xl:text-[18px] sm:text-[16px] text-[14px] text-white uppercase'>
                  {selectedCustomer.User.full_name
                    .charAt(0)
                    .toLocaleUpperCase()}
                </h3>
              </div>
              <div className='search-listin-right'>
                <h4 className='font-bold xl:text-[15px] sm:text-[14px] text-[14px] text-black'>
                  {selectedCustomer.User.full_name}
                </h4>
                <p className='font-bold xl:text-[11px] sm:text-[10px] text-[10px] text-gray'>
                  {selectedCustomer.customercode}
                </p>
              </div>
            </div>
          </li>
        )}
        {tempOrder &&
          cartData.length > 0 &&
          cartData.map((t, index) => (
            <li
              key={t.id}
              className='relative sell-product-listing-wrp border border-lightborder p-3 rounded-[5px] flex xl:items-center lg:items-start md:items-center justify-between xl:flex-row lg:flex-col flex-col xl:gap-y-0 lg:gap-y-2 gap-y-2'
            >
              <div className='product-listing-left'>
                <h3 className='xxl:text-[14px] xl:text-[13px] font-medium'>
                  {t.Product_variant.Product.name}
                </h3>
                <div className='flex items-center gap-x-2'>
                  <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] text-Primary'>
                    {t.Product_variant.weight_no}{" "}
                    {t.Product_variant.Weight.name}
                  </h5>
                  <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] flex items-center'>
                    <span>{t.quantity}</span>
                    <HiMiniXMark />
                    <span>{t.discount_price}</span>
                  </h5>
                  {t.discount !== 0 && (
                    <h5 className='xxl:text-[14px] xl:text-[12px] lg:text-[14px] sm:text-[13px] text-[13px]'>
                      (Rs <span className='line-through'>{t.actual_price}</span>
                      )
                    </h5>
                  )}
                </div>
              </div>
              <div className='product-listing-right flex items-center xxl:gap-x-4 sm:gap-x-3 gap-x-3'>
                <div className='qty-btn common-inputs'>
                  <label htmlFor=''>Qty</label>
                  <div className='relative w-[70px] overflow-hidden flex items-center rounded-[5px] border border-Primary'>
                    <span
                      className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'
                      onClick={() => handleAddQty(t.quantity, t.id, "temp")}
                    >
                      <HiPlus className='' />
                    </span>
                    <input
                      type='text'
                      value={t.quantity.toString()}
                      name='qty'
                      id='qty'
                      onBlur={() => handleQtyUpdate(t.quantity, t.id, "temp")}
                      onChange={(e) => handleQtyChange(e.target.value, index)}
                    />
                    <span
                      className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'
                      onClick={() => handleminusQty(t.quantity, t.id, "temp")}
                    >
                      <AiOutlineMinus className='' />
                    </span>
                  </div>
                </div>
                <div className='dis-btn common-inputs'>
                  <label htmlFor=''>Dis</label>
                  <input
                    type='text'
                    value={t.discount}
                    className='block'
                    name='dis'
                    id='dis'
                    onChange={(e) =>
                      handleDiscountChange(e.target.value, index)
                    }
                    onBlur={() =>
                      handleDiscountUpdate(t.discount, t.id, "temp")
                    }
                  />
                </div>
                <h3 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[13px] text-[13px] text-black font-semibold'>
                  Rs {(t.discount_price * t.quantity).toFixed(2)}
                </h3>
              </div>
              <button
                onClick={() => handleRemoveTempProduct(t.id, "temp")}
                className='delet-added-product-btn absolute top-[-12px] right-[10px] w-7 h-7 bg-red-500 flex items-center justify-center text-white rounded-full'
              >
                <RiDeleteBin5Line className='text-[15px]' />
              </button>
            </li>
          ))}
        {parkedOrder &&
          parkedOrder.length > 0 &&
          parkedOrder.map((p, index) => (
            <li
              key={p.id}
              className='relative sell-product-listing-wrp border border-lightborder p-3 rounded-[5px] flex xl:items-center lg:items-start md:items-center justify-between xl:flex-row lg:flex-col flex-col xl:gap-y-0 lg:gap-y-2 gap-y-2'
            >
              <div className='product-listing-left'>
                <h3 className='xxl:text-[14px] xl:text-[13px] font-medium'>
                  {p.Product_variant.Product.name}
                </h3>
                <div className='flex items-center gap-x-2'>
                  <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] text-Primary'>
                    {p.Product_variant.weight_no}{" "}
                    {p.Product_variant.Weight.name}
                  </h5>
                  <h5 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[14px] text-[14px] flex items-center'>
                    <span>{p.quantity}</span>
                    <HiMiniXMark />
                    <span>{p.discount_price}</span>
                  </h5>
                  {p.discount !== "0" && (
                    <h5 className='xxl:text-[14px] xl:text-[12px] lg:text-[14px] sm:text-[13px] text-[13px]'>
                      (Rs <span className='line-through'>{p.actual_price}</span>
                      )
                    </h5>
                  )}
                </div>
              </div>
              <div className='product-listing-right flex items-center xxl:gap-x-4 sm:gap-x-3 gap-x-3'>
                <div className='qty-btn common-inputs'>
                  <label htmlFor=''>Qty</label>
                  <div className='relative w-[70px] overflow-hidden flex items-center rounded-[5px] border border-Primary'>
                    <span
                      className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'
                      onClick={() => handleAddQty(p.quantity, p.id, "parked")}
                    >
                      <HiPlus className='' />
                    </span>
                    <input
                      type='text'
                      value={p.quantity.toString()}
                      name='qty'
                      id='qty'
                      onBlur={() => handleQtyUpdate(p.quantity, p.id, "parked")}
                      onChange={(e) =>
                        handleParkedQtyChange(e.target.value, index)
                      }
                    />
                    <span
                      className='w-[20px] h-[30px] bg-Primary text-white cursor-pointer flex items-center justify-center text-[13px]'
                      onClick={() => handleminusQty(p.quantity, p.id, "parked")}
                    >
                      <AiOutlineMinus className='' />
                    </span>
                  </div>
                </div>
                <div className='dis-btn common-inputs'>
                  <label htmlFor=''>Dis</label>
                  <input
                    type='text'
                    value={p.discount}
                    className='block'
                    name='dis'
                    id='dis'
                    onChange={(e) =>
                      handleParkedDiscountChange(e.target.value, index)
                    }
                    onBlur={() =>
                      handleDiscountUpdate(Number(p.discount), p.id, "parked")
                    }
                  />
                </div>
                <h3 className='xxl:text-[14px] xl:text-[13px] lg:text-[14px] sm:text-[13px] text-[13px] text-black font-semibold'>
                  Rs{" "}
                  {(Number(p.discount_price) * Number(p.quantity)).toFixed(2)}
                </h3>
              </div>
              <button
                onClick={() => handleRemoveTempProduct(p.id, "parked")}
                className='delet-added-product-btn absolute top-[-12px] right-[10px] w-7 h-7 bg-red-500 flex items-center justify-center text-white rounded-full'
              >
                <RiDeleteBin5Line className='text-[15px]' />
              </button>
            </li>
          ))}
      </ul>

      {/* -------payment-wrp-------- */}
      <div className='payment-wrp sm:p-5 p-3 bg-[#f9f9f9] shadow mt-5 flex flex-col gap-y-3'>
        {!cartDis && (
          <div className='promocode-wrp common-inputs flex items-center flex-col sm:flex-row sm:gap-y-0 gap-y-4 gap-x-4 justify-center mb-4 mt-3'>
            <div className='relative sm:w-[auto] w-full'>
              <FaTags className='absolute top-[50%] translate-y-[-50%] left-2 text-Secondary' />
              <input
                type='text'
                placeholder='Enter Promocode'
                className='bg-white sm:w-[auto] w-full'
                name='promo'
                id='promo'
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
            </div>
            <button
              className='bg-Secondary border border-Secondary transition duration-200 hover:bg-transparent px-6 py-2 rounded-[5px] font-semibold h-[45px] text-[15px] sm:w-[auto] w-full'
              onClick={handlePromo}
            >
              Apply
            </button>
          </div>
        )}
        <div className='total-payment-info'>
          <div className='flex items-center justify-between'>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
              Products Subtotal
            </p>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
              Rs{cartTotal !== 0 && cartTotal.toFixed(2)}{" "}
              {parkedTotal !== 0 && parkedTotal?.toFixed(2)}
              {parkedTotal === 0 && cartTotal === 0 && "0.00"}
            </p>
          </div>
        </div>
        {/* <div className='total-payment-info'>
          <div className='flex items-center justify-between'>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
              Products Subtotal
            </p>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
              Rs 1197.00
            </p>
          </div>
        </div> */}
        <div className='total-payment-info'>
          <div className='flex items-center justify-between'>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
              Products GST
            </p>
            <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
              Rs {tempOrder && tempOrder.gst?.toFixed(2)}{" "}
              {tempOrder && tempOrder.produtc_gst?.toFixed(2)}{" "}
            </p>
          </div>
        </div>
        {(parkedTotal !== 0 || cartTotal !== 0) && (
          <div className='total-payment-info'>
            <div className='flex items-center justify-between'>
              <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
                Sub total
              </p>
              {tempOrder && cartTotal !== 0 && (
                <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
                  Rs{" "}
                  {(cartTotal + (tempOrder.gst ? tempOrder.gst : 0)).toFixed(2)}
                </p>
              )}
              {tempOrder && parkedTotal !== 0 && (
                <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
                  Rs{" "}
                  {(
                    (parkedTotal ? parkedTotal : 0) +
                    (tempOrder.produtc_gst ? tempOrder.produtc_gst : 0)
                  ).toFixed(2)}
                </p>
              )}
            </div>
          </div>
        )}
        {updatedGst !== 0 && (
          <div className='total-payment-info'>
            <div className='flex items-center justify-between'>
              <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
                Updated GST
              </p>
              <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
                Rs {updatedGst}
              </p>
            </div>
          </div>
        )}
        {cartDis && cartDis?.shopping_based_discount !== "0" && (
          <div className='total-payment-info'>
            <div className='flex items-center justify-between'>
              <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
                Cart based Discount
              </p>
              <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
                - ( {cartDis?.shopping_based_discountPercentage}%) Rs
                {cartDis?.shopping_based_discount}
              </p>
            </div>
          </div>
        )}
        {promoDetail && promoDetail?.calculateVal !== 0 && (
          <div className='total-payment-info'>
            <div className='flex items-center justify-between'>
              <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-medium'>
                Promocode Discount
              </p>
              <p className='xl:text-[15px] lg:text-[13px] sm:text-[14px] text-[13px] text-black font-semibold'>
                - ( {promoDetail?.promocodePer}%) Rs
                {promoDetail.calculateVal}
              </p>
            </div>
          </div>
        )}
        <div className='payment-type-wrp flex xxl:flex-row sm:flex-col flex-col xxl:gap-y-0 sm:gap-y-4 gap-y-4 items-center justify-between mt-4'>
          <fieldset className=''>
            <div className=' sm:flex flex sm:items-center gap-x-3 sm:space-y-0 sm:space-x-2'>
              {notificationMethods.map((notificationMethod) => (
                <div
                  key={notificationMethod.id}
                  className='flex items-center border border-lightblue text-lightblue pl-3 py-2 rounded-[5px] w-full sm:min-w-[130px] min-w-[100px]'
                >
                  <input
                    id={notificationMethod.id}
                    name='notification-method'
                    type='radio'
                    checked={notificationMethod.id === paymentMethod}
                    className='focus:ring-Primary h-4 w-4 text-Primary border-Primary cursor-pointer'
                    onChange={() => setMethod(notificationMethod.id)}
                  />
                  <label
                    htmlFor={notificationMethod.id}
                    className='ml-2 block text-sm font-medium text-gray-700 cursor-pointer'
                  >
                    {notificationMethod.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          {cartTotal !== 0 && (
            <button
              onClick={() =>
                handleAddOrder(
                  "temp",
                  Number(
                    (
                      (cartTotal ? cartTotal : 0) +
                      (tempOrder && tempOrder.gst ? tempOrder.gst : 0)
                    ).toFixed(2),
                  ),
                  cartTotal ? cartTotal : 0,
                )
              }
              className='pay-payment-btn bg-Secondary px-4 py-2 rounded-[5px] w-full max-w-[220px] flex items-center justify-between'
            >
              <span className='xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px] text-black font-semibold'>
                Pay Now
              </span>
              {cartDis && tempOrder ? (
                <span className='xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px] text-black font-semibold'>
                  Rs{" "}
                  {(
                    cartTotal +
                    (tempOrder?.gst ? tempOrder?.gst : 0) -
                    Number(cartDis?.shopping_based_discount)
                  ).toFixed(2)}
                </span>
              ) : promoDetail && tempOrder?.gst ? (
                cartTotal +
                (tempOrder?.gst ? tempOrder?.gst : 0) -
                Number(promoDetail.calculateVal)
              ) : (
                (cartTotal + (tempOrder?.gst ? tempOrder?.gst : 0)).toFixed(2)
              )}
            </button>
          )}
          {parkedTotal !== 0 && parkedTotal && (
            <button
              onClick={() =>
                handleAddOrder(
                  "parked",
                  Number(
                    (
                      (parkedTotal ? parkedTotal : 0) +
                      (tempOrder && tempOrder.produtc_gst
                        ? tempOrder.produtc_gst
                        : 0)
                    ).toFixed(2),
                  ),
                  parkedTotal ? parkedTotal : 0,
                )
              }
              className='pay-payment-btn bg-Secondary px-4 py-2 rounded-[5px] w-full max-w-[220px] flex items-center justify-between'
            >
              <span className='xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px] text-black font-semibold'>
                Pay Now
              </span>
              {cartDis && tempOrder ? (
                <span className='xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px] text-black font-semibold'>
                  Rs{" "}
                  {(
                    parkedTotal +
                    (tempOrder?.produtc_gst ? tempOrder?.produtc_gst : 0) -
                    Number(cartDis?.shopping_based_discount)
                  ).toFixed(2)}
                </span>
              ) : promoDetail && tempOrder?.produtc_gst ? (
                (
                  parkedTotal +
                  (tempOrder?.produtc_gst ? tempOrder?.produtc_gst : 0) -
                  Number(promoDetail.calculateVal)
                ).toFixed(2)
              ) : (
                (
                  parkedTotal +
                  (tempOrder?.produtc_gst ? tempOrder?.produtc_gst : 0)
                ).toFixed(2)
              )}
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SellModel
