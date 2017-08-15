import { createSelector, createStructuredSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import sortBy from 'lodash/sortBy'

import { userFavs } from './fav'
import { getFilter } from './'
import { pagerInfo } from './pager'
import { minMaxFilters } from './minMax'
import { getPagerInfo } from '../../helpers/pager'
import { isInRange, textSearchItems } from '../../helpers/understory'
import { itemFill, itemsSelector } from './items'

// Filters
export const getSortBy = getFilter('sortBy', 'name')
export const itemsSorted = createSelector(
  itemsSelector,
  getSortBy,
  sortBy,
)
export const getFilterText = state =>
  getFilter('text', '')(state).toLowerCase()
export const itemsTextSearched = createSelector(
  itemsSorted,
  getFilterText,
  textSearchItems
)
export const itemsInRange = createSelector(
  itemsTextSearched,
  minMaxFilters,
  isInRange
)
export const itemsPaged = createSelector(
  itemsInRange,
  pagerInfo,
  getPagerInfo,
)
// Single Item
export function getItemDetail(state, props) {
  const id = props.route.params._
  return entitySelector(state)[id]
}

// Grab an item from the entity index and fill out its props.
export const itemSelector = createSelector(
  getItemDetail,
  itemFill
)

export const favoriteSelector = createSelector(
  itemSelector,
  userFavs,
  (item, favs) => favs && favs[item.id] || null
)
export const itemDetailSelector = createStructuredSelector({
  item: itemSelector,
  favorite: favoriteSelector,
})
