import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Achievement } from 'grommet-icons';

import { MainTitle } from "../Text/index"

const pitches = [
  {
    text: "connect businesses to locals",
    icon: <Achievement color='plain' /> // TODO: Replace with correct icon
  },
  {
    text: "inform community on trading updates and offers",
    icon: <Achievement color='plain'  /> // TODO: Replace with correct icon
  },
  {
    text: "increase accessibility for all: a free platfor, run by local volunteers",
    icon: <Achievement color='plain'  /> // TODO: Replace with correct icon
  },
]

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 1rem;

  @media ${props => props.theme.md} {
    padding-left: 2rem;
  }
`

const PitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.25rem 0;
`

const PitchText = styled.span`
  margin-left: 1rem;
`

const PitchItem = ({ text, icon }) => (
  <PitchWrapper>
    {icon}
    <PitchText>{text}</PitchText>
  </PitchWrapper>
)

const PitchSection = ({ pitches }) => (
  pitches.map(({ text, icon }) => <PitchItem text={text} icon={icon} />)
)

const Pitch = () => (
  <Wrapper>
    <MainTitle white>the mission</MainTitle>
    <PitchSection pitches={pitches} />
  </Wrapper>
)

export default Pitch