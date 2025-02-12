import React from 'react'
import Box from 'ui-box'

export default {
  title: 'positioner'
}

export const Positioner = () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box>See popover or tooltip story for now.</Box>
  </Box>
)
