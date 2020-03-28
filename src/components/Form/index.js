import React, { useRef, useState } from "react"
import { navigate } from "gatsby"
import styled, { css } from "styled-components"
import { useForm, Controller } from "react-hook-form"
import { Form as GrommetForm, FormField, Button, Select, CheckBox } from "grommet"

const businessOptions = ["Hospitality", "Retail", "Services", "Other"]
const offeringOptions = ["Online Store", "Takeaway/Delivery", "Delivery", "Discounts", "Virtual Services", "Pre-purchased Store Credit", "Other"]

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const FormContainer = styled.div`
  box-shadow: 0px 6px 12px rgba(125, 76, 219, 0.3);
  border: 1px solid #9060eb;
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

const StyledFormField = styled(FormField)`
  margin-top: 1rem;
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

const ErrorMessage = styled.p`
  color: #FF4040;
  padding-left: 1rem;
  font-size: 0.75rem;
`

const BorderlessFormField = styled(FormField)`
  > div {
    border: none;
  }
`

const Form = () => {
  const formRef = useRef(null)
  const { handleSubmit, control, errors, clearError } = useForm()
  const [businessType, setBusinessType] = useState("")
  const [offeringType, setOfferingType] = useState("")

  const onSubmit = (_, e) => {
    formRef.current.submit()
  }

  const backgroundColor = (errors) => (
    errors.businessType ? { select: { background: "#ffc9c9"}} : {}
  )

  return (
    <FormContainer>
      <StyledForm
        ref={formRef}
        name="businessForm"
        method="post"
        action="/submitted_business"
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <FormInputs>
          {/* Netlify spam protection */}
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="eoi" />
          {/* So that netlify can register the fields that aren't initially displayed */}
          <input type="hidden" name="businessTypeOther" value="" />
          <input type="hidden" name="offeringTypeOther" value="" />
          <Controller
            as={
              <StyledFormField
                name="businessName"
                label="Business Name"
                error={errors.businessName && errors.businessName.message}
                required="true"
              />
            }
            name="businessName"
            control={control}
            rules={{
              // required: { value: true, message: "Business name is required" },
              maxLength: { value: 200, message: "Business name is too long" }
            }}
          />
          <Controller
            as={
              <StyledFormField
                name="email"
                label="Email"
                error={errors.email && errors.email.message}
              />
            }
            name="email"
            control={control}
            rules={{
              required: { value: true, message: "Email is required" }, pattern: { value: EMAIL_REGEX, message: "Please enter a valid email" },
              maxLength: { value: 200, message: "Email is too long" }
            }}
          />
          <SelectContainer>
            <Controller
              as={
                <Select
                  placeholder="Type of Business"
                  options={businessOptions}
                  name="businessType"
                />
              }
              name="businessType"
              control={control}
              onChange={selected => {
                setBusinessType(selected[0].value)
                return selected[0].value
              }}
              rules={{
                required: { value: true, message: "Please select a business type" },
              }}
            />
            {errors.businessType && <ErrorMessage>{errors.businessType.message}</ErrorMessage>}
          </SelectContainer>
          {businessType === "Other" && (
            <Controller
              as={
                <StyledFormField
                  name="businessTypeOther"
                  placeholder="Type of Business"
                />
              }
              name="businessTypeOther"
              control={control}
              rules={{
                maxLength: { value: 200, message: "Business type is too long" }
              }}
            />
          )}
          <SelectContainer>
            <BorderlessFormField label="Offering" pad="true">
              {offeringOptions.map((offering, i) => (
                <Controller
                  as={
                    <CheckBox
                      name="offeringType"
                      label={offering}
                    />
                  }
                  name={`offeringType-${i}`}
                  control={control}
                  onChange={selected => {
                    console.log(selected[0].currentTarget.checked)
                    return selected[0].currentTarget.checked
                  }}
                  // rules={{
                  //   required: { value: true, message: "Please let us know what you're offering" },
                  // }}
                />
                // {errors.offeringType && <ErrorMessage>{errors.offeringType.message}</ErrorMessage>}
              ))}
            </BorderlessFormField>
          </SelectContainer>
          {offeringType === "Other" && (
            <Controller
              as={
                <StyledFormField
                  name="offeringTypeOther"
                  placeholder="What is your offering?"
                />
              }
              name="offeringTypeOther"
              control={control}
              rules={{
                maxLength: { value: 200, message: "Offering type is too long" }
              }}
            />
          )}
          <Controller
            as={<StyledFormField name="suburb" label="Suburb" />}
            name="suburb"
            control={control}
            rules={{
              maxLength: { value: 50, message: "Suburb is too long" }
            }}
          />
          <Controller
            as={<StyledFormField name="mobile" label="Mobile Number" />}
            name="mobile"
            control={control}
            rules={{
              maxLength: { value: 15, message: "Mobile is too long" }
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
