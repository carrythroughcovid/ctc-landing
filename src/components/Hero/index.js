import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "../Layout/Container"
import Hero from "./Hero"
import Pitch from "./Pitch"

const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.purple};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  padding: 2rem 0;

  @media ${props => props.theme.md} {
    flex-direction: row;
  }
`

const HeroSection = () => (
  <OuterWrapper>
    <Container>
      <Wrapper>
        <Hero />
        <Pitch />
      </Wrapper>
    </Container>
  </OuterWrapper>
)

Hero.propTypes = {}

Hero.defaultProps = {}

export default HeroSection
