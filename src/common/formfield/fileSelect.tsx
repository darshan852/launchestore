import { TextFieldVariants } from "@mui/material"
import React from "react"

interface FileSelectProps {
  value: string
  onChange: any
  onBlur: any
  name: string
  id: string
  error: string | null
  placeholder: string
  label: string
  variant?: TextFieldVariants | undefined
  multiple?: boolean
}

const FileSelect: React.FC<FileSelectProps> = (props) => {
  const {
    onBlur,
    onChange,
    name,
    id,
    error,
    label,
    placeholder,
    // variant = "outlined",
    multiple = false,
  } = props
  return (
    <>
      <div className='flex flex-col common-inputs fileselect-input'>
        <label htmlFor='username'>{label}</label>
        <input
          type={"file"}
          placeholder={placeholder}
          id={id}
          onChange={(e: any) => onChange(e)}
          name={name}
          onBlur={onBlur}
          multiple={multiple}
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

export default FileSelect
