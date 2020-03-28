import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Button } from "grommet"

import { rems } from '../../styles/breakpoints'
import MaxWidthContainer from '../Layout/Container'
import Logo from '../Logo/Logo'

const OuterWrapper = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`

const UnstyledLink = styled(Link)`
  text-decoration: none;
`

const StyledButton = styled(Button)`
  font-size: 0.8rem;
  padding: 0.1rem 0.4rem;

  @media ${({ theme }) => theme.md} {
    font-size: 1rem;
    padding: 0.2rem 1rem;
  }
`

const Header = () => (
  <OuterWrapper>
    <MaxWidthContainer>
      <InnerWrapper>
        <UnstyledLink to="/">
          <Logo />
        </UnstyledLink>
        <a href="#community"><StyledButton alignSelf="center" primary label="Community Support" /></a>
      </InnerWrapper>
    </MaxWidthContainer>
  </OuterWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
