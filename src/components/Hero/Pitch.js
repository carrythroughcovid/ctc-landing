import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Achievement, Nodes } from 'grommet-icons';

import { MainTitle } from "../Text/index"
import PitchSection from "./Pitches"

const pitches = [
  {
    text: "Keep small businesses afloat",
    icon: <Achievement color='white' /> // TODO: Replace with correct icon
  },
  {
    text: "Enable community support through technology",
    icon: <Nodes color='white'  /> // TODO: Replace with correct icon
  },
  // {
  //   text: "increase accessibility for all: a free platfor, run by local volunteers",
  //   icon: <Achievement color='plain'  /> // TODO: Replace with correct icon
  // },
]

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 1rem;

  @media ${props => props.theme.md} {
    padding-left: 2rem;
  }
`

const Pitch = () => (
  <Wrapper>
    <MainTitle white>The mission</MainTitle>
    <PitchSection pitches={pitches} />
  </Wrapper>
)

export default Pitch