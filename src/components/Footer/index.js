import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: center;
  @media ${props => props.theme.sm} {
    padding-top: 20px;
  }
`

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    {new Date().getFullYear()} &copy; {siteTitle}
  </StyledFooter>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
