import { Option } from "@/src/common/formfield/selectField"

export interface TaxListDetail {
  id: number
  tax_name: string
  createdAt: string
  updatedAt: string
}

export interface TaxFormField {
  tax_name: string
}

export interface TaxTypeDetail {
  id: number
  tax_id: number
  tax_type: string
  percentage: number
  createdAt: string
  updatedAt: string
}

export interface TaxTypeFormFields {
  selectTax: string
  taxes: TaxTypeField[]
}

interface TaxTypeField {
  taxType: string
  percentage: string
}

export const convertTaxlistOption = (data: TaxListDetail[]) => {
  const newData: Option[] = []
  data.map((obj) => {
    const newObj = {
      label: obj.tax_name,
      value: obj.id.toString(),
    }
    newData.push(newObj)
  })
  return newData
}
