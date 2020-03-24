import React, { useRef } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

const Form = () => {
  const formRef = useRef(null)
  const { register, handleSubmit, errors, watch } = useForm()

  const onSubmit = () => {
    formRef.current.submit()
  }

  return (
    <form ref={formRef} name="eoi" method="post" action="/submitted" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="eoi" />
      <input type="text" name="name" placeholder="name" ref={register()} />
      <input type="submit" value="Submit Interest" />
    </form>
  )
}

export default Form