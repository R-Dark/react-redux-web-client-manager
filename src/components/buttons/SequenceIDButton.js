import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'


const SequenceIDButton = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="sequenceid"
          component="input"
          type="number"
          placeholder="Enter ID #"
          className= "form-control"
        />
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'sequenceid' // a unique identifier for this form
}, null, actions)(SequenceIDButton)
