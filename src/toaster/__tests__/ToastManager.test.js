import React from 'react'
import { act, render, screen } from '@testing-library/react'
import Toaster from '../src/Toaster'
import ToastManager from '../src/ToastManager'

const renderToastManager = () => {
  const handlers = {}

  render(
    <ToastManager
      bindNotify={handler => (handlers.notify = handler)}
      bindRemove={handler => (handlers.remove = handler)}
      bindGetToasts={handler => (handlers.getToasts = handler)}
      bindCloseAll={handler => (handlers.closeAll = handler)}
    />
  )

  return handlers
}

describe('<ToastManager />', () => {
  it('shows a single toast', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('Single toast', { intent: 'none' })
    })

    expect(screen.getByText('Single toast')).toBeInTheDocument()
    expect(toaster.getToasts()).toHaveLength(1)
  })

  it('keeps every toast when several are created in the same tick', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('First toast', { intent: 'success' })
      toaster.notify('Second toast', { intent: 'danger' })
      toaster.notify('Third toast', { intent: 'warning' })
    })

    expect(screen.getByText('First toast')).toBeInTheDocument()
    expect(screen.getByText('Second toast')).toBeInTheDocument()
    expect(screen.getByText('Third toast')).toBeInTheDocument()

    const ids = toaster.getToasts().map(toast => toast.id)
    expect(ids).toHaveLength(3)
    expect(new Set(ids).size).toBe(3)
  })

  it('shows the newest toast first', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('Older toast', { intent: 'none' })
      toaster.notify('Newer toast', { intent: 'none' })
    })

    expect(toaster.getToasts().map(toast => toast.title)).toEqual(['Newer toast', 'Older toast'])
  })

  it('closes existing toasts when closeAll is followed by a new toast in the same tick', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('Stale toast', { intent: 'none' })
    })

    act(() => {
      toaster.closeAll()
      toaster.notify('Fresh toast', { intent: 'success' })
    })

    const toasts = toaster.getToasts()
    expect(toasts.find(toast => toast.title === 'Stale toast').isShown).toBe(false)
    expect(toasts.find(toast => toast.title === 'Fresh toast').isShown).not.toBe(false)
  })

  it('replaces a toast that has the same custom id', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('Saving…', { id: 'save' })
    })

    act(() => {
      toaster.notify('Saved', { id: 'save' })
    })

    expect(toaster.getToasts().map(toast => toast.title)).toEqual(['Saved'])
  })

  it('replaces a toast with the same custom id without dropping other toasts created in the same tick', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('Saving…', { id: 'save' })
    })

    act(() => {
      toaster.notify('Unrelated toast', { intent: 'none' })
      toaster.notify('Saved', { id: 'save' })
    })

    expect(toaster.getToasts().map(toast => toast.title)).toEqual(['Saved', 'Unrelated toast'])
  })

  it('closes only the toast passed to remove', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('Keep me', { id: 'keep' })
      toaster.notify('Close me', { id: 'close' })
    })

    act(() => {
      toaster.remove('close')
    })

    const toasts = toaster.getToasts()
    expect(toasts.find(toast => toast.title === 'Close me').isShown).toBe(false)
    expect(toasts.find(toast => toast.title === 'Keep me').isShown).not.toBe(false)
  })

  it('ignores remove for an unknown id', () => {
    const toaster = renderToastManager()

    act(() => {
      toaster.notify('Still here', { intent: 'none' })
    })

    act(() => {
      toaster.remove('missing')
    })

    expect(toaster.getToasts().map(toast => toast.isShown)).toEqual([undefined])
  })
})

describe('Toaster', () => {
  it('shows every toast when the public API is called twice in the same tick', () => {
    let toaster
    act(() => {
      toaster = new Toaster()
    })

    act(() => {
      toaster.success('Toaster success')
      toaster.danger('Toaster danger')
    })

    expect(screen.getByText('Toaster success')).toBeInTheDocument()
    expect(screen.getByText('Toaster danger')).toBeInTheDocument()
    expect(toaster.getToasts()).toHaveLength(2)
  })
})
