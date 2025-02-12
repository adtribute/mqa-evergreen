import React from 'react'
import Box from 'ui-box'
import { Spinner } from '..'

export default {
  title: 'spinner'
}

export const _Spinner = () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Spinner />
  </Box>
)

export const SpinnerWithCustomSizes = {
  render: () => (
    <Box padding={40}>
      <Spinner size="medium" />
      <Spinner size={60} />
    </Box>
  ),

  name: 'Spinner with custom sizes'
}

export const SpinnerWith300MsDelay = {
  render: () => (
    <Box padding={40}>
      <Spinner delay={300} />
    </Box>
  ),

  name: 'Spinner with 300ms delay'
}
