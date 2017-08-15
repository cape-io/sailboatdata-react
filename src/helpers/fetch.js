import 'isomorphic-fetch'
import partialRight from 'lodash/partialRight'
import { entityPutAll } from 'redux-graph'

import { expandItems } from './understory'

export function getJson(endpoint) {
  return fetch(endpoint) // { method: 'HEAD' }
  .then(res => {
    if (res.status > 400) return Promise.reject({ status: res.status, message: res.statusText })
    console.log(endpoint, res.status)
    return res.json()
  })
}
export function searchIndex(dispatch) {
  return getJson('/data/search.json')
  .then(partialRight(expandItems, 'sb'))
  .then(entityPutAll)
  .then(dispatch)
}
export function fetchItem(id) {
  return getJson(`/data/${id}.json`)
}
