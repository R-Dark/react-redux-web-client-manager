import _ from 'lodash'
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import { clientsFetch } from '../actions'
import ListItems from './ListItems'
import SelectButtons from './SelectButtons'
import { Jumbotron } from 'reactstrap';

class Home extends Component {
  componentWillMount() {
    this.props.clientsFetch();
    console.log(this.props.clients)
  }


  render() {
    return(

      <div className='container'>
        <Jumbotron style={{ marginTop: 50, paddingTop: 20 }}>
          <Helmet>
            <title>Home</title>
          </Helmet>
          <SelectButtons />
          <ListItems />
        </Jumbotron>
      </div>
    )
  }
}



const mapStateToProps = state => {
  const clients = _.map(state.clients, (val, uid) => {
    return { ...val, uid }
  })

  return { clients }
}

export default connect(mapStateToProps, { clientsFetch } )(Home)
