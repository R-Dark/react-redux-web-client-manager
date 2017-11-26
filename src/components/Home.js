import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import '../styles/home.css';
import TableItem from './TableItem'
import TopRowButtons from './buttons/TopRowButtons'
import MiddleRowButtons from './buttons/MiddleRowButtons'
import BottomRowButtons from './buttons/BottomRowButtons'
import { Jumbotron } from 'reactstrap';
import TableRow from './TableRow';
import SearchForm from './SearchForm';
import SelectedClient from './SelectedClient';
import UpdateContact from './UpdateContact';
import BatchAndReportButtons from './BatchAndReportButtons';
import PlaceHolder from './buttons/PlaceHolder';
import { searchClient, selectClient } from '../actions'


class Home extends Component {

  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey(){
    return this.keyCount++;
  }

  handleFormSubmit = ({ ownername, state, zip }) => {
    // console.log(state)
    this.props.searchClient(ownername, state, zip)
  }

  renderClientRow () {
    if (this.props.client) {
      // console.log(this.props.client)
      return this.props.client.map(
        itemData => <TableRow key={this.getKey()}
        itemData={itemData}
        onClick={this.onRowPress.bind(this, itemData)}/>
      )
    }
  }


  onRowPress = (clientInfo) => {
    this.props.selectClient(clientInfo)
}

  renderSelectedClientRow = () => {
    if (this.props.selectedclient) {
      return (
        <div>
          <SelectedClient {...this.props}/>
        </div>
      )
    }
  }



  render() {
    return(
       <div style={ styles.mainDivStyles }>
        <Helmet>
          <title>the Brain</title>
        </Helmet>
            <div style={styles.outterDivStyles}>
              <Jumbotron style={styles.jumboStyles2} >
                <SearchForm onSubmit={this.handleFormSubmit}/>
                <BatchAndReportButtons/>
              </Jumbotron>
            </div>
                <TableItem>
                  {this.renderClientRow()}
                </ TableItem>
                
           <div>
           <div>
              {this.renderSelectedClientRow()}
           </div>

         </div>

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
    paddingRight: 20,
  },
  mainDivStyles: {
    display: 'flex',
    flexDirection: 'column'
  },
  outterDivStyles: {
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15
  },
  jumboStyles2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10
  }
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    clients: state.clients.items,
    selectedclient: state.selectedclient.clientInfo,
    client: state.clients.clientItem
  }
}

export default connect(mapStateToProps, { searchClient, selectClient } )(Home)

// <div style={ styles.outterDivStyles }>
//   <Jumbotron style={styles.jumboStyles} id='home-button-jumbotron'>
//     <TopRowButtons />
//     <MiddleRowButtons />
//     <BottomRowButtons />
//   </Jumbotron>
// </div>


// this will load and display all database objects at page loading
// componentWillMount() {
//   this.props.clientsFetch();
// }
//
// renderTableRow() {
//   if (this.props.clients) {
//     return this.props.clients.map(
//       itemData => <TableRow key={this.getKey()}
//       itemData={itemData}
//       onClick={this.onRowPress}/>
//     )
//   }
// }
