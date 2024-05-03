import { apiClient } from "@/src/service/client"
import {
  FoodCategoryDetail,
  ShowFoodCategoryDetail,
} from "@/src/service/foodCategory"
import { StoreTypeList } from "@/src/service/storeType"
import React from "react"
import { PiArrowsLeftRightBold } from "react-icons/pi"
import { ToastContainer, toast } from "react-toastify"
import { convertFoodCategoryResponse } from "./foodCommon"

const FoodCategory = () => {
  const [showData, setshowData] = React.useState<ShowFoodCategoryDetail[]>([])
  const [storeListShow, setStoreListShow] = React.useState<StoreTypeList[]>([])
  const [storeSearch, setStoreSearch] = React.useState<string>("")
  const [foodSearch, setFoodSearch] = React.useState<string>("")
  const [foodSearchData, setFoodSearchData] = React.useState<
    ShowFoodCategoryDetail[]
  >([])
  const [storeSearchData, setStoreSearchData] = React.useState<StoreTypeList[]>(
    [],
  )
  const [message, setMessage] = React.useState<string>("")

  const handleGetFoodCategory = React.useCallback(async () => {
    try {
      const response = await apiClient.getCategoryList()
      if (response.data.success) {
        setshowData(convertFoodCategoryResponse(response.data.data))
        handleGetStoreType(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [])

  const handleGetStoreType = React.useCallback(
    async (data: FoodCategoryDetail[]) => {
      try {
        const response = await apiClient.getStoreList()
        if (response.data.success) {
          const filterdData: StoreTypeList[] = []

          response.data.data.map((item) => {
            const index = data.findIndex((f) => f.store_type_id === item.id)
            if (index === -1) {
              filterdData.push(item)
            }
          })
          console.log(filterdData)
          setStoreListShow(filterdData)
        }
      } catch (error: any) {
        console.log(error)
        toast.error(error.message)
      }
    },
    [],
  )

  React.useEffect(() => {
    handleGetFoodCategory()
  }, [handleGetFoodCategory, handleGetStoreType])

  const handleStoreClick = (value: StoreTypeList) => {
    setStoreSearchData([])
    const updatedArray = [...showData]
    const findIndex = updatedArray.findIndex(
      (cat) => cat.store_type_id === value.id,
    )
    if (findIndex === -1) {
      const obj = {
        name: value.name,
        store_type_id: value.id,
      }
      updatedArray.push(obj)
    }
    setshowData(updatedArray)
    const removeStore = [...storeListShow]
    const itemIndex = removeStore.findIndex((f) => f.id === value.id)
    console.log(itemIndex)
    removeStore.splice(itemIndex, 1)
    setStoreListShow(removeStore)
  }

  const handleFoodCategoryClick = (value: ShowFoodCategoryDetail) => {
    setFoodSearchData([])
    const updatedArray = [...storeListShow]
    const obj = {
      id: value.store_type_id,
      name: value.name,
    }
    updatedArray.push(obj)
    setStoreListShow(updatedArray)
    const removeFood = [...showData]
    const itemIndex = removeFood.findIndex(
      (f) => f.store_type_id === value.store_type_id,
    )
    removeFood.splice(itemIndex, 1)
    setshowData(removeFood)
  }

  React.useEffect(() => {
    const filteredData = showData.filter(
      (data) => data.name.toLowerCase().includes(foodSearch.toLowerCase()), // Case-insensitive search
    )
    setFoodSearchData(filteredData)
  }, [foodSearch])

  React.useEffect(() => {
    const filteredData = storeListShow.filter(
      (data) => data.name.toLowerCase().includes(storeSearch.toLowerCase()), // Case-insensitive search
    )
    setStoreSearchData(filteredData)
  }, [storeSearch])

  const handleCancel = () => {
    handleGetFoodCategory()
    setMessage("")
  }

  const handleFoodCategory = async () => {
    if (showData.length === 0) {
      setMessage("Please select Store Type")
    } else {
      const store_type_id = showData.map((s) => s.store_type_id)
      try {
        const params = {
          store_type_id: store_type_id,
        }
        const response = await apiClient.addFoodCategory({ params: params })
        if (response.data.data) {
          toast.success(response.data.message)
          setMessage("")
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    }
  }

  return (
    <div className='sm:h-[60vh] h-full '>
      <label className='mb-2'>All Store Types</label>
      <div className='flex gap-3 mt-4 flex-col sm:flex-row w-[260px] lg:w-[300px] md:w-[210px] sm:w-[230px]'>
        <div className='common-inputs'>
          <input
            type='text'
            placeholder='Search...'
            className='w-[260px] lg:w-[300px] md:w-[210px] sm:w-[230px] mb-1 sm:mb-3'
            id='store_search'
            name='store_search'
            value={storeSearch}
            onChange={(e) => setStoreSearch(e.target.value)}
          />
          <div className='top-full left-0 bg-white border border-zinc-400 rounded-md mt-2 min-h-48 max-h-48 overflow-y-auto w-[260px] lg:w-[300px] md:w-[210px] sm:w-[230px]'>
            <ul className='bg-[#f9f9f9] rounded-md'>
              {storeSearch !== ""
                ? storeSearchData.map((store, index) => (
                    <li
                      className='px-4 py-2 hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                      key={store.id}
                      onClick={() => handleStoreClick(store)}
                    >
                      {store.name}
                    </li>
                  ))
                : storeListShow.map((store, index) => (
                    <li
                      className='px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                      key={store.id}
                      onClick={() => handleStoreClick(store)}
                    >
                      {store.name}
                    </li>
                  ))}
            </ul>
          </div>
          <span className='text-[red] min-h-3'>{message}</span>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-5 h-5'>
            <PiArrowsLeftRightBold className='w-full h-full rotate-90 sm:rotate-0 cursor-pointer' />
          </div>
        </div>
        <div className='common-inputs'>
          <input
            type='text'
            placeholder='Search...'
            className='w-[260px] lg:w-[300px] md:w-[210px] sm:w-[230px] mb-1 sm:mb-3'
            name='food_search'
            id='food_search'
            value={foodSearch}
            onChange={(e) => setFoodSearch(e.target.value)}
          />
          <div className='top-full left-0 bg-white border border-zinc-400 rounded-md mt-2 min-h-48 max-h-48 overflow-y-auto w-[260px] lg:w-[300px] md:w-[210px] sm:w-[230px]'>
            <ul className='bg-[#f9f9f9] rounded-md'>
              {foodSearch !== ""
                ? foodSearchData.map((store, index) => (
                    <li
                      className='px-4 py-2 hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                      key={index}
                      onClick={() => handleFoodCategoryClick(store)}
                    >
                      {store.name}
                    </li>
                  ))
                : showData.map((store, index) => (
                    <li
                      className='px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                      key={index}
                      onClick={() => handleFoodCategoryClick(store)}
                    >
                      {store.name}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=' flex justify-center items-center mt-10'>
        <div className='flex items-center gap-2 '>
          <button
            onClick={handleCancel}
            className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            Cancel
          </button>
          <button
            // variant='contained'
            aria-label='Save'
            type='button'
            className='inline-flex items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
            onClick={handleFoodCategory}
          >
            Update
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default FoodCategory
