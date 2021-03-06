import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet } from "grommet"

import Header from "../Header"
import Footer from "../Footer"
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

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <Grommet plain>
      <StyledTheme>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </StyledTheme>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
