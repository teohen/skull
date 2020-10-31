import React from 'react'

import GlobalStyle from '../styles/global'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import { HideProvider } from '../contexts/hide.context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <HideProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </HideProvider>
  )
}

export default MyApp
