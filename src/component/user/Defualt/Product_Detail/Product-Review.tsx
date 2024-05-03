import React from "react"
import { FaStar } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa6"

const ProductReviewTabs = () => {
  return (
    <div className='col-xxl-12'>
      <div className='review-desc'>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link active'
              id='home-tab'
              data-bs-toggle='tab'
              data-bs-target='#home'
              type='button'
              role='tab'
              aria-controls='home'
              aria-selected='true'
            >
              Description
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='info-tab'
              data-bs-toggle='tab'
              data-bs-target='#info'
              type='button'
              role='tab'
              aria-controls='info'
              aria-selected='false'
            >
              Information
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='profile-tab'
              data-bs-toggle='tab'
              data-bs-target='#profile'
              type='button'
              role='tab'
              aria-controls='profile'
              aria-selected='false'
            >
              Reviews (25)
            </button>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          <div
            className='tab-pane fade'
            id='home'
            role='tabpanel'
            aria-labelledby='home-tab'
          >
            <div className='Description-wrapper'>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Vivamus bibendum magna
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='info'
            role='tabpanel'
            aria-labelledby='info-tab'
          >
            <div className='Description-wrapper'>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Vivamus bibendum magna
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </div>
          </div>
          <div
            className='tab-pane fade active show'
            id='profile'
            role='tabpanel'
            aria-labelledby='profile-tab'
          >
            <div className='my-review-wrapper'>
              <div className='row'>
                <div className='col-xxl-8 col-xl-8 col-lg-8'>
                  <div className='review-comment-wrapper'>
                    <div className='review-content'>
                      <div className='review-left-content'>
                        <div>
                          <h3>Customer Reviews</h3>
                          <h5>
                            <span>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaRegStar />
                              4.5
                            </span>{" "}
                            <span> 174 Ratings &amp; 22 Reviews</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className='supportive-div'>
                      <div className='rewiew-wrapper'>
                        <div className='review-right'>
                          <div className='review-right-top'>
                            <span className='number-star'>
                              {" "}
                              <span>
                                <i className='fa-solid fa-star'></i>
                              </span>{" "}
                              4.5
                            </span>
                            <h4>I Loved It</h4>
                          </div>
                          <h6>Mike on Mar 22, 2023</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            consequat.{" "}
                          </p>
                        </div>
                      </div>
                      <div className='rewiew-wrapper'>
                        <div className='review-right'>
                          <div className='review-right-top'>
                            <span className='number-star'>
                              {" "}
                              <span>
                                <i className='fa-solid fa-star'></i>
                              </span>{" "}
                              4.5
                            </span>
                            <h4>I Loved It</h4>
                          </div>
                          <h6>Mike on Mar 22, 2023</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            consequat.{" "}
                          </p>
                        </div>
                      </div>
                      <div className='rewiew-wrapper'>
                        <div className='review-right'>
                          <div className='review-right-top'>
                            <span className='number-star'>
                              {" "}
                              <span>
                                <i className='fa-solid fa-star'></i>
                              </span>{" "}
                              4.5
                            </span>
                            <h4>I Loved It</h4>
                          </div>
                          <h6>Mike on Mar 22, 2023</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            consequat.{" "}
                          </p>
                        </div>
                      </div>
                      <div className='rewiew-wrapper'>
                        <div className='review-right'>
                          <div className='review-right-top'>
                            <span className='number-star'>
                              {" "}
                              <span>
                                <i className='fa-solid fa-star'></i>
                              </span>{" "}
                              4.5
                            </span>
                            <h4>I Loved It</h4>
                          </div>
                          <h6>Mike on Mar 22, 2023</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            consequat.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-xxl-4 col-xl-4 col-lg-4'>
                  <div className='add_review_wrapper'>
                    <h3>Add a review</h3>

                    <form action=''>
                      <div className='mb-3'>
                        <label htmlFor='full-name' className='form-label'>
                          Full Name
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='full-name'
                          placeholder='Enter Your name'
                        />
                      </div>

                      <div className='rating-box'>
                        <label htmlFor=''>Your rating</label>
                        <div className='rating__stars'>
                          <input
                            id='rating-1'
                            className='rating__input rating__input-1'
                            type='radio'
                            name='rating'
                            value='1'
                          />
                          <input
                            id='rating-2'
                            className='rating__input rating__input-2'
                            type='radio'
                            name='rating'
                            value='2'
                          />
                          <input
                            id='rating-3'
                            className='rating__input rating__input-3'
                            type='radio'
                            name='rating'
                            value='3'
                          />
                          <input
                            id='rating-4'
                            className='rating__input rating__input-4'
                            type='radio'
                            name='rating'
                            value='4'
                          />
                          <input
                            id='rating-5'
                            className='rating__input rating__input-5'
                            type='radio'
                            name='rating'
                            value='5'
                          />
                          <label className='rating__label' htmlFor='rating-1'>
                            <svg
                              className='rating__star'
                              width='32'
                              height='32'
                              viewBox='0 0 32 32'
                              aria-hidden='true'
                            >
                              <g transform='translate(16,16)'>
                                <circle
                                  className='rating__star-ring'
                                  fill='none'
                                  stroke='#000'
                                  stroke-width='16'
                                  r='8'
                                  transform='scale(0)'
                                ></circle>
                              </g>
                              <g
                                stroke='#000'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              >
                                <g transform='translate(16,16) rotate(180)'>
                                  <polygon
                                    className='rating__star-stroke'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='none'
                                  ></polygon>
                                  <polygon
                                    className='rating__star-fill'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='#000'
                                  ></polygon>
                                </g>
                                <g
                                  transform='translate(16,16)'
                                  stroke-dasharray='12 12'
                                  stroke-dashoffset='12'
                                >
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(0)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(72)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(144)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(216)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(288)'
                                    points='0 4,0 16'
                                  ></polyline>
                                </g>
                              </g>
                            </svg>
                            <span className='rating__sr'>1 star—Terrible</span>
                          </label>
                          <label className='rating__label' htmlFor='rating-2'>
                            <svg
                              className='rating__star'
                              width='32'
                              height='32'
                              viewBox='0 0 32 32'
                              aria-hidden='true'
                            >
                              <g transform='translate(16,16)'>
                                <circle
                                  className='rating__star-ring'
                                  fill='none'
                                  stroke='#000'
                                  stroke-width='16'
                                  r='8'
                                  transform='scale(0)'
                                ></circle>
                              </g>
                              <g
                                stroke='#000'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              >
                                <g transform='translate(16,16) rotate(180)'>
                                  <polygon
                                    className='rating__star-stroke'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='none'
                                  ></polygon>
                                  <polygon
                                    className='rating__star-fill'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='#000'
                                  ></polygon>
                                </g>
                                <g
                                  transform='translate(16,16)'
                                  stroke-dasharray='12 12'
                                  stroke-dashoffset='12'
                                >
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(0)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(72)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(144)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(216)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(288)'
                                    points='0 4,0 16'
                                  ></polyline>
                                </g>
                              </g>
                            </svg>
                            <span className='rating__sr'>2 stars—Bad</span>
                          </label>
                          <label className='rating__label' htmlFor='rating-3'>
                            <svg
                              className='rating__star'
                              width='32'
                              height='32'
                              viewBox='0 0 32 32'
                              aria-hidden='true'
                            >
                              <g transform='translate(16,16)'>
                                <circle
                                  className='rating__star-ring'
                                  fill='none'
                                  stroke='#000'
                                  stroke-width='16'
                                  r='8'
                                  transform='scale(0)'
                                ></circle>
                              </g>
                              <g
                                stroke='#000'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              >
                                <g transform='translate(16,16) rotate(180)'>
                                  <polygon
                                    className='rating__star-stroke'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='none'
                                  ></polygon>
                                  <polygon
                                    className='rating__star-fill'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='#000'
                                  ></polygon>
                                </g>
                                <g
                                  transform='translate(16,16)'
                                  stroke-dasharray='12 12'
                                  stroke-dashoffset='12'
                                >
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(0)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(72)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(144)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(216)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(288)'
                                    points='0 4,0 16'
                                  ></polyline>
                                </g>
                              </g>
                            </svg>
                            <span className='rating__sr'>3 stars—OK</span>
                          </label>
                          <label className='rating__label' htmlFor='rating-4'>
                            <svg
                              className='rating__star'
                              width='32'
                              height='32'
                              viewBox='0 0 32 32'
                              aria-hidden='true'
                            >
                              <g transform='translate(16,16)'>
                                <circle
                                  className='rating__star-ring'
                                  fill='none'
                                  stroke='#000'
                                  stroke-width='16'
                                  r='8'
                                  transform='scale(0)'
                                ></circle>
                              </g>
                              <g
                                stroke='#000'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              >
                                <g transform='translate(16,16) rotate(180)'>
                                  <polygon
                                    className='rating__star-stroke'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='none'
                                  ></polygon>
                                  <polygon
                                    className='rating__star-fill'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='#000'
                                  ></polygon>
                                </g>
                                <g
                                  transform='translate(16,16)'
                                  stroke-dasharray='12 12'
                                  stroke-dashoffset='12'
                                >
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(0)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(72)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(144)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(216)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(288)'
                                    points='0 4,0 16'
                                  ></polyline>
                                </g>
                              </g>
                            </svg>
                            <span className='rating__sr'>4 stars—Good</span>
                          </label>
                          <label className='rating__label' htmlFor='rating-5'>
                            <svg
                              className='rating__star'
                              width='32'
                              height='32'
                              viewBox='0 0 32 32'
                              aria-hidden='true'
                            >
                              <g transform='translate(16,16)'>
                                <circle
                                  className='rating__star-ring'
                                  fill='none'
                                  stroke='#000'
                                  stroke-width='16'
                                  r='8'
                                  transform='scale(0)'
                                ></circle>
                              </g>
                              <g
                                stroke='#000'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              >
                                <g transform='translate(16,16) rotate(180)'>
                                  <polygon
                                    className='rating__star-stroke'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='none'
                                  ></polygon>
                                  <polygon
                                    className='rating__star-fill'
                                    points='0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07'
                                    fill='#000'
                                  ></polygon>
                                </g>
                                <g
                                  transform='translate(16,16)'
                                  stroke-dasharray='12 12'
                                  stroke-dashoffset='12'
                                >
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(0)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(72)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(144)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(216)'
                                    points='0 4,0 16'
                                  ></polyline>
                                  <polyline
                                    className='rating__star-line'
                                    transform='rotate(288)'
                                    points='0 4,0 16'
                                  ></polyline>
                                </g>
                              </g>
                            </svg>
                            <span className='rating__sr'>
                              5 stars—Excellent
                            </span>
                          </label>
                          <p className='rating__display' data-rating='1' hidden>
                            Terrible
                          </p>
                          <p className='rating__display' data-rating='2' hidden>
                            Bad
                          </p>
                          <p className='rating__display' data-rating='3' hidden>
                            OK
                          </p>
                          <p className='rating__display' data-rating='4' hidden>
                            Good
                          </p>
                          <p className='rating__display' data-rating='5' hidden>
                            Excellent
                          </p>
                        </div>
                      </div>
                    </form>

                    <div className='mb-3'>
                      <label htmlFor='review-title' className='form-label'>
                        Review Title
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='review-title'
                        placeholder='Give your review a title'
                      />
                    </div>

                    <div className='review-text-box'>
                      <label htmlFor='Your-review'>Your review</label>
                      <textarea
                        name=''
                        id='Your-review'
                        placeholder='enter your message'
                      ></textarea>
                    </div>
                    {/* <input className="common-input-btn" type="submit" value="Submit"/> */}
                    <button className='common-input-btn' type='submit'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductReviewTabs
