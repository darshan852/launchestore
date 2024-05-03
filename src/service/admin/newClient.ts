import { AxiosInstance } from "axios"
import { defaultAxiosInstance } from "../client"
import {
  AddCategoryRequest,
  AddCategoryResponse,
  CategoryDeleteRequest,
  CategoryDeleteResponse,
  CategoryListRequest,
  CategoryListResponse,
  GetAllCategoryResponse,
  GetCategoryDetailResponse,
  GetCategoryRequest,
  UpdateCategoryRequest,
  UpdateCategoryResponse,
  addCategory,
  deleteCategory,
  getAllCategory,
  getCategoryDetail,
  getCategoryList,
  updateCategory,
} from "./category"
import {
  AddSubCategoryRequest,
  AddSubCategoryResponse,
  GetAllSubCategoryRequest,
  GetAllSubCategoryResponse,
  GetSubCategoryDetailResponse,
  GetSubCategoryListRequest,
  GetSubCategoryRequest,
  GetSubCategoryResponse,
  SubCategoryDeleteRequest,
  SubCategoryDeleteResponse,
  UpdateSubCategoryResponse,
  UpdateSubcategoryRequest,
  addSubCategory,
  deleteSubCategory,
  getAllSubCategory,
  getSubCategoryDetail,
  getSubCategoryList,
  updateSubcategory,
} from "./subCategory"
import {
  AddBrandRequest,
  AddBrandResponse,
  BrandDeleteRequest,
  BrandDeleteResponse,
  BrandListRequest,
  BrandListResponse,
  GetAllBrandList,
  GetAllBrandRequest,
  GetAllBrandResponse,
  GetBrandDetailRequest,
  GetBrandResponse,
  UpdateBrandRequest,
  UpdateBrandResponse,
  addBrand,
  deleteBrand,
  getBrandDetail,
  getBrandList,
  updateBrand,
} from "./brand"
import {
  AddProductRequest,
  AddProductResponse,
  GetProductDetailRequest,
  GetProductDetailResponse,
  GetProductListRequest,
  GetProductResponse,
  ProductsDeleteRequest,
  ProductsDeleteResponse,
  UpdateProductRequest,
  UpdateProductResponse,
  UpdateProductStatusRequest,
  UpdateProductStatusResponse,
  addProduct,
  deleteProducts,
  getProductDetail,
  getProductList,
  updateProduct,
  updateProductStatus,
} from "./product"
import {
  AddProductVariantRequest,
  AddProductVariantResponse,
  ChangeImageOrderRequest,
  ChangeImageOrderRespose,
  GetImageIndexRequest,
  GetProductVariantDetailRequest,
  GetVariantDetailResponse,
  GetimageIndexResponse,
  ProductVariantListRequest,
  ProductVariantListResponse,
  RemoveVariantImageRequest,
  RemoveVariantImageResponse,
  addProductVariant,
  changeImageOrder,
  deleteProductVariantRequest,
  deleteProductVariantResponse,
  deleteVariant,
  getProductImage,
  getProductVariantList,
  getVariantDetail,
  removeImage,
  updateVariant,
  updateVariantRequest,
  updateVariantResponse,
} from "./productVariant"
import {
  GetPackageListResponse,
  GetUnitListResponse,
  getPackageList,
  getUnitList,
} from "./productSetting"
import {
  AddDeliveryStaffRequest,
  AddDeliveryStaffResponse,
  GetDeliveryStaffDetailRequest,
  GetDeliveryStaffDetailResponse,
  GetDeliveryStaffListRequest,
  GetDeliveryStaffResponse,
  UpdateDeliveryStaffRequest,
  UpdateDeliveryStaffResponse,
  UpdateDeliveryStaffStatusRequest,
  UpdateDeliveryStaffStatusResponse,
  addDeliveryStaff,
  getDeliveryStaffDetail,
  getDeliveryStaffList,
  updateDeliveryStaff,
  updateDeliveryStaffStatus,
} from "./deliveryStaff"
import {
  AddPackagingStaffRequest,
  AddPackagingStaffResponse,
  GetPackageStaffDetailRequest,
  GetPackageStaffDetailResponse,
  GetPackagingStaffListRequest,
  GetPackagingStaffResponse,
  UpdateStaffRequest,
  UpdateStaffResponse,
  UpdateStaffStatusRequest,
  UpdateStaffStatusResponse,
  addPackagingStaff,
  getPackageStaffDetail,
  getPackagingStaffList,
  updateStaff,
  updateStaffStatus,
} from "./packagingStaff"
import {
  AddCustomerRequest,
  AddCustomerResponse,
  AddOrderRequest,
  AddOrderResponse,
  AddParkedOrderRequest,
  AddParkedOrderResponse,
  AddQuickProductResponse,
  AddQuickProductsRequest,
  AddTempProductRequest,
  AddTempProductResponse,
  CheckPromocodeRequest,
  CheckPromocodeResponse,
  DiscardSellRequest,
  DiscardSellResponse,
  GetCartBasedDiscountRequest,
  GetCartBasedDiscountResponse,
  GetParkedSellListResponse,
  QuickProductListResponse,
  RemoveQuickProductRequest,
  RemoveQuickProductResponse,
  RemoveTempProductRequest,
  RemoveTempProductResponse,
  SearchCustomerRequest,
  SearchCustomerResponse,
  SearchProductResponse,
  SellSearchProductRequest,
  TempOrderRequest,
  TempOrderResponse,
  UpdateProductDiscountRequest,
  UpdateProductDiscountResponse,
  UpdateTempProductRequest,
  UpdateTempProductResponse,
  addCustomer,
  addOrder,
  addParkedOrder,
  addQuickProducts,
  addTempProduct,
  checkPromoCode,
  discardSell,
  getCartBasedDiscount,
  getParkedSellList,
  getTempOrder,
  quickProductList,
  removeProduct,
  removeTempProduct,
  searchCustomer,
  searchProduct,
  updateProductDiscount,
  updateQty,
} from "./sellDevelopment"

export class NewClient {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }
  //---------------------------------------category--------------------------------------------
  getCategoryList(request: CategoryListRequest): Promise<CategoryListResponse> {
    return getCategoryList(request, this.axiosInstance)
  }

  addCategory(request: AddCategoryRequest): Promise<AddCategoryResponse> {
    return addCategory(request, this.axiosInstance)
  }
  getCategoryDetail(
    request: GetCategoryRequest,
  ): Promise<GetCategoryDetailResponse> {
    return getCategoryDetail(request, this.axiosInstance)
  }
  updateCategory(
    request: UpdateCategoryRequest,
  ): Promise<UpdateCategoryResponse> {
    return updateCategory(request, this.axiosInstance)
  }
  deleteCategory(
    request: CategoryDeleteRequest,
  ): Promise<CategoryDeleteResponse> {
    return deleteCategory(request, this.axiosInstance)
  }

  //---------------------------------sub category-----------------------------------------
  getSubCategoryList(
    request: GetSubCategoryListRequest,
  ): Promise<GetSubCategoryResponse> {
    return getSubCategoryList(request, this.axiosInstance)
  }
  getAllCategory(): Promise<GetAllCategoryResponse> {
    return getAllCategory(this.axiosInstance)
  }
  addSubCategory(
    request: AddSubCategoryRequest,
  ): Promise<AddSubCategoryResponse> {
    return addSubCategory(request, this.axiosInstance)
  }
  getSubCategoryDetail(
    request: GetSubCategoryRequest,
  ): Promise<GetSubCategoryDetailResponse> {
    return getSubCategoryDetail(request, this.axiosInstance)
  }
  updateSubcategory(
    request: UpdateSubcategoryRequest,
  ): Promise<UpdateSubCategoryResponse> {
    return updateSubcategory(request, this.axiosInstance)
  }
  deleteSubCategory(
    request: SubCategoryDeleteRequest,
  ): Promise<SubCategoryDeleteResponse> {
    return deleteSubCategory(request, this.axiosInstance)
  }
  getAllSubCategory(
    request: GetAllSubCategoryRequest,
  ): Promise<GetAllSubCategoryResponse> {
    return getAllSubCategory(request, this.axiosInstance)
  }

  //------------------------------------------------Brand-------------------------------------------
  getBrandList(request: BrandListRequest): Promise<BrandListResponse> {
    return getBrandList(request, this.axiosInstance)
  }
  addBrand(request: AddBrandRequest): Promise<AddBrandResponse> {
    return addBrand(request, this.axiosInstance)
  }
  getBrandDetail(request: GetBrandDetailRequest): Promise<GetBrandResponse> {
    return getBrandDetail(request, this.axiosInstance)
  }
  updateBrand(request: UpdateBrandRequest): Promise<UpdateBrandResponse> {
    return updateBrand(request, this.axiosInstance)
  }
  deleteBrand(request: BrandDeleteRequest): Promise<BrandDeleteResponse> {
    return deleteBrand(request, this.axiosInstance)
  }
  GetAllBrandList(request: GetAllBrandRequest): Promise<GetAllBrandResponse> {
    return GetAllBrandList(request, this.axiosInstance)
  }

  //------------------------------------------------------Product---------------------------------------
  getProductList(request: GetProductListRequest): Promise<GetProductResponse> {
    return getProductList(request, this.axiosInstance)
  }
  addProduct(request: AddProductRequest): Promise<AddProductResponse> {
    return addProduct(request, this.axiosInstance)
  }
  getProductDetail(
    request: GetProductDetailRequest,
  ): Promise<GetProductDetailResponse> {
    return getProductDetail(request, this.axiosInstance)
  }
  updateProduct(request: UpdateProductRequest): Promise<UpdateProductResponse> {
    return updateProduct(request, this.axiosInstance)
  }
  updateProductStatus(
    request: UpdateProductStatusRequest,
  ): Promise<UpdateProductStatusResponse> {
    return updateProductStatus(request, this.axiosInstance)
  }
  deleteProducts(
    request: ProductsDeleteRequest,
  ): Promise<ProductsDeleteResponse> {
    return deleteProducts(request, this.axiosInstance)
  }

  //---------------------------------------productVariant-----------------------------------------------
  getProductVariantList(
    request: ProductVariantListRequest,
  ): Promise<ProductVariantListResponse> {
    return getProductVariantList(request, this.axiosInstance)
  }
  addProductVariant(
    request: AddProductVariantRequest,
  ): Promise<AddProductVariantResponse> {
    return addProductVariant(request, this.axiosInstance)
  }
  getVariantDetail(
    request: GetProductVariantDetailRequest,
  ): Promise<GetVariantDetailResponse> {
    return getVariantDetail(request, this.axiosInstance)
  }
  removeImage(
    request: RemoveVariantImageRequest,
  ): Promise<RemoveVariantImageResponse> {
    return removeImage(request, this.axiosInstance)
  }
  updateVariant(request: updateVariantRequest): Promise<updateVariantResponse> {
    return updateVariant(request, this.axiosInstance)
  }
  getProductImage(
    request: GetImageIndexRequest,
  ): Promise<GetimageIndexResponse> {
    return getProductImage(request, this.axiosInstance)
  }
  changeImageOrder(
    request: ChangeImageOrderRequest,
  ): Promise<ChangeImageOrderRespose> {
    return changeImageOrder(request, this.axiosInstance)
  }

  //----------------------product setting---------------------------------------
  GetUnitListResponse(): Promise<GetUnitListResponse> {
    return getUnitList(this.axiosInstance)
  }
  getPackageList(): Promise<GetPackageListResponse> {
    return getPackageList(this.axiosInstance)
  }
  deleteVariant(
    request: deleteProductVariantRequest,
  ): Promise<deleteProductVariantResponse> {
    return deleteVariant(request, this.axiosInstance)
  }

  //-------------------------------------------delivery staff-----------------------------------
  getDeliveryStaffList(
    request: GetDeliveryStaffListRequest,
  ): Promise<GetDeliveryStaffResponse> {
    return getDeliveryStaffList(request, this.axiosInstance)
  }

  addDeliveryStaff(
    request: AddDeliveryStaffRequest,
  ): Promise<AddDeliveryStaffResponse> {
    return addDeliveryStaff(request, this.axiosInstance)
  }
  getDeliveryStaffDetail(
    request: GetDeliveryStaffDetailRequest,
  ): Promise<GetDeliveryStaffDetailResponse> {
    return getDeliveryStaffDetail(request, this.axiosInstance)
  }
  updateDeliveryStaff(
    request: UpdateDeliveryStaffRequest,
  ): Promise<UpdateDeliveryStaffResponse> {
    return updateDeliveryStaff(request, this.axiosInstance)
  }
  updateDeliveryStaffStatus(
    request: UpdateDeliveryStaffStatusRequest,
  ): Promise<UpdateDeliveryStaffStatusResponse> {
    return updateDeliveryStaffStatus(request, this.axiosInstance)
  }
  //--------------------------packaging staff-----------------------------------
  getPackagingStaffList(
    request: GetPackagingStaffListRequest,
  ): Promise<GetPackagingStaffResponse> {
    return getPackagingStaffList(request, this.axiosInstance)
  }

  addPackagingStaff(
    request: AddPackagingStaffRequest,
  ): Promise<AddPackagingStaffResponse> {
    return addPackagingStaff(request, this.axiosInstance)
  }
  getPackageStaffDetail(
    request: GetPackageStaffDetailRequest,
  ): Promise<GetPackageStaffDetailResponse> {
    return getPackageStaffDetail(request, this.axiosInstance)
  }
  updateStaff(request: UpdateStaffRequest): Promise<UpdateStaffResponse> {
    return updateStaff(request, this.axiosInstance)
  }
  updateStaffStatus(
    request: UpdateStaffStatusRequest,
  ): Promise<UpdateStaffStatusResponse> {
    return updateStaffStatus(request, this.axiosInstance)
  }

  //---------------------sell---------------------------------------------------------
  searchProduct(
    request: SellSearchProductRequest,
  ): Promise<SearchProductResponse> {
    return searchProduct(request, this.axiosInstance)
  }
  quickProductList(): Promise<QuickProductListResponse> {
    return quickProductList(this.axiosInstance)
  }
  addQuickProducts(
    request: AddQuickProductsRequest,
  ): Promise<AddQuickProductResponse> {
    return addQuickProducts(request, this.axiosInstance)
  }
  removeProduct(
    request: RemoveQuickProductRequest,
  ): Promise<RemoveQuickProductResponse> {
    return removeProduct(request, this.axiosInstance)
  }
  searchCustomer(
    request: SearchCustomerRequest,
  ): Promise<SearchCustomerResponse> {
    return searchCustomer(request, this.axiosInstance)
  }
  addCustomer(request: AddCustomerRequest): Promise<AddCustomerResponse> {
    return addCustomer(request, this.axiosInstance)
  }
  getTempOrder(request: TempOrderRequest): Promise<TempOrderResponse> {
    return getTempOrder(request, this.axiosInstance)
  }
  updateQty(
    request: UpdateTempProductRequest,
  ): Promise<UpdateTempProductResponse> {
    return updateQty(request, this.axiosInstance)
  }
  updateProductDiscount(
    request: UpdateProductDiscountRequest,
  ): Promise<UpdateProductDiscountResponse> {
    return updateProductDiscount(request, this.axiosInstance)
  }
  addTempProduct(
    request: AddTempProductRequest,
  ): Promise<AddTempProductResponse> {
    return addTempProduct(request, this.axiosInstance)
  }
  removeTempProduct(
    request: RemoveTempProductRequest,
  ): Promise<RemoveTempProductResponse> {
    return removeTempProduct(request, this.axiosInstance)
  }
  getCartBasedDiscount(
    request: GetCartBasedDiscountRequest,
  ): Promise<GetCartBasedDiscountResponse> {
    return getCartBasedDiscount(request, this.axiosInstance)
  }
  getParkedSellList(): Promise<GetParkedSellListResponse> {
    return getParkedSellList(this.axiosInstance)
  }
  checkPromoCode(
    request: CheckPromocodeRequest,
  ): Promise<CheckPromocodeResponse> {
    return checkPromoCode(request, this.axiosInstance)
  }
  addOrder(request: AddOrderRequest): Promise<AddOrderResponse> {
    return addOrder(request, this.axiosInstance)
  }
  addParkedOrder(
    request: AddParkedOrderRequest,
  ): Promise<AddParkedOrderResponse> {
    return addParkedOrder(request, this.axiosInstance)
  }
  discardSell(request: DiscardSellRequest): Promise<DiscardSellResponse> {
    return discardSell(request, this.axiosInstance)
  }
}

export const newClientInstance = new NewClient(defaultAxiosInstance)
