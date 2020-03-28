import React from "react"
import styled from "styled-components"

import LogoImg from "../../images/ctc_logo.svg"
import Container from "../Layout/Container"
import { MainTitle } from "../Text/index"
import CommunityForm from "../../components/Form/CommunityForm"

const OuterWrapper = styled.div`
  width: 100%;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem 0;
`

const FormSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  padding-top: 2rem;
`

const StyledLogo = styled(LogoImg)`
  width: 200px;
  height: 200px;
  transform: translateY(3px);
  padding-top: 2rem;
`

const Description = styled.p`

`

const ScreenSection = () => (
  <OuterWrapper id="community">
    <Container>
      <InnerWrapper>
        <MainTitle>are you a local community member?</MainTitle>
        <Description>If you want to support your community, sign up to be notified when we're live!</Description>
        <FormSection>
          <CommunityForm />
        </FormSection>
        <StyledLogo />
      </InnerWrapper>
    </Container>
  </OuterWrapper>
)

ScreenSection.propTypes = {}

ScreenSection.defaultProps = {}

export default ScreenSection
