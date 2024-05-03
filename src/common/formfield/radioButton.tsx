import React from "react"
interface RadioButtonProps {
  value: string
  onChange: any
  onBlur: any
  name: string
  error: string | null
  label: string
  errorDisabel?: boolean
  type?: string
  option: any
}

const RadioButton = (props: RadioButtonProps) => {
  const { value, onBlur, onChange, name, error, label, errorDisabel, option } =
    props
  return (
    <>
      <div className=''>
        {label !== "" && (
          <label
            htmlFor='username'
            className='text-base font-medium text-gray-900'
          >
            {label}
          </label>
        )}
        <div className='mt-1'>
          <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
            {option.map((opt: any) => (
              <div key={opt.id} className='flex items-center'>
                <input
                  id={opt.id}
                  name={name}
                  type='radio'
                  value={opt.value}
                  defaultChecked={value === opt.value}
                  onChange={(e) => onChange(e)}
                  onBlur={onBlur}
                  className='focus:ring-Primary h-6 w-6 text-Primary border-gray-300'
                />
                <label
                  htmlFor={opt.id}
                  className='ml-3 block text-md font-medium text-gray-700 mt-1'
                >
                  {opt.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        {!errorDisabel && (
          <div style={{ minHeight: "25px" }}>
            {error && (
              <span style={{ color: "red" }} className='error'>
                {error}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default RadioButton
