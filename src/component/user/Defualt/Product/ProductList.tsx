import React, { useEffect, useState } from "react"
import HomeCategorySlider from "../Home/HomeCategorySlider"
import SubCategory from "../SubCategory"
import ProductCard from "../ProductCard"
import ProductFilter from "./ProductFilter"
import SelectField from "@/src/common/formfield/selectField"
import { FaFilter } from "react-icons/fa"
import { RxCrossCircled } from "react-icons/rx"

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [sortFilter, setSortFilter] = useState()

  interface Category {
    selectedValues: []
    selectedCategories: []
    sortFilter: string
  }

  const FilterHandler = (filter: Category) => {
    console.log("filter", filter)
  }

  useEffect(() => {
    console.log("sortFilter", sortFilter)
  }, [sortFilter])

  return (
    <div>
      <section className='Categories-section listing-categories listing-categories-1 section'>
        <div className='container'>
          <HomeCategorySlider />
          <SubCategory />
        </div>
      </section>
      <section className='Featured-Products product-listing-1 product-listing-2  section'>
        <div className='container'>
          <div className='lisitng-1 mb-3 mb-md-5'>
            <h4>Showing 1-15 of 31 products</h4>
            <div className='right-list'>
              <div className='short-by-dropdown'>
                <label>Sort By: </label>
                <SelectField
                  error={null}
                  label=''
                  name='category_id'
                  onBlur={(e: any) => console.log(e)}
                  onChange={(e: { target: { value: any } }) =>
                    setSortFilter(e.target.value)
                  }
                  option={[
                    {
                      label: "Select Category",
                      value: "",
                    },
                    {
                      label: "alphabetic",
                      value: "1",
                    },
                    {
                      label: "Low to high",
                      value: "2",
                    },
                  ]}
                  value={""}
                />
                <span
                  className='filter-icon filter-hide-btn'
                  onClick={() => setShowFilter(!showFilter)}
                >
                  FILTER
                  <FaFilter />
                </span>
                <span
                  className='mobile-filter-btn'
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <FaFilter />
                </span>
              </div>
            </div>
          </div>
          <div className='mycustom-row'>
            <div
              className={
                showFilter
                  ? "my-filter-wrapper"
                  : "my-filter-wrapper hide active"
              }
            >
              <span className='closebtn'>
                <RxCrossCircled />
              </span>
              <ProductFilter FilterHandler={FilterHandler} />
            </div>
            <div
              className={
                showFilter ? "show-div-wrapper" : "show-div-wrapper hide"
              }
            >
              <div className='main-listing-wrapper'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductList
