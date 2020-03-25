import React, { useRef } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import {
  Form as GrommetForm,
  FormField,
  Button,
  Select,
} from "grommet"

const businessOptions = ['Restaurant/Cafe','Retail','Other']

const FormContainer = styled.div`
  box-shadow: 0px 6px 12px rgba(125, 76, 219, 0.3);
  border: 1px solid #9060EB;
  border-radius: 3px;
  padding: 2rem;
  width: 100%;
`

const StyledForm = styled(GrommetForm)`
  display: flex;
  flex-direction: column;
`

const FormInputs = styled.div`
  max-width: 18rem;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
`

const SelectContainer = styled.div`
  margin-top: 2rem;
`

const Form = () => {
  const formRef = useRef(null)
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    formRef.current.submit()
  }

  return (
    <FormContainer>
      <StyledForm ref={formRef} name="eoi" method="post" action="/submitted" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
        <FormInputs>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="eoi" />
          <FormField name="businessName" label="Business Name" ref={register()} />
          <FormField name="email" label="Email" ref={register()} />
          <SelectContainer>
            <Select placeholder="Business Type" options={businessOptions} name="businessType" forwardRef={register()} />
          </SelectContainer>
        </FormInputs>
        <ButtonContainer>
          <Button type="submit" label="Submit" />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  )
}

export default Form