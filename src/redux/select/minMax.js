import { createSelector } from 'reselect'
import { selectForm } from 'redux-field'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'
import max from 'lodash/max'
import orderBy from 'lodash/orderBy'

import { itemsSelector } from './items'
export function roundUp(val) {
  return Math.ceil((val + 1) / 20) * 20
}
export const minMaxFields = [
  'displacement', 'ballast', 'loa', 'lwl', 'beam', 'sailArea',
  'dispLen', 'lb', 'cr', 'csf', 'sailDisp',
]
function calcMinMax(items) {
  return map(minMaxFields, fieldId => {
    const validItems = filter(items, fieldId)
    const vals = map(validItems, fieldId)
    const maxVal = max(vals)
    console.log(fieldId, orderBy(validItems, fieldId, 'desc')[0])
    console.log(fieldId, maxVal)
    return {
      min: 0,
      max: maxVal || 40,
      fieldId,
    }
  })
}
export const getMinMax = createSelector(itemsSelector, calcMinMax)

export function getMaxVal(min, maxVal, rangeMax) {
  if (min > maxVal) return maxVal
  if (maxVal > rangeMax) return rangeMax
  return maxVal
}
export function getValue(val, range) {
  if (!val) return val
  const min = val[0] || 0
  const minVal = min > range.max ? range.max - 1 : min
  const maxVal = getMaxVal(minVal, val[1] || range.max, range.max)
  const value = [ minVal, maxVal ]
  return value
}
export const minMaxFilters = createSelector(
  getMinMax,
  selectForm,
  (fields, form) => map(fields, info => {
    const value = getValue(get(form, [ 'list', info.fieldId, 'value' ]), info)
    return { ...info, value }
  })
)
