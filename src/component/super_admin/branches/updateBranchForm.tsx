import { FormikProps } from "formik"
import React from "react"
import { UpdateBranchFormField } from "./branchesCommon"
import TextFieldCommon from "@/src/common/formfield/textField"
import SelectField from "@/src/common/formfield/selectField"
import branch from "../property/branch.json"

interface UpdateBranchFormProps {
  formik: FormikProps<UpdateBranchFormField>
}

const UpdateBranchForm: React.FC<UpdateBranchFormProps> = (props) => {
  const { formik } = props
  return (
    <div>
      <div className='flex gap-x-8 gap-y-2 flex-wrap'>
        <div className='xxl:w-[30%] xl:w-[40%] lg:w-[40%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <TextFieldCommon
            id='email'
            placeholder={branch.email_placeholder}
            label={branch.email_label}
            value={formik.values.email}
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='outlined'
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
        </div>
        <div className='xxl:w-[20%] xl:w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <SelectField
            error={
              formik.touched.delivery_by && formik.errors.delivery_by
                ? formik.errors.delivery_by
                : null
            }
            label={branch.delivery_by_label}
            name='delivery_by'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("delivery_by", e.target.value)
            }}
            option={[
              {
                label: "Staff",
                value: "0",
              },
              {
                label: "Delivery Boy",
                value: "1",
              },
            ]}
            value={formik.values.delivery_by}
          />
        </div>
        <div className='xxl:w-[20%] xl:w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <SelectField
            error={
              formik.touched.selfPickUp && formik.errors.selfPickUp
                ? formik.errors.selfPickUp
                : null
            }
            label={branch.selfPickUp_label}
            name='selfPickUp'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("selfPickUp", e.target.value)
            }}
            option={[
              {
                label: "Disable",
                value: "0",
              },
              {
                label: "Enabled",
                value: "1",
              },
            ]}
            value={formik.values.selfPickUp}
          />
        </div>
        <div className='xxl:w-[20%] xl:w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <SelectField
            error={
              formik.touched.isOnlinePayment && formik.errors.isOnlinePayment
                ? formik.errors.isOnlinePayment
                : null
            }
            label={branch.isOnlinePayment_label}
            name='isOnlinePayment'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("isOnlinePayment", e.target.value)
            }}
            option={[
              {
                label: "Disable",
                value: "0",
              },
              {
                label: "Enabled",
                value: "1",
              },
            ]}
            value={formik.values.isOnlinePayment}
          />
        </div>
        <div className='xxl:w-[20%] xl:w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <SelectField
            error={
              formik.touched.isCOD && formik.errors.isCOD
                ? formik.errors.isCOD
                : null
            }
            label={branch.isCOD_label}
            name='isCOD'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("isCOD", e.target.value)
            }}
            option={[
              {
                label: "Disable",
                value: "0",
              },
              {
                label: "Enabled",
                value: "1",
              },
            ]}
            value={formik.values.isCOD}
          />
        </div>
        <div className='xxl:w-[20%] xl:w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <SelectField
            error={
              formik.touched.whatsappFlag && formik.errors.whatsappFlag
                ? formik.errors.whatsappFlag
                : null
            }
            label={branch.whatsappFlag_label}
            name='whatsappFlag'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("whatsappFlag", e.target.value)
            }}
            option={[
              {
                label: "Disable",
                value: "0",
              },
              {
                label: "Enabled",
                value: "1",
              },
            ]}
            value={formik.values.whatsappFlag}
          />
        </div>
        <div className='xxl:w-[20%] xl:w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <SelectField
            error={
              formik.touched.delivery_time_date &&
              formik.errors.delivery_time_date
                ? formik.errors.delivery_time_date
                : null
            }
            label={branch.delivery_time_date_label}
            name='delivery_time_date'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("delivery_time_date", e.target.value)
            }}
            option={[
              {
                label: "Disable",
                value: "0",
              },
              {
                label: "Enabled",
                value: "1",
              },
            ]}
            value={formik.values.delivery_time_date}
          />
        </div>
        <div className='xxl:w-[20%] xl:w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-[100%]'>
          <SelectField
            error={
              formik.touched.yearly_plan && formik.errors.yearly_plan
                ? formik.errors.yearly_plan
                : null
            }
            label={branch.yearly_plan_label}
            name='yearly_plan'
            onBlur={formik.handleBlur}
            onChange={(e: { target: { value: any } }) => {
              formik.setFieldValue("yearly_plan", e.target.value)
            }}
            option={[
              {
                label: "1",
                value: "1",
              },
              {
                label: "2",
                value: "2",
              },
              {
                label: "3",
                value: "3",
              },
              {
                label: "4",
                value: "4",
              },
              {
                label: "5",
                value: "5",
              },
            ]}
            value={formik.values.yearly_plan}
          />
        </div>
      </div>
    </div>
  )
}

export default UpdateBranchForm
