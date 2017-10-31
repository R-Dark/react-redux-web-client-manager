import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { Button } from 'reactstrap';

const RunReportButton = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Button color="success">Run Report</Button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'runreport' // a unique identifier for this form
}, null, actions)(RunReportButton)
