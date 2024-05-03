import ProductCard from "../ProductCard"

type Props = {}

const TopFeat = (props: Props) => {
  return (
    <section className='Featured-Products  section'>
      <img
        src={"/images/user/product-top-left-img.png"}
        alt=''
        className='product-top-left-img'
      />
      <img
        src={"/images/user/product-bottom-right-img.png"}
        alt=''
        className='product-bottom-right-img'
      />
      <div className='container'>
        <h2 className='title'>
          Top Featured <span>Products</span>
        </h2>
        <div className='underline-animation'></div>
        <p className='pera'>
          Do not miss the current offers until the end of month.
        </p>

        <div className='row'>
          <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3 '>
            <ProductCard />
          </div>
          <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3 '>
            <ProductCard />
          </div>
          <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3 '>
            <ProductCard />
          </div>
          <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3 '>
            <ProductCard />
          </div>
          <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3 '>
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopFeat
