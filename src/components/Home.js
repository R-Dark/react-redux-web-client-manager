import _ from 'lodash'
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import '../styles/home.css';
import { clientsFetch } from '../actions'
import ListItems from './ListItems'
import RunButton from './buttons/RunButton'
import TopRowButtons from './buttons/TopRowButtons'
import MiddleRowButtons from './buttons/MiddleRowButtons'
import BottomRowButtons from './buttons/BottomRowButtons'
import { Jumbotron } from 'reactstrap';

class Home extends Component {
  componentWillMount() {
    this.props.clientsFetch();
    console.log(this.props.clients)
  }


  render() {
    return(
       <div style={ styles.mainDivStyles}>
        <Helmet>
          <title>the Brain</title>
        </Helmet>

        <div style={ styles.outterDivStyles }>
          <Jumbotron style={styles.jumboStyles} id='home-button-jumbotron'>
            <TopRowButtons />
            <MiddleRowButtons />
            <BottomRowButtons />
          </Jumbotron>
        </div>
            <ListItems />

      </div>
    )
  }
}

const styles = {
  jumboStyles: {
    marginTop: 17,
    paddingTop: 15,
    paddingBottom: 15,
    width: '98%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15
  },
  mainDivStyles: {
    display: 'flex',
    flexDirection: 'column'
  },
  outterDivStyles: {
    display: 'flex',
    justifyContent: 'center',
  }
};

const mapStateToProps = state => {
  const clients = _.map(state.clients, (val, uid) => {
    return { ...val, uid }
  })

  return { clients }
}

export default connect(mapStateToProps, { clientsFetch } )(Home)
