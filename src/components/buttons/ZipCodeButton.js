import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

const ZipCodeButton = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="zipcode"
          component="input"
          type="number"
          placeholder="Enter Zip Code"
          className= "form-control"
        />
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'zipcode' // a unique identifier for this form
}, null, actions)(ZipCodeButton)
