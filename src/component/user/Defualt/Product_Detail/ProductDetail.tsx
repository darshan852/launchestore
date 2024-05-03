import React from "react"
import { FaStar } from "react-icons/fa"
import { FaStarHalfAlt } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa6"
import { FaCartPlus } from "react-icons/fa"
import { FaCircleArrowRight } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa"
import ProductReviewTabs from "./Product-Review"
import LatestProduct from "../Home/LatestProduct"

const ProductDetailMain = () => {
  return (
    <div>
      <section className='product-detalis-section'>
        <img
          src='./assets/images/product-detail-top-left-img.png'
          alt=''
          className='product-detail-top-left-img'
        />
        <img
          src='./assets/images/product-detail-top-right-img.png'
          alt=''
          className='product-detail-top-right-img'
        />
        <div className='container'>
          <div className='row'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12'></div>

            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12'>
              <div className='product-content-part zoom'>
                <div className=''></div>
                <h2>Pistachio (Pista)</h2>
                <div className='rating-starts justify-content-start'>
                  <div className='rating stars3_5'>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStarHalfAlt />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                  </div>
                  <div>
                    4.5{" "}
                    <span>
                      {" "}
                      <a href=''> 174 Ratings &amp; 22 Reviews</a>
                    </span>
                  </div>
                </div>
                <h6>Limited Stock</h6>
                <h3>
                  ₹600.00 <span>₹840.00</span>
                </h3>
                <h4>Hurry up! only 10 products left in stock!</h4>
                <p>
                  {" "}
                  Vivamus suscipit tortor eget felis porttitor volutpat. Quisque
                  velit nisi, pretium ut lacinia in, elementum id enim.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula.Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Vivamus
                  suscipit tortor eget felis porttitor volutpat.Vivamus suscipit
                  tortor eget felis porttitor volutpat. Curabitur arcu erat,
                  accumsan id imperdiet.
                </p>

                <div className='product-detalis-btn'>
                  <a href='' className='add-cart-btn'>
                    <span>
                      <FaCartPlus />
                    </span>
                    Add To Cart
                  </a>
                  <a href='./shop-cart.html' className='add-cart-btn order-now'>
                    <span>
                      <FaCircleArrowRight />
                    </span>
                    Order Now
                  </a>
                  <a href='' className='whatsapp-btn'>
                    <FaWhatsapp />
                  </a>
                </div>
                <h5>
                  Category: <span> Dried Fruits</span>
                </h5>
                <h5>
                  Brand: <span> Laxmiraj</span>
                </h5>
              </div>
            </div>
            <ProductReviewTabs />
          </div>
        </div>
      </section>
      <LatestProduct />
    </div>
  )
}
export default ProductDetailMain
