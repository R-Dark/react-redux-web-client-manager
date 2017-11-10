import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";
import { signinUser } from '../../actions'
import BellatorumLogo from '../images/Bellatorum_Login_Logo.png'
import '../../styles/signin.css';
import SignInForm from './SignInForm'

class SignIn extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className='alert alert-warning' id='auth-fail-alert'>
          {this.props.errorMessage}
        </div>
      )
    }
  }


  handleFormSubmit = ({ email, password }) => {
    this.props.signinUser({ email, password })
  }

  render() {
    return (
          <div className="container" id='login-main'>
            <Helmet>
              <title>Login</title>
            </Helmet>
            <div className="jumbotron" id='login-jumbotron'>
              <div className="jumbotron-content">
                <div className="login-icon">
                  <img src={BellatorumLogo} alt={"BellatorumLogo"} />
                </div>
                <SignInForm onSubmit={this.handleFormSubmit} />
                {this.renderAlert()}
              </div>
            </div>
          </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default connect(mapStateToProps, { signinUser })(SignIn)
