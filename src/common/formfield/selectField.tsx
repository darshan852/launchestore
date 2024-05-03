import React from "react"

export interface Option {
  label: string
  value: string
}

interface selectFieldProps {
  label: string
  name: string
  onChange: any
  value: string
  onBlur?: any
  error: string | null
  option: Option[]
}

const SelectField: React.FC<selectFieldProps> = (props) => {
  const { error, label, name, onBlur, onChange, value, option } = props
  return (
    <div className='flex flex-col common-inputs'>
      {label !== "" && (
        <label className='text-lable text-sm font-helvetica' htmlFor='username'>
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={onBlur}
        // inputProps={{ "aria-label": "Without label" }}
        // MenuProps={MenuProps}
        className=''
      >
        {option.map((opt, index) => (
          <option value={opt.value} key={index}>
            {opt.label}
          </option>
        ))}
      </select>
      <div style={{ minHeight: "25px" }}>
        {error && (
          <span style={{ color: "red" }} className='error'>
            {error}
          </span>
        )}
      </div>
    </div>
  )
}

export default SelectField
