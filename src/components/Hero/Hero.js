import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { MainTitle } from "../Text/index"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 0;

  @media ${props => props.theme.md} {
    padding-right: 2rem;
  }
`

const Subtitle = styled.p`

`

const Hero = () => (
  <Wrapper>
    <MainTitle>let's help carry small businesses through covid19</MainTitle>
    <Subtitle>
      we're building a platform to help small business stay connected with locals during the covid19 pandemic blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
    </Subtitle>
  </Wrapper>
)

export default Hero