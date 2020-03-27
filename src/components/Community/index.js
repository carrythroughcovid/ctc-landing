import React from "react"
import styled from "styled-components"

import LogoImg from "../../images/ctc_logo.svg"
import Container from "../Layout/Container"
import { MainTitle } from "../Text/index"

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
`

const StyledLogo = styled(LogoImg)`
  width: 200px;
  height: 200px;
  transform: translateY(3px);
`

const ScreenSection = () => (
  <OuterWrapper>
    <Container>
      <InnerWrapper>
        <MainTitle>are you a local community member?</MainTitle>
        <StyledLogo />
        <FormSection>

        </FormSection>
      </InnerWrapper>
    </Container>
  </OuterWrapper>
)

ScreenSection.propTypes = {}

ScreenSection.defaultProps = {}

export default ScreenSection
