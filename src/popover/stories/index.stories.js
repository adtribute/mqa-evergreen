import React, { useState } from 'react'
import Box from '@maestroqa/ui-box'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'
import { Popover } from '..'
import { Button } from '../../buttons'
import { Position } from '../../constants'
import { CircleArrowDownIcon } from '../../icons'
import { Pane } from '../../layers'
import { SelectMenu } from '../../select-menu'
import { TextInputField } from '../../text-input'
import { Tooltip } from '../../tooltip'
import { Heading, Paragraph, Text } from '../../typography'

// eslint-disable-next-line react/prop-types
const PopoverContent = ({ height = 240 }) => (
  <Pane width={240} height={height} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
    <Text>PopoverContent</Text>
  </Pane>
)

const PopoverContentWithTextInput = () => (
  <Pane width={320} height={200} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
    <TextInputField label="Auto focus" autoFocus width="80%" />
  </Pane>
)

const ClosablePopoverContent = ({ close }) => (
  <Pane width={240} height={240} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
    <Text>ClosablePopoverContent</Text>
    <Button onClick={close}>Close</Button>
  </Pane>
)

ClosablePopoverContent.propTypes = {
  close: PropTypes.func
}

// Agent filter example: multiple rows, each with operator + agent dropdowns (only one open at a time)
const OPERATOR_OPTIONS = [
  { label: 'Contains Any', value: 'IN' },
  { label: 'Does Not Include Any', value: 'NOT_IN' },
  { label: 'Contains All', value: 'CONTAINS_ALL' },
  { label: 'Is Not Empty', value: 'NOT_EMPTY' },
  { label: 'Is Empty', value: 'EMPTY' }
]

const AGENT_OPTIONS = [
  { label: 'Alice Smith', value: 'alice' },
  { label: 'Bob Jones', value: 'bob' },
  { label: 'Carol White', value: 'carol' },
  { label: 'David Brown', value: 'david' },
  { label: 'Eve Davis', value: 'eve' }
]

function AgentFilterExample() {
  const [rows, setRows] = useState([
    { operator: 'IN', agents: [] },
    { operator: 'IN', agents: [] }
  ])

  const updateRow = (index, field, value) => {
    setRows(prev => prev.map((row, i) => (i === index ? { ...row, [field]: value } : row)))
  }

  return (
    <Pane minWidth={400} padding={12}>
      <Text size={300} marginBottom={12} display="block">
        Agent(s)
      </Text>
      {rows.map((row, index) => (
        <Pane key={index} marginBottom={index > 0 ? 20 : 0}>
          {index > 0 && (
            <Text size={300} color="muted" marginY={8} display="block">
              AND
            </Text>
          )}
          <Pane display="flex" alignItems="center" gap={8} flexWrap="wrap">
            <SelectMenu
              width={160}
              position={Position.BOTTOM_LEFT}
              hasFilter
              filterPlaceholder="Filter..."
              options={OPERATOR_OPTIONS}
              selected={row.operator}
              onSelect={opt => updateRow(index, 'operator', opt.value)}
              closeOnSelect
            >
              <Button appearance="default" width={160}>
                {OPERATOR_OPTIONS.find(o => o.value === row.operator)?.label ?? 'Operator'}
              </Button>
            </SelectMenu>
            <SelectMenu
              width={220}
              height={280}
              position={Position.BOTTOM_LEFT}
              isMultiSelect
              hasFilter
              filterPlaceholder="Filter..."
              title={`Agents (${row.agents?.length ?? 0} selected)`}
              options={AGENT_OPTIONS}
              selected={row.agents ?? []}
              onSelect={item => updateRow(index, 'agents', [...(row.agents ?? []), item.value])}
              onDeselect={item =>
                updateRow(
                  index,
                  'agents',
                  (row.agents ?? []).filter(v => v !== item.value)
                )
              }
            >
              <Button appearance="default" width={220}>
                {row.agents?.length ? `${row.agents.length} agent(s) selected` : 'Select agent(s)'}
              </Button>
            </SelectMenu>
          </Pane>
        </Pane>
      ))}
      <Button
        marginTop={12}
        appearance="minimal"
        onClick={() => setRows(prev => [...prev, { operator: 'IN', agents: [] }])}
      >
        + Add Filter
      </Button>
    </Pane>
  )
}

// Using it with a function for complete control
const controlUsage = (
  <Popover content={({ close }) => <ClosablePopoverContent close={close} />} display="inline-block">
    {({ getRef, isShown, toggle }) => (
      <Button
        // You can use `isShown` to set a properties
        // Use with caution, calculations are based on the width
        // as soon as you toggle it
        isActive={isShown}
        // Use toggle to show/hide the popover
        onClick={toggle}
        // GetRef is used to get the ref of the element we need to run
        // getBoundingClientRect() on
        ref={getRef}
      >
        {isShown ? 'is open' : 'open'}
      </Button>
    )}
  </Popover>
)

storiesOf('popover', module)
  .add('positions', () => (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Box width={400} height={280}>
        <Box display="flex" justifyContent="space-between" marginBottom={40}>
          <Popover content={<PopoverContent />} position={Position.BOTTOM_LEFT}>
            <Button marginRight={20}>BOTTOM_LEFT</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.BOTTOM}>
            <Button marginRight={20}>BOTTOM</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.BOTTOM_RIGHT}>
            <Button marginRight={20}>BOTTOM_RIGHT</Button>
          </Popover>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Popover content={<PopoverContent />} position={Position.TOP_LEFT}>
            <Button marginRight={20}>TOP_LEFT</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.TOP}>
            <Button marginRight={20}>TOP</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.TOP_RIGHT}>
            <Button marginRight={20}>TOP_RIGHT</Button>
          </Popover>
        </Box>
        <Box marginTop={40} display="flex" justifyContent="space-between">
          <Popover content={<PopoverContent />} position={Position.LEFT}>
            <Button marginRight={20}>LEFT</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.RIGHT}>
            <Button marginRight={20}>RIGHT</Button>
          </Popover>
        </Box>
      </Box>
    </Box>
  ))
  .add('usages', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContent />}>
        <Button position="absolute" right={16} top={40} marginRight={20}>
          Trigger Popover
        </Button>
      </Popover>
      <Popover content={<PopoverContent />}>
        <Button marginRight={20}>Trigger Popover</Button>
      </Popover>
      <Popover content={({ close }) => <ClosablePopoverContent close={close} />}>
        <Button marginRight={20}>Trigger Closable Popover</Button>
      </Popover>
      <Popover content={<PopoverContent />} shouldCloseOnExternalClick={false}>
        <Button marginRight={20}>No Close on Body Click</Button>
      </Popover>
      <Popover content={<PopoverContent />} shouldCloseOnEscapePress={false}>
        <Button marginRight={20}>No Close on Escape Key</Button>
      </Popover>
      <Popover useSmartPositioning={false} content={({ close }) => <ClosablePopoverContent close={close} />}>
        <Button marginRight={20}>Disable Smart Positioning</Button>
      </Popover>
      <Pane overflowY="scroll" height={400} appearance="tint3">
        <Box height={800} paddingTop={200}>
          <Popover position={Position.BOTTOM_LEFT} content={({ close }) => <ClosablePopoverContent close={close} />}>
            <Button marginRight={20}>Inside Scrolling Container</Button>
          </Popover>
        </Box>
      </Pane>
      {controlUsage}
      <Popover content={<PopoverContent />}>
        <Button position="absolute" left={40} bottom={40} marginRight={20}>
          Use Smart Positioning
        </Button>
      </Popover>
      <Popover content={<PopoverContent height={999} />} position={Position.TOP_LEFT}>
        <Button position="absolute" left={40} top={80} marginRight={20}>
          Compensated for shooting past the bottom
        </Button>
      </Popover>
    </Box>
  ))
  .add('auto focus text input', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContentWithTextInput />}>
        <Button marginRight={20}>Trigger Popover</Button>
      </Popover>
    </Box>
  ))
  .add('test jitter', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={
          <Pane padding={12.3}>
            <Text>Lorem ipsum dolar set amet. Some content that keeps on going.</Text>
          </Pane>
        }
      >
        <Button right={40} position="absolute">
          Trigger Popover
        </Button>
      </Popover>
    </Box>
  ))
  .add('toggle button with children', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContentWithTextInput />}>
        <Button marginRight={20}>
          <CircleArrowDownIcon />
        </Button>
      </Popover>
    </Box>
  ))
  .add('Popover with tooltip', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContentWithTextInput />}>
        <Tooltip content="Click me">
          <Button marginRight={20}>Tooltip Card + Popover</Button>
        </Tooltip>
      </Popover>
      <Popover content={<PopoverContentWithTextInput />}>
        <Tooltip
          appearance="card"
          content={
            <React.Fragment>
              <Heading>Heading</Heading>
              <Paragraph color="muted" marginTop={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Paragraph>
            </React.Fragment>
          }
          statelessProps={{
            paddingY: 24,
            paddingX: 24,
            maxWidth: 280
          }}
        >
          <Button>Tooltip + Popover</Button>
        </Tooltip>
      </Popover>
    </Box>
  ))
  .add('Agent filter (only one dropdown open)', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Paragraph marginBottom={16}>
        Open the filter panel, then open operator or agent dropdowns in any row. Only one dropdown stays open at a time.
      </Paragraph>
      <Popover position={Position.BOTTOM_LEFT} content={<AgentFilterExample />} minWidth={420} minHeight={200}>
        <Button>Open filter panel</Button>
      </Popover>
    </Box>
  ))
