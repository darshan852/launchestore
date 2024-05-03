import { svgImages } from "../../SvgImages/svgImage"

type Props = {}

const Defaultvendor = (props: Props) => {
  return (
    <section className='vendors contact-us-section section'>
      {/* <img
        src='https://stagging.launchestore.com/public/upbasket/assets/images/checkout-top-right-img.svg'
        alt=''
        className='checkout-top-right-img'
      />
      <img
        src='https://stagging.launchestore.com/public/upbasket/assets/images/checkout-mid-left-img.svg'
        alt=''
        className='checkout-mid-left-img'
      /> */}
      <div className='container'>
        <div className='row'>
          <div className='vendor-main'>
            <h2>Vendor</h2>
            <div className='row' id='vendorByajax'>
              <div className='col-xl-6 col-lg-6 col-md-6'>
                <a href='' className='vendor-wrapper'>
                  <div className='circle-img'></div>
                  <div className='vendor-left'>
                    <img src='./assets/images/vendor-img-1.png' alt='' />
                  </div>
                  <div className='vendor-right'>
                    <h3>Upbasket Market NYC 1</h3>

                    <div className='contact-vendor'>
                      <div className='contact-content'>
                        <span>{svgImages.location}</span>
                        <h6>84 3rd Ave, New York, NY 10003, United States</h6>
                      </div>
                      <div className='contact-content'>
                        <span>
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M10.5 11.8124V2.18705C10.5 1.70378 10.1082 1.31201 9.62497 1.31201L4.37476 1.31201C3.89149 1.31201 3.49972 1.70378 3.49972 2.18705L3.49972 11.8124C3.49972 12.2957 3.89149 12.6875 4.37476 12.6875H9.62497C10.1082 12.6875 10.5 12.2957 10.5 11.8124Z'
                              stroke='white'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            ></path>
                            <path
                              d='M7.00003 3.93706C7.36248 3.93706 7.6563 3.64324 7.6563 3.28079C7.6563 2.91834 7.36248 2.62451 7.00003 2.62451C6.63757 2.62451 6.34375 2.91834 6.34375 3.28079C6.34375 3.64324 6.63757 3.93706 7.00003 3.93706Z'
                              fill='white'
                            ></path>
                          </svg>
                        </span>
                        <h6>+1 212-253-8400</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Defaultvendor
