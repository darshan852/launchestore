import React from "react"

export interface Option {
  label: string
  value: any
}

interface MultiCheckBoxProps {
  label: string
  options: Option[]
  name: string
  value: number[]
  onChange: any
  error: string | null
  onBlur: any
}

const MultiCheckBox: React.FC<MultiCheckBoxProps> = (props) => {
  const { error, label, name, onBlur, onChange, options, value } = props
  return (
    <>
      <label htmlFor='username'>{label}</label>
      <div className='flex gap-6 items-center mt-1 flex-wrap common-inputs checkbox-input'>
        {options.map((opt, index) => (
          <div className='flex items-center' key={index}>
            <label htmlFor='username'>{opt.label}</label>
            <input
              type={"checkbox"}
              checked={value?.includes(opt.value)}
              onChange={(e) => onChange(opt)}
              onBlur={onBlur}
              name={name}
              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded checked:bg-red-500 indeterminate:bg-red-300'
            />
          </div>
        ))}
      </div>
      <div style={{ minHeight: "25px" }}>
        {error && (
          <span style={{ color: "red" }} className='error'>
            {error}
          </span>
        )}
      </div>
    </>
  )
}

export default MultiCheckBox
