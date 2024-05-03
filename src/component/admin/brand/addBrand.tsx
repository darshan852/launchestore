import TextFieldCommon from "@/src/common/formfield/textField"
import { UpdateBrandDetail } from "@/src/service/admin/brand"
import { GetAllCategory } from "@/src/service/admin/category"
import { newClientInstance } from "@/src/service/admin/newClient"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import React from "react"
import { PiArrowsLeftRightBold } from "react-icons/pi"
import { ToastContainer, toast } from "react-toastify"
import * as Yup from "yup"

interface BrandForm {
  name: string
  category_ids: number[]
}

interface AddBrandProps {
  brandDetail?: UpdateBrandDetail
}

const AddBrand: React.FC<AddBrandProps> = (props) => {
  const { brandDetail } = props
  const router = useRouter()
  const [category, setCategory] = React.useState<GetAllCategory[]>([])
  const [selectedCategory, setSelectedCategory] = React.useState<
    GetAllCategory[]
  >([])
  const [categorySearch, setCategorySearch] = React.useState<string>("")
  const [categorySearchData, setCategorySearchData] = React.useState<
    GetAllCategory[]
  >([])
  const [selectedcategorySearch, setselectedCategorySearch] =
    React.useState<string>("")
  const [selectedcategorySearchData, setselectedCategorySearchData] =
    React.useState<GetAllCategory[]>([])

  const handleGetCategoryList = React.useCallback(async () => {
    try {
      const response = await newClientInstance.getAllCategory()
      if (response.data.success) {
        if (brandDetail) {
          const updatedArray = brandDetail.Brand_categories.map(
            (e) => e.brand_category,
          )
          const filterData = response.data.data.filter((e) => {
            return !updatedArray.some((s) => s.id === e.id)
          })
          setCategory(filterData)
        } else {
          setCategory(response.data.data)
        }
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [])

  React.useEffect(() => {
    if (brandDetail) {
      formik.setValues({
        ...formik,
        name: brandDetail.name,
        category_ids: brandDetail.Brand_categories.map(
          (e) => e.brand_category.id,
        ),
      })
      setSelectedCategory(
        brandDetail.Brand_categories.map((e) => e.brand_category),
      )
    }
    handleGetCategoryList()
  }, [brandDetail, handleGetCategoryList])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter brand name"),
    category_ids: Yup.array().min(1, "Please select category"),
  })

  const handleUpdateCategory = async (values: BrandForm, id: number) => {
    try {
      const params = {
        name: values.name,
        category_ids: values.category_ids,
        brand_id: id,
      }
      const response = await newClientInstance.updateBrand({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/admin/brand")
        }, 2000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleAddCategory = async (values: BrandForm) => {
    try {
      const params = {
        name: values.name,
        category_ids: values.category_ids,
      }
      const response = await newClientInstance.addBrand({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/admin/brand")
        }, 2000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      category_ids: [] as unknown as number[],
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      if (brandDetail) {
        handleUpdateCategory(values, brandDetail.id)
      } else {
        handleAddCategory(values)
      }
    },
  })

  const handleCategoryClick = (value: GetAllCategory) => {
    setCategorySearchData([])
    const updatedArray = [...selectedCategory]
    const findIndex = updatedArray.findIndex((cat) => cat.id === value.id)
    if (findIndex === -1) {
      const obj = {
        name: value.name,
        id: value.id,
      }
      updatedArray.push(obj)
    }
    setSelectedCategory(updatedArray)
    const removeStore = [...category]
    const itemIndex = removeStore.findIndex((f) => f.id === value.id)
    console.log(itemIndex)
    removeStore.splice(itemIndex, 1)
    setCategory(removeStore)
    formik.setFieldValue(
      "category_ids",
      updatedArray.map((e) => e.id),
    )
  }

  const handleSelectedCategoryClick = (value: GetAllCategory) => {
    setselectedCategorySearchData([])
    const updatedArray = [...category]
    const obj = {
      id: value.id,
      name: value.name,
    }
    updatedArray.push(obj)
    setCategory(updatedArray)
    const removeFood = [...selectedCategory]
    const itemIndex = removeFood.findIndex((f) => f.id === value.id)
    removeFood.splice(itemIndex, 1)
    setSelectedCategory(removeFood)

    formik.setFieldValue(
      "category_ids",
      removeFood.map((e) => e.id),
    )
  }
  React.useEffect(() => {
    const filteredData = selectedCategory.filter(
      (data) =>
        data.name.toLowerCase().includes(selectedcategorySearch.toLowerCase()), // Case-insensitive search
    )
    setselectedCategorySearchData(filteredData)
  }, [selectedcategorySearch])

  React.useEffect(() => {
    const filteredData = category.filter(
      (data) => data.name.toLowerCase().includes(categorySearch.toLowerCase()), // Case-insensitive search
    )
    setCategorySearchData(filteredData)
  }, [categorySearch])

  const handleCancel = () => {
    router.push("/admin/brand")
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='gap-x-10 gap-y-1 flex items-start xl:flex-row lg:flex-col flex-col'>
          <div className='w-[70%] xxl:w-[40%] xl:w-[30%] lg:w-[40%] md:w-[80%] sm:w-[80%]'>
            <TextFieldCommon
              id='name'
              placeholder={"Enter Brand Name :"}
              label={"Brand Name :"}
              value={formik.values.name}
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
            />
          </div>
          <div className=''>
            <label className='mb-2'>Category:</label>
            <div className='flex gap-3 mt-3 flex-col sm:flex-row w-[260px] xxl:w-[300px] xl:w-[250px] lg:w-[300px] md:w-[210px] sm:w-[230px]'>
              <div className='common-inputs'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='w-[260px] xxl:w-[300px] xl:w-[250px] lg:w-[300px] md:w-[210px] sm:w-[230px] mb-1 sm:mb-3'
                  id='store_search'
                  name='store_search'
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                />
                <div className='top-full left-0 bg-white border border-zinc-400 rounded-md mt-2 min-h-48 max-h-48 overflow-y-auto w-[260px] xxl:w-[300px] xl:w-[250px] lg:w-[300px] md:w-[210px] sm:w-[230px]'>
                  <ul className='bg-[#f9f9f9] rounded-md'>
                    {categorySearch !== ""
                      ? categorySearchData.map((store, index) => (
                          <li
                            className='px-4 py-2 hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                            key={store.id}
                            onClick={() => handleCategoryClick(store)}
                          >
                            {store.name}
                          </li>
                        ))
                      : category.map((store, index) => (
                          <li
                            className='px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                            key={store.id}
                            onClick={() => handleCategoryClick(store)}
                          >
                            {store.name}
                          </li>
                        ))}
                  </ul>
                </div>
                {formik.touched.category_ids && formik.errors.category_ids && (
                  <span className='error' style={{ color: "red" }}>
                    {formik.errors.category_ids}
                  </span>
                )}
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
                  className='w-[260px] xxl:w-[300px] xl:w-[250px] lg:w-[300px] md:w-[210px] sm:w-[230px] mb-1 sm:mb-3'
                  name='food_search'
                  id='food_search'
                  value={selectedcategorySearch}
                  onChange={(e) => setselectedCategorySearch(e.target.value)}
                />
                <div className='top-full left-0 bg-white border border-zinc-400 rounded-md mt-2 min-h-48 max-h-48 overflow-y-auto w-[260px] xxl:w-[300px] xl:w-[250px] lg:w-[300px] md:w-[210px] sm:w-[230px]'>
                  <ul className='bg-[#f9f9f9] rounded-md'>
                    {selectedcategorySearch !== ""
                      ? selectedcategorySearchData.map((store, index) => (
                          <li
                            className='px-4 py-2 hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                            key={index}
                            onClick={() => handleSelectedCategoryClick(store)}
                          >
                            {store.name}
                          </li>
                        ))
                      : selectedCategory.map((store, index) => (
                          <li
                            className='px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer hover:bg-Primary hover:text-white'
                            key={index}
                            onClick={() => handleSelectedCategoryClick(store)}
                          >
                            {store.name}
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex justify-center items-center mt-10'>
          <div className='flex items-center gap-2 '>
            <button
              onClick={handleCancel}
              type='button'
              className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
            >
              Cancel
            </button>
            <button
              // variant='contained'
              aria-label='Save'
              type='submit'
              className='inline-flex items-center px-6 py-2 border border-Secondary bg-Secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
              // onClick={handleFoodCategory}
            >
              Add Brand
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default AddBrand
