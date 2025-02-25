import React from 'react'
import Box from '@maestroqa/ui-box'
import { storiesOf } from '@storybook/react'
import { Image } from '..'

storiesOf('image', module).add('Image', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Image src="http://placekitten.com/640/480" />
  </Box>
))
