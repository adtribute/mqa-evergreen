import React from 'react'
import Box from 'ui-box'
import { Image } from '..'

export default {
  title: 'image'
}

export const _Image = () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Image src="http://placekitten.com/640/480" />
  </Box>
)
