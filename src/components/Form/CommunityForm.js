import React, { useRef } from "react"
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form"
import {
  Form as GrommetForm,
  FormField,
  Button,
} from "grommet"

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

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

  span {
    font-size: 0.75rem;
  }
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
  const { handleSubmit, control, errors } = useForm()

  const onSubmit = () => {
    formRef.current.submit()
  }

  return (
    <FormContainer>
      <StyledForm
        ref={formRef}
        name="communityForm"
        method="post"
        action="/submitted_community"
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <FormInputs>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="communityForm" />
          <Controller
            as={<FormField name="name" label="Name" error={errors.name && errors.name.message} />}
            name="name"
            control={control}
            rules={{
              required: { value: true, message: "Name is required" },
              maxLength: 100,
            }}
          />
          <Controller
            as={<FormField name="email" label="Email" error={errors.email && errors.email.message} />}
            name="email"
            control={control}
            rules={{
              required: { value: true, message: "Email is required" },
              pattern: {
                value: EMAIL_REGEX,
                message: "Please enter a valid email",
              },
              maxLength: 100,
            }}
          />
        </FormInputs>
        <ButtonContainer>
          <Button type="submit" label="Submit" />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  )
}

export default Form