import SelectField from "@/src/common/formfield/selectField"
import { GetAllCategory } from "@/src/service/admin/category"
import { newClientInstance } from "@/src/service/admin/newClient"
import { ErrorMessage, FieldArray, Form, Formik } from "formik"
import { useRouter } from "next/router"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import * as Yup from "yup"
import {
  AddSubCategoryForm,
  convertCategoryResponse,
} from "./subCategoryCommon"
import Button from "@/src/common/button"
import { AiOutlinePlus } from "react-icons/ai"
import TextFieldCommon from "@/src/common/formfield/textField"
import { FaXmark } from "react-icons/fa6"
import subCategory from "../property/subCategory.json"

const SubCategoryForm = () => {
  const router = useRouter()
  const [category, setCategory] = React.useState<GetAllCategory[]>([])

  const handleGetCategoryList = React.useCallback(async () => {
    try {
      const response = await newClientInstance.getAllCategory()
      if (response.data.success) {
        setCategory(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
      setTimeout(() => {
        router.push("/admin/sub-category")
      }, 2000)
    }
  }, [])

  React.useEffect(() => {
    handleGetCategoryList()
  }, [handleGetCategoryList])

  const validationSchema = Yup.object().shape({
    category_id: Yup.string().required(`${subCategory.category_id_error}`),
    subCategory: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required(`${subCategory.name_error}`),
      }),
    ),
  })

  const handleAddSubCategory = async (value: AddSubCategoryForm) => {
    try {
      const params = {
        category_id: value.category_id,
        name: value.subCategory.map((e) => e.name),
      }

      const response = await newClientInstance.addSubCategory({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/admin/sub-category")
        }, 2000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleCancel = () => {
    router.push("/admin/sub-category")
  }
  return (
    <>
      <Formik
        initialValues={{
          category_id: "",
          subCategory: [{ name: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values)
          handleAddSubCategory(values)
        }}
      >
        {({ values, errors, handleChange, setFieldValue, handleBlur }) => (
          <Form>
            <FieldArray name='subCategory'>
              {({ push, remove }) => (
                <div>
                  <div className='flex flex-row items-center gap-5'>
                    <div className='w-[70%] xl:w-[30%] lg:w-[40%] md:w-[40%] sm:w-[40%]'>
                      <SelectField
                        error={errors.category_id ? errors.category_id : null}
                        label={subCategory.category_id_label}
                        name='category_id'
                        onBlur={handleBlur}
                        onChange={(e: { target: { value: any } }) =>
                          setFieldValue("category_id", e.target.value)
                        }
                        option={[
                          {
                            label: `${subCategory.category_id_placeholder}`,
                            value: "",
                          },
                          ...convertCategoryResponse(category),
                        ]}
                        value={values.category_id}
                      />
                    </div>
                    <Button
                      type='button'
                      // intent={"blue"}
                      onClick={() => push({ name: "" })}
                      className='h-[45px] w-auto inline-flex items-center px-3 sm:px-6 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
                    >
                      <AiOutlinePlus className='text-[16px]' /> Add
                    </Button>
                  </div>
                  <div className='grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 mt-4 gap-x-5'>
                    {values.subCategory.map((_, index) => (
                      <div
                        key={index}
                        className='gap-x-4 gap-y-2 flex-wrap items-center sm:border-0 border-b border-bordercolor sm:pb-0 sm:mb-0 mb-3'
                      >
                        <div className='flex items-center gap-x-3 gap-y-3'>
                          <div className='w-[100%] sm:w-[80%]'>
                            <TextFieldCommon
                              id='name'
                              placeholder={subCategory.name_placeholder}
                              label={subCategory.name_label}
                              value={values.subCategory[index].name}
                              name={`subCategory[${index}].name`}
                              onChange={(e: { target: { value: any } }) =>
                                setFieldValue(
                                  `subCategory[${index}].name`,
                                  e.target.value,
                                )
                              }
                              onBlur={handleBlur}
                              variant='outlined'
                              error={null}
                              errorDisabel
                            />
                            <div className='min-h-[25px]'>
                              <ErrorMessage
                                name={`subCategory[${index}].name`}
                                component='span'
                                className='error  text-[red] text-sm'
                              />
                            </div>
                          </div>

                          {/* {index > 0 && ( */}
                          <Button
                            type='button'
                            onClick={() => remove(index)}
                            className='tax-remove-div-btn text-white'
                          >
                            <FaXmark />
                          </Button>
                        </div>
                        {/* )} */}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </FieldArray>

            <div className='flex justify-center sm:flex-row flex-col items-center gap-4 m-4'>
              <button
                onClick={handleCancel}
                type='button'
                className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
              >
                {/* {common.cancel_button_label} */}
                Cancel
              </button>

              <button
                type='submit'
                className='inline-flex items-center px-8 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
              >
                {/* {common.save_button_label} */}
                Add subCategory
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  )
}

export default SubCategoryForm
