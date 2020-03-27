import React, { useRef, useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form"
import {
  Form as GrommetForm,
  FormField,
  Button,
  Select,
} from "grommet"

const businessOptions = ['Restaurant/Cafe','Retail','Other']
const offeringOptions = ['Online','Takeaway','Delivery','Other']

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
  const { register, handleSubmit, getValues, control } = useForm()
  const [businessType, setBusinessType] = useState("")
  const [offeringType, setOfferingType] = useState("")

  const onSubmit = (data, e) => {
    e.preventDefault()
    navigate(
      "/submitted",
      {
        state: { submissionType: "Business" },
      }
    )
    // formRef.current.submit()
  }

  return (
    <FormContainer>
      <StyledForm ref={formRef} name="eoi" method="post" action="/submitted" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
        <FormInputs>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="eoi" />
          <input type="hidden" name="businessTypeOther" value="" />
          <input type="hidden" name="offeringTypeOther" value="" />
          <Controller as={<FormField name="businessName" label="Business Name" />} name="businessName" control={control} />
          <Controller as={<FormField name="email" label="Email" />} name="email" control={control} />
          <SelectContainer>
            <Controller
              as={
                <Select placeholder="Type of Business" options={businessOptions} name="businessType" />
              }
              name="businessType"
              control={control}
              onChange={selected => setBusinessType(selected[0].value)}
            />
          </SelectContainer>
          {businessType === "Other" && <Controller as={<FormField name="businessTypeOther" placeholder="Type of Business" />} name="businessTypeOther" control={control} />}
          <Controller as={<FormField name="test" placeholder="Test field" />} name="test" control={control} />
          <SelectContainer>
            <Controller
              as={
                <Select placeholder="Offering" options={offeringOptions} name="offeringType" />
              }
              name="offeringType"
              control={control}
              onChange={selected => setOfferingType(selected[0].value)}
            />
          </SelectContainer>
          {offeringType === "Other" && <Controller as={<FormField name="offeringTypeOther" placeholder="What is your offering?" />} name="offeringTypeOther" control={control} />}
          <Controller as={<FormField name="suburb" label="Suburb" />} name="suburb" control={control} />
          <Controller as={<FormField name="mobile" label="Mobile Number" />} name="mobile" control={control} />
        </FormInputs>
        <ButtonContainer>
          <Button type="submit" label="Submit" />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  )
}

export default Form