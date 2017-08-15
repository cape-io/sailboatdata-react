import { createStructuredSelector } from 'reselect'

import { defaultPageSize } from '../../helpers/pager'
import { getFilter } from './'

export const getPageSize = state => {
  const pgSize = getFilter('pgSize', defaultPageSize)(state)
  return parseInt(pgSize, 10)
}
export const getPageIndex = getFilter('pgIndex', 0)
export const pagerInfo = createStructuredSelector({
  perPage: getPageSize,
  page: getPageIndex,
})

// getPagerInfo(items, { page: info.pgIndex, perPage: info.pgSize })
