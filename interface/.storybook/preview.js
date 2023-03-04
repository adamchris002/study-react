import React from "react"
import { ThemeProvider, CssBaseline } from "@emotion/react"
import { darkTheme } from "../src/Theme/dark.theme"

export const muiThemes = (Story) => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}