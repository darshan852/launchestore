import React from "react"
import Slider from "react-slick"

const SubCategory = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 5,
        },
      },
    ],
  }

  return (
    <div className='sub-categories-product'>
      <Slider {...settings}>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
        <div className='sub-categories-wrapper'>
          <h3>sub category</h3>
        </div>
      </Slider>
    </div>
  )
}

export default SubCategory
