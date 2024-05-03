import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface ProductDetail {
  id: number
  product_name: string
  status: string
  category_name: string
  subcategory_name: string
  brand_name: string
}

export interface GetProductListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
}

export interface GetProductListRequest extends Partial<AxiosRequestConfig> {
  params: GetProductListRequestData
}

export interface GetProductResponseData extends CommonResponseData {
  data: ProductDetail[]
  totalRecords: number
  currentPage: number
}

export interface GetProductResponse extends AxiosResponse {
  data: GetProductResponseData
}

export function getProductList(
  {
    params,
    url = `${defaultUrl}/product/product_list`,
    method = "post",
    ...config
  }: GetProductListRequest,
  axiosInstanse: AxiosInstance = defaultAxiosInstance,
): Promise<GetProductResponse> {
  return axiosInstanse({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddProductRequestData {
  id?: number
  category_id: number
  subcategory_id: number
  brand_id: number
  name: string
  display_priority: string
  food_type: string
  about: string
  content: string
  gst: string
  tags: string[]
}

export interface AddProductRequest extends Partial<AxiosRequestConfig> {
  params: AddProductRequestData
}

export interface AddProductResponseData extends CommonResponseData {
  data: AddProductRequestData
}

export interface AddProductResponse extends AxiosResponse {
  data: AddProductResponseData
}

export function addProduct(
  {
    params,
    url = `${defaultUrl}/product/add`,
    method = "post",
    ...config
  }: AddProductRequest,
  axiosInstanse: AxiosInstance = defaultAxiosInstance,
): Promise<AddProductResponse> {
  return axiosInstanse({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateProductRequestData {
  product_id: number
  category_id: number
  subcategory_id: number
  brand_id: number
  name: string
  display_priority: string
  food_type: string
  about: string
  content: string
  gst: string
  tags: string[]
}

export interface UpdateProductRequest extends Partial<AxiosRequestConfig> {
  params: UpdateProductRequestData
}

export interface UpdateProductResponseData extends CommonResponseData {
  data: UpdateProductRequestData
}

export interface UpdateProductResponse extends AxiosResponse {
  data: UpdateProductResponseData
}

export function updateProduct(
  {
    params,
    url = `${defaultUrl}/product/update`,
    method = "post",
    ...config
  }: UpdateProductRequest,
  axiosInstanse: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateProductResponse> {
  return axiosInstanse({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateProductDetail {
  id: number
  branch_id: number
  category_id: number
  subcategory_id: number
  brand_id: number
  supplier_id: null | number
  name: string
  image: null
  about: string
  content: string
  status: string
  gst: number
  display_priority: number
  food_type: string
  createdAt: string
  updatedAt: string
  Product_searches: ProductSearches[]
}

export interface ProductSearches {
  id: number
  product_id: number
  name: string
  deletedAt: null | string
  createdAt: string
  updatedAt: string
}

export interface GetProductDetailRequestData {
  productId: string
}

export interface GetProductDetailRequest extends Partial<AxiosRequestConfig> {
  params: GetProductDetailRequestData
}

export interface GetProductDetailResponsedata extends CommonResponseData {
  data: UpdateProductDetail
}

export interface GetProductDetailResponse extends AxiosResponse {
  data: GetProductDetailResponsedata
}

export function getProductDetail(
  {
    params,
    url = `${defaultUrl}/product/getProductDetail/${params.productId}`,
    method = "get",
    ...config
  }: GetProductDetailRequest,
  axiosInstanse: AxiosInstance = defaultAxiosInstance,
): Promise<GetProductDetailResponse> {
  return axiosInstanse({
    url,
    method,
    ...config,
  })
}

export interface UpdateProductStatusRequestData {
  id: number
  status: string
}

export interface UpdateProductStatusRequest
  extends Partial<AxiosRequestConfig> {
  params: UpdateProductStatusRequestData
}

export interface UpdateProductStatusResponseData extends CommonResponseData {
  data: {
    id: number
    branch_id: number
    category_id: number
    subcategory_id: number
    brand_id: number
    supplier_id: null | number
    name: string
    image: null | string
    about: string
    content: string
    status: number
    gst: number
    display_priority: number
    food_type: string
    createdAt: string
    updatedAt: string
  }
}

export interface UpdateProductStatusResponse extends AxiosResponse {
  data: UpdateProductStatusResponseData
}

export function updateProductStatus(
  {
    params,
    url = `${defaultUrl}/product/updateStatus`,
    method = "post",
    ...config
  }: UpdateProductStatusRequest,
  axiosInstanse: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateProductStatusResponse> {
  return axiosInstanse({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface ProductsDeleteRequestData {
  ids: number[]
}

export interface ProductsDeleteRequest extends Partial<AxiosRequestConfig> {
  params: ProductsDeleteRequestData
}

export interface ProductsDeleteResponseData extends CommonResponseData {
  data: {}
}

export interface ProductsDeleteResponse extends AxiosResponse {
  data: ProductsDeleteResponseData
}

export function deleteProducts(
  {
    params,
    url = `${defaultUrl}/product/deleteProduct`,
    method = "post",
    ...config
  }: ProductsDeleteRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<ProductsDeleteResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
