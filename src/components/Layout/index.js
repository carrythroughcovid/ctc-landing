import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet } from "grommet"

import Header from "../Header"
import "./Layout.css"

import StyledTheme from "../../styles/StyledTheme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet plain>
      <StyledTheme>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </StyledTheme>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
