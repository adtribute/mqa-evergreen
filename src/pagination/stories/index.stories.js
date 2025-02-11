import React from 'react'
import { Pagination, usePaginationBehavior } from '../'

export default {
  title: 'pagination'
}

const NoOverflowComponent = () => {
  const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior({ page: 3 })

  return (
    <Pagination
      page={page}
      totalPages={5}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      onPageChange={onPageChange}
    />
  )
}

export const PaginationWithNoOverflow = {
  render: NoOverflowComponent,
  name: 'Pagination with no overflow'
}

const OverflowComponent = () => {
  const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior({ page: 5 })

  return (
    <Pagination
      page={page}
      totalPages={10}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      onPageChange={onPageChange}
    />
  )
}

export const PaginationWithOverflow = {
  render: OverflowComponent,
  name: 'Pagination with overflow'
}

const UnknownTotalPagesComponent = () => {
  const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior()

  return <Pagination page={page} onNextPage={onNextPage} onPreviousPage={onPreviousPage} onPageChange={onPageChange} />
}

export const PaginationWithUnknownOfTotalPages = {
  render: UnknownTotalPagesComponent,
  name: 'Pagination with unknown # of total pages'
}
