import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Progress from "../components/Progress"
import ScreenSection1 from "../components/ScreenSection1"
import ScreenSection2 from "../components/ScreenSection2"
import Action from "../components/Action"
import Community from "../components/Community"

const NoMarginSvg = styled.svg`
  margin-bottom: -10px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Carry through COVID" />
    <Action />
    <NoMarginSvg width="100%" viewBox="0 0 10 1">
      <polygon
        stroke="none"
        stroke-width="0"
        fill="#7D4CDB"
        points="0,0.6 0,1 10,1 10,0"
      />
    </NoMarginSvg>
    <Hero />
    <svg width="100%" viewBox="0 0 10 1">
      <polygon
        stroke="none"
        stroke-width="0"
        fill="#7D4CDB"
        points="0,0 0,1 10,0.6 10,0"
      />
    </svg>
    <ScreenSection1 />
    <NoMarginSvg width="100%" viewBox="0 0 10 1">
      <polygon
        stroke="none"
        stroke-width="0"
        fill="#CDCDCD"
        points="0,0 0,1 10,1 10,0.6"
      />
    </NoMarginSvg>
    <ScreenSection2 />
    <Community />
  </Layout>
)

export default IndexPage
