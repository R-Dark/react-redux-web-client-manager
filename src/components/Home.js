import React, { Component } from 'react'
import {Helmet} from "react-helmet";

class Home extends Component {
  render() {
    return(

      <div className='container'>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <h1>
          Home Page
        </h1>
      </div>
    )
  }
}

export default Home
