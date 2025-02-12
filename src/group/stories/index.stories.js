import React from 'react'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import { TextInput } from '../../text-input'
import { Group } from '../index'

const meta = {
  title: 'group',
  component: Group
}

export default meta

export const Default = {
  render: () => (
    <Pane display="grid" gridRowGap={16}>
      <Group size="small">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Group>
      <Group size="medium">
        <Button appearance="primary">One</Button>
        <Button appearance="primary">Two</Button>
        <Button appearance="primary">Three</Button>
      </Group>
      <Group size="large">
        <Button appearance="minimal">One</Button>
        <Button appearance="minimal">Two</Button>
        <Button appearance="minimal">Three</Button>
      </Group>
      <Group>
        <TextInput />
        <Button appearance="primary">Click</Button>
      </Group>
    </Pane>
  )
}
