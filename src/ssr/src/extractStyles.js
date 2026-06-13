import React from 'react'
import { extractStyles as boxExtractStyles } from '@maestroqa/ui-box'

/**
 * @returns {{ css: string, cache: { uiBoxCache: [string, string][] }, hydrationScript: React.ReactElement }}
 */
export default function extractStyles(options = {}) {
  const { cache, styles } = boxExtractStyles()

  const evergreenCache = {
    uiBoxCache: cache
  }

  const scriptProps = {
    type: 'application/json',
    id: 'evergreen-hydrate',
    dangerouslySetInnerHTML: { __html: JSON.stringify(evergreenCache) }
  }

  if (options.nonce) {
    scriptProps.nonce = options.nonce
  }

  return {
    css: styles,
    cache: evergreenCache,
    hydrationScript: <script {...scriptProps} />
  }
}
