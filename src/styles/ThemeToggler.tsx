import * as React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import light from '../../public/theme/light.svg'
import dark from '../../public/theme/dark.svg'
import styled from 'styled-components'

const isBrowser = typeof window !== 'undefined'

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    if (!isBrowser) return null

    return document.body.dataset.theme
  })

  useEffect(() => {
    if (!theme) return

    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    return darkQuery.addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    })
  }, [])

  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <Button onClick={() => setTheme(nextTheme)}>
      <Image src={theme === 'dark' ? dark : light} alt="Swicht theme" />
    </Button>
  )
}

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export default ThemeToggler
