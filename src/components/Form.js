import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import {
  Form as GrommetForm,
  FormField,
  Button,
  Select,
  TextArea,
} from "grommet"

const businessOptions = ['Restaurant/Cafe','Retail','Other']
const offeringOptions = ['Takeaway','Delivery','Online','Other']

const Form = () => {
  const formRef = useRef(null)
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    formRef.current.submit()
  }

  return (
    <GrommetForm ref={formRef} name="eoi" method="post" action="/submitted" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="eoi" />
      <FormField name="businessName" label="Business Name" ref={register()} />
      <FormField name="name" label="Your Name" ref={register()} />
      <FormField name="email" label="Email" ref={register()} />
      <FormField name="businessType" label="Business Type">
        <Select options={businessOptions} name="businessType" forwardRef={register()} />
      </FormField>
      <FormField name="offeringType" label="Your Offering">
        <Select options={offeringOptions} name="offeringType" forwardRef={register()} />
      </FormField>
      <FormField name="extra" label="Extra Information">
        <TextArea
          placeholder="Tell us more about what you are offering."
          name="extra"
          forwardRef={register()}
        />
      </FormField>
      <FormField name="website" label="Website" ref={register()} />
      <Button type="submit" primary label="Submit" />
    </GrommetForm>
  )
}

export default Form