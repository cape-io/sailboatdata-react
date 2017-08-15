// import defaults from 'lodash/defaults'
import compact from 'lodash/compact'
import every from 'lodash/every'
import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import inRange from 'lodash/inRange'
import isString from 'lodash/isString'
import map from 'lodash/map'
import isObject from 'lodash/isObject'
import zipObject from 'lodash/zipObject'

export function expandItems({ fields, items }, idPrefix) {
  const entity = {}
  forEach(items, fieldValues => {
    const item = zipObject(fields, fieldValues)
    if (idPrefix) item.id = `${idPrefix}${item.id}`
    entity[item.id] = item
  })
  return entity
}
export function optionFill(ids, schema) {
  return map(ids, opt => {
    if (isObject(opt)) return opt
    return { ...schema[opt], value: opt }
  })
}
export function textSearchItem(searchValue) {
  return item =>
    every(compact(searchValue.split(' ')), searchTxt =>
      item.searchable.includes(searchTxt)
    )
}
export function textSearchItems(items, searchValue) {
  return searchValue && isString(searchValue) && filter(items, textSearchItem(searchValue)) || items
}
export function isInRange(items, ranges) {
  return filter(items, item =>
    every(ranges, range => {
      if (!range.value) return true
      return inRange(item[range.fieldId], range.value[0], range.value[1])
    })
  )
}

export const round = num => +num.toFixed(2)
