import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/Form"

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
    <FullWidthContainer>
      <PageContainer>
        <Form />
      </PageContainer>
    </FullWidthContainer>
  </Layout>
)

export default IndexPage
