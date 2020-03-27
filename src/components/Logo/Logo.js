import React from "react"
import styled from "styled-components"

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
  font-size: 1.5rem;
  font-weight: bold;

  @media ${({ theme }) => theme.md} {
    font-size: 2rem;
  }
`

const SubTitle = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const Logo = () => (
  <Wrapper>
    <Title>
      carry<ColoredText>through</ColoredText>covid
    </Title>
    {/* <SubTitle>
      connecting YOUR business to YOUR community
    </SubTitle> */}
  </Wrapper>
)

export default Logo