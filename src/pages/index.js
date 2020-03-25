import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Form from "../components/Form"
import Hero from "../components/Hero"
import Progress from "../components/Progress"

const FullWidthContainer = styled.div`
  width: 100%;
`

const PageContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Progress />
    <FullWidthContainer>
      <PageContainer>
        <Form />
      </PageContainer>
    </FullWidthContainer>
  </Layout>
)

export default IndexPage
