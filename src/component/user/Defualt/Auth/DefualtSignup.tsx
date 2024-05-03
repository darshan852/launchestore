import * as Yup from "yup"
import { useFormik } from "formik"
import SignUpForm from "./SignUpForm"
type Props = {}

const DefualtSignup = (props: Props) => {
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
    <section>
      <div className='login-section section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xxl-6 col-lg-6'>
              <div className='login-left-content'>
                <h2 className='title'>Welcome back</h2>
                <div className='underline-animation'></div>
                <p className='pera'>
                  Welcome back! Enter your credentails to acess your account.
                </p>

                <div className='login-deatils-wrapper mobile-login'>
                  <form onSubmit={formik.handleSubmit}>
                    <SignUpForm formik={formik} />
                  </form>
                </div>
              </div>
            </div>

            <div className='login-images col-xxl-6 col-lg-6'>
              <img
                src='https://stagging.launchestore.com/public/upbasket/assets/images/login-say-img.svg'
                alt=''
                className='login-say-img'
              />
              <img
                src='https://stagging.launchestore.com/public/upbasket/assets/images/login-mail-img.svg'
                alt=''
                className='login-mail-img'
              />
              <img
                src='https://stagging.launchestore.com/public/upbasket/assets/images/login-tree-img.svg'
                alt=''
                className='login-tree-img'
              />
              <img
                src='https://stagging.launchestore.com/public/upbasket/assets/images/login-wall-bg.png'
                alt=''
                className='login-wall-bg'
              />
              <div className='login-img-part'>
                <img
                  src='https://stagging.launchestore.com/public/upbasket/assets/images/login-girl-img.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DefualtSignup
