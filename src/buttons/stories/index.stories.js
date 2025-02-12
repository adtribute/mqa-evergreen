import React from 'react'
import Component from '@reactions/component'
import Box from 'ui-box'
import { IconButton, Button, TextDropdownButton } from '..'
import { Group } from '../../group'
import * as Icons from '../../icons'
import { Pane } from '../../layers'
import { majorScale } from '../../scales'
import { Heading } from '../../typography'

const OPTIONS = [
  { label: 'Small (24px)', value: 'small' },
  { label: 'Medium (32px)', value: 'medium' },
  { label: 'Large (40px)', value: 'large' }
]

const meta = {
  title: 'buttons',
  component: Button
}

export default meta

export const Common = {
  render: () => (
    <Box padding={40}>
      <Component
        initialState={{
          value: 'medium'
        }}
      >
        {({ setState, state }) => (
          <React.Fragment>
            <Group marginBottom={majorScale(2)}>
              {OPTIONS.map(({ label, value }) => (
                <Button isActive={value === state.value} key={value} onClick={() => setState({ value })}>
                  {label}
                </Button>
              ))}
            </Group>
            <Pane marginTop={16}>
              <Button size={state.value} marginRight={16}>
                Close
              </Button>
              <Button size={state.value} marginRight={16}>
                Cancel
              </Button>
              <Button size={state.value} marginRight={16} iconAfter={Icons.CaretDownIcon}>
                Select event...
              </Button>
              <Button size={state.value} marginRight={16} iconBefore={Icons.AddIcon}>
                New Audience
              </Button>
              <Button size={state.value} marginRight={16} iconBefore={Icons.DownloadIcon}>
                Download
              </Button>
              <Button size={state.value} marginRight={16} iconBefore={Icons.DownloadIcon}>
                Download CSV...
              </Button>
              <Button size={state.value} marginRight={16} iconBefore={Icons.EditIcon}>
                Edit
              </Button>
              <Button size={state.value} marginRight={16} iconBefore={Icons.ManualIcon}>
                Docs
              </Button>
              <Button size={state.value} iconBefore={Icons.ImportIcon}>
                Import
              </Button>
            </Pane>
            <Pane marginTop={16}>
              <Button size={state.value} appearance="primary" marginRight={16}>
                Confirm
              </Button>
              <Button size={state.value} appearance="primary" marginRight={16} iconAfter={Icons.ArrowRightIcon}>
                Next Step
              </Button>
              <Button size={state.value} appearance="primary" marginRight={16} iconBefore={Icons.EyeOpenIcon}>
                Preview
              </Button>
            </Pane>
            <Pane marginTop={16}>
              <Button size={state.value} appearance="primary" intent="success" marginRight={16}>
                Got It
              </Button>
              <Button
                size={state.value}
                appearance="primary"
                intent="success"
                marginRight={16}
                iconBefore={Icons.AddIcon}
              >
                Add Source
              </Button>
              <Button
                size={state.value}
                appearance="primary"
                intent="success"
                marginRight={16}
                iconBefore={Icons.AddIcon}
              >
                Add Destination
              </Button>
              <Button
                size={state.value}
                appearance="primary"
                intent="success"
                marginRight={16}
                iconBefore={Icons.AddIcon}
              >
                New Audience
              </Button>
              <Button
                size={state.value}
                appearance="primary"
                intent="success"
                marginRight={16}
                iconBefore={Icons.AddIcon}
              >
                New Computed Trait
              </Button>
            </Pane>
            <Pane marginTop={16}>
              <Button size={state.value} intent="warning" marginRight={16} iconBefore={Icons.RefreshIcon}>
                Retry
              </Button>
              <Button
                size={state.value}
                appearance="primary"
                intent="warning"
                marginRight={16}
                iconBefore={Icons.BlockedPersonIcon}
              >
                Disable User
              </Button>
            </Pane>
            <Pane marginTop={16}>
              <Button
                size={state.value}
                appearance="minimal"
                intent="danger"
                marginRight={16}
                iconBefore={Icons.TrashIcon}
              >
                Delete...
              </Button>
              <Button size={state.value} intent="danger" marginRight={16} iconBefore={Icons.TrashIcon}>
                Delete...
              </Button>
              <Button
                size={state.value}
                appearance="primary"
                intent="danger"
                marginRight={16}
                iconBefore={Icons.TrashIcon}
              >
                Permanently Delete Workspace...
              </Button>
            </Pane>
            <Pane marginTop={16}>
              <Button appearance="minimal" color="#36f">
                Click Me
              </Button>
            </Pane>
          </React.Fragment>
        )}
      </Component>
    </Box>
  )
}

export const ButtonHeightVsSize = {
  name: 'Button height vs. size',
  render: () => (
    <Box padding={40}>
      <Button marginRight={16} height={40}>
        With Height
      </Button>
      <Button size="large">With size</Button>
    </Box>
  )
}

export const ButtonTypes = {
  name: 'Button types',
  render: () => (
    <Box padding={40}>
      <Heading>Default Appearance</Heading>
      <Box marginTop={12}>
        <Button appearance="primary" marginRight={16}>
          Primary
        </Button>
        <Button marginRight={16}>Default</Button>
        <Button appearance="destructive" marginRight={16} intent="danger">
          Destructive
        </Button>
        <Button appearance="minimal" marginRight={16} intent="warning">
          Minimal
        </Button>
        <IconButton marginRight={16} icon={<Icons.PlusIcon />} />
        <IconButton marginRight={16} intent="danger" icon={<Icons.PlusIcon />} />
      </Box>
      <Heading marginTop={24}>Disabled Appearance</Heading>
      <Box marginTop={12}>
        <Button disabled appearance="primary" marginRight={16}>
          Primary
        </Button>
        <Button disabled marginRight={16}>
          Default
        </Button>
        <Button disabled appearance="destructive" marginRight={16} intent="danger">
          Destructive
        </Button>
        <Button disabled appearance="minimal" marginRight={16} intent="warning">
          Minimal
        </Button>
        <IconButton disabled icon={<Icons.PlusIcon />} marginRight={16} />
        <IconButton disabled marginRight={16} intent="danger" icon={<Icons.PlusIcon />} />
      </Box>
    </Box>
  )
}

export const TextDropdownButtonStory = {
  name: 'TextDropdownButton',
  render: () => (
    <Box padding={40}>
      <Heading marginY={majorScale(2)}> Default props </Heading>
      <TextDropdownButton>Table Header</TextDropdownButton>

      <Heading marginY={majorScale(2)}> Is Loading </Heading>
      <TextDropdownButton isLoading>Table Header</TextDropdownButton>
    </Box>
  )
}

export const IconButtonStory = {
  name: 'IconButton',
  render: () => (
    <Box display="flex" padding={40}>
      <Pane borderRight paddingRight={24} marginRight={24}>
        <Heading marginBottom={16}>Size &quot;medium&quot;</Heading>
        <Pane display="flex">
          <Box display="grid" gridTemplateColumns="32px" gridRowGap={16} marginRight={16}>
            <IconButton icon={Icons.CogIcon} />
            <IconButton icon={Icons.PlusIcon} />
            <IconButton icon={Icons.FilterIcon} />
            <IconButton icon={Icons.EditIcon} />
            <IconButton icon={Icons.RefreshIcon} />
          </Box>
          <Box display="grid" gridTemplateColumns="32px" gridRowGap={16}>
            <IconButton appearance="minimal" icon={Icons.CrossIcon} />
            <IconButton appearance="minimal" icon={Icons.MoreIcon} />
            <IconButton appearance="minimal" icon={Icons.PlusIcon} />
            <IconButton appearance="minimal" icon={Icons.EditIcon} />
          </Box>
        </Pane>
      </Pane>
    </Box>
  )
}
