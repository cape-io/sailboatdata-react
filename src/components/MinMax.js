import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

function MinMax({ form, formEvent, max, min, fieldId }) {
  const value = form.value || [ min, max ]
  const { onChange } = formEvent
  const minId = `field-${fieldId}-min`
  const maxId = `field-${fieldId}-max`
  function getVal(event) {
    const val = event.target.value
    return val
  }
  const onMinChange = event => onChange([ getVal(event), value[1] ])
  const onMaxChange = event => onChange([ value[0], getVal(event) ])
  // console.log(value)

  return (
    <form className="form-inline">
      <div className="form-group">
        <label htmlFor={minId}>{fieldId}</label>
        <input
          type="number" className="form-control" id={minId} placeholder={`Min ${fieldId}`}
          onChange={onMinChange}
          value={value[0]}
        />
      </div>
      <div className="form-group">
        <label htmlFor={maxId}>To</label>
        <input
          type="number" className="form-control" id={maxId} placeholder={`Max ${fieldId}`}
          onChange={onMaxChange}
          value={value[1]}
        />
      </div>
    </form>
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
