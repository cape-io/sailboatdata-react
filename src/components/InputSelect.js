import React, { PropTypes } from 'react'
import Select from './Select'
import { connectField } from 'redux-field'

const style = {
  label: {
  },
}

function InputSelect({ form, formEvent, id, label, options, value }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <Select
        id={id}
        className="form-control"
        value={form.value || value}
        {...formEvent}
        options={options}
      />
    </div>
  )
}

InputSelect.propTypes = {
  form: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
}
InputSelect.defaultProps = {
  value: '', // Because react-select doesn't like the initial value of undefined.
}
export default connectField()(InputSelect)
