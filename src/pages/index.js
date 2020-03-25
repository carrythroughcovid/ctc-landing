import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Progress from "../components/Progress"
import Action from "../components/Action"

const IndexPage = () => (
  <Layout>
    <SEO title="Carry through COVID" />
    <Hero />
    <Progress />
    <Action />
  </Layout>
)

export default IndexPage
