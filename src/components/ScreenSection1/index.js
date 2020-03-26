import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// TODO: Replace with proper component
import Screenshot1 from "../images/screenshot1"
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

const DoubleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${props => props.theme.md} {
    flex-direction: row;
  }
`

const Showcase = styled.div`
  flex: 1;
  justify-content: center;
  padding: 2rem;
`

const ImageContainer = styled.div`
  max-width: 14rem;
  margin: 0 auto;
`

const CounterWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Counter = styled.span`
  font-size: 5rem;
`

const CounterDescription = styled.span`
  font-size: 2rem;
  margin-left: 2rem;
`

const ScreenSection = () => (
  <OuterWrapper>
    <Container>
      <InnerWrapper>
        <MainTitle>how?</MainTitle>
        <DoubleSection>
          <CounterWrapper>
            <CounterDescription>
              in development is an ios and android app, to get your business into the pockets of as many consumers as possible
            </CounterDescription>
          </CounterWrapper>
          <Showcase>
            {/* TODO: Replace with proper component */}
            <ImageContainer>
              <Screenshot1 />
            </ImageContainer>
          </Showcase>
        </DoubleSection>
      </InnerWrapper>
    </Container>
  </OuterWrapper>
)

ScreenSection.propTypes = {}

ScreenSection.defaultProps = {}

export default ScreenSection
