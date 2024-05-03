import PhoneInputType from "@/src/common/formfield/phoneInput"
import { useState } from "react"

const DefualtLogin = () => {
  const [mobileNumber, setMobileNumber] = useState("")

  const [error, setError] = useState({
    MobileError: "",
    otp: "",
  })

  const SendCodeHandler = () => {
    if (mobileNumber === "") {
      setError({ ...error, MobileError: "Mobile Number is Required" })
    } else {
      // Assuming a simple format check for demonstration
      const phoneRegex = /^\d{10}$/ // Example: 10-digit phone number

      if (!phoneRegex.test(mobileNumber)) {
        setError({ ...error, MobileError: "Invalid Phone Number Format" })
      } else {
        setError({ ...error, MobileError: "" }) // Clear any previous error
        console.log("mobileNumber", mobileNumber)
        // Proceed with your logic here (e.g., sending OTP)
      }
    }
  }

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
                  <PhoneInputType
                    label={"Phone Number"}
                    name='mobile_number'
                    onBlur={(e: any) => {
                      setMobileNumber(e.target.value)
                      console.log(e.target.value)
                    }}
                    onChange={(value: string) =>
                      console.log("mobile_number", value)
                    }
                    value={mobileNumber}
                    error={error.MobileError === "" ? null : error.MobileError}
                  />
                  <button
                    onClick={() => SendCodeHandler()}
                    className='common-input-btn mb-4'
                  >
                    Send Code
                  </button>
                  <h3>
                    Dont’ have an account? <a href='./signup.php'> Sign up</a>
                  </h3>
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

export default DefualtLogin
