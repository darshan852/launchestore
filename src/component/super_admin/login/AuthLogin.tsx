"use client"
import React, { useState } from "react"
import * as Yup from "yup"

import { useFormik } from "formik"

import { useRouter } from "next/navigation"
import { apiClient } from "@/src/service/client"
import { setLocalStorage } from "@/src/service/localStorage"
import { roleJson } from "@/src/service/common"
import common from "../property/common.json"

interface loginType {
  title?: string
  // eslint-disable-next-line no-undef
  subtitle?: JSX.Element | JSX.Element[]
  // eslint-disable-next-line no-undef
  subtext?: JSX.Element | JSX.Element[]
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const router = useRouter()
  const [message, setMessage] = useState<string>("")
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(`${common.email_error}`)
      .required(`${common.email_error2}`),
    password: Yup.string().required(`${common.password_error}`),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      setMessage("")
      try {
        const response = await apiClient.login({ params: values })
        if (response.data.success) {
          console.log(response.headers)
          setLocalStorage("authToken", response.headers.authorization)
          if (response.data.data.status === "1") {
            const role = roleJson.find(
              (r) => r.role === response.data.data.role,
            )
            const userDetail = {
              name: response.data.data.full_name,
              email: response.data.data.email,
              id: role?.id,
              foodtype:
                (role?.role !== "Super_Admin" &&
                  response.data.data.vendor.foodtype) ||
                0,
              displayPrice: response.data.data.vendor
                ? response.data.data.vendor.display_price_with_gst
                : "",
            }
            setLocalStorage("userDetail", JSON.stringify(userDetail))
            if (role?.role === "Super_Admin") {
              router.push("/super_admin")
            } else if (role?.role === "Vendor") {
              router.push("/admin")
            } else if (role?.role === "Branch") {
              setLocalStorage(
                "branch",
                response.data.data.vendor.vendors_branches[0].id.toString(),
              )
              router.push("/admin")
            } else {
              router.push("/admin")
            }
          }
        }
      } catch (error: any) {
        console.error(error)
        setMessage(error.message)
      }
    },
  })
  return (
    <>
      {title ? <h2 className='font-bold mb-1'>{title}</h2> : null}

      {subtext}
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <div className='common-inputs'>
          <label>{common.email_label}</label>
          <input
            placeholder={common.email_placeholder}
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            name='email'
            onBlur={formik.handleBlur}
            className='w-full mt-2'
          />
          <div style={{ minHeight: "22px" }}>
            {formik.touched.email && formik.errors.email && (
              <span className='error' style={{ color: "red" }}>
                {formik.errors.email}
              </span>
            )}
          </div>
        </div>
        <div className='common-inputs'>
          <label>{common.password_label}</label>
          <input
            type='password'
            placeholder={common.password_placeholder}
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            name='password'
            onBlur={formik.handleBlur}
            className='w-full mt-2'
          />
          <div style={{ minHeight: "22px" }}>
            {formik.touched.password && formik.errors.password && (
              <span className='error' style={{ color: "red" }}>
                {formik.errors.password}
              </span>
            )}
          </div>
        </div>
        <div style={{ minHeight: "22px" }}>
          {message !== "" && <span style={{ color: "red" }}>{message}</span>}
        </div>
        {/* <Stack
            justifyContent='space-between'
            direction='row'
            alignItems='center'
            my={2}
          >
            <Typography
              component={Link}
              href="/"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "Primary.main",
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack> */}

        <div>
          <button
            type='submit'
            className='w-full uppercase text-center px-6 py-2 border border-Primary text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-white rounded-[5px] shadow-sm bg-Primary hover:bg-transparent hover:text-Primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Primary'
          >
            {common.auth_button_label}
          </button>
        </div>
      </form>

      {subtitle}
    </>
  )
}

export default AuthLogin
