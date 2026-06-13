import React from 'react'
import { Pagination, usePaginationBehavior } from '../'

/** @returns {React.ReactElement} */
const BasePaginationFixture = () => {
  const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior({ page: 1 })

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

export default BasePaginationFixture
