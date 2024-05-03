import { useDebounce } from "@/src/hooks/useDebounce"
import { newClientInstance } from "@/src/service/admin/newClient"
import { SearchProducts } from "@/src/service/admin/sellDevelopment"
import React from "react"
import { BiSearch } from "react-icons/bi"
import { toast } from "react-toastify"

interface SellSearchProps {
  handleGetTempOrder: () => void
  parkedId?: string
}
const SellSearch = (props: SellSearchProps) => {
  const { handleGetTempOrder, parkedId } = props
  const [search, setSearch] = React.useState<string>("")
  const [searchData, setSearchData] = React.useState<SearchProducts[]>([])
  //   const [searchFlag,setSearchFlag] = React.useState<boolean>(false)
  const debounceText = useDebounce(search, 500)

  const handleAddProduct = React.useCallback(
    async (id: number) => {
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
          setSearch("")
          setSearchData([])
          handleGetTempOrder()
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    },
    [handleGetTempOrder, parkedId],
  )

  const handleSearch = React.useCallback(
    async (value: string) => {
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
              if (
                response.data.data.length === 1 &&
                response.data.data[0].Product_variants.length > 0
              ) {
                handleAddProduct(response.data.data[0].Product_variants[0].id)
              } else {
                setSearchData(response.data.data)
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
    },
    [handleAddProduct],
  )

  React.useEffect(() => {
    if (debounceText) {
      handleSearch(debounceText)
    }
  }, [debounceText, handleSearch])

  return (
    <div className='sell-left-search-wrp common-inputs w-full relative'>
      <div className='relative'>
        <BiSearch className='absolute top-[50%] text-Primary left-2 text-[20px] translate-y-[-50%]' />
        <input
          type='text'
          className='w-full '
          placeholder='Search product or start scanning...'
          id='search_prod'
          name='productSearch'
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>
      {/* --------sell-left-search-listing------- */}
      {searchData.length > 0 && (
        <ul className='sell-left-search-listing w-full border border-lightborder rounded-[5px] p-3 shadow bg-white mt-2'>
          {searchData.map((s: SearchProducts) => (
            <div key={s.id}>
              {s.Product_variants.length > 0
                ? s.Product_variants.map((p, index) => (
                    <li
                      className='border-b border-bordercolor pb-2 mb-2 cursor-pointer'
                      key={p.id + index + p.id}
                      onClick={() => handleAddProduct(p.id)}
                    >
                      <div className='search-listing-wrp flex items-center justify-between'>
                        <div className='search-listin-left'>
                          <h3 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                            {s.name}
                          </h3>
                          <p className='font-bold md:text-[12px] sm:text-[11px] text-[11px] text-gray'>
                            {/* 500 gram */}
                            {p.weight_no} {"  "}
                            {p.Weight.name}
                          </p>
                        </div>
                        <div className='search-listin-right'>
                          <h4 className='font-bold md:text-[15px] sm:text-[14px] text-[14px] text-black'>
                            Rs {p.price}
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
  )
}

export default SellSearch
