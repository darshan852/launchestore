import FileSelect from "@/src/common/formfield/fileSelect"
import PhoneInputType from "@/src/common/formfield/phoneInput"
import TextFieldCommon from "@/src/common/formfield/textField"
import { GetDeliveryStaffDetailData } from "@/src/service/admin/deliveryStaff"
import { newClientInstance } from "@/src/service/admin/newClient"
import { defaultUrl } from "@/src/service/common"
import { useFormik } from "formik"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import * as Yup from "yup"

interface DeliveryStaffFormProps {
  deliveryDetail?: GetDeliveryStaffDetailData
}

const DeliveryStaffForm: React.FC<DeliveryStaffFormProps> = (props) => {
  const { deliveryDetail } = props
  const router = useRouter()
  const [files, setFile] = React.useState<any>({
    file: [],
    filePreview: "",
  })
  const [imagefiles, setImageFile] = React.useState<any>({
    file: [],
    filePreview: "",
  })
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required("Please enter user name"),
    phone: Yup.string().required("Please enter mobile number"),
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Please enter email"),
    password: Yup.string()
      .required("Please enter password")
      .min(6, "Please enter minimum 6 digit valid password"),
    vehicle_name: Yup.string().required("Please enter vehicle name"),
    vehicle_type: Yup.string().required("Please enter vehicle type"),
    id_proof_number: Yup.string().required("Please enter id proof number"),
    vehicle_number: Yup.string().required("Please enter vehicle number"),
    id_proof_image: Yup.mixed().required("Please select image"),
    image: Yup.mixed().required("Please select image"),
  })

  const handleAddDeliveryStaff = async (value: any) => {
    try {
      const formData = new FormData()
      for (let key in value) {
        if (key === "phone") {
          formData.append(key, value[key])
        } else {
          key !== "id_proof_image" &&
            key !== "image" &&
            formData.append(key, value[key])
        }
      }
      formData.append("id_proof_image", files.file)
      formData.append("image", imagefiles.file)

      const response = await newClientInstance.addDeliveryStaff({
        params: formData,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/admin/staff/delivery-staff")
        }, 1500)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const handleUpdateDeliveryStaff = async (value: any, id: string) => {
    try {
      const formData = new FormData()
      formData.append("full_name", value.full_name)
      formData.append("vehicle_name", value.vehicle_name)
      formData.append("vehicle_type", value.vehicle_type)
      formData.append("vehicle_number", value.vehicle_number)
      formData.append("id_proof_number", value.id_proof_number)
      formData.append("phone", value.phone)
      formData.append("id", id)
      console.log(files, imagefiles)
      files.file.length > 0 && formData.append("id_proof_image", files.file)
      imagefiles.file.length > 0 && formData.append("image", imagefiles.file)

      const response = await newClientInstance.updateDeliveryStaff({
        params: formData,
      })
      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          router.push("/admin/staff/delivery-staff")
        }, 1500)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  React.useEffect(() => {
    if (deliveryDetail) {
      formik.setValues({
        ...formik,
        full_name: deliveryDetail.full_name,
        phone: deliveryDetail.phone,
        email: deliveryDetail.email,
        password: deliveryDetail.password,
        vehicle_name: deliveryDetail.Delivery_user.vehicle_name,
        vehicle_type: deliveryDetail.Delivery_user.vehicle_type,
        id_proof_number: deliveryDetail.Delivery_user.id_proof_number,
        vehicle_number: deliveryDetail.Delivery_user.vehicle_number,
        id_proof_image: deliveryDetail.Delivery_user.image,
        image: deliveryDetail.Delivery_user.image,
      })
      const idProofImage = {
        file: [],
        filePreview: `${defaultUrl}/${deliveryDetail.Delivery_user.id_proof_image}`,
      }
      setFile(idProofImage)

      const profileImage = {
        file: [],
        filePreview: `${defaultUrl}/${deliveryDetail.Delivery_user.image}`,
      }
      setImageFile(profileImage)
    }
  }, [deliveryDetail])

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      email: "",
      password: "",
      vehicle_name: "",
      vehicle_type: "",
      id_proof_number: "",
      vehicle_number: "",
      id_proof_image: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values, formik.errors)
      if (deliveryDetail) {
        handleUpdateDeliveryStaff(
          values,
          deliveryDetail.Delivery_user.id.toString(),
        )
      } else {
        handleAddDeliveryStaff(values)
      }
    },
  })
  console.log(formik.errors)

  const handleFile = (e: any) => {
    const newFile = {
      file: e.target.files[0],
      filePreview: URL.createObjectURL(e.target.files[0]),
    }
    setFile(newFile)
    formik.setFieldValue("id_proof_image", newFile.filePreview)
  }

  const handleImageFile = (e: any) => {
    const newFile = {
      file: e.target.files[0],
      filePreview: URL.createObjectURL(e.target.files[0]),
    }
    setImageFile(newFile)
    formik.setFieldValue("image", newFile.filePreview)
  }

  const handleCancel = () => {
    router.push("/admin/staff/delivery-staff")
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex gap-2 flex-wrap'>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='full_name'
              placeholder={"Enter User Name : "}
              label={"Enter User Name : "}
              value={formik.values.full_name}
              name='full_name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.full_name && formik.errors.full_name
                  ? formik.errors.full_name
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
          <div className='w-[48%]'>
            <TextFieldCommon
              id='email'
              placeholder={"Enter Email Address : "}
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
              disabled={deliveryDetail ? true : false}
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='password'
              placeholder={"Enter Password : "}
              label={"Enter Password : "}
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
              disabled={deliveryDetail ? true : false}
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='vehicle_name'
              placeholder={"Enter Vehicle Name : "}
              label={"Enter Vehicle Name : "}
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
          <div className='w-[48%]'>
            <TextFieldCommon
              id='vehicle_type'
              placeholder={"Enter Vehicle type : "}
              label={"Enter Vehicle type : "}
              value={formik.values.vehicle_type}
              name='vehicle_type'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.vehicle_type && formik.errors.vehicle_type
                  ? formik.errors.vehicle_type
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='id_proof_number'
              placeholder={"Enter Id Proof Number : "}
              label={"Enter Id Proof Number : "}
              value={formik.values.id_proof_number}
              name='id_proof_number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.id_proof_number && formik.errors.id_proof_number
                  ? formik.errors.id_proof_number
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <TextFieldCommon
              id='vehicle_number'
              placeholder={"Enter Vehicle number : "}
              label={"Enter Vehicle number : "}
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
            <FileSelect
              id='id_proof_image'
              placeholder={"Id Proof Image "}
              label={"Id Proof Image "}
              value={""}
              name='id_proof_image'
              onChange={(e: any) => handleFile(e)}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.id_proof_image && formik.errors.id_proof_image
                  ? formik.errors.id_proof_image
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            <FileSelect
              id='image'
              placeholder={"Profile Picture "}
              label={"Profile Picture "}
              value={""}
              name='image'
              onChange={(e: any) => handleImageFile(e)}
              onBlur={formik.handleBlur}
              variant='outlined'
              error={
                formik.touched.image && formik.errors.image
                  ? formik.errors.image
                  : null
              }
            />
          </div>
          <div className='w-[48%]'>
            {files && (
              <Image
                src={files.filePreview}
                width={150}
                height={150}
                quality={80}
                alt='id-proof-image'
              />
            )}
          </div>
          <div className='w-[48%]'>
            {imagefiles && (
              <Image
                src={imagefiles.filePreview}
                width={150}
                height={150}
                quality={80}
                alt='profile-picture'
              />
            )}
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
              {deliveryDetail ? "Update" : "Add"} DeliveryStaff
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default DeliveryStaffForm
