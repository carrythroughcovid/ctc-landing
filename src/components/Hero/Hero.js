import React from "react"
import styled from "styled-components"
import { Achievement } from 'grommet-icons';

import { MainTitle } from "../Text/index"
import PitchSection from "./Pitches"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 0;

  @media ${props => props.theme.md} {
    padding-right: 2rem;
  }
`

const pitches = [
  {
    text: "completely free of charge",
    icon: <Achievement color='plain' /> // TODO: Replace with correct icon
  },
  {
    text: "building an iOS and android app",
    icon: <Achievement color='plain'  /> // TODO: Replace with correct icon
  },
  // {
  //   text: "",
  //   icon: <Achievement color='plain'  /> // TODO: Replace with correct icon
  // },
]

const Hero = () => (
  <Wrapper>
    <MainTitle white>we are</MainTitle>
    <PitchSection pitches={pitches} />
  </Wrapper>
)

export default Hero