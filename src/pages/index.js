import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Progress from "../components/Progress"
import Action from "../components/Action"

const IndexPage = () => (
  <Layout>
    <SEO title="Carry through COVID" />
    <Action />
    <svg width="100%" viewBox="0 0 10 1">
      <polygon
        stroke="none"
        stroke-width="0"
        fill="#7D4CDB"
        points="0,0.6 0,1 10,1 10,0"
      />
    </svg>
    <Hero />
    <svg width="100%" viewBox="0 0 10 1">
      <polygon
        stroke="none"
        stroke-width="0"
        fill="#7D4CDB"
        points="0,0 0,1 10,0.6 10,0"
      />
    </svg>
    <Progress />
  </Layout>
)

export default IndexPage
