import { SearchProductsVariant } from "@/src/service/admin/sellDevelopment"

export interface SelectQuickProduct {
  name: string
  product_variant: SearchProductsVariant
}

export function generateRandomNumber(length: number) {
  return Math.floor(Math.random() * Math.pow(10, length))
}
