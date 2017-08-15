import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { selectForm } from 'redux-field'
import curry from 'lodash/curry'
import filter from 'lodash/filter'
import get from 'lodash/get'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'

import { optionFill } from '../../helpers/understory'

export const getDb = curry((path, state) => get(state.db, path))

// Where is our custom pricelist information? Look in defaultState.js or the `db` tree of state.
export const listInfo = getDb('view')
export const getCategoryOptions = getDb('categoryOptions')
export const getSchema = getDb('schema')
export const getMenu = getDb('menu')
export function getUser(state) {
  return state.graph.entity.user0
}
export const getPrefixes = state => listInfo(state).prefix
// Get the form prefix used for form state path.
export const formPrefix = curry((filterType, state) =>
  get(getPrefixes(state), filterType)
)
// Get the active filter value from the form state.
export const getFilter = curry((filterType, defaultValue, state) =>
  get(selectForm(state), formPrefix(filterType, state), {}).value || defaultValue
)
export const getFilterCategory = getFilter('category')


export const activeCategorySelector = createSelector(
  getFilterCategory,
  (info, filterCategory) => filterCategory || info.defaultCategory
)
export const categoryOptionsSelector = createSelector(
  getCategoryOptions,
  getSchema,
  optionFill
)


export function itemFill(item) {
  const { id, category, color, contents, patternNumber, price } = item
  const colorNumber = id.replace(`${patternNumber}-`, '')
  return {
    ...item,
    colorNumber,
    link: `/detail/${id}`,
    img: `http://www.delanyandlong.com/images/fabrics/${patternNumber}/${colorNumber}_big.jpg`,
    price: `$${price}${category === 'leather' ? ' sq ft' : ''}`,
    searchable: (color + contents + id).toLowerCase(),
  }
}

export const categorySelector = createSelector(
  activeCategorySelector,
  (category) => filter(items, { category })
)
