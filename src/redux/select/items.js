import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import filter from 'lodash/filter'
import map from 'lodash/map'
import { comfortRatio, csf, displacementLength, getLengthBeam, sailDisp } from './calc'

export function isValidItem(entity) {
  return entity.id.startsWith('sb')
}

export function itemFill(item) {
  return {
    ...item,
    csf: csf(item.beam, item.displacement),
    cr: comfortRatio(item.loa, item.lwl, item.displacement, item.beam),
    lb: getLengthBeam(item.loa, item.beam),
    dispLen: displacementLength(item.displacement, item.lwl),
    sailDisp: sailDisp(item.sailArea, item.displacement),
    searchable: item.name.toLowerCase(),
  }
}

export const itemsSelector = createSelector(
  entitySelector,
  entity => map(filter(entity, isValidItem), itemFill)
)
