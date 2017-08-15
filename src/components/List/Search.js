import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Search from '../TextSearch'
import Pager from '../Pager'
import MinMax from '../MinMax'

function PricelistSearch(props) {
  const { prefix, minMax, ...rest } = props
  return (
    <div className="container-fluid">
      <Search prefix={prefix.text} />
      {minMax &&
        <div className="container">
          {map(minMax, info => (
            <MinMax {...info} key={info.fieldId} prefix={[ 'list', info.fieldId ]} />
          ))}
        </div>
      }
      <div className="container">
        <Pager
          prefix={prefix.pgIndex}
          pgSizePrefix={prefix.pgSize}
          {...rest}
        />
      </div>
    </div>
  )
}
PricelistSearch.propTypes = {
  displayStyle: PropTypes.object,
  minMax: PropTypes.array,
  pageSizes: PropTypes.array.isRequired,
  prefix: PropTypes.object.isRequired,
  perPage: PropTypes.number.isRequired,
}
PricelistSearch.defaultProps = {
}

export default PricelistSearch
