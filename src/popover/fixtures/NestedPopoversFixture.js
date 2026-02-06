import React from 'react'
import { Popover } from '../'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import { Text } from '../../typography'

/**
 * Fixture for testing nested popover behavior.
 * Structure:
 *   Parent Popover
 *     ├── Child Popover A (StringMenu)
 *     │     └── Grandchild Popover (SubMenu)
 *     └── Child Popover B (NumberMenu) - sibling to A
 */
function NestedPopoversFixture({ onChildAClose, onChildBClose, onGrandchildClose, onParentClose } = {}) {
  return (
    <Popover
      onClose={onParentClose}
      content={
        <Pane data-testid="parent-popover-content" padding={16} width={300}>
          <Text>Parent Popover Content</Text>
          <Pane marginTop={8} display="flex" gap={8}>
            {/* Child Popover A */}
            <Popover
              onClose={onChildAClose}
              content={
                <Pane data-testid="child-a-popover-content" padding={16} width={200}>
                  <Text>Child A Content</Text>
                  {/* Grandchild Popover */}
                  <Popover
                    onClose={onGrandchildClose}
                    content={
                      <Pane data-testid="grandchild-popover-content" padding={16} width={150}>
                        <Text>Grandchild Content</Text>
                        <Button data-testid="grandchild-action">Action</Button>
                      </Pane>
                    }
                  >
                    <Button data-testid="grandchild-trigger" marginTop={8}>
                      Open Grandchild
                    </Button>
                  </Popover>
                </Pane>
              }
            >
              <Button data-testid="child-a-trigger">Open Child A</Button>
            </Popover>

            {/* Child Popover B (sibling) */}
            <Popover
              onClose={onChildBClose}
              content={
                <Pane data-testid="child-b-popover-content" padding={16} width={200}>
                  <Text>Child B Content</Text>
                  <Button data-testid="child-b-action">Action B</Button>
                </Pane>
              }
            >
              <Button data-testid="child-b-trigger">Open Child B</Button>
            </Popover>
          </Pane>
        </Pane>
      }
    >
      <Button data-testid="parent-trigger">Open Parent</Button>
    </Popover>
  )
}

export default NestedPopoversFixture
