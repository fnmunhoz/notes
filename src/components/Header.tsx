import theme from '@src/styles/theme'
import Link from 'next/link'
import styled from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher'

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <Container>
    <h1>
      <Link href="/">{siteTitle}</Link>
    </h1>
    <ThemeSwitcher />
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
