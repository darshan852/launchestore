import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { CommonResponseData, defaultUrl } from "../common"
import { defaultAxiosInstance } from "../client"

export interface SellSearchProductRequestData {
  name: string
}

export interface SellSearchProductRequest extends Partial<AxiosRequestConfig> {
  params: SellSearchProductRequestData
}

export interface SearchProducts {
  id: number
  name: string
  gst: number
  Product_variants: SearchProductsVariant[]
}

export interface SearchProductsVariant {
  id: number
  Weigt_name: string
  price: number
  Weight: {
    id: number
    vendor_id: number
    name: string
    status: string
    deletedAt: null
    createdAt: string
    updatedAt: string
  }

  weight_no: string
}

export interface SearchProductResponseData extends CommonResponseData {
  data: SearchProducts[]
}

export interface SearchProductResponse extends AxiosResponse {
  data: SearchProductResponseData
}

export function searchProduct(
  {
    params,
    url = `${defaultUrl}/sell/productSearch`,
    method = "post",
    ...config
  }: SellSearchProductRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<SearchProductResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface QuickProductDetail extends SearchProductsVariant {
  Product: {
    id: number
    name: string
    gst: number
  }
}

export interface QuickProductListResponseData extends CommonResponseData {
  data: QuickProductDetail[]
}

export interface QuickProductListResponse extends AxiosResponse {
  data: QuickProductListResponseData
}

export function quickProductList(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<QuickProductListResponse> {
  return axiosInstance({
    url: `${defaultUrl}/sell/listQuickProduct`,
    method: "get",
  })
}

export interface AddQuickProductsRequestData {
  product_variant_ids: number[]
}

export interface AddQuickProductsRequest extends Partial<AxiosRequestConfig> {
  params: AddQuickProductsRequestData
}

export interface AddQuickProductResponseData extends CommonResponseData {
  data: {}
}

export interface AddQuickProductResponse extends AxiosResponse {
  data: AddQuickProductResponseData
}

export function addQuickProducts(
  {
    params,
    url = `${defaultUrl}/sell/makeQuikeProductList`,
    method = "post",
    ...config
  }: AddQuickProductsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddQuickProductResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface RemoveQuickProductRequestData {
  product_id: number
}

export interface RemoveQuickProductRequest extends Partial<AxiosRequestConfig> {
  params: RemoveQuickProductRequestData
}

export interface RemoveQuickProductResponseData extends CommonResponseData {
  data: {}
}

export interface RemoveQuickProductResponse extends AxiosResponse {
  data: RemoveQuickProductResponseData
}

export function removeProduct(
  {
    params,
    url = `${defaultUrl}/sell/deleteQuickList/${params.product_id}`,
    method = "delete",
    ...config
  }: RemoveQuickProductRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<RemoveQuickProductResponse> {
  return axiosInstance({
    url,
    method,
    ...config,
  })
}

export interface SearchCustomerRequestData {
  search: string
}

export interface SearchCustomerRequest extends Partial<AxiosRequestConfig> {
  params: SearchCustomerRequestData
}

export interface CustomerDetail {
  id: number
  customercode: string
  User: {
    id: number
    full_name: string
  }
}

export interface SearchCustomerResponseData extends CommonResponseData {
  data: CustomerDetail[]
}

export interface SearchCustomerResponse extends AxiosResponse {
  data: SearchCustomerResponseData
}

export function searchCustomer(
  {
    params,
    url = `${defaultUrl}/sell/searchCustomer`,
    method = "post",
    ...config
  }: SearchCustomerRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<SearchCustomerResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddCustomerRequestdata {
  customer_name: string
  phone: string
  email: string
  customercode: string
}

export interface AddCustomerRequest extends Partial<AxiosRequestConfig> {
  params: AddCustomerRequestdata
}

export interface AddCustomerResponseData extends CommonResponseData {
  data: {}
}

export interface AddCustomerResponse extends AxiosResponse {
  data: AddCustomerResponseData
}

export function addCustomer(
  {
    params,
    url = `${defaultUrl}/sell/addCustomer`,
    method = "post",
    ...config
  }: AddCustomerRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddCustomerResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface TempOrderDetail {
  id: number
  branch_id: number
  customer_id: null
  product_variant_id: number
  quantity: number
  actual_price: number
  discount: number
  discount_price: number
  without_gst_price: string
  gst: number
  status: string
  park: string
  deletedAt: null
  createdAt: string
  updatedAt: string
  Product_variant: {
    id: number
    product_id: number
    branch_id: number
    weight_id: number
    package_id: number
    weight_no: string
    purchase_price: number
    price: number
    quantity: number
    temp_quantity: null
    max_order_qty: number
    limited_stock: number
    park_quantity: null
    discount_per: number
    without_gst_price: number
    discount_price: number
    discount_allow: null
    status: string
    qr_code: string
    IsPosMostLike: string
    deletedAt: null
    createdAt: string
    updatedAt: string
    Weight: {
      id: number
      vendor_id: number
      name: string
      status: string
      deletedAt: null
      createdAt: string
      updatedAt: string
    }
    Product: {
      id: number
      branch_id: number
      category_id: number
      subcategory_id: number
      brand_id: number
      supplier_id: null
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
      deletedAt: null
    }
  }
}

export interface CartDetailData {
  id: number
  branch_id: number
  customer_id: number
  register_id: number
  payable_amount: string
  total_saving: string
  total: string
  order_discount: null
  gst_amt: string
  order_no: string
  status: string
  deletedAt: null
  createdAt: string
  updatedAt: string
  Parked_order_details: Parked_order_details[]
  Customer: {
    id: number
    customercode: string
    User: {
      id: number
      full_name: string
    }
  }
}

export interface Parked_order_details {
  id: number
  parked_order_id: number
  product_variant_id: number
  quantity: number
  actual_price: string
  actual_discount: null
  discount: string
  discount_price: string
  without_gst_price: string
  gst: number
  deletedAt: null
  createdAt: string
  updatedAt: string
  Product_variant: {
    id: number
    product_id: number
    branch_id: number
    weight_id: number
    package_id: number
    weight_no: string
    purchase_price: number
    price: number
    quantity: number
    temp_quantity: null
    max_order_qty: number
    limited_stock: number
    park_quantity: null
    discount_per: number
    without_gst_price: number
    discount_price: number
    discount_allow: null
    status: string
    qr_code: string
    IsPosMostLike: string
    deletedAt: null
    createdAt: string
    updatedAt: string
    Weight: {
      id: number
      vendor_id: number
      name: string
      status: string
      deletedAt: null
      createdAt: string
      updatedAt: string
    }
    Product: {
      id: number
      branch_id: number
      category_id: number
      subcategory_id: number
      brand_id: number
      supplier_id: null
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
      deletedAt: null
    }
  }
}
export interface TempOrderData {
  tempOrder?: TempOrderDetail[]
  totalSavings: number
  sub_total: number
  gst?: number
  cartDetail?: CartDetailData
  produtc_gst?: number
}

export interface TempOrderRequestData {
  parked_id?: string
}
export interface TempOrderRequest extends Partial<AxiosRequestConfig> {
  params: TempOrderRequestData
}
export interface TempOrderResponseData extends CommonResponseData {
  data: TempOrderData
}

export interface TempOrderResponse extends AxiosResponse {
  data: TempOrderResponseData
}

export function getTempOrder(
  {
    params,
    url = `${defaultUrl}/sell/tempOrderList`,
    method = "post",
    ...config
  }: TempOrderRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<TempOrderResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateTempProductRequestData {
  qty: number
  orderTempId?: string
  parked_id?: string
  parkedDetailId?: number
}

export interface UpdateTempProductRequest extends Partial<AxiosRequestConfig> {
  params: UpdateTempProductRequestData
}

export interface UpdateTempProductResponseData extends CommonResponseData {
  data: TempOrderData
}

export interface UpdateTempProductResponse extends AxiosResponse {
  data: UpdateTempProductResponseData
}

export function updateQty(
  {
    params,
    url = `${defaultUrl}/sell/addUpdatequntity`,
    method = "post",
    ...config
  }: UpdateTempProductRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateTempProductResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface UpdateProductDiscountRequestData {
  discount: number
  orderTempId?: string
  parkedDetailId?: number
  parked_id?: string
}

export interface UpdateProductDiscountRequest
  extends Partial<AxiosRequestConfig> {
  params: UpdateProductDiscountRequestData
}

export interface UpdateProductDiscountResponseData extends CommonResponseData {
  data: TempOrderData
}

export interface UpdateProductDiscountResponse extends AxiosResponse {
  data: UpdateProductDiscountResponseData
}

export function updateProductDiscount(
  {
    params,
    url = `${defaultUrl}/sell/updateDicount`,
    method = "post",
    ...config
  }: UpdateProductDiscountRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<UpdateProductDiscountResponse> {
  return axiosInstance({
    data: params,
    method,
    url,
    ...config,
  })
}

export interface AddTempProductRequestData {
  variant_id: number
  parked_id?: string
}

export interface AddTempProductRequest extends Partial<AxiosRequestConfig> {
  params: AddTempProductRequestData
}

export interface AddTempProductResponseData extends CommonResponseData {
  data: TempOrderData
}

export interface AddTempProductResponse extends AxiosResponse {
  data: AddTempProductResponseData
}

export function addTempProduct(
  {
    params,
    url = `${defaultUrl}/sell/addTempOrder`,
    method = "post",
    ...config
  }: AddTempProductRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddTempProductResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface RemoveTempProductRequestData {
  orderTempId?: number
  parkedDetailId?: number
  parked_id?: string
}

export interface RemoveTempProductRequest extends Partial<AxiosRequestConfig> {
  params: RemoveTempProductRequestData
}

export interface RemoveTempProductResponseData extends CommonResponseData {
  data: TempOrderData
}

export interface RemoveTempProductResponse extends AxiosResponse {
  data: RemoveTempProductResponseData
}

export function removeTempProduct(
  {
    params,
    url = `${defaultUrl}/sell/deleteCartVal`,
    method = "post",
    ...config
  }: RemoveTempProductRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<RemoveTempProductResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface GetCartBasedDiscountRequestData {
  sub_total: number
}

export interface GetCartBasedDiscountRequest
  extends Partial<AxiosRequestConfig> {
  params: GetCartBasedDiscountRequestData
}

export interface GetCartBasedDiscountData {
  shopping_based_discountPercentage: number
  shopping_based_discount: string
}

export interface GetCartBasedDiscountResponseData extends CommonResponseData {
  data: GetCartBasedDiscountData
}

export interface GetCartBasedDiscountResponse extends AxiosResponse {
  data: GetCartBasedDiscountResponseData
}

export function getCartBasedDiscount(
  {
    params,
    url = `${defaultUrl}/sell/getdiscount`,
    method = "post",
    ...config
  }: GetCartBasedDiscountRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetCartBasedDiscountResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface ParkedSellDetail {
  id: number
  branch_id: number
  customer_id: number
  register_id: number
  payable_amount: string
  total_saving: string
  total: string
  order_discount: null
  gst_amt: string
  order_no: string
  status: string
  deletedAt: null
  createdAt: string
  updatedAt: string
  Customer: {
    id: number
    customercode: string
    User: {
      id: number
      full_name: string
    }
  }
  Branch: {
    id: number
    name: string
  }
}

export interface GetParkedSellListResponseData extends CommonResponseData {
  data: ParkedSellDetail[]
}

export interface GetParkedSellListResponse extends AxiosResponse {
  data: GetParkedSellListResponseData
}

export function getParkedSellList(
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<GetParkedSellListResponse> {
  return axiosInstance({
    url: `${defaultUrl}/sell/getParkedOrder`,
    method: "get",
  })
}

export interface CheckPromocodeRequestData {
  promocode: string
  total_price: string
}

export interface CheckPromocodeRequest extends Partial<AxiosRequestConfig> {
  params: CheckPromocodeRequestData
}

export interface CheckPromocodeDetail {
  calculateVal: number
  promocodePer: number
  orderAmount: number
}

export interface CheckPromocodeResponseData extends CommonResponseData {
  data: CheckPromocodeDetail
}

export interface CheckPromocodeResponse extends AxiosResponse {
  data: CheckPromocodeResponseData
}

export function checkPromoCode(
  {
    params,
    url = `${defaultUrl}/sell/checkPromocode`,
    method = "post",
    ...config
  }: CheckPromocodeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<CheckPromocodeResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddOrderRequestData {
  customer_id?: number
  register_id: number
  payable_amount: string
  total_saving: string
  total: string
  sub_total: string
  shopping_based_discount: string
  promocode: string
  promocode_applied: boolean
  payment_type: string
  parked_id: number
  product_variant_id: number[]
}

export interface AddOrderRequest extends Partial<AxiosRequestConfig> {
  params: AddOrderRequestData
}

export interface AddOrderResponseData extends CommonResponseData {
  data: {}
}

export interface AddOrderResponse extends AxiosResponse {
  data: AddOrderResponseData
}

export function addOrder(
  {
    params,
    url = `${defaultUrl}/sell/addOrder`,
    method = "post",
    ...config
  }: AddOrderRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddOrderResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface AddParkedOrderRequestData {
  customer_id?: number
  register_id: number
  payable_amount: string
  total_saving: string
  sub_total: string
  park_gst_amt: string
  order_temp_id: number[]
}

export interface AddParkedOrderRequest extends Partial<AxiosRequestConfig> {
  params: AddParkedOrderRequestData
}

export interface AddParkedOrderResponseData extends CommonResponseData {
  data: {}
}

export interface AddParkedOrderResponse extends AxiosResponse {
  data: AddParkedOrderResponseData
}

export function addParkedOrder(
  {
    params,
    url = `${defaultUrl}/sell/addParkOrder`,
    method = "post",
    ...config
  }: AddParkedOrderRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<AddParkedOrderResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface DiscardSellRequestData {
  parked_id?: string
}

export interface DiscardSellRequest extends Partial<AxiosRequestConfig> {
  params: DiscardSellRequestData
}

export interface DiscardSellResponseData extends CommonResponseData {
  data: {}
}

export interface DiscardSellResponse extends AxiosResponse {
  data: DiscardSellResponseData
}

export function discardSell(
  {
    params,
    url = `${defaultUrl}/sell/deleteOrder`,
    method = "post",
    ...config
  }: DiscardSellRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
): Promise<DiscardSellResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  })
}

export interface RegisterDetail {
  id: number
  branch_id: number
  transaction: number
  cash_amount_expected: number
  counted: null
  difference: null
  credit_card_expected: null
  credit_card_counted: null
  credit_card_differences: null
  store_credit_expected: null
  store_credit_counted: null
  store_credit_differences: null
  open_note: string
  closure_note: null
  opening_time: string
  closing_time: null
  type: "1"
  deletedAt: null
  createdAt: string
  updatedAt: string
}
export interface GetRegisterResponseData extends CommonResponseData {
  data: {}
}
