import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button } from 'reactstrap';

const SearchForm = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
      <Field
        name="sequenceid"
        component="input"
        type="text"
        placeholder="Enter Id #"
        className= "form-control"
      />
      </div>

      <div className="form-group">
      <Field
        name="owner"
        component="input"
        type="text"
        placeholder="Enter Owner Name"
        className= "form-control"
      />
      </div>

      <div className="form-group">
      <Field
        name="state"
        component="input"
        type="text"
        placeholder="Enter State"
        className= "form-control"
      />
      </div>

      <div className="form-group">
      <Field
        name="zip"
        component="input"
        type="text"
        placeholder="Enter Zip Code"
        className= "form-control"
      />
      </div>

      <div>
        <Button color="success" size="lg" id='search-button' action="submit" block >
          Search
        </Button>
      </div>
    </form>
  )
}




export default reduxForm({
  form: 'searchform' // a unique identifier for this form
}, null, actions)(SearchForm)
