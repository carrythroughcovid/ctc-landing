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
      <MainTitle>Thanks for submitting your interest in the platform!</MainTitle>
      <p>We're just as excited as you are to start supporting them.</p>
      <p>Have you seen the Facebook community? Join up to get a headstart on advertising there!</p>
      <SocialContainer>
        <FacebookLogo />
        <SocialLink target="_blank" href="https://facebook.com">facebook.com</SocialLink>
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
