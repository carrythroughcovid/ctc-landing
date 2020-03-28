import React from "react"
import { navigate } from "gatsby"
import { Button } from "grommet"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/Layout/Container"
import { MainTitle } from "../components/Text"

const SubmittedPage = () => (
  <Layout>
    <SEO title="Submitted!" />
    <Container>
      <MainTitle>Thanks for signing up!</MainTitle>
      <p>We will be in touch very shortly. Until then feel free to join our Facebook group or follow us on Instagram!</p>
    </Container>
    <Button onClick={() => navigate("/")} label="Back" />
  </Layout>
)

export default SubmittedPage