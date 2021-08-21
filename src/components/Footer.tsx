import React from 'react'
import theme from '../styles/theme'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Link href="/">notes</Link>
      <Link href="https://about.me/munhoz">about</Link>
      <Link href="https://github.com/fnmunhoz">github</Link>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  padding: 20px;

  a {
    color: ${theme.colors.primary};
    padding-right: 8px;
  }
`

export default Footer
