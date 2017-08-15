import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import classnames from 'classnames'
import Select from './InputSelect'

function Pager(props) {
  const { displayStyle, formEvent, hasLess, hasMore, maxPage,
    pageIndex, pageSizes, perPage, pgSizePrefix, totalItems,
  } = props
  const { onChange } = formEvent
  const itemCount = `${totalItems} Boats`
  const pageCount = `${pageIndex} / ${maxPage}`
  function prev() {
    if (hasLess) onChange(pageIndex - 1)
  }
  function next() {
    if (hasMore) onChange(pageIndex + 1)
  }
  const btnBoot = 'btn btn-default'
  return (
    <div className="row">
      <div className="col-md-4">
        <button
          onClick={prev}
          className={classnames(btnBoot, 'navbar-left', { disabled: !hasLess })}
          disabled={!hasLess}
          type="button"
        >
          Previous
        </button>
      </div>
      <div className="col-md-1">
        <p>
          {itemCount}
        </p>
      </div>
      <div className="col-md-1">
        <p>
          {pageCount}
        </p>
      </div>
      <div className="col-md-2">
        <form className="form-inline">
          <Select
            label="View Qty"
            id="view-qty"
            options={pageSizes}
            prefix={pgSizePrefix}
            value={perPage.toString()}
          />
        </form>
        {displayStyle &&
          <Select
            label="Display Style"
            options={displayStyle.options}
            prefix={displayStyle.prefix}
            value={displayStyle.active}
          />
        }
      </div>
      <div className="col-md-4">
        <button
          onClick={next}
          className={classnames(btnBoot, { disabled: !hasMore })}
          disabled={!hasMore}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}

Pager.propTypes = {
  displayStyle: PropTypes.object,
  formEvent: PropTypes.object.isRequired,
  hasLess: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  maxPage: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSizes: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
  pgSizePrefix: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
}

export default connectField()(Pager)
