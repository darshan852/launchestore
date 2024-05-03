import React from "react"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { RxCrossCircled } from "react-icons/rx"
import * as Yup from "yup"
import { useFormik } from "formik"
import TextFieldCommon from "@/src/common/formfield/textField"
import { generateRandomNumber } from "./sellCommon"
import Button from "@/src/common/button"
import PhoneInputType from "@/src/common/formfield/phoneInput"
import { toast } from "react-toastify"
import { newClientInstance } from "@/src/service/admin/newClient"

interface CustomerModelProps {
  open: boolean
  setOpen: (value: boolean) => void
  handleCloseCustomerModel: () => void
}

const CustomerModel = (props: CustomerModelProps) => {
  const { open, setOpen, handleCloseCustomerModel } = props
  const validationSchema = Yup.object().shape({
    customer_name: Yup.string().required("Please enter name"),
    phone: Yup.string().required("Please enter your mobile number"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Please enter email"),
    customercode: Yup.string(),
  })

  const formik = useFormik({
    initialValues: {
      customer_name: "",
      phone: "",
      email: "",
      customercode: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        const response = await newClientInstance.addCustomer({ params: values })
        if (response.data.success) {
          toast.success(response.data.message)
          setOpen(false)
          handleCloseCustomerModel()
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    },
  })

  const handleCustomerCode = React.useCallback(() => {
    const randomNumber = generateRandomNumber(12) // Generate a 10-digit random number
    const prefix = "CC" // Prefix for the unique number
    formik.setFieldValue("customercode", prefix + randomNumber)
  }, [])

  React.useEffect(() => {
    if (open) {
      handleCustomerCode()
    }
  }, [handleCustomerCode, open])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto bg-[rgba(0,0,0,0.4)]'
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative w-full h-full max-w-[600px] inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle'>
              <div className='sell-addproudct-modal '>
                <div className='add-customer-modal-title bg-Primary text-white px-5 py-2'>
                  <h2 className='text-[20px] font-semibold capitalize'>
                    Add Customer
                  </h2>
                  <button
                    className='modal-close-btn absolute top-3 right-3 text-[25px]'
                    onClick={() => setOpen(false)}
                  >
                    <RxCrossCircled />
                  </button>
                </div>
                <div className='add-customer-modal-body'>
                  <form onSubmit={formik.handleSubmit} className='p-3'>
                    <div className='flex flex-wrap gap-3'>
                      <div className='w-[48%]'>
                        <TextFieldCommon
                          id='customer_name'
                          placeholder='Enter Customer Name'
                          label='Customer Name'
                          value={formik.values.customer_name}
                          name='customer_name'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          variant='outlined'
                          error={
                            formik.touched.customer_name &&
                            formik.errors.customer_name
                              ? formik.errors.customer_name
                              : null
                          }
                        />
                      </div>
                      <div className='w-[48%]'>
                        <TextFieldCommon
                          id='customercode'
                          placeholder='Enter Customer Code'
                          label='Customer Code'
                          value={formik.values.customercode}
                          name='customercode'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          variant='outlined'
                          error={
                            formik.touched.customercode &&
                            formik.errors.customercode
                              ? formik.errors.customercode
                              : null
                          }
                          disabled
                        />
                      </div>
                      <div className='w-[48%]'>
                        <TextFieldCommon
                          id='email'
                          placeholder='Enter Email'
                          label='Email'
                          value={formik.values.email}
                          name='email'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          variant='outlined'
                          error={
                            formik.touched.email && formik.errors.email
                              ? formik.errors.email
                              : null
                          }
                        />
                      </div>
                      <div className='w-[48%]'>
                        <PhoneInputType
                          label='Enter Mobile :'
                          name='phone'
                          onBlur={() => formik.handleBlur("phone")}
                          onChange={(value: string, data: any) => {
                            console.log(value)
                            formik.setFieldValue("phone", value)
                          }}
                          value={formik.values.phone}
                          error={
                            formik.touched.phone && formik.errors.phone
                              ? formik.errors.phone
                              : null
                          }
                        />
                      </div>
                      <div className='flex justify-center items-center w-full'>
                        <Button intent='blue' type='submit'>
                          Create Customer
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CustomerModel
