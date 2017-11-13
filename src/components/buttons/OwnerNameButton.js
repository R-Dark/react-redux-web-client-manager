import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'


const OwnerNameButton = props => {
  
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="ownername"
          component="input"
          type="text"
          placeholder="Enter Owner Name"
          className= "form-control"
        />
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'ownername' // a unique identifier for this form
}, null, actions)(OwnerNameButton)
