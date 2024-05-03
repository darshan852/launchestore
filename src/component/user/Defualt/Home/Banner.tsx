import React from "react"
import Slider from "react-slick"

type Props = {}

const Banner = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className='banner-slider'>
      <Slider {...settings}>
        <div className='banner-slider-img'>
          <img src={"/images/user/hero-1.png"} alt='banner' />
        </div>
        <div className='banner-slider-img'>
          <img src={"/images/user/hero-2.png"} alt='banner' />
        </div>
      </Slider>
    </section>
  )
}

export default Banner
