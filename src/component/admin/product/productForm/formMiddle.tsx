import { FormikProps } from "formik"
import React from "react"
import { ProductFormFields } from "../productCommon"
import dynamic from "next/dynamic"

const CustomEditor = dynamic(
  () => {
    return import("@/src/common/formfield/textEditar")
  },
  { ssr: false },
)

interface FormMiddleProps {
  formik: FormikProps<ProductFormFields>
}

const FormMiddle: React.FC<FormMiddleProps> = (props) => {
  const { formik } = props

  return (
    <>
      <div className='w-full mb-5'>
        <label> Description</label>
        <CustomEditor
          value={formik.values.about}
          onChange={(e: string) => formik.setFieldValue("about", e)}
          name='about'
          editorLoaded
        />
      </div>
      <div className='w-full'>
        <label> Content </label>
        <CustomEditor
          value={formik.values.content}
          onChange={(e: string) => formik.setFieldValue("content", e)}
          name='about'
          editorLoaded
        />
      </div>
    </>
  )
}

export default FormMiddle
