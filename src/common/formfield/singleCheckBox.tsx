import React from "react"

interface SingleCheckBoxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  name: string
  error: string | null
  onBlur: () => void
}

const SingleCheckBox: React.FC<SingleCheckBoxProps> = (props) => {
  const { error, label, name, onBlur, onChange, checked } = props

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className='flex items-center mt-1 checkbox-input'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            onBlur={onBlur}
            name={name}
            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded checked:bg-red-500 indeterminate:bg-red-300'
          />
        </div>
      </div>
      {error && (
        <span style={{ color: "red" }} className='error'>
          {error}
        </span>
      )}
    </>
  )
}

export default SingleCheckBox
