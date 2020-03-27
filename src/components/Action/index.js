import React from "react"
import styled from "styled-components"
import { Button } from "grommet"

import LogoImg from "../../images/ctc_logo.svg"
import Container from "../Layout/Container"
import { MainTitle } from "../Text/index"
import Form from "../Form"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 1rem 0;

  @media ${props => props.theme.md} {
    padding: 2rem 0;
  }
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

  @media ${props => props.theme.md} {
    padding: 2rem 2rem 2rem 4rem;
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
  padding-top: 0.8rem;
`

const StyledLogo = styled(LogoImg)`
  width: 200px;
  height: 200px;
  transform: translateY(3px);
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`

const ActionSection = () => (
  <Container>
    <Wrapper>
      <DoubleSection>
        <CTAWrapper>
          <MainTitle>a platform supporting small business through COVID19</MainTitle>
          <Description>Local communities want to support their local businesses and need up to date information.</Description>
          <Description>Are you looking to <strong>access local customers</strong> and inform them of what you're offering?</Description>
          <Description>If you have new operating hours, a new online store or delivery option, or something you'd like to share with the community, sign up for early access.</Description>
          {/* <LogoContainer>
            <StyledLogo />
          </LogoContainer> */}

          {/* <Description>are you:</Description>
          <ul>
            <li>trying to stay open?</li>
            <li>changing your offering?</li>
            <li>moving online?</li>
            <li>doing special offers or discounts?</li>
          </ul>
          <Description>we're here to spread the word to your community!</Description> */}
          {/* <Description>completely free of charge - run by volunteers</Description>
          <Description>enter your details to be included on the platform</Description> */}
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
