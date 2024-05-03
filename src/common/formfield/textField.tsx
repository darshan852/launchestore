import React from "react"

interface TextFieldProps {
  value: string
  onChange: any
  onBlur: any
  name: string
  id: string
  error: string | null
  placeholder: string
  label: string
  variant?: string
  errorDisabel?: boolean
  type?: string
  disabled?: boolean
}

const TextFieldCommon: React.FC<TextFieldProps> = (props) => {
  const {
    type,
    value,
    onBlur,
    onChange,
    name,
    id,
    error,
    label,
    placeholder,
    errorDisabel,
    disabled = false,
  } = props
  return (
    <>
      <div className='flex flex-col common-inputs'>
        {label !== "" && <label htmlFor='username'>{label}</label>}
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          readOnly={disabled}
        />
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

export default TextFieldCommon
