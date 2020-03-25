import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const SubmittedPage = () => (
  <Layout>
    <SEO title="Submitted!" />
    <p>Thanks for submitting.</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default SubmittedPage
