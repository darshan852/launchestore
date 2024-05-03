export interface ThemeDetail {
  id: number
  theme_key: string
  name: string
  details: string
  image: string
  preview_url: string
  createdAt: string
  updatedAt: string
}

export interface ThemeFormData {
  theme_name: string
  theme_key: string
  preview_url: string
  image: any
  theme_detail: string
}
