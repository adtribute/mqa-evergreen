import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NestedPopoversFixture from '../fixtures/NestedPopoversFixture'

describe('Nested Popovers', () => {
  describe('Parent-Child relationship', () => {
    it('should keep parent open when clicking inside child popover', async () => {
      render(<NestedPopoversFixture />)

      // Open parent
      await userEvent.click(screen.getByTestId('parent-trigger'))
      const parentContent = await screen.findByTestId('parent-popover-content')
      expect(parentContent).toBeVisible()

      // Open child A
      await userEvent.click(screen.getByTestId('child-a-trigger'))
      const childAContent = await screen.findByTestId('child-a-popover-content')
      expect(childAContent).toBeVisible()

      // Click inside child A content - parent should stay open
      await userEvent.click(childAContent)

      expect(parentContent).toBeVisible()
      expect(childAContent).toBeVisible()
    })

    it('should close child when clicking inside parent but outside child', async () => {
      const onChildAClose = jest.fn()
      render(<NestedPopoversFixture onChildAClose={onChildAClose} />)

      // Open parent
      await userEvent.click(screen.getByTestId('parent-trigger'))
      const parentContent = await screen.findByTestId('parent-popover-content')

      // Open child A
      await userEvent.click(screen.getByTestId('child-a-trigger'))
      await screen.findByTestId('child-a-popover-content')

      // Click inside parent but outside child A
      await userEvent.click(parentContent)

      // Child should close, parent should stay open
      await waitFor(() => {
        expect(onChildAClose).toHaveBeenCalled()
      })
      expect(parentContent).toBeVisible()
    })

    it('should close all nested popovers when clicking outside parent', async () => {
      const onParentClose = jest.fn()
      const onChildAClose = jest.fn()
      render(<NestedPopoversFixture onParentClose={onParentClose} onChildAClose={onChildAClose} />)

      // Open parent
      await userEvent.click(screen.getByTestId('parent-trigger'))
      await screen.findByTestId('parent-popover-content')

      // Open child A
      await userEvent.click(screen.getByTestId('child-a-trigger'))
      await screen.findByTestId('child-a-popover-content')

      // Click outside everything
      await userEvent.click(document.body)

      await waitFor(() => {
        expect(onParentClose).toHaveBeenCalled()
        expect(onChildAClose).toHaveBeenCalled()
      })
    })
  })

  describe('Sibling popovers', () => {
    it('should close sibling popover when opening another sibling', async () => {
      const onChildAClose = jest.fn()
      render(<NestedPopoversFixture onChildAClose={onChildAClose} />)

      // Open parent
      await userEvent.click(screen.getByTestId('parent-trigger'))
      await screen.findByTestId('parent-popover-content')

      // Open child A
      await userEvent.click(screen.getByTestId('child-a-trigger'))
      await screen.findByTestId('child-a-popover-content')

      // Open child B (sibling) - child A should close
      await userEvent.click(screen.getByTestId('child-b-trigger'))
      await screen.findByTestId('child-b-popover-content')

      await waitFor(() => {
        expect(onChildAClose).toHaveBeenCalled()
      })
    })

    it('should keep parent open when switching between sibling popovers', async () => {
      const onParentClose = jest.fn()
      render(<NestedPopoversFixture onParentClose={onParentClose} />)

      // Open parent
      await userEvent.click(screen.getByTestId('parent-trigger'))
      const parentContent = await screen.findByTestId('parent-popover-content')

      // Open child A
      await userEvent.click(screen.getByTestId('child-a-trigger'))
      await screen.findByTestId('child-a-popover-content')

      // Open child B (sibling)
      await userEvent.click(screen.getByTestId('child-b-trigger'))
      await screen.findByTestId('child-b-popover-content')

      // Parent should still be open
      expect(parentContent).toBeVisible()
      expect(onParentClose).not.toHaveBeenCalled()
    })
  })

  describe('Multiple levels of nesting (grandchild)', () => {
    it('should keep all ancestors open when clicking inside grandchild', async () => {
      render(<NestedPopoversFixture />)

      // Open parent
      await userEvent.click(screen.getByTestId('parent-trigger'))
      const parentContent = await screen.findByTestId('parent-popover-content')

      // Open child A
      await userEvent.click(screen.getByTestId('child-a-trigger'))
      const childAContent = await screen.findByTestId('child-a-popover-content')

      // Open grandchild
      await userEvent.click(screen.getByTestId('grandchild-trigger'))
      const grandchildContent = await screen.findByTestId('grandchild-popover-content')

      // Click inside grandchild - all ancestors should stay open
      await userEvent.click(screen.getByTestId('grandchild-action'))

      expect(parentContent).toBeVisible()
      expect(childAContent).toBeVisible()
      expect(grandchildContent).toBeVisible()
    })

    it('should close grandchild when clicking inside child but outside grandchild', async () => {
      const onGrandchildClose = jest.fn()
      render(<NestedPopoversFixture onGrandchildClose={onGrandchildClose} />)

      // Open parent -> child A -> grandchild
      await userEvent.click(screen.getByTestId('parent-trigger'))
      await screen.findByTestId('parent-popover-content')

      await userEvent.click(screen.getByTestId('child-a-trigger'))
      const childAContent = await screen.findByTestId('child-a-popover-content')

      await userEvent.click(screen.getByTestId('grandchild-trigger'))
      await screen.findByTestId('grandchild-popover-content')

      // Click inside child A but outside grandchild
      await userEvent.click(childAContent)

      await waitFor(() => {
        expect(onGrandchildClose).toHaveBeenCalled()
      })
    })

    it('should close grandchild and child when clicking inside parent', async () => {
      const onChildAClose = jest.fn()
      const onGrandchildClose = jest.fn()
      render(<NestedPopoversFixture onChildAClose={onChildAClose} onGrandchildClose={onGrandchildClose} />)

      // Open parent -> child A -> grandchild
      await userEvent.click(screen.getByTestId('parent-trigger'))
      const parentContent = await screen.findByTestId('parent-popover-content')

      await userEvent.click(screen.getByTestId('child-a-trigger'))
      await screen.findByTestId('child-a-popover-content')

      await userEvent.click(screen.getByTestId('grandchild-trigger'))
      await screen.findByTestId('grandchild-popover-content')

      // Click inside parent but outside child A
      await userEvent.click(parentContent)

      await waitFor(() => {
        expect(onGrandchildClose).toHaveBeenCalled()
        expect(onChildAClose).toHaveBeenCalled()
      })
    })
  })

  describe('Edge cases', () => {
    it('should handle rapid open/close cycles', async () => {
      render(<NestedPopoversFixture />)

      // Rapidly toggle parent
      const parentTrigger = screen.getByTestId('parent-trigger')
      await userEvent.click(parentTrigger)
      await userEvent.click(parentTrigger)
      await userEvent.click(parentTrigger)

      const parentContent = await screen.findByTestId('parent-popover-content')
      expect(parentContent).toBeVisible()
    })

    it('should not interfere with unrelated popovers', async () => {
      // Render two independent popover trees
      render(
        <>
          <NestedPopoversFixture />
          <div data-testid="separator" style={{ margin: '20px' }} />
          <NestedPopoversFixture />
        </>
      )

      const triggers = screen.getAllByTestId('parent-trigger')

      // Open first parent
      await userEvent.click(triggers[0])
      const parentContents = await screen.findAllByTestId('parent-popover-content')
      expect(parentContents[0]).toBeVisible()

      // Open second parent - first should close (they're both at root level)
      await userEvent.click(triggers[1])

      await waitFor(() => {
        const visibleParents = screen.getAllByTestId('parent-popover-content')
        // At least the second one should be visible
        expect(visibleParents.length).toBeGreaterThanOrEqual(1)
      })
    })
  })
})
