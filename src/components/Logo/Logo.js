import React from "react"
import styled from "styled-components"

import LogoImg from "../../images/ctc_logo.svg"

const ColoredText = styled.span`
  color: ${({ theme }) => theme.purple};
`

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  color: ${props => props.theme.brandText};
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-left: 1rem;
`

const SubTitle = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const StyledLogo = styled(LogoImg)`
  width: 70px;
  height: 70px;
  transform: translateY(3px)
`

const Logo = () => (
  <Wrapper>
    <StyledLogo />
    <Title>
      carry<ColoredText>through</ColoredText>covid
    </Title>
    {/* <SubTitle>
      connecting YOUR business to YOUR community
    </SubTitle> */}
  </Wrapper>
)

export default Logo