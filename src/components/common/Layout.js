import React, { Component } from 'react';
import Footer from './Footer'
import NavBar from './NavBar'

class Layout extends Component {
  render() {
    return(
      <div>
        <NavBar />
          <div>{this.props.children}</div>

      </div>
    )
  }
}

export default Layout;

// <Footer />
