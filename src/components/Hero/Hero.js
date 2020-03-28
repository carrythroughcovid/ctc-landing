import React from "react"
import styled from "styled-components"
import { Currency, Favorite } from 'grommet-icons';

import { MainTitle } from "../Text/index"
import PitchSection from "./Pitches"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;

  @media ${props => props.theme.md} {
    padding-right: 2rem;
  }
`

const pitches = [
  {
    text: "Completely free of charge",
    icon: <Currency color='white' /> // TODO: Replace with correct icon
  },
  {
    text: "Run by volunteers",
    icon: <Favorite color='white'  /> // TODO: Replace with correct icon
  },
  // {
  //   text: "",
  //   icon: <Achievement color='plain'  /> // TODO: Replace with correct icon
  // },
]

const Hero = () => (
  <Wrapper>
    <MainTitle white>We are</MainTitle>
    <PitchSection pitches={pitches} />
  </Wrapper>
)

export default Hero