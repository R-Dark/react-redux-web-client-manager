import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { Button } from 'reactstrap';

const BatchButton = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Button color="success">Run Batch</Button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'batch' // a unique identifier for this form
}, null, actions)(BatchButton)
