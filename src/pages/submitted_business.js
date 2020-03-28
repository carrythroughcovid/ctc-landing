import React from "react"
import { navigate } from "gatsby"
import { Button } from "grommet"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/Layout/Container"
import { MainTitle } from "../components/Text"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`

const SocialLink = styled.a`
  padding-left: 2rem;

  &:visited {
    color: ${({ theme }) => theme.purple};
  }
`

const FacebookLogo = styled(Facebook)`
  width: 50px;
  height: 50px;
`

const InstagramLogo = styled(Instagram)`
  width: 50px;
  height: 50px;
`

const ButtonContainer = styled.div`
  padding-top: 2rem;
`

const SubmittedPage = () => (
  <Layout>
    <SEO title="Submitted!" />
    <Container>
      <MainTitle>Thanks for submitting your business!</MainTitle>
      <p>We will be in touch very shortly.</p>
      <p>Do you know other businesses looking for a helping hand? Please get them involved.</p>
      <p>Have you liked our facebook page?</p>
      <SocialContainer>
        <FacebookLogo />
        <SocialLink target="_blank" href="https://fb.me/carrythroughcovid">https://fb.me/carrythroughcovid</SocialLink>
      </SocialContainer>
      <p>We are also on Instagram. Message us if you'd like to be featured :)</p>
      <SocialContainer>
        <InstagramLogo />
        <SocialLink target="_blank" href="https://instagram.com">instagram.com</SocialLink>
      </SocialContainer>
      <ButtonContainer>
        <Button onClick={() => navigate("/")} label="Back" />
      </ButtonContainer>
    </Container>
  </Layout>
)

export default SubmittedPage
