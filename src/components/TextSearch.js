import React, { PropTypes } from 'react'

import { connectField } from 'redux-field'


function TextSearch({ form, formEvent }) {
  const { value } = form
  const { onBlur, onChange, onFocus } = formEvent
  return (
    <form className="" role="search">
      <div className="form-group">
        <input
          autoFocus
          className="form-control"
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder="Search"
          value={value || ''}
        />
      </div>
    </form>
  )
}

TextSearch.propTypes = {
  form: PropTypes.object,
  formEvent: PropTypes.object.isRequired,
}
TextSearch.defaultProps = {
}
export default connectField({ initialValue: '' })(TextSearch)
