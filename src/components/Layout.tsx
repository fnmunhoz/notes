import theme from '@src/styles/theme'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
  }
`

const siteTitle = 'notes'
const siteDescription = 'Small app to keep my development notes'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header siteTitle={siteTitle} />
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
