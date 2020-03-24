import React from 'react'
import { ThemeProvider } from 'styled-components'

import * as colours from './colours'
import { mediaQueries } from './breakpoints'

const theme = {
  ...colours,
  ...mediaQueries,
}

const StyledTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledTheme