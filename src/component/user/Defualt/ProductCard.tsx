import { FaCartShopping } from "react-icons/fa6"
type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className='product-wrapper card'>
      <span className='discnt '>50 % off</span>
      <span> out of stock</span>
      <div className='card-header'>
        <a href='https://stagging.launchestore.com/products/productDetails/MTkzOA/MzkzMw'>
          <img
            src='https://stagging.launchestore.com/public/images/bigbucket/product_image/product_image_1656671203.jpg'
            alt=''
          />
        </a>
      </div>

      <div className='card-body'>
        <h3>
          <a href='https://stagging.launchestore.com/products/productDetails/MTkzOA/MzkzMw'>
            Banana
          </a>
        </h3>
        <h4 className='invisible'>Available (Instock) </h4>

        <div className='rate-dropdown'>
          <select
            className='form-select card-dropdown d-none'
            aria-label='Default select example'
          >
            <option>500 Gms</option>
            <option value='1'>300 Gms</option>
            <option value='2'>200 Gms</option>
            <option value='3'>1Kg</option>
          </select>

          <div className='card-rating'>
            <p>
              <img
                src='https://stagging.launchestore.com/public/upbasket/assets/images/card-star-img.png'
                alt=''
              />
              0
            </p>
          </div>
        </div>
        <h6 className='rating notranslate'>
          Rs 10.00<span className=''>Rs 20</span>
        </h6>
        <a
          href='javascript:'
          className='add-cart-btn addcartbutton '
          data-product_id='MTkzOA'
          data-varient_id='MzkzMw'
        >
          <span>
            <FaCartShopping />
          </span>
          Add To Cart{" "}
        </a>
      </div>
    </div>
  )
}

export default ProductCard
