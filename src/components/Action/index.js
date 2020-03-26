import React from "react"
import styled from "styled-components"
import { Button } from "grommet"

import Container from "../Layout/Container"
import { MainTitle } from "../Text/index"
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
          <MainTitle>a platform supporting small business through COVID19</MainTitle>
          <Description>local community wants to support local business</Description>
          <Description>this is a platform to advertise new offers and opening times</Description>
          <Description>completely free of charge - run by volunteers</Description>
          <Description>enter your details to be included on the platform</Description>
          {/* <Button primary label="join our community on facebook" /> */}
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
