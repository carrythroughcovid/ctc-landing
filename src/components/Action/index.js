import React from "react"
import styled from "styled-components"
import { Button } from "grommet"

import Container from "../Layout/Container"
import { SecondaryTitle } from "../Text/index"
import Form from "../Form"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem 0;
`

const DoubleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${props => props.theme.md} {
    flex-direction: row;
  }
`

const CTAWrapper = styled.div`
  flex: 1;
  justify-content: center;
  padding: 2rem;

  @media ${props => props.theme.md} {
    padding-right: 4rem;
  }
`

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media ${props => props.theme.md} {
    padding-left: 4rem;
  }
`

const Description = styled.p`
`

const ActionSection = () => (
  <Container>
    <Wrapper>
      <DoubleSection>
        <CTAWrapper>
          <SecondaryTitle>expression of interest for small business</SecondaryTitle>
          <Description>we are working fast to make this a reality. if you believe this is of benefit to you, then please express your interest here.</Description>
          <Description>we will be posting updates in the next few days on our facebook page. please join our community and keep in touch.</Description>
          <Button primary label="join our community on facebook" />
        </CTAWrapper>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </DoubleSection>
    </Wrapper>
  </Container>
)

ActionSection.propTypes = {}

ActionSection.defaultProps = {}

export default ActionSection
