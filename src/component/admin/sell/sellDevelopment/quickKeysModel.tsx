import React from "react"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { RxCrossCircled } from "react-icons/rx"
import { BiSearch } from "react-icons/bi"
import { AiOutlineQrcode } from "react-icons/ai"
import {
  SearchProducts,
  SearchProductsVariant,
} from "@/src/service/admin/sellDevelopment"
import { newClientInstance } from "@/src/service/admin/newClient"
import { toast } from "react-toastify"
import { SelectQuickProduct } from "./sellCommon"
import { useDebounce } from "@/src/hooks/useDebounce"
// import { CheckIcon } from '@heroicons/react/outline'
interface QuickKeysModelProps {
  open: boolean
  setOpen: (value: boolean) => void
  handleGetQuickProductList: () => void
}

const QuickKeysModel = (props: QuickKeysModelProps) => {
  const { open, setOpen, handleGetQuickProductList } = props
  const [search, setSearch] = React.useState<string>("")
  const [searchData, setSearchData] = React.useState<SearchProducts[]>([])
  const [selectedProduct, setProduct] = React.useState<SelectQuickProduct[]>([])
  const debounceText = useDebounce(search, 500)

  //   const [searchFlag,setSearchFlag] = React.useState<boolean>(false)

  const handleSearch = React.useCallback(async (value: string) => {
    setSearch(value)
    if (value !== "") {
      try {
        const params = {
          name: value,
        }
        const response = await newClientInstance.searchProduct({
          params: params,
        })
        if (response.data.success) {
          if (value.length >= 7 && /^\d+$/.test(value)) {
            console.log(response.data.data)
            if (response.data.data.length === 1) {
              handleSelecteProduct(
                response.data.data[0],
                response.data.data[0].Product_variants[0],
              )
            }
          } else {
            setSearchData(response.data.data)
          }
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    } else {
      setSearchData([])
    }
  }, [])

  React.useEffect(() => {
    if (debounceText) {
      handleSearch(debounceText)
    }
  }, [debounceText, handleSearch])

  const handleSelecteProduct = (
    product: SearchProducts,
    variant: SearchProductsVariant,
  ) => {
    const updatedArray = [...selectedProduct]
    const findIndex = updatedArray.findIndex(
      (i) => i.product_variant.id === variant.id,
    )
    if (findIndex === -1) {
      const obj = {
        name: product.name,
        product_variant: variant,
      }
      updatedArray.push(obj)
    }
    setProduct(updatedArray)
    setSearch("")
    setSearchData([])
  }

  const handleAddQuickProduct = async () => {
    try {
      const params = {
        product_variant_ids: selectedProduct.map((s) => s.product_variant.id),
      }
      const response = await newClientInstance.addQuickProducts({
        params: params,
      })
      if (response.data.success) {
        setProduct([])
        setOpen(false)
        toast.success(response.data.message)
        handleGetQuickProductList()
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }
  const handleClose = () => {
    setProduct([])
    setSearchData([])
    setSearch("")
    setOpen(false)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto bg-[rgba(0,0,0,0.4)]'
        onClose={handleClose}
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
            <div className='relative w-full h-full max-w-[600px] inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle'>
              <div className='sell-addproudct-modal '>
                <div className='sell-addproudct-modal-title bg-Primary text-white px-5 py-2'>
                  <h2 className='text-[20px] font-semibold capitalize'>
                    Add Products
                  </h2>
                  <p className='text-[13px] font-medium'>
                    Search for products to add to your Quick Key layout.
                  </p>
                  <button
                    className='modal-close-btn absolute top-3 right-3 text-[25px]'
                    onClick={handleClose}
                  >
                    <RxCrossCircled />
                  </button>
                </div>
                <div className='sell-addproudct-modal-body sell-left-search-wrp bg-white p-5'>
                  {/* ---search-input-lisitng-- */}
                  <div className='relative'>
                    <div className='relative common-inputs'>
                      <BiSearch className='absolute top-[50%] text-Primary left-2 text-[20px] translate-y-[-50%]' />
                      <input
                        type='text'
                        className='w-full '
                        placeholder='Search product or start scanning...'
                        id='search_prod'
                        name='product_search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <AiOutlineQrcode className='absolute top-[50%] text-Primary right-2 text-[20px] translate-y-[-50%]' />
                    </div>
                    {searchData.length > 0 && (
                      <ul className='sell-left-search-listing w-full border border-lightborder rounded-[5px] p-3 shadow bg-white mt-3'>
                        {searchData.map((s: SearchProducts) => (
                          <div key={s.id}>
                            {s.Product_variants.length > 0
                              ? s.Product_variants.map((p, index) => (
                                  <li
                                    className='border-b border-bordercolor pb-2 mb-2'
                                    key={p.id + index + p.id}
                                    onClick={() => handleSelecteProduct(s, p)}
                                  >
                                    <div className='search-listing-wrp flex items-center justify-between'>
                                      <div className='search-listin-left'>
                                        <h3 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                                          {s.name}
                                        </h3>
                                        <p className='font-bold md:text-[12px] sm:text-[11px] text-[11px] text-gray'>
                                          {p.weight_no} {"  "}
                                          {p.Weight.name}
                                        </p>
                                      </div>
                                      <div className='search-listin-right'>
                                        <h4 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                                          Rs{p.price}
                                        </h4>
                                      </div>
                                    </div>
                                  </li>
                                ))
                              : ""}
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* ---sell-selected-proudct-wrp--- */}
                  <div className='sell-selected-proudct-wrp mt-5 flex items-center gap-x-5 gap-y-3 flex-wrap'>
                    {selectedProduct.length > 0 &&
                      selectedProduct.map((product) => (
                        <div
                          key={product.product_variant.id}
                          className='sell-selected-proudct-info text-center border border-Primary inline-block p-5 rounded-[10px] bg-lightgreen shadow'
                        >
                          <h3 className='text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-black'>
                            {product.name}
                          </h3>
                          <p className='text-[12px] sm:text-[13px] font-regular text-black'>
                            {product.product_variant.Weigt_name}{" "}
                            {product.product_variant.Weight.name}
                          </p>
                        </div>
                      ))}
                  </div>

                  <div className='modal-footer-btn mt-10 text-center'>
                    <button
                      className='border border-Secondary px-5 py-2 rounded-[5px] sm:text-[16px] text-[14px] bg-Secondary text-black capitalize font-semibold'
                      onClick={handleAddQuickProduct}
                    >
                      create quick keys
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default QuickKeysModel
