import Button from "@/src/common/button"
import SelectField from "@/src/common/formfield/selectField"
import TextFieldCommon from "@/src/common/formfield/textField"
import { ErrorMessage, FieldArray, Form, Formik } from "formik"
import { useRouter } from "next/router"
import React from "react"
import * as Yup from "yup"
import {
  TaxListDetail,
  TaxTypeFormFields,
  convertTaxlistOption,
} from "../taxCommon"
import { ToastContainer, toast } from "react-toastify"
import { apiClient } from "@/src/service/client"
import common from "../../property/common.json"
import { AiOutlinePlus } from "react-icons/ai"
import { FaXmark } from "react-icons/fa6"

const TaxTypeForm = () => {
  const router = useRouter()
  const [taxlist, setTaxList] = React.useState<TaxListDetail[]>([])

  const handleGetTaxList = React.useCallback(async () => {
    try {
      const params = {
        search: "",
        page: 1,
        sorting: "DESC",
        limit: 50,
      }
      const response = await apiClient.getTaxlist({ params: params })
      if (response.data.success) {
        setTaxList(response.data.data)
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }, [])

  React.useEffect(() => {
    handleGetTaxList()
  }, [handleGetTaxList])

  const validationSchema = Yup.object().shape({
    selectTax: Yup.string().required(`${common.selectTax_error}`),
    taxes: Yup.array().of(
      Yup.object().shape({
        taxType: Yup.string().required(`${common.tax_type_error}`),
        percentage: Yup.number().required(`${common.tax_per_error}`),
      }),
    ),
  })
  const handleCancel = (e: any) => {
    router.push("/super_admin/tax/tax_type")
  }

  const handleNumber = (value: string) => {
    return value.replace(/[^0-9.]/g, "")
  }

  const handleAddTaxType = async (value: TaxTypeFormFields) => {
    try {
      const params = {
        tax_id: value.selectTax,
        tax_type: value.taxes.map((e) => e.taxType),
        tax_per: value.taxes.map((e) => e.percentage),
      }
      const response = await apiClient.addTaxType({ params: params })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/super_admin/tax/tax_type")
        }, 1000)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }
  return (
    <>
      <Formik
        initialValues={{
          selectTax: "",
          taxes: [{ taxType: "", percentage: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values)
          handleAddTaxType(values)
        }}
      >
        {({ values, errors, handleChange, setFieldValue, handleBlur }) => (
          <Form>
            <FieldArray name='taxes'>
              {({ push, remove }) => (
                <div>
                  <div className='flex flex-row items-center gap-5'>
                    <div className='w-[70%] lg:w-[30%] md:w-[40%] sm:w-[40%]'>
                      <SelectField
                        error={errors.selectTax ? errors.selectTax : null}
                        label={common.selectTax_label}
                        name='selectTax'
                        onBlur={handleBlur}
                        onChange={(e: { target: { value: any } }) =>
                          setFieldValue("selectTax", e.target.value)
                        }
                        option={[
                          {
                            label: `${common.selectTax_placeholder}`,
                            value: "",
                          },
                          ...convertTaxlistOption(taxlist),
                        ]}
                        value={values.selectTax}
                      />
                    </div>
                    <Button
                      type='button'
                      // intent={"blue"}
                      onClick={() => push({ taxType: "", percentage: "" })}
                      className='h-[45px] w-auto inline-flex items-center px-3 sm:px-6 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
                    >
                      <AiOutlinePlus className='text-[16px]' /> Add
                    </Button>
                  </div>
                  {values.taxes.map((_, index) => (
                    <div
                      key={index}
                      className='flex gap-x-4 gap-y-2 flex-wrap items-center mt-4 sm:border-0 border-b border-bordercolor sm:pb-0'
                    >
                      <div className='w-[100%] sm:w-[40%]'>
                        <TextFieldCommon
                          id='taxType'
                          placeholder={common.tax_type_placeholder}
                          label={common.tax_type_label}
                          value={values.taxes[index].taxType}
                          name={`taxes[${index}].taxType`}
                          onChange={(e: { target: { value: any } }) =>
                            setFieldValue(
                              `taxes[${index}].taxType`,
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
                            name={`taxes[${index}].taxType`}
                            component='span'
                            className='error  text-[red] text-sm'
                          />
                        </div>
                      </div>
                      <div className='w-[100%] sm:w-[40%]'>
                        <TextFieldCommon
                          id='percentage'
                          placeholder={common.tax_per_placeholder}
                          label={common.tax_per_label}
                          value={values.taxes[index].percentage}
                          name={`taxes[${index}].percentage`}
                          onChange={(e: { target: { value: any } }) =>
                            setFieldValue(
                              `taxes[${index}].percentage`,
                              handleNumber(e.target.value),
                            )
                          }
                          onBlur={handleBlur}
                          variant='outlined'
                          error={null}
                          errorDisabel
                        />
                        <div className='min-h-[25px]'>
                          <ErrorMessage
                            name={`taxes[${index}].percentage`}
                            component='span'
                            className='error text-[red] text-sm min-h-[25px]'
                          />
                        </div>
                      </div>
                      {/* {index > 0 && ( */}
                      <Button
                        type='button'
                        onClick={() => remove(index)}
                        className='tax-remove-div-btn'
                      >
                        <FaXmark />
                      </Button>
                      {/* )} */}
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>

            <div className='flex justify-center items-center gap-4 m-8'>
              <button
                onClick={(e) => handleCancel(e)}
                type='button'
                className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
              >
                {common.cancel_button_label}
              </button>

              <button
                type='submit'
                className='inline-flex items-center px-8 py-2 border border-Secondary text-sm font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
              >
                {common.save_button_label}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  )
}

export default TaxTypeForm
