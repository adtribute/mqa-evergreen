import React from 'react'
import { ThemeProvider, defaultTheme } from '../src'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      toc: true,
      source: {
        language: 'jsx',
        format: true,
        type: 'code'
      }
    }
  },
  decorators: [
    Story => (
      <ThemeProvider value={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export default preview
