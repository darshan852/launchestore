import Slider from "react-slick"

type Props = {}

const HomeCategorySlider = (props: Props) => {
  var settings = {
    dots: true,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  }

  return (
    <div>
      <img
        src={"/images/user/category-top-right-img.png"}
        alt=''
        className='category-top-right-img'
      />
      <h1 className='title'>
        Shop By <span>Categories </span>
      </h1>
      <div className='underline-animation'></div>
      <h5>See All Categories</h5>
      <Slider {...settings} className='categories-slider'>
        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>American Fruits</h4>
          </div>
        </a>

        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>Imported Fruits</h4>
          </div>
        </a>

        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>American Fruits</h4>
          </div>
        </a>

        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>Imported Fruits</h4>
          </div>
        </a>

        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>American Fruits</h4>
          </div>
        </a>

        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>Imported Fruits</h4>
          </div>
        </a>

        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>American Fruits</h4>
          </div>
        </a>

        <a href='#' className='categorie-wrapper categorie-1'>
          <div className='categorie-img '>
            <img
              src='https://stagging.launchestore.com/public/images/bigbucket/category/image_edit_1672141482.png'
              alt='cat'
            />
          </div>
          <div className='categorie-text'>
            <h4>Imported Fruits</h4>
          </div>
        </a>
      </Slider>
    </div>
  )
}

export default HomeCategorySlider
