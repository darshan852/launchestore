import React from "react"

const RegistersMain = () => {
  return (
    <div className='register-main bg-white shadow p-3 sm:p-5 rounded-[5px]'>
      <div className='register-title bg-Primary text-white px-4 py-3 rounded-[5px]'>
        <h2 className='text-[15px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[15px] font-medium capitalize'>
          Register Open
        </h2>
      </div>
      <div className='register-info-wrp mt-3'>
        <h5 className='font-medium bg-lightblue px-3 py-2 rounded-[5px] inline-block text-[14px] text-white leading-[20px]'>
          Open Register
        </h5>
      </div>

      {/* ----register-details-wrp---- */}
      <div className='register-details-wrp mt-7 bg-[#f9f9f9] p-3 shadow'>
        <h3 className='font-medium text-[16px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] border-b border-lightborder pb-2 text-gray capitalize'>
          Register details
        </h3>
        <div className='register-details-info mt-3 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-x-5 gap-y-5'>
          <div>
            <h5 className='text-gray font-medium text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Outlet
            </h5>
            <p className='font-semibold text-black text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Main Outlet
            </p>
          </div>
          <div>
            <h5 className='text-gray font-medium text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Register
            </h5>
            <p className='font-semibold text-black text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Main Register
            </p>
          </div>
          <div>
            <h5 className='text-gray font-medium text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Closure #
            </h5>
            <p className='font-semibold text-black text-[14px]  xl:text-[16px] lg:text-[14px] '>
              74
            </p>
          </div>
          <div>
            <h5 className='text-gray font-medium text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Opening time
            </h5>
            <p className='font-semibold text-black text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Friday, 19th April, 2024, 2:18pm
            </p>
          </div>
        </div>
      </div>

      {/* ---cash-summary-wrp---- */}
      <div className='cash-summary-wrp mt-7 bg-[#f9f9f9] p-3  overflow-hidden overflow-x-scroll shadow'>
        <div className='supportive-div w-full lg:min-w-[100%] min-w-[800px]'>
          <h3 className='font-medium text-[16px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-gray pb-2 capitalize'>
            Cash Summary
          </h3>

          <div className='cash-summary-info grid grid-cols-3 lg:grid-cols-3 md:grid-cols-auto bg-Primary text-white py-3 px-2 rounded-[5px]'>
            <div className='cash-summary-left col-span-1'></div>
            <div className='cash-summary-right col-span-2 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-auto gap-x-5 overflow-hidden'>
              <div className='font-medium text-[16px] lg:min-w-[auto] md:min-w-[200px]'>
                <h4 className='font-medium text-[14px]  xl:text-[16px] lg:text-[14px]'>
                  EXPECTED (RS)
                </h4>
              </div>
              <div className='font-medium text-[16px] lg:min-w-[auto] md:min-w-[200px]'>
                <h4 className='font-medium text-[14px]  xl:text-[16px] lg:text-[14px]'>
                  COUNTED (RS)
                </h4>
              </div>
              <div className='font-medium text-[16px] lg:min-w-[auto] md:min-w-[200px]'>
                <h4 className='font-medium text-[14px]  xl:text-[16px] lg:text-[14px]'>
                  DIFFERENCES (RS)
                </h4>
              </div>
            </div>
          </div>

          <div className='cash-summary-info grid grid-cols-3 rounded-[5px] mt-3 px-2'>
            <div className='cash-summary-left col-span-1 text-[14px]  xl:text-[16px] lg:text-[14px] '>
              Cash in cash drawer
            </div>
            <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px]  xl:text-[16px] lg:text-[14px] '>
                  1219.60
                </h4>
              </div>
              <div className='font-medium'>
                <input
                  type='number'
                  min='0'
                  id='counted_cash'
                  className='form-control text-[14px]  xl:text-[16px] lg:text-[14px] '
                  placeholder='Enter Amount'
                  value='0.00'
                />
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-red-500 text-[14px]  xl:text-[16px] lg:text-[14px] '>
                  -1219.60
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----cash-movements-day-wrp--- */}
      <div className='cash-movements-day-wrp mt-7 bg-[#f9f9f9] p-3 shadow'>
        <h3 className='font-medium text-[16px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] border-b border-lightborder pb-2 text-gray capitalize'>
          Cash movements for the day
        </h3>
        <div className='cash-movements-day-info grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 mt-3 gap-x-5 gap-y-3'>
          <div className='flex items-start gap-x-1'>
            <h5 className='font-medium text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
              Time:
            </h5>
            <p className='font-medium text-gray text-[14px] xl:text-[16px] lg:text-[14px]'>
              Friday, 19th April, 2024, 2:18pm
            </p>
          </div>
          <div className='flex items-start gap-x-1'>
            <h5 className='font-medium text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
              User:
            </h5>
            <p className='font-medium text-gray text-[14px] xl:text-[16px] lg:text-[14px]'>
              Big Bucket
            </p>
          </div>
          <div className='flex items-start gap-x-1'>
            <h5 className='font-medium text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
              Reasons:
            </h5>
            <p className='font-medium text-gray text-[14px] xl:text-[16px] lg:text-[14px]'>
              Opening float
            </p>
          </div>
          <div className='flex items-start gap-x-1'>
            <h5 className='font-medium text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
              Transaction (Rs):
            </h5>
            <p className='font-medium text-gray text-[14px] xl:text-[16px] lg:text-[14px]'>
              1200.00
            </p>
          </div>
          <div className='flex items-start gap-x-1'>
            <h5 className='font-medium text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
              Cash payments received:
            </h5>
            <p className='font-medium text-gray text-[14px] xl:text-[16px] lg:text-[14px]'>
              19.60
            </p>
          </div>
        </div>
      </div>

      {/* ----Other Payments Summary---- */}
      <div className='cash-summary-wrp mt-7 bg-[#f9f9f9] p-3 shadow overflow-hidden overflow-x-scroll'>
        <div className='supportive-div w-full lg:min-w-[100%] min-w-[800px]'>
          <h3 className='font-medium text-[16px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-gray pb-2 capitalize'>
            Other Payments Summary
          </h3>

          <div className='cash-summary-info grid grid-cols-3 bg-Primary text-white py-3 px-2 rounded-[5px] '>
            <div className='cash-summary-left col-span-1 font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
              PAYMENT TYPES
            </div>
            <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  EXPECTED (RS)
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  COUNTED (RS)
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  DIFFERENCES (RS)
                </h4>
              </div>
            </div>
          </div>

          <div className='cash-summary-info grid grid-cols-3 rounded-[5px] mt-3 px-2'>
            <div className='cash-summary-left col-span-1 text-[14px] xl:text-[16px] lg:text-[14px]'>
              Online Payment
            </div>
            <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  1219.60
                </h4>
              </div>
              <div className='font-medium'>
                <input
                  type='number'
                  min='0'
                  id='counted_cash'
                  className='form-control text-[14px] xl:text-[16px] lg:text-[14px] w-full'
                  placeholder='Enter Amount'
                  value='0.00'
                />
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-red-500 text-[14px] xl:text-[16px] lg:text-[14px]'>
                  -1219.60
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----Total Payments Summary---- */}
      <div className='cash-summary-wrp mt-7 bg-[#f9f9f9] p-3 shadow overflow-hidden overflow-x-scroll'>
        <div className='supportive-div w-full lg:min-w-[100%] min-w-[800px] '>
          <h3 className='font-medium text-[16px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-gray pb-2 capitalize'>
            Total Payments Summary
          </h3>

          <div className='cash-summary-info grid grid-cols-3 bg-Primary text-white py-3 px-2 rounded-[5px] '>
            <div className='cash-summary-left col-span-1 font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
              PAYMENT TYPES TOTAL
            </div>
            <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  EXPECTED (RS)
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  COUNTED (RS)
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  DIFFERENCES (RS)
                </h4>
              </div>
            </div>
          </div>

          <div className='cash-summary-info grid grid-cols-3 rounded-[5px] mt-3 px-2'>
            <div className='cash-summary-left col-span-1 text-[14px] xl:text-[16px] lg:text-[14px]'>
              Total
            </div>
            <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  1219.60
                </h4>
              </div>
              <div className='font-medium'>
                <input
                  type='number'
                  min='0'
                  id='counted_cash'
                  className='form-control text-[14px] xl:text-[16px] lg:text-[14px]'
                  placeholder='Enter Amount'
                  value='0.00'
                />
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-red-500 text-[14px] xl:text-[16px] lg:text-[14px]'>
                  -1219.60
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='rgister-closure-not'></div>

      <div className='register-button flex items-center flex-col sm:flex-row gap-x-5 gap-y-3 justify-end mt-10'>
        <button className='bg-red-500 border border-red-500 transition duration-200 hover:bg-transparent hover:text-red-500 px-6 py-2 rounded-[5px] font-semibold text-[13px] lg:text-[15px] md:text-[14px] text-white'>
          Close Register
        </button>
        <button className='bg-Secondary border border-Secondary transition duration-200 px-6 py-2 rounded-[5px] font-semibold text-[13px] lg:text-[15px] md:text-[14px]'>
          View Register Clouser Sales
        </button>
      </div>

      <div className='closure-summary-main mt-10  '>
        <div className='register-title bg-Primary text-white px-4 py-3 rounded-[5px]'>
          <h2 className='text-[15px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[15px] font-medium capitalize'>
            Closure Summary
          </h2>
        </div>
        <div className='register-info-wrp mt-3'>
          <h5 className='font-medium bg-lightblue px-3 py-2 rounded-[5px] inline-block text-[14px] text-white leading-[20px]'>
            Register Closure Summary
          </h5>
        </div>

        {/* ----register-details-wrp---- */}
        <div className='register-details-wrp mt-7 bg-[#f9f9f9] p-3 shadow'>
          <div className='register-details-info grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3'>
            <div className='flex items-start gap-x-2'>
              <h5 className='text-gray font-medium min-w-[68px] text-[14px] xl:text-[16px] lg:text-[14px]'>
                Register:
              </h5>
              <p className='font-semibold text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
                Main Register
              </p>
            </div>
            <div className='flex items-start gap-x-2'>
              <h5 className='text-gray font-medium min-w-[68px] text-[14px] xl:text-[16px] lg:text-[14px]'>
                Opened:
              </h5>
              <p className='font-semibold text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
                Monday, 22nd April, 2024, 2:50pm
              </p>
            </div>
            <div className='flex items-start gap-x-2'>
              <h5 className='text-gray font-medium min-w-[68px] text-[14px] xl:text-[16px] lg:text-[14px]'>
                Outlet:
              </h5>
              <p className='font-semibold text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
                Main Outlet
              </p>
            </div>

            <div className='flex items-start gap-x-2'>
              <h5 className='text-gray font-medium min-w-[68px] text-[14px] xl:text-[16px] lg:text-[14px]'>
                Closed:
              </h5>
              <p className='font-semibold text-black text-[14px] xl:text-[16px] lg:text-[14px]'>
                Monday, 22nd April, 2024, 6:17pm
              </p>
            </div>
          </div>
        </div>

        {/* ---cash-summary-wrp---- */}
        <div className='cash-summary-wrp mt-7 bg-[#f9f9f9] p-3 shadow overflow-hidden overflow-x-scroll'>
          <div className='supportive-div w-full lg:min-w-[100%] min-w-[800px] '>
            <h3 className='font-medium text-[16px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-gray pb-2 capitalize'>
              Payments
            </h3>

            <div className='cash-summary-info grid grid-cols-3 bg-Primary text-white py-3 px-2 rounded-[5px]'>
              <div className='cash-summary-left col-span-1 text-[14px] xl:text-[16px] lg:text-[14px]'>
                PAYMENT TYPES
              </div>
              <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
                <div className='font-medium'>
                  <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                    EXPECTED
                  </h4>
                </div>
                <div className='font-medium'>
                  <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                    COUNTED
                  </h4>
                </div>
                <div className='font-medium'>
                  <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                    DIFFERENCES
                  </h4>
                </div>
              </div>
            </div>
            <div className='cash-summary-info grid grid-cols-3 rounded-[5px] mt-3 px-2'>
              <div className='cash-summary-left col-span-1 text-[14px] xl:text-[16px] lg:text-[14px]'>
                Cash in cash drawer
              </div>
              <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
                <div className='font-medium'>
                  <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                    1219.60
                  </h4>
                </div>
                <div className='font-medium'>
                  <input
                    type='number'
                    min='0'
                    id='counted_cash'
                    className='form-control text-[14px] xl:text-[16px] lg:text-[14px]'
                    placeholder='Enter Amount'
                    value='0.00'
                  />
                </div>
                <div className='font-medium'>
                  <h4 className='font-medium text-red-500 text-[14px] xl:text-[16px] lg:text-[14px]'>
                    -1219.60
                  </h4>
                </div>
              </div>
            </div>
            <div className='cash-summary-info grid grid-cols-3 rounded-[5px] mt-3 px-2'>
              <div className='cash-summary-left col-span-1 text-[14px] xl:text-[16px] lg:text-[14px]'>
                Cash in cash drawer
              </div>
              <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
                <div className='font-medium'>
                  <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                    1219.60
                  </h4>
                </div>
                <div className='font-medium'>
                  <input
                    type='number'
                    min='0'
                    id='counted_cash'
                    className='form-control text-[14px] xl:text-[16px] lg:text-[14px]'
                    placeholder='Enter Amount'
                    value='0.00'
                  />
                </div>
                <div className='font-medium'>
                  <h4 className='font-medium text-red-500 text-[14px] xl:text-[16px] lg:text-[14px]'>
                    -1219.60
                  </h4>
                </div>
              </div>
            </div>
            <div className='cash-summary-info grid grid-cols-3 rounded-[5px] mt-3 px-2'>
              <div className='cash-summary-left col-span-1 text-[14px] xl:text-[16px] lg:text-[14px]'>
                Cash in cash drawer
              </div>
              <div className='cash-summary-right col-span-2 grid grid-cols-3 gap-x-5'>
                <div className='font-medium'>
                  <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                    1219.60
                  </h4>
                </div>
                <div className='font-medium'>
                  <input
                    type='number'
                    min='0'
                    id='counted_cash'
                    className='form-control text-[14px] xl:text-[16px] lg:text-[14px]'
                    placeholder='Enter Amount'
                    value='0.00'
                  />
                </div>
                <div className='font-medium'>
                  <h4 className='font-medium text-red-500 text-[14px] xl:text-[16px] lg:text-[14px]'>
                    -1219.60
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---cash-summary-wrp---- */}
        <div className='cash-summary-wrp mt-7 bg-[#f9f9f9] p-3 shadow overflow-hidden overflow-x-scroll'>
          <div className='supportive-div w-full lg:min-w-[100%] min-w-[800px] '>
            <h3 className='font-medium text-[16px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-gray pb-2 capitalize'>
              Cash Movements
            </h3>

            <div className='cash-summary-info grid grid-cols-4 gap-x-5 bg-Primary text-white py-3 px-2 rounded-[5px]'>
              <div className='cash-summary-left text-[14px] xl:text-[16px] lg:text-[14px]'>
                TYPES
              </div>

              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  DATE AND TIME
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  NOTE
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  AMOUNT
                </h4>
              </div>
            </div>
            <div className='cash-summary-info grid grid-cols-4 gap-x-5 rounded-[5px] mt-3 px-2'>
              <div className='cash-summary-left text-[14px] xl:text-[16px] lg:text-[14px]'>
                OPENING FLOAT
              </div>

              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  MONDAY, 22ND APRIL, 2024, 2:50PM
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  test
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px] '>
                  100.00
                </h4>
              </div>
            </div>
            <div className='cash-summary-info grid grid-cols-4 gap-x-5 rounded-[5px] mt-3 px-2'>
              <div className='cash-summary-left text-[14px] xl:text-[16px] lg:text-[14px]'>
                CLOSING FLOAT
              </div>

              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  MONDAY, 22ND APRIL, 2024, 6:17PM
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  {" "}
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-Primary text-[14px] xl:text-[16px] lg:text-[14px]'>
                  0.00
                </h4>
              </div>
            </div>
            <div className='cash-summary-info grid grid-cols-4 gap-x-5 rounded-[5px] mt-3 px-2'>
              <div className='cash-summary-left text-[14px] xl:text-[16px] lg:text-[14px]'>
                PROFIT/LOSS
              </div>

              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  {" "}
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-[14px] xl:text-[16px] lg:text-[14px]'>
                  {" "}
                </h4>
              </div>
              <div className='font-medium'>
                <h4 className='font-medium text-red-500 text-[14px] xl:text-[16px] lg:text-[14px]'>
                  -100.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistersMain
