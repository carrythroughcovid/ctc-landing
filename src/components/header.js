import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`

const UnstyledLink = styled(Link)`
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <UnstyledLink to="/">{siteTitle}</UnstyledLink>
    </h1>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
