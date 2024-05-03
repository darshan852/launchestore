import MultiCheckBox from "@/src/common/formfield/multiCheckBox"
import React, { useState, useEffect } from "react"

type Props = {
  FilterHandler: any
}

const ProductFilter = (props: Props) => {
  const [selectedValues, setSelectedValues] = useState<number[]>([])
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [error, setError] = useState<string | null>(null)

  interface Category {
    label: string
    id: number
  }

  interface CheckboxOption {
    label: string
    value: number
  }

  const categories = [
    { label: "American Fruits", id: 1 },
    { label: "Exotic Vegetables", id: 2 },
    { label: "asasdasd Vegetables", id: 3 },
  ]

  const handleCheckBoxChange = (option: CheckboxOption) => {
    console.log("option", option)
    const index = selectedValues.indexOf(option.value)
    console.log("index", index)
    if (index === -1) {
      setSelectedValues([...selectedValues, option.value as number]) // Explicitly cast option.value to number
    } else {
      setSelectedValues(
        selectedValues.filter((value) => value !== option.value),
      )
    }
  }
  const handleBlur = () => {
    // Perform any validation or additional actions on blur if needed
    setError("")
  }

  const categoryHandler = (category: Category) => {
    const index = selectedCategories.findIndex((cat) => cat.id === category.id)
    if (index === -1) {
      // Category not selected, so add it
      setSelectedCategories([...selectedCategories, category])
    } else {
      // Category already selected, so remove it
      const newSelectedCategories = [...selectedCategories]
      newSelectedCategories.splice(index, 1)
      setSelectedCategories(newSelectedCategories)
    }
  }

  useEffect(() => {
    let filter = {
      selectedValues,
      selectedCategories,
    }
    props.FilterHandler(filter)
  }, [selectedValues, selectedCategories])

  const options: CheckboxOption[] = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ]

  return (
    <>
      <div className='product-categires-part products-cat-in'>
        <div className='categire-header'>
          <h3>Product Categories</h3>
        </div>
        <div className='cate-wrp'>
          <ul className='pl-0'>
            {categories.map((cat, i) => (
              <li
                onClick={() => categoryHandler(cat)}
                key={i}
                className={
                  selectedCategories.some(
                    (selectedCat) => selectedCat.id === cat.id,
                  )
                    ? "selected"
                    : ""
                }
              >
                {cat.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='product-categires-part products-cat-in'>
        <div className='categire-header'>
          <h3>Product Brands</h3>
        </div>
        <div className='cate-wrp'>
          <>
            <MultiCheckBox
              label=''
              options={options}
              name='options'
              value={selectedValues}
              onChange={handleCheckBoxChange}
              error={error}
              onBlur={handleBlur}
            />
          </>
        </div>
      </div>
    </>
  )
}

export default ProductFilter
