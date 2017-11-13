import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import '../styles/home.css';
import { clientsFetch } from '../actions/ClientActions'
import TableItem from './TableItem'
import TopRowButtons from './buttons/TopRowButtons'
import MiddleRowButtons from './buttons/MiddleRowButtons'
import BottomRowButtons from './buttons/BottomRowButtons'
import { Jumbotron } from 'reactstrap';
import TableRow from './TableRow';

class Home extends Component {

  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey(){
    return this.keyCount++;
  }

  componentWillMount() {
    this.props.clientsFetch();
  }

  renderTableRow() {
    if (this.props.clients) {
      return this.props.clients.map(itemData => <TableRow key={this.getKey()} itemData={itemData} />)
    }
  }

  render() {
    return(
       <div style={ styles.mainDivStyles }>
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
            <TableItem>
              {this.renderTableRow()}
            </ TableItem>
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
  return {
    clients: state.clients.items
  }
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
