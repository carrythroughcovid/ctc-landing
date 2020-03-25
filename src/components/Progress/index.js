import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// TODO: Replace with proper component
import ShowcasePlaceholderImage from "../images/placeholder-showcase"
import Container from "../Layout/Container"
import { MainTitle } from "../Text/index"

const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.secondaryBackground};
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

const ProgressSection = () => (
  <OuterWrapper>
    <Container>
      <InnerWrapper>
        <MainTitle>making it a reality</MainTitle>
        <DoubleSection>
          <Showcase>
            {/* TODO: Replace with proper component */}
            <ImageContainer>
              <ShowcasePlaceholderImage />
            </ImageContainer>
          </Showcase>
          <CounterWrapper>
            <Counter>8</Counter>
            <CounterDescription>
              local businesses on board so far
            </CounterDescription>
          </CounterWrapper>
        </DoubleSection>
      </InnerWrapper>
    </Container>
  </OuterWrapper>
)

ProgressSection.propTypes = {}

ProgressSection.defaultProps = {}

export default ProgressSection
