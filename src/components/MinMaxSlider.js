import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import values from 'lodash/values'
import Rcslider from 'rc-slider'

function MinMax({ form, formEvent, max, min, fieldId }) {
  const value = form.value && values(form.value) || [ min, max ]
  const { onChange } = formEvent
  console.log(value)
  return (
    <div style={{ width: 800 }}>
      <label>{fieldId}</label>
      <Rcslider
        className="row"
        range
        step={max / 100} min={min} max={max} onChange={onChange} value={value}
      />
    </div>
  )
}

MinMax.propTypes = {
  fieldId: PropTypes.string.isRequired,
  form: PropTypes.object,
  formEvent: PropTypes.object.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
}
MinMax.defaultProps = {
  step: 20,
}
export default connectField({ prefix: [ 'list', 'minMax' ] })(MinMax)
