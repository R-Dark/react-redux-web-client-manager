import _ from 'lodash'
import React, { Component } from 'react'
import firebase from 'firebase'
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import '../styles/home.css';
import { clientsFetch } from '../actions'
import TableItems from './TableItems'
import TopRowButtons from './buttons/TopRowButtons'
import MiddleRowButtons from './buttons/MiddleRowButtons'
import BottomRowButtons from './buttons/BottomRowButtons'
import { Jumbotron } from 'reactstrap';

class Home extends Component {
  componentWillMount() {
    // this.props.clientsFetch();
    // console.log(this.props.clients)
    firebase.database().ref('location/state').set('arkansas')
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
            <TableItems />
       </div>
    )
  }
}

const styles = {
  jumboStyles: {
    marginTop: 17,
    paddingTop: 17,
    paddingBottom: 1,
    width: '98%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  mainDivStyles: {
    display: 'flex',
    flexDirection: 'column'
  },
  outterDivStyles: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: -14
  }
};

const mapStateToProps = state => {
  const clients = _.map(state.clients, (val, uid) => {
    return { ...val, uid }
  })

  return { clients }
}

export default connect(mapStateToProps, { clientsFetch } )(Home)


// {
//   "rules": {
// 		"users": {
//       "$uid": {
//         ".read": "$uid === auth.uid",
//         ".write": "$uid === auth.uid"
//       }
//     }
//   }
// }

// {
//       "rules": {
//         ".read": true,
//         ".write": true
//       }
// }
