import { FaLocationDot } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import { FaMobileScreenButton } from "react-icons/fa6"
import ContactUsForm from "./Contactform"
import * as Yup from "yup"
import { useFormik } from "formik"

type Props = {}

const ContactUs = (props: Props) => {
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
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
    },
  })
  return (
    <section className='contact-us-section section'>
      <img
        src={"./images/user/contact/product-detail-top-left-img.png"}
        alt=''
        className='product-detail-top-left-img'
      />
      <img
        src={"./images/user/contact/product-detail-top-right-img.png"}
        alt=''
        className='product-detail-top-right-img'
      />
      <img
        src={"./images/user/contact/product-bottom-right-img.png"}
        alt=''
        className='product-bottom-right-img'
      />
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='title text-center'>
              Get In <span>Touch</span>
            </h2>
            <div className='underline-animation'></div>
            <p className='pera'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div
            className='col-xxl-6 col-xl-6 col-lg-7 col-md-12 wow bounceIn'
            data-wow-duration='1s'
            data-wow-delay='0s'
            data-wow-offset='0'
          >
            <div className='left-contact-wrapper'>
              <form>
                <ContactUsForm formik={formik} />
              </form>
            </div>
          </div>
          <div
            className='contact-right-content col-xxl-6 col-xl-6 col-lg-5 col-md-12 wow bounceIn'
            data-wow-duration='1s'
            data-wow-delay='0.1s'
            data-wow-offset='0'
          >
            <div className='right-contact-wrapper'>
              {/* <!-- ----right-contact-content--- --> */}
              <div className='right-contact-main'>
                <span className='right-contact'>
                  <FaLocationDot />
                </span>

                <div className='right-contact-text'>
                  <h3>Location</h3>
                  <h4>
                    41-42, Advance Business Park, Opp. Swaminarayan Temple,
                    Shahibaug Road, Ahmedabad-380004
                  </h4>
                </div>
              </div>

              <div className='right-contact-main'>
                <span className='right-contact'>
                  <IoMdMail />
                </span>

                <div className='right-contact-text'>
                  <h3>Email</h3>
                  <h4>
                    <a href=''>laxmirajdryfruit@gmail.com</a>
                  </h4>
                </div>
              </div>

              <div className='right-contact-main'>
                <span className='right-contact'>
                  <FaMobileScreenButton />
                </span>

                <div className='right-contact-text'>
                  <h3>Phone</h3>
                  <h4>
                    <a href=''>+91 93270 13225, +91 93762 73125</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
