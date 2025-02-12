import React from 'react'
import BasicExample from '../fixtures/BasicExample'
import BasicWithLinkExample from '../fixtures/BasicWithLinkExample'
import SmallExample from '../fixtures/SmallExample'
import SmallMinimalExample from '../fixtures/SmallMinimalExample'
import TableWithActionExample from '../fixtures/TableWithActionExample'
import TableWithLinkExample from '../fixtures/TableWithLinkExample'

export default {
  title: 'empty-states'
}

export const _BasicExample = () => {
  return <BasicExample />
}

export const _BasicWithLinkExample = {
  render: () => {
    return <BasicWithLinkExample />
  },

  name: 'Basic with Link Example'
}

export const _TableWithActionExample = {
  render: () => {
    return <TableWithActionExample />
  },

  name: 'Table with Action Example'
}

export const _TableWithLinkExample = {
  render: () => {
    return <TableWithLinkExample />
  },

  name: 'Table with Link Example'
}

export const _SmallExample = () => {
  return <SmallExample />
}

export const _SmallMinimalExample = () => {
  return <SmallMinimalExample />
}
