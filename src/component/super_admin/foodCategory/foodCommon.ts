import {
  FoodCategoryDetail,
  ShowFoodCategoryDetail,
} from "@/src/service/foodCategory"

export const convertFoodCategoryResponse = (data: FoodCategoryDetail[]) => {
  const newData: ShowFoodCategoryDetail[] = []

  data.map((obj) => {
    const newObj = {
      name: obj.name,
      store_type_id: obj.store_type_id,
    }
    newData.push(newObj)
  })
  return newData
}
