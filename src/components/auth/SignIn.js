import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signinUser } from '../../actions'
import BellatorumLogo from '../images/Bellatorum_Login_Logo.png'
import '../../styles/signin.css';
import SignInForm from './SignInForm'

class SignIn extends Component {

  handleFormSubmit = ({ email, password }) => {
    console.log(email, password)
    this.props.signinUser({ email, password })

  }

  render() {
    return (
          <div className="container" id='login-main'>
            <div className="jumbotron" id='login-jumbotron'>
              <div className="jumbotron-content">
                <div className="login-icon">
                  <img src={BellatorumLogo} alt={"BellatorumLogo"} />
                </div>
                <SignInForm onSubmit={this.handleFormSubmit} />
              </div>
            </div>
          </div>
    );
  }
}

export default connect(null, { signinUser })(SignIn)
