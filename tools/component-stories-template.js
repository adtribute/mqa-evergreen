'use strict'

function storyTemplate(componentName) {
  return `
export const ${componentName}Story = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <${componentName}>${componentName}</${componentName}>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Component description goes here'
      }
    }
  }
}`
}

module.exports = ({ packageName, componentNames = [] }) => {
  return `
import React from 'react'
import Box from 'ui-box'
import { ${componentNames.join(', ')} } from '../../${packageName}'

/** @type { import('@storybook/react').Meta } */
const meta = {
  title: '${packageName}',
  component: ${componentNames[0] || 'undefined'},
  parameters: {
    docs: {
      description: {
        component: '${packageName} components documentation'
      }
    }
  }
}

export default meta

${componentNames.map(componentName => storyTemplate(componentName)).join('\n\n')}
`.trim()
}
