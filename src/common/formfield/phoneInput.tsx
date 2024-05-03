import React from "react"
import PhoneInput from "react-phone-input-2"

interface PhoneInputTypeProps {
  value: string
  onChange: any
  onBlur: any
  name: string
  label: string
  error: string | null
}
const PhoneInputType: React.FC<PhoneInputTypeProps> = (props) => {
  const { label, onBlur, onChange, value, error } = props
  return (
    <>
      <div className='flex flex-col common-inputs'>
        <label htmlFor='username'>{label}</label>
        <PhoneInput
          country='in'
          countryCodeEditable={false}
          inputStyle={{
            width: "100%",
            height: "53px",
          }}
          onChange={(value, data) => onChange(value, data)}
          value={value}
          onBlur={onBlur}
        />

        <div style={{ minHeight: "22px" }}>
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

export default PhoneInputType
