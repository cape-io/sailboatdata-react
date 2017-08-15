import { createStructuredSelector } from 'reselect'

// import sampleSize from 'lodash/sampleSize'

import { itemsPaged } from './item'
import { columnsSelector } from './display'
import { getPrefixes } from './'
import { minMaxFilters } from './minMax'
// export const itemsRandom = createSelector(
//   itemsTextSearched,
//   patterns => sampleSize(patterns, 48)
// )
export const homeSelector = createStructuredSelector({
  itemsPaged,
  columns: columnsSelector,
  prefixes: getPrefixes,
  minMax: minMaxFilters,
})
