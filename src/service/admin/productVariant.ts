import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface ProductVariantList {
  id: number
  product_name: string
  variants: string
  purchase_price: number
  price: number
  discount_per: number
  quantity: number
}

export interface ProductVariantListRequestData {
  search: string
  page: number
  sorting: string
  limit: number
  product_id: number
}

export interface ProductVariantListRequest extends Partial<AxiosRequestConfig> {
  params: ProductVariantListRequestData
}

export interface ProductVariantListResponseData extends CommonResponseData {
  data: ProductVariantList[]
  totalRecords: number
  currentPage: number
}

export interface ProductVariantListResponse extends AxiosResponse {
  data: ProductVariantListResponseData
}

export function getProductVariantList(
  {
    params,
    url = `${defaultUrl}/product_variant/listVariant`,
    method = "post",
    ...config
  }: ProductVariantListRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<ProductVariantListResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddProductVariantRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface AddProductVariantResponseData extends CommonResponseData {
  data: {}
}

export interface AddProductVariantResponse extends AxiosResponse {
  data: AddProductVariantResponseData
}

export function addProductVariant(
  {
    params,
    url = `${defaultUrl}/product_variant/add`,
    method = "post",
    ...config
  }: AddProductVariantRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddProductVariantResponse> {
  config.headers = {
    "Content-Type": "multipart/form-data",
  }
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetProductVariantDetailRequestData {
  variantId: string
}

export interface GetProductVariantDetailRequest
  extends Partial<AxiosRequestConfig> {
  params: GetProductVariantDetailRequestData
}

export interface GetVariantDetail {
  id: number
  product_id: number
  branch_id: number
  weight_id: number
  package_id: number
  weight_no: string
  purchase_price: number
  price: number
  quantity: number
  temp_quantity: null | number
  max_order_qty: number
  limited_stock: number
  park_quantity: null | number
  discount_per: number
  without_gst_price: number
  discount_price: number
  discount_allow: null
  status: string
  qr_code: string
  IsPosMostLike: null
  deletedAt: null
  createdAt: string
  updatedAt: string
  Product_images: ProductImage[]
}

export interface ProductImage {
  id: number
  image: string
}

export interface GetVariantDetailResponseData extends CommonResponseData {
  data: GetVariantDetail
}

export interface GetVariantDetailResponse extends AxiosResponse {
  data: GetVariantDetailResponseData
}

export function getVariantDetail(
  {
    params,
    url = `${defaultUrl}/product_variant/getProductVariantDetail/${params.variantId}`,
    method = "get",
    ...config
  }: GetProductVariantDetailRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetVariantDetailResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface RemoveVariantImageRequestData {
  imageId: number
}

export interface RemoveVariantImageRequest extends Partial<AxiosRequestConfig> {
  params: RemoveVariantImageRequestData
}

export interface RemoveVariantImageResponseData extends CommonResponseData {
  data: {}
}
export interface RemoveVariantImageResponse extends AxiosResponse {
  data: RemoveVariantImageResponseData
}

export function removeImage(
  {
    params,
    url = `${defaultUrl}/product_variant/deleteImage/${params.imageId}`,
    method = "delete",
    ...config
  }: RemoveVariantImageRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<RemoveVariantImageResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface updateVariantRequest extends Partial<AxiosRequestConfig> {
  params: FormData
}

export interface updateVariantResponseData extends CommonResponseData {
  data: {
    id: number
    product_id: string
    branch_id: number
    weight_id: string
    package_id: string
    weight_no: string
    purchase_price: string
    price: string
    quantity: string
    temp_quantity: null
    max_order_qty: string
    limited_stock: string
    park_quantity: null
    discount_per: string
    without_gst_price: number
    discount_price: number
    discount_allow: null
    status: string
    qr_code: string
    IsPosMostLike: null
    deletedAt: null
    createdAt: string
    updatedAt: string
  }
}

export interface updateVariantResponse extends AxiosResponse {
  data: updateVariantResponseData
}

export function updateVariant(
  {
    params,
    url = `${defaultUrl}/product_variant/update`,
    method = "post",
    ...config
  }: updateVariantRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<updateVariantResponse> {
  config.headers = {
    "Content-Type": "multipart/form-data",
  }
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface deleteProductVariantRequestData {
  ids: number[]
}

export interface deleteProductVariantRequest
  extends Partial<AxiosRequestConfig> {
  params: deleteProductVariantRequestData
}

export interface deleteProductVariantResponseData extends CommonResponseData {
  data: {}
}

export interface deleteProductVariantResponse extends AxiosResponse {
  data: deleteProductVariantResponseData
}

export function deleteVariant(
  {
    params,
    url = `${defaultUrl}/product_variant/deleteProductVariant`,
    method = "post",
    ...config
  }: deleteProductVariantRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<deleteProductVariantResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetImageIndexRequestData {
  product_id: string
}

export interface GetImageIndexRequest extends Partial<AxiosRequestConfig> {
  params: GetImageIndexRequestData
}

export interface ProductImageDetail {
  id: number
  image: string
  image_order: string
}

export interface GetimageIndexResponseData extends CommonResponseData {
  data: {
    id: number
    name: string
    Product_images: ProductImageDetail[]
  }
}

export interface GetimageIndexResponse extends AxiosResponse {
  data: GetimageIndexResponseData
}

export function getProductImage(
  {
    params,
    url = `${defaultUrl}/product_variant/productImage/${params.product_id}`,
    method = "get",
    ...config
  }: GetImageIndexRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetimageIndexResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface ChangeImageOrderRequestData {
  product_image_id: number[]
}

export interface ChangeImageOrderRequest extends Partial<AxiosRequestConfig> {
  params: ChangeImageOrderRequestData
}

export interface ChangeImageOrderResposeData extends CommonResponseData {
  data: {}
}

export interface ChangeImageOrderRespose extends AxiosResponse {
  data: ChangeImageOrderResposeData
}

export function changeImageOrder(
  {
    params,
    url = `${defaultUrl}/product_variant/updateProductImageIndex`,
    method = "post",
    ...config
  }: ChangeImageOrderRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<ChangeImageOrderRespose> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}
