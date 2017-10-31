import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'


const MaxResultsButton = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="maxresults"
          component="input"
          type="number"
          placeholder="Max Results"
          className= "form-control"
        />
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'maxresults' // a unique identifier for this form
}, null, actions)(MaxResultsButton)
