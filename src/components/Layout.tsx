import theme from '../styles/theme'
import * as React from 'react'

import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
  }
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Head>
          <title>notes</title>
          <meta
            name="description"
            content="Small app to keep my development notes"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header siteTitle={'notes'} />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
`

const Content = styled.main`
  flex: 1;
`

export default Layout
