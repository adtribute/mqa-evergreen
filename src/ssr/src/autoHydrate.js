import { hydrate as boxHydrate } from '@maestroqa/ui-box'
import canUseDom from '../../lib/canUseDom'

/**
 * You shouldn't have to manually run this.
 * This is mainly an export for testing purposes.
 */
export function hydrate(hydration) {
  if (hydration.uiBoxCache) {
    boxHydrate(hydration.uiBoxCache)
  }
}

export default function autoHydrate() {
  if (canUseDom) {
    const hydration = document.querySelector('#evergreen-hydrate')

    if (hydration) {
      try {
        const hydrationObject = JSON.parse(hydration.innerHTML)
        hydrate(hydrationObject)
      } catch (error) {
        console.error('Evergreen automatic hydration object is invalid JSON', error)
      }
    }
  }
}
