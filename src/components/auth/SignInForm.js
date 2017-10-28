import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { Button } from 'reactstrap';

const SignInForm = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
      <Field
        name="email"
        component="input"
        type="email"
        placeholder="Email"
        className= "form-control"
      />
      </div>

      <div className="form-group">
      <Field
        name="password"
        component="input"
        type="password"
        placeholder="Password"
        className= "form-control"
      />
      </div>

      <div>
        <Button color="primary" size="lg" id='login-button' action="submit" block >
          Login
        </Button>
      </div>
    </form>
  )
}




export default reduxForm({
  form: 'signin' // a unique identifier for this form
}, null, actions)(SignInForm)
