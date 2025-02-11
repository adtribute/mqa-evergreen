import React from 'react'
import Box from 'ui-box'
import { SearchInput } from '..'
import { Heading } from '../../typography'

const StoryHeader = props => <Box marginBottom={16} {...props} />
const StoryHeading = props => <Heading size={600} marginBottom={0} {...props} />
const StorySection = props => <Box marginBottom={40} {...props} />

export default {
  title: 'search-input'
}

export const _SearchInput = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <StorySection>
        <StoryHeader>
          <StoryHeading>Default usage (height 32)</StoryHeading>
        </StoryHeader>
        <SearchInput placeholder="Filter traits..." />
      </StorySection>
      <StorySection>
        <StoryHeader>
          <StoryHeading>Height 32 and Width 100%</StoryHeading>
        </StoryHeader>
        <SearchInput height={32} width="100%" placeholder="Long Input" />
      </StorySection>
    </Box>
  ),

  name: 'SearchInput'
}
