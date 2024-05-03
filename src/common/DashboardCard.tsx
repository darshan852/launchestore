import React from "react"

type Props = {
  title?: string
  subtitle?: string
  // eslint-disable-next-line no-undef
  action?: JSX.Element | any
  // eslint-disable-next-line no-undef
  footer?: JSX.Element
  // eslint-disable-next-line no-undef
  cardheading?: string | JSX.Element
  // eslint-disable-next-line no-undef
  headtitle?: string | JSX.Element
  // eslint-disable-next-line no-undef
  headsubtitle?: string | JSX.Element
  // eslint-disable-next-line no-undef
  children?: JSX.Element
  // eslint-disable-next-line no-undef
  middlecontent?: string | JSX.Element
}

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  return (
    <div className=' bg-white w-full mx-auto shadow-sm rounded-[10px] sm:rounded-[20px]'>
      {cardheading ? (
        <div className='p-4'>
          <h5 className='text-xl font-bold'>{headtitle}</h5>
          <p className='text-sm text-gray-500'>{headsubtitle}</p>
        </div>
      ) : (
        <div className='p-3 pt-4 sm:p-4'>
          {title && (
            <div className='flex items-center justify-between border-b border-bordercolor pb-4 mb-8'>
              <div>
                <h5 className='text-xl font-semibold'>{title}</h5>
                {subtitle && (
                  <p className='text-sm text-gray-500'>{subtitle}</p>
                )}
              </div>
              {action && <div>{action}</div>}
            </div>
          )}
          {children}
        </div>
      )}

      {middlecontent}
      {footer}
    </div>
  )
}

export default DashboardCard
