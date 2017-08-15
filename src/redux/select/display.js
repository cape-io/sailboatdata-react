import { createSelector } from 'reselect'

import { optionFill } from '../../helpers/understory'
import { getDb } from './'

const getViewInfo = getDb('view')
const getSchema = getDb('schema')

const defaultColumns = 'basic'
const getColumns = (state) => getViewInfo(state).columns[defaultColumns]

export const columnsSelector = createSelector(
  getColumns,
  getSchema,
  optionFill
)
