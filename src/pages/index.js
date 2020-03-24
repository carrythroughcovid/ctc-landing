import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Carry through Covid</h1>
    <Link to="/submitted/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
