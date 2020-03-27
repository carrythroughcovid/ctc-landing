import React, { useRef } from "react"
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form"
import {
  Form as GrommetForm,
  FormField,
  Button,
} from "grommet"

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

const Form = () => {
  const formRef = useRef(null)
  const { handleSubmit, control } = useForm()

  const onSubmit = () => {
    formRef.current.submit()
  }

  return (
    <FormContainer>
      <StyledForm ref={formRef} name="eoi" method="post" action="/submitted" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
        <FormInputs>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="eoi" />
          <Controller as={<FormField name="name" label="Name" />} name="name" control={control} />
          <Controller as={<FormField name="email" label="Email" />} name="email" control={control} />
        </FormInputs>
        <ButtonContainer>
          <Button type="submit" label="Submit" />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  )
}

export default Form