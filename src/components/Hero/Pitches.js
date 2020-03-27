import React from "react"
import styled from "styled-components"

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

export default PitchSection
