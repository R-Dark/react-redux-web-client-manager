import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import { Button } from 'reactstrap';
import BellatorumLogo from '../images/Bellatorum_Login_Logo.png'
import '../../styles/signin.css';


class SignIn extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password)
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props
    return (
          <div className="container" id='login-main'>
            <div className="jumbotron" id='login-jumbotron'>
              <div className="jumbotron-content">
                <div className="login-icon">
                  <img src={BellatorumLogo} alt={"BellatorumLogo"} />
                </div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} name="signin">
                    <fieldset className="form-group">
                      <input {...email} type="email" name="email" className="form-control" placeholder="Email" />
                    </fieldset>
                    <fieldset className="form-group">
                      <input {...password} type="password" name="password" className="form-control" placeholder="Password" />
                    </fieldset>
                    <Button action='submit' color="primary" size="lg" id='login-button' block>Login</Button>
                </form>
              </div>
            </div>
          </div>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(SignIn);
