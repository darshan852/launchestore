import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { FaMobileAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

type Props = {}
const Footer = (props: Props) => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div
            className='col-xl-3 col-lg-6 col-md-6 wow zoomIn'
            data-wow-duration='1s'
            data-wow-delay='0'
            data-wow-offset='0'
          >
            <div className='foot-1'>
              <a href='./index.php'>
                <img
                  src={"/images/user/header-logo.png"}
                  alt='logo'
                  className='logo-foot-img'
                />
              </a>

              <h4>Download App</h4>
              <p>From App Store or Google Play</p>
              <div className='foot-btn'>
                <a href='#'>
                  <img src={"/images/user/app-store.png"} alt='' />
                </a>
                <a href='#'>
                  <img src={"/images/user/google-play.png"} alt='' />
                </a>
              </div>
              <div className='foot-payment-icons'>
                <ul>
                  <li>
                    <a href=''>
                      <img src={"/images/user/foot-icon-1.png"} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <img src={"/images/user/foot-icon-2.png"} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <img src={"/images/user/foot-icon-3.png"} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <img src={"/images/user/foot-icon-4.png"} alt='' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className='col-xl-3 col-lg-6 col-md-6 wow zoomIn'
            data-wow-duration='1s'
            data-wow-delay='0.1s'
            data-wow-offset='0'
          >
            <div className='foot-2 common-links'>
              <h3>Categories</h3>
              <div className='underline-animation'></div>
              <ul>
                <li>
                  <a href='./product-listing-2.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Grocery
                  </a>
                </li>
                <li>
                  <a href='./product-listing-2.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Snacks
                  </a>
                </li>
                <li>
                  <a href='./product-listing-2.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Dry Fruits
                  </a>
                </li>
                <li>
                  <a href='./product-listing-2.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Biscuits
                  </a>
                </li>
                <li>
                  <a href='./product-listing-2.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Chocolates
                  </a>
                </li>
                <li>
                  <a href='./product-listing-2.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Drinks
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className='col-xl-2 col-lg-6 col-md-6 wow zoomIn'
            data-wow-duration='1s'
            data-wow-delay='0.2s'
            data-wow-offset='0'
          >
            <div className='foot-3 common-links'>
              <h3>Useful Links</h3>
              <div className='underline-animation'></div>
              <ul>
                <li>
                  <a href='./about-us.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Term &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Refund &amp; Return{" "}
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Shipping policy
                  </a>
                </li>
                <li>
                  <a href='./contact-us.php'>
                    <span>
                      <FaArrowRightLong />
                    </span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className='col-xl-4 col-lg-6 col-md-6 wow zoomIn'
            data-wow-duration='1s'
            data-wow-delay='0.3s'
            data-wow-offset='0'
          >
            <div className='foot-4 common-links'>
              <h3>Shop infomation</h3>
              <div className='underline-animation'></div>
              <div className='row'>
                <div className='col-xl-1 col-lg-1 col-md-1'>
                  <a href='#'>
                    <FaLocationDot />
                  </a>
                </div>
                <div className='col-xl-11 col-lg-11 col-md-11'>
                  <h4>
                    <span>address: </span> 41-42, Advance Business Park, Opp.
                    Swaminarayan Temple, Shahibaug Road, Ahmedabad-380004
                  </h4>
                </div>

                <div className='col-xl-1 col-lg-1 col-md-1'>
                  <a href='#'>
                    <FaMobileAlt />
                  </a>
                </div>
                <div className='col-xl-11 col-lg-11 col-md-11'>
                  <h4>
                    <span>Call Us: </span>
                    <a href='#'>(+91) 93270 13225, 93762 73125</a>
                  </h4>
                </div>

                <div className='col-xl-1 col-lg-1 col-md-1'>
                  <a href='#'>
                    <IoMdMail />
                  </a>
                </div>
                <div className='col-xl-11 col-lg-11 col-md-11'>
                  <h4>
                    <span>Email: </span>
                    <a href='#'> laxmirajdryfruit@gmail.com</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copy-right'>
        <div className='container'>
          <div className='copy-right-content'>
            <div>
              <h3>© Copyright 2022 upbasket . All rights reserved</h3>
            </div>
            <div className='foot-social-icons'>
              <ul>
                <li>
                  <a href='#'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
