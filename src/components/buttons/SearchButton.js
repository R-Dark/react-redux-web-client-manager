import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { Button } from 'reactstrap';

const SearchButton = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Button color="success">Search</Button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'search' // a unique identifier for this form
}, null, actions)(SearchButton)
