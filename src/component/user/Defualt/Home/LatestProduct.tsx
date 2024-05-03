import Slider from "react-slick"
import ProductCard from "../ProductCard"

type Props = {}

const LatestProduct = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  }
  return (
    <section className='Categories-section latest-product-section section'>
      <img
        src={"/images/user/latest-product-top-img.png"}
        alt=''
        className='latest-product-top-img'
      />
      <div className='container'>
        <h1 className='title'>
          Latest <span>products </span>
        </h1>
        <div className='underline-animation'></div>
        <h5>See All Categories</h5>
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </section>
  )
}

export default LatestProduct
