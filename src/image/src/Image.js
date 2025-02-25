import React, { memo, forwardRef } from 'react'
import Box from '@maestroqa/ui-box'
import PropTypes from 'prop-types'

const Image = memo(
  forwardRef(function Image(props, ref) {
    return <Box is="img" {...props} ref={ref} />
  })
)

Image.propTypes = {
  ...Box.propTypes,
  src: PropTypes.string
}

export default Image
