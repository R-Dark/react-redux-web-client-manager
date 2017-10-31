import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'


const StateButton = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="states"
          component="input"
          type="number"
          placeholder="Enter State"
          className= "form-control"
        />
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'states' // a unique identifier for this form
}, null, actions)(StateButton)
