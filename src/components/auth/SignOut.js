import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signoutUser } from '../../actions'
import BellatorumLogo from '../images/Bellatorum_Login_Logo.png'
import {Helmet} from "react-helmet";
import { Button } from 'reactstrap';



class SignOut extends Component {
    componentWillMount() {
      this.props.signoutUser()
    }

    render() {
      return (
        <div className="container" id='login-main'>
          <Helmet>
            <title>Sign Out</title>
          </Helmet>
          <div className="jumbotron" id='login-jumbotron'>
            <div className="jumbotron-content">
              <div className="login-icon">
                <img src={BellatorumLogo} alt={"BellatorumLogo"} />
              </div>
              <div style={{ marginTop: 30 }}>
                <a href="/signin" style={{ textDecoration: 'none' }}>
                <Button color="primary" size="lg" id='signout-button' action="submit" block >
                  Login
                </Button>
            </a>
          </div>
              <div className='alert alert-warning' id='auth-fail-alert'>
                Signed Out
              </div>
            </div>
          </div>
        </div>
      )
    }
}


export default connect(null, { signoutUser })(SignOut)
