import React from 'react'
import Box from '@maestroqa/ui-box'
import { storiesOf } from '@storybook/react'
import { Spinner } from '..'

storiesOf('spinner', module)
  .add('Spinner', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Spinner />
    </Box>
  ))
  .add('Spinner with custom sizes', () => (
    <Box padding={40}>
      <Spinner size="medium" />
      <Spinner size={60} />
    </Box>
  ))
  .add('Spinner with 300ms delay', () => (
    <Box padding={40}>
      <Spinner delay={300} />
    </Box>
  ))
