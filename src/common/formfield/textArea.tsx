import { TextFieldVariants } from "@mui/material"
import React from "react"

interface TextAreaProps {
  value: string
  onChange: any
  onBlur: any
  name: string
  id: string
  error: string | null
  placeholder: string
  label: string
  variant?: TextFieldVariants | undefined
  row?: number
}
const TextArea: React.FC<TextAreaProps> = (props) => {
  const {
    value,
    onBlur,
    onChange,
    name,
    id,
    error,
    label,
    placeholder,
    row = 4,
  } = props
  return (
    <>
      <div className='flex flex-col common-inputs'>
        <label htmlFor='username'>{label}</label>
        <textarea
          rows={row}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
        />
        <div style={{ minHeight: "25px" }}>
          {error && (
            <span style={{ color: "red" }} className='error'>
              {error}
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default TextArea
