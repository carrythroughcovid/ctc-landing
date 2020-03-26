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
    <MainTitle white>get your business in front of locals</MainTitle>
    <Subtitle>
      the community wants to support - they just need to be informed
    </Subtitle>
  </Wrapper>
)

export default Hero