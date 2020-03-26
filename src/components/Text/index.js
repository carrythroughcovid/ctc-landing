import styled from "styled-components"

export const MainTitle = styled.h1`
  font-size: 2rem;
  color: ${props => props.white ? 'white' : props.theme.brandText};
`

export const SecondaryTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.white ? 'white' : props.theme.brandText};
`