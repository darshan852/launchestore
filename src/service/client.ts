import { HttpsAgent } from "agentkeepalive"
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"
import axiosRetry, { IAxiosRetryConfig } from "axios-retry"
import { LoginRequest, LoginResponse, login } from "./auth"
import { getLocalStorage } from "./localStorage"
import {
  AddStoreRequest,
  AddStoreResponse,
  GetStoreTypeDetailResponse,
  GetStoreTypeRequest,
  GetStoreTypeResponse,
  GetStoreWithOutPaginationResponse,
  StoreDetailRequest,
  UpdateStoreRequest,
  UpdateStoreResponse,
  addStore,
  getStoreDetail,
  getStoreList,
  getStoreTypeData,
  updateStoreType,
} from "./storeType"
import {
  AddThemeRequest,
  AddThemeResponse,
  DeleteThemeRequest,
  DeleteThemeResponse,
  GetThemeDetailResponse,
  GetThemeRequest,
  GetThemeResponse,
  GetThemeWithOutPaginationResponse,
  ThemeDetailRequest,
  UpdateThemeDetailRequest,
  UpdateThemeResponse,
  addTheme,
  deleteTheme,
  getAllTheme,
  getThemeDetail,
  getThemeList,
  updateTheme,
} from "./themeMain"
import {
  CreateVendorRequest,
  CreateVendorResponse,
  GetAllVendorListRequest,
  GetAllVendorListResponse,
  GetVendorDetailRequest,
  GetVendorDetailResponse,
  UpdateVendorResponse,
  UpdateVendorStatusRequest,
  UpdateVendorStatusResponse,
  UpdateVendoreRequest,
  createVendore,
  getAllVendor,
  getVendorDetail,
  updateVendor,
  updateVendorStatus,
} from "./vendore"
import {
  BranchDetailRequest,
  BranchDetailResponse,
  BranchFilterVendorResponse,
  GetBranchDetailRequest,
  GetBranchDetailResponse,
  UpdateBranchRequest,
  UpdateBranchResponse,
  UpdateBranchStatusRequest,
  UpdateBranchStatusResponse,
  branchDetail,
  getAllBranchList,
  getBranchVendorOption,
  updateBranch,
  updateBranchStatus,
} from "./branches"
import { UpdateAppRequest, UpdateAppResponse, updateApp } from "./updateApp"
import {
  GetConfigDetailRequest,
  GetConfigDetailResponse,
  GetConfigListRequest,
  GetConfigListResponse,
  UpdateConfigRequest,
  UpdateConfigResponse,
  getConfigDetail,
  getConfigList,
  updateConfig,
} from "./configuration"
import {
  AddFoodCategoryRequest,
  AddFoodCategoryResponse,
  GetFoodCategoryListResponse,
  addFoodCategory,
  getCategoryList,
} from "./foodCategory"
import {
  AddTaxRequest,
  AddTaxResponse,
  DeleteTaxRequest,
  DeleteTaxResponse,
  GetTaxDetailRequest,
  GetTaxDetailResponse,
  TaxListRequest,
  TaxListResponse,
  UpdateTaxRequest,
  UpdateTaxResponse,
  addTax,
  deleteTax,
  getTaxDetail,
  getTaxlist,
  updateTax,
} from "./tax"
import {
  AddTaxTypeRequest,
  AddTaxTypeResponse,
  DeleteTaxTypeRequest,
  DeleteTaxTypeResponse,
  GetTaxTypeDetailResponse,
  GetTaxTypeListRequest,
  GetTaxTypeListResponse,
  GetTaxtTypeDetailRequest,
  UpdateTaxTypeRequest,
  UpdateTaxTypeResponse,
  addTaxType,
  deleteTaxType,
  getTaxTypeDetail,
  getTaxTypeList,
  updateTaxType,
} from "./taxType"
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  changePassword,
  updateProfile,
} from "./profile"

export const defaultHttpsAgent = new HttpsAgent({ keepAlive: true })
export const defaultTimeout = 40000

export const defaultConfig: AxiosRequestConfig = {
  timeout: defaultTimeout,
  httpAgent: defaultHttpsAgent,

  headers: {
    app: "launch store",
  },
}

export const defaultAxiosInstance = axios.create(defaultConfig)
axiosRetry(defaultAxiosInstance)
defaultAxiosInstance.interceptors.request.use(
  (request: any) => {
    if (request?.data?.avoidClientSideAuth) {
      // For server side rendring because we can not have client token there.
      return {
        ...request,
        headers: {
          ...request.headers,
          app: "launch store",
        },
      }
    }

    const authToken = getLocalStorage("authToken")
    const branch_id = getLocalStorage("branch") || ""
    // const translatelang = getTranslateLg()
    console.log("API call to this url ::", request.url)

    if (authToken !== null) {
      return {
        ...request,
        headers: {
          ...request.headers,
          Authorization: authToken,
          // translatelang: translatelang,
          app: "launch store",
          branch_id: branch_id,
        },
      }
    }

    return {
      ...request,
      headers: {
        ...request.headers,
        app: "launch store",
        // translatelang: translatelang,/
      },
    }
  },
  (error: AxiosError) => Promise.reject(error),
)

defaultAxiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    return Promise.reject(error.response ? error.response.data : error)
  },
)

export type Config = {
  raxConfig?: IAxiosRetryConfig
} & AxiosRequestConfig

export interface ClientOptions {
  axiosInstance?: AxiosInstance
  config?: Config
}

export class Client {
  private axiosInstance: AxiosInstance

  constructor({ axiosInstance, config }: ClientOptions = {}) {
    if (axiosInstance && config) {
      throw new Error("Provide one of axiosInstance or config.")
    }
    if (axiosInstance) {
      this.axiosInstance = axiosInstance
      this.axiosInstance.defaults.headers = {
        ...defaultConfig.headers?.common,
        ...this.axiosInstance.defaults.headers,
      }
    } else if (config) {
      config = { ...defaultConfig, ...config }
      config.headers = { ...defaultConfig.headers, ...(config.headers || {}) }
      this.axiosInstance = axios.create(config)
      axiosRetry(this.axiosInstance)
    } else {
      this.axiosInstance = defaultAxiosInstance
    }
  }
  //-------------------add api call--------------
  login(request: LoginRequest): Promise<LoginResponse> {
    return login(request, this.axiosInstance)
  }

  //------------store---------------------------
  addStore(request: AddStoreRequest): Promise<AddStoreResponse> {
    return addStore(request, this.axiosInstance)
  }
  getStoreTypeData(
    request: GetStoreTypeRequest,
  ): Promise<GetStoreTypeResponse> {
    return getStoreTypeData(request, this.axiosInstance)
  }
  updateStoreType(request: UpdateStoreRequest): Promise<UpdateStoreResponse> {
    return updateStoreType(request, this.axiosInstance)
  }

  getStoreDetail(
    request: StoreDetailRequest,
  ): Promise<GetStoreTypeDetailResponse> {
    return getStoreDetail(request, this.axiosInstance)
  }
  getStoreList(): Promise<GetStoreWithOutPaginationResponse> {
    return getStoreList(this.axiosInstance)
  }

  //-----------------theme------------------------
  getAllTheme(request: GetThemeRequest): Promise<GetThemeResponse> {
    return getAllTheme(request, this.axiosInstance)
  }

  addTheme(request: AddThemeRequest): Promise<AddThemeResponse> {
    return addTheme(request, this.axiosInstance)
  }
  getThemeDetail(request: ThemeDetailRequest): Promise<GetThemeDetailResponse> {
    return getThemeDetail(request, this.axiosInstance)
  }
  updateTheme(request: UpdateThemeDetailRequest): Promise<UpdateThemeResponse> {
    return updateTheme(request, this.axiosInstance)
  }
  deleteTheme(request: DeleteThemeRequest): Promise<DeleteThemeResponse> {
    return deleteTheme(request, this.axiosInstance)
  }
  getThemeList(): Promise<GetThemeWithOutPaginationResponse> {
    return getThemeList(this.axiosInstance)
  }

  //-----------------------------------vendor----------------------------------------
  getAllVendor(
    request: GetAllVendorListRequest,
  ): Promise<GetAllVendorListResponse> {
    return getAllVendor(request, this.axiosInstance)
  }
  createVendore(request: CreateVendorRequest): Promise<CreateVendorResponse> {
    return createVendore(request, this.axiosInstance)
  }
  getVendorDetail(
    request: GetVendorDetailRequest,
  ): Promise<GetVendorDetailResponse> {
    return getVendorDetail(request, this.axiosInstance)
  }
  updateVendor(request: UpdateVendoreRequest): Promise<UpdateVendorResponse> {
    return updateVendor(request, this.axiosInstance)
  }
  updateVendorStatus(
    request: UpdateVendorStatusRequest,
  ): Promise<UpdateVendorStatusResponse> {
    return updateVendorStatus(request, this.axiosInstance)
  }

  //--------------------------------branches--------------------------------------------
  getAllBranchList(
    request: GetBranchDetailRequest,
  ): Promise<GetBranchDetailResponse> {
    return getAllBranchList(request, this.axiosInstance)
  }

  getBranchVendorOption(): Promise<BranchFilterVendorResponse> {
    return getBranchVendorOption(this.axiosInstance)
  }
  branchDetail(request: BranchDetailRequest): Promise<BranchDetailResponse> {
    return branchDetail(request, this.axiosInstance)
  }
  updateBranch(request: UpdateBranchRequest): Promise<UpdateBranchResponse> {
    return updateBranch(request, this.axiosInstance)
  }
  updateBranchStatus(
    request: UpdateBranchStatusRequest,
  ): Promise<UpdateBranchStatusResponse> {
    return updateBranchStatus(request, this.axiosInstance)
  }

  //----------------update-app-----------------------------------
  updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    return updateApp(request, this.axiosInstance)
  }

  //------------------configuration-------------------------------------------------------------
  getConfigList(request: GetConfigListRequest): Promise<GetConfigListResponse> {
    return getConfigList(request, this.axiosInstance)
  }
  getConfigDetail(
    request: GetConfigDetailRequest,
  ): Promise<GetConfigDetailResponse> {
    return getConfigDetail(request, this.axiosInstance)
  }
  updateConfig(request: UpdateConfigRequest): Promise<UpdateConfigResponse> {
    return updateConfig(request, this.axiosInstance)
  }

  //--------------------------food-category------------------------------
  getCategoryList(): Promise<GetFoodCategoryListResponse> {
    return getCategoryList(this.axiosInstance)
  }
  addFoodCategory(
    request: AddFoodCategoryRequest,
  ): Promise<AddFoodCategoryResponse> {
    return addFoodCategory(request, this.axiosInstance)
  }

  //-------------------------------------tax----------------------------------------------
  getTaxlist(request: TaxListRequest): Promise<TaxListResponse> {
    return getTaxlist(request, this.axiosInstance)
  }
  getTaxDetail(request: GetTaxDetailRequest): Promise<GetTaxDetailResponse> {
    return getTaxDetail(request, this.axiosInstance)
  }
  addTax(request: AddTaxRequest): Promise<AddTaxResponse> {
    return addTax(request, this.axiosInstance)
  }
  updateTax(request: UpdateTaxRequest): Promise<UpdateTaxResponse> {
    return updateTax(request, this.axiosInstance)
  }
  deleteTax(request: DeleteTaxRequest): Promise<DeleteTaxResponse> {
    return deleteTax(request, this.axiosInstance)
  }
  //-----------------------------------tax type-----------------------------------------------
  getTaxTypeList(
    request: GetTaxTypeListRequest,
  ): Promise<GetTaxTypeListResponse> {
    return getTaxTypeList(request, this.axiosInstance)
  }
  addTaxType(request: AddTaxTypeRequest): Promise<AddTaxTypeResponse> {
    return addTaxType(request, this.axiosInstance)
  }
  getTaxTypeDetail(
    request: GetTaxtTypeDetailRequest,
  ): Promise<GetTaxTypeDetailResponse> {
    return getTaxTypeDetail(request, this.axiosInstance)
  }
  updateTaxType(request: UpdateTaxTypeRequest): Promise<UpdateTaxTypeResponse> {
    return updateTaxType(request, this.axiosInstance)
  }
  deleteTaxType(request: DeleteTaxTypeRequest): Promise<DeleteTaxTypeResponse> {
    return deleteTaxType(request, this.axiosInstance)
  }

  //-------------------------------change-password---------------------------------------
  changePassword(
    request: ChangePasswordRequest,
  ): Promise<ChangePasswordResponse> {
    return changePassword(request, this.axiosInstance)
  }

  //----------------------------------update profile----------------------------------------
  updateProfile(request: UpdateProfileRequest): Promise<UpdateProfileResponse> {
    return updateProfile(request, this.axiosInstance)
  }
}

export const apiClient = new Client()
