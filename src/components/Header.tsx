import * as React from 'react'
import Link from 'next/link'
import theme from '../styles/theme'
import ThemeToggler from '../styles/ThemeToggler'
import styled from 'styled-components'

const Header = ({ siteTitle = `` }: { siteTitle: string }) => (
  <Container>
    <h1>
      <Link href="/">{siteTitle}</Link>
    </h1>
    <ThemeToggler />
  </Container>
)

const Container = styled.header`
  display: flex;
  padding: 20px;

  a {
    text-decoration: none;
    font-weight: bolder;
    color: ${theme.colors.primary};
  }

  h1 {
    flex: 1;
    margin: 0;
  }
`

export default Header
