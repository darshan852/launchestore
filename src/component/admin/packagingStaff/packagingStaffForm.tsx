import PhoneInputType from "@/src/common/formfield/phoneInput"
import TextFieldCommon from "@/src/common/formfield/textField"
import { newClientInstance } from "@/src/service/admin/newClient"
import { GetPackageStaffDetailData } from "@/src/service/admin/packagingStaff"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import React from "react"
import { toast } from "react-toastify"
import * as Yup from "yup"

interface PackagingStaffFormProps {
  packageDetail?: GetPackageStaffDetailData
}

const PackagingStaffForm = (props: PackagingStaffFormProps) => {
  const { packageDetail } = props
  const router = useRouter()
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter name"),
    email: Yup.string()
      .email("enter valid email")
      .required("Please enter email address"),
    password: Yup.string()
      .required("Please enter password")
      .min(6, "Please enter minimum 6 digit valid password"),
    phone_no: Yup.string().required("Please enter mobile number"),
    vehicle_number: Yup.string(),
    vehicle_name: Yup.string(),
  })

  const handleAddPackagingStaff = async (value: any) => {
    try {
      const params = {
        name: value.name,
        email: value.email,
        password: value.password,
        phone_no: value.phone_no,
        vehicle_number: value.vehicle_number,
        vehicle_name: value.vehicle_name,
      }
      const response = await newClientInstance.addPackagingStaff({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        router.push("/admin/staff/packaging-staff")
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleUpdatePackagingStaff = async (value: any, id: number) => {
    try {
      const params = {
        name: value.name,
        email: value.email,
        password: value.password,
        phone_no: value.phone_no,
        vehicle_number: value.vehicle_number,
        vehicle_name: value.vehicle_name,
        id: id,
      }
      const response = await newClientInstance.updateStaff({
        params: params,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        router.push("/admin/staff/packaging-staff")
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  React.useEffect(() => {
    if (packageDetail) {
      formik.setValues({
        ...formik,
        name: packageDetail.full_name,
        email: packageDetail.email,
        password: packageDetail.password,
        phone_no: packageDetail.phone,
        vehicle_number: packageDetail.Staff.vehicle_number,
        vehicle_name: packageDetail.Staff.vehicle_name,
      })
    }
  }, [packageDetail])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone_no: "",
      vehicle_number: "",
      vehicle_name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      if (packageDetail) {
        handleUpdatePackagingStaff(values, packageDetail.Staff.id)
      } else {
        handleAddPackagingStaff(values)
      }
    },
  })
  const handleCancel = () => {
    router.push("/admin/staff/packaging-staff")
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-wrap gap-2'>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='name'
              placeholder={"Enter Name :"}
              label={"Enter Name :"}
              value={formik.values.name}
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <PhoneInputType
              label='Enter Mobile :'
              name='phone_no'
              onBlur={() => formik.handleBlur("phone_no")}
              onChange={(value: string, data: any) => {
                console.log(value)
                formik.setFieldValue("phone_no", value)
              }}
              value={formik.values.phone_no}
              error={
                formik.touched.phone_no && formik.errors.phone_no
                  ? formik.errors.phone_no
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='email'
              placeholder={"Enter Email Address :"}
              label={"Enter Email Address :"}
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
              disabled={packageDetail ? true : false}
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='password'
              placeholder={"Enter Password :"}
              label={"Enter Password :"}
              type='password'
              value={formik.values.password}
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
              disabled={packageDetail ? true : false}
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='vehicle_number'
              placeholder={"Enter Vehicle Number :"}
              label={"Enter Vehicle Number :"}
              value={formik.values.vehicle_number}
              name='vehicle_number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.vehicle_number && formik.errors.vehicle_number
                  ? formik.errors.vehicle_number
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='vehicle_name'
              placeholder={"Enter Vehicle Name :"}
              label={"Enter Vehicle Name :"}
              value={formik.values.vehicle_name}
              name='vehicle_name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.vehicle_name && formik.errors.vehicle_name
                  ? formik.errors.vehicle_name
                  : null
              }
            />
          </div>
        </div>
        <div className='flex justify-center items-center mt-5 '>
          <div className='flex items-center gap-2 '>
            <button
              onClick={handleCancel}
              className='inline-flex items-center px-6 py-2 border border-red-600 text-sm font-semibold text-white rounded-md shadow-sm bg-red-600 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
              type='button'
            >
              Cancel
            </button>
            <button
              aria-label='Save'
              type='submit'
              className='inline-flex items-center px-6 py-2 border border-secondary bg-secondary text-sm font-semibold text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'
            >
              Add Packaging Staff
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PackagingStaffForm
