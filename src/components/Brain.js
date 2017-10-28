import React, { Component } from 'react'
import {Helmet} from "react-helmet";

class Brain extends Component {
  render() {
    return(
      <div className='container'>
        <Helmet>
          <title>Brain</title>
        </Helmet>
        <h1>
          Brain
        </h1>
      </div>
    )
  }
}

export default Brain
