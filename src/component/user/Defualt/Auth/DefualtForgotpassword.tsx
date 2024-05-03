import TextFieldCommon from "@/src/common/formfield/textField"
import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { FaArrowLeftLong } from "react-icons/fa6"

type Props = {}
const DefualtForgotpassword = (props: Props) => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(`first name is required`),
    last_name: Yup.string().required(`last name is required `),
    email: Yup.string()
      .email(`Please add Valid email address`)
      .required(`Email address is required`),
    password: Yup.string()
      .required(`Password is required`)
      .min(6, `minimum 6 character is required`),
    // .oneOf([Yup.ref("confirm_Pass"), undefined], `confirmPassword does not match with Password `),
    confirm_Pass: Yup.string()
      .oneOf(
        [Yup.ref("password"), undefined],
        `confirmPassword does not match with Password `,
      )
      .required(`Please enter cofirm password`),
    mobile_number: Yup.string().required(`Please enter mobile number`),
  })
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      country_id: "",
      password: "",
      confirm_Pass: "",
      mobile_number: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
    },
  })

  return (
    <div className='login-section forgot-section section'>
      <div className='container'>
        <div className='row'>
          <div className='forgot-left col-xxl-6 col-lg-6 col-md-6'>
            <div className='login-left-content'>
              <h2 className='title'>Forgot password?</h2>
              <div className='underline-animation'></div>
              <p className='pera'>
                No worries, we well send you reset intructions.
              </p>

              <div className='login-deatils-wrapper signin-deatils-wrapper'>
                <form action=''>
                  <div className='row'>
                    <div className='col-xxl-12 mb-4'>
                      <TextFieldCommon
                        id='email'
                        type='email'
                        placeholder={"email"}
                        label={"email"}
                        name='email'
                        onBlur={() => formik.handleBlur("email")}
                        onChange={(e: { target: { value: any } }) => {
                          formik.setFieldValue("email", e.target.value)
                        }}
                        value={formik.values.email}
                        error={
                          formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : null
                        }
                      />
                      <button className='common-input-btn'>
                        Reset Password
                      </button>
                    </div>
                    <h3>
                      <span>
                        <FaArrowLeftLong />
                      </span>{" "}
                      Back to <a href='./signup.php'> Sign up</a>
                    </h3>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='login-images col-xxl-6 col-lg-6 col-md-6'>
            <img
              src={"/images/user/login/forgot-stars-img.svg"}
              alt=''
              className='login-say-img forgot-stars-img'
            />
            <img
              src={"/images/user/login/forgot-plant-img.svg"}
              alt=''
              className='forgot-plant-img'
            />
            <img
              src={"/images/user/login/login-wall-bg.png"}
              alt=''
              className='login-wall-bg'
            />

            <div className='login-img-part forgot-password-img-part'>
              <img
                src={"/images/user/login/forgot-passowrd-main-img.svg"}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DefualtForgotpassword
