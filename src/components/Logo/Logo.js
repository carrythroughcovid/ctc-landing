import React from "react"
import styled from "styled-components"

const ColoredText = styled.span`
  color: #30729A;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => props.theme.brandText};
`

const Title = styled.div`
  font-size: 2rem;
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
    <SubTitle>
      let's help carry small business through covid19
    </SubTitle>
  </Wrapper>
)

export default Logo