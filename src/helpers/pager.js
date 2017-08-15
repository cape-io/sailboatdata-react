import isEmpty from 'lodash/isEmpty'

export const defaultPageSize = 48

export function getPageSizes(multiple = defaultPageSize) {
  return [
    multiple,
    multiple * 2,
    multiple * 3,
    multiple * 10,
    { value: '10000', label: 'All' },
  ]
}

export function getPagerInfo(items, opts) {
  const defaultOpts = {
    resultKey: 'items',
    page: 1,
    perPage: defaultPageSize,
  }
  const page = parseInt(opts.page, 10) || defaultOpts.page
  const perPage = opts.perPage || defaultOpts.perPage
  const resultKey = opts.resultKey || defaultOpts.resultKey
  const pageSizes = opts.pageSizes || getPageSizes()
  const totalItems = items.length
  const maxPage = Math.ceil(totalItems / perPage)
  const pageIndex = page < maxPage ? (page || 1) : maxPage
  const itemsStart = (pageIndex - 1) * perPage
  const itemsEnd = itemsStart + perPage
  const result = items.slice(itemsStart, itemsEnd)
  return {
    hasLess: pageIndex > 1,
    hasMore: pageIndex < maxPage,
    [resultKey]: result,
    maxPage,
    pageIndex,
    pageSizes,
    perPage,
    totalItems,
  }
}
