import React from 'react'
import { faker } from '@faker-js/faker'
import Component from '@reactions/component'
import Box from 'ui-box'
import { Table } from '..'
import { Pane } from '../../layers'
import { Portal } from '../../portal'
import AdvancedTable from './AdvancedTable'
import EditableTable from './EditableTable'
import VirtualTable from './VirtualTable'

const range = N => Array.from({ length: N }, (v, k) => k + 1)

faker.seed(500)
const dynamicHeights = range(500).map(() => {
  return faker.datatype.number({
    min: 32,
    max: 100
  })
})

export default {
  title: 'table'
}

export const AdvancedSortableTable = () => (
  <Box padding={24}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <AdvancedTable />
  </Box>
)

export const VirtualTableAutomaticHeights = {
  render: () => (
    <Box padding={24} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <VirtualTable />
    </Box>
  ),

  name: 'Virtual Table + Automatic Heights'
}

export const _EditableTable = {
  render: () => (
    <Box padding={24} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <EditableTable />
    </Box>
  ),

  name: 'Editable Table '
}

export const EditableTableOffsetTest = {
  render: () => (
    <Box padding={24} paddingTop={800} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <EditableTable />
    </Box>
  ),

  name: 'Editable Table offset test '
}

export const VirtualTableWithinPortalTest = {
  render: () => (
    <Box padding={24} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Portal>
        <Box position="fixed" top={0} left={0} right={0} bottom={0}>
          <VirtualTable />
        </Box>
      </Portal>
    </Box>
  ),

  name: 'Virtual Table within Portal test'
}

export const TableCell = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.Cell isSelectable>Table.Cell</Table.Cell>
    </Box>
  ),

  name: 'Table.Cell'
}

export const TableTextCell = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.TextCell>Table.TextCell</Table.TextCell>
    </Box>
  ),

  name: 'Table.TextCell'
}

export const TableHead = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.Head>
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell isSortable sortOrder="descending">
          Last Activity
        </Table.TextHeaderCell>
        <Table.TextHeaderCell textAlign="right">ltv</Table.TextHeaderCell>
      </Table.Head>
    </Box>
  ),

  name: 'Table.Head'
}

export const TableRow = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      {['none', 'danger', 'warning', 'success'].map(intent => {
        return (
          <Table.Row key={intent} isSelectable intent={intent}>
            <Table.TextCell>{intent}</Table.TextCell>
          </Table.Row>
        )
      })}
      <Table.Row height={32}>
        <Table.TextCell>Height 32</Table.TextCell>
      </Table.Row>
      <Table.Row height={40}>
        <Table.TextCell>Height 40</Table.TextCell>
      </Table.Row>
      <Table.Row height="auto" paddingY={12}>
        <Table.TextCell>
          Auto height <br />
          based on <br />
          the content
        </Table.TextCell>
      </Table.Row>
    </Box>
  ),

  name: 'Table.Row'
}

export const TableRowIsSelectable = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}

      <Component initialState={{ selectedItem: null }}>
        {({ setState, state }) => (
          <Table.Body>
            {range(10).map(item => {
              return (
                <Table.Row
                  key={item}
                  isSelectable
                  isSelected={state.selectedItem === item}
                  onSelect={() => setState({ selectedItem: item })}
                  onDeselect={() => setState({ selectedItem: null })}
                >
                  <Table.TextCell>{item}</Table.TextCell>
                </Table.Row>
              )
            })}
          </Table.Body>
        )}
      </Component>
    </Box>
  ),

  name: 'Table.Row isSelectable'
}

export const TableHeaderCell = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.HeaderCell>Table.HeaderCell</Table.HeaderCell>
    </Box>
  ),

  name: 'Table.HeaderCell'
}

export const TableTextHeaderCell = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.TextHeaderCell>Table.TextHeaderCell</Table.TextHeaderCell>
    </Box>
  ),

  name: 'Table.TextHeaderCell'
}

export const TableSearchHeaderCell = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.SearchHeaderCell />
      <Table.SearchHeaderCell autoFocus placeholder="autoFocus" />
    </Box>
  ),

  name: 'Table.SearchHeaderCell'
}

export const TableBody = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.Body>Table.Body</Table.Body>
    </Box>
  ),

  name: 'Table.Body'
}

export const TableVirtualBodyTests = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.VirtualBody height={120}>
        <Table.Row />
      </Table.VirtualBody>
      <Table.VirtualBody height={120}>String</Table.VirtualBody>
      <Table.VirtualBody height={120} />
    </Box>
  ),

  name: 'Table.VirtualBody tests'
}

export const TableVirtualBodyDynamicButKnownHeights = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.VirtualBody height={600}>
        {dynamicHeights.map((height, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            (<Table.Row key={`${height}-${index}`} height={height}>
              <Table.TextCell>{height}</Table.TextCell>
            </Table.Row>)
          );
        })}
      </Table.VirtualBody>
    </Box>
  ),

  name: 'Table.VirtualBody dynamic but known heights'
}

export const TableVirtualBodyGroupedPanesSelectableCells = {
  render: () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.VirtualBody height={600}>
        <Pane height={48}>
          <Table.Row>
            <Table.EditableCell
              isSelectable
              data-cell-1
              arrowKeysOverrides={{
                down: '[data-cell-2]'
              }}
            >
              Cell 1
            </Table.EditableCell>
          </Table.Row>
        </Pane>
        <Pane height={48}>
          <Table.Row>
            <Table.EditableCell
              isSelectable
              data-cell-2
              arrowKeysOverrides={{
                up: '[data-cell-1]'
              }}
            >
              Cell 2
            </Table.EditableCell>
          </Table.Row>
        </Pane>
      </Table.VirtualBody>
    </Box>
  ),

  name: 'Table.VirtualBody grouped panes selectable cells'
}
