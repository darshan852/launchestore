import React from "react"
import { Dropdown } from "react-bootstrap"
import Image from "next/image"
import TextFieldCommon from "../../formfield/textField"
import { svgImages } from "../../../component/user/SvgImages/svgImage"
type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className='container mx-auto '>
        <div className='header-top'>
          {/* <Image src={"/images/user/header-logo.png"} alt="logo" width={150} height={150} /> */}
          <div className='logo'>
            <img src={"/images/user/header-logo.png"} alt='logo' />
          </div>
          <div className='search-btn'>
            <div className='input-group'>
              <TextFieldCommon
                id='search'
                placeholder={"search"}
                label={""}
                value={""}
                name='search'
                onChange={(e: any) => console.log(e.target.value)}
                onBlur={(e: any) => console.log(e.target.value)}
                variant='outlined'
                error={null}
              />
            </div>
          </div>
          <div className='social-icons'>
            <div className='user-btn btn-group'>
              <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  {svgImages.user}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className='cart-btn btn-group'>
              <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic2'>
                  {svgImages.cart}
                  <span className='g-badge'>22</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className='empty-cart-dropdown'>
                    <div className='empty-cart-img'>{svgImages.emptyCart}</div>

                    <div className='empty-cart-content'>
                      <h3>Your Cart is Empty!</h3>
                      <p>
                        Must add items on the cart before you procced to check
                        out.
                      </p>
                      <a
                        href='https://stagging.launchestore.com/products'
                        className='cmn-btn lg-btn'
                      >
                        Return to Shop
                      </a>
                    </div>
                  </div>

                  <div>
                    <ul className='cart-listing'>
                      <li>
                        <div className='cart-drop-menu cart-drop-menu-1'>
                          <div className='drop-img'>
                            <a href='./product-details.php'>
                              <Image
                                src='/images/user/cart-drop-img-1.png'
                                alt='productImg'
                                width={125}
                                height={125}
                              />
                            </a>
                          </div>
                          <div className='drop-text'>
                            <h4>
                              <a href='./product-details.php'>
                                Almond (Regular)
                              </a>
                            </h4>
                            <p>500 Gms</p>
                            <h3>398.00</h3>
                          </div>
                          <div className='cancel-btn'>
                            <a href='#' className='ms-0'>
                              <i className='fa-regular fa-circle-xmark'></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div>
                      <div className='total-amount p-0'>
                        <p>Total</p>
                        <h3>₹1134.00</h3>
                      </div>
                      <div className='drop-btns p-0'>
                        <a href='./cart.php' className='view-cart'>
                          view cart
                        </a>
                        <a href='./checkout.php' className='checkout '>
                          checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className='icon-tex'>
              <p>your cart</p>
              <h3 className='notranslate' id='display_subtotal'>
                Rs0.00{" "}
              </h3>
            </div>
          </div>
        </div>

        <nav>
          <div className='left-content'>
            <ul>
              <li>
                <a href='./index.php'>Home</a>
              </li>
              <li>
                <a href='./product-listing-2.php'>Shop</a>
              </li>
              <li>
                <a href='./about-us.php'>About us</a>
              </li>
              <li>
                <a href='./contact-us.php'>Contact us</a>
              </li>
            </ul>
          </div>

          <div className='right-content'>
            <div className='right-icon'>
              <a href=''>{svgImages.callIcon}</a>
            </div>
            <div className='right-text'>
              <h4>Need help? Call Us:</h4>
              <h3>
                <a href=''>+91 93270 13225</a>
              </h3>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
