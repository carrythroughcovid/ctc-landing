import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Achievement } from 'grommet-icons';

import { MainTitle } from "../Text/index"
import PitchSection from "./Pitches"

const pitches = [
  {
    text: "connect businesses to locals",
    icon: <Achievement color='plain' /> // TODO: Replace with correct icon
  },
  {
    text: "inform community on trading updates and offers",
    icon: <Achievement color='plain'  /> // TODO: Replace with correct icon
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
    <MainTitle white>the mission</MainTitle>
    <PitchSection pitches={pitches} />
  </Wrapper>
)

export default Pitch