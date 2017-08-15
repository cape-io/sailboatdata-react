import React, { PropTypes } from 'react'
import map from 'lodash/map'
// import { Link } from 'redux-history-sync'

import { cellStyles } from './styles'

function PricelistRowPattern({ columns, item }) {
  function onClick() {
    window.open(`http://sailboatdata.com/viewrecord.asp?class_id=${item.id.slice(2)}`)
  }
  return (
    <tr onClick={onClick} style={{ cursor: 'pointer' }}>
      {map(columns, ({ value }) => (
        <td key={value} style={cellStyles[value]}>
          {item[value]}
        </td>
      ))}
    </tr>
  )
}

PricelistRowPattern.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
}

export default PricelistRowPattern
