import React, { useEffect, useRef } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import Editor from "@/ckeditor5-custom-build/build/ckeditor"

const CustomEditor = ({ onChange, editorLoaded, name, value }: any) => {
  const editorRef = useRef<any>()

  useEffect(() => {
    editorRef.current = { CKEditor, Editor }
  }, [])

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={Editor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData()
            onChange(data)
          }}
        />
      ) : (
        <div>Editor Loading...</div>
      )}
    </>
  )
}

export default CustomEditor
