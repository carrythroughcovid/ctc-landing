import React from "react"
import { ThemeProvider } from "styled-components"

import colours from "./colours"
import { mediaQueries } from "./breakpoints"

const theme = {
  ...colours,
  ...mediaQueries,
}

const StyledTheme = ({ children }) => {
  return (
    <>
      {console.log(theme)}
      {console.log(theme.purple)}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default StyledTheme
