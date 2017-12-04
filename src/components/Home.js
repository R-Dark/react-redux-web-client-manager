import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import '../styles/home.css';
import TableItem from './TableItem'
import { Jumbotron } from 'reactstrap';
import TableRow from './TableRow';
import SearchForm from './SearchForm';
import SelectedClient from './SelectedClient';
import BatchAndReportButtons from './BatchAndReportButtons';
import { searchClient, selectClient, searchByState, searchByStatus, searchByZip, noneSelected } from '../actions'


class Home extends Component {

  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey(){
    return this.keyCount++;
  }

  handleFormSubmit = ({ ownername, state, statusDropdown, zip }) => {
    if (ownername) {
      this.props.searchClient(ownername)
    } else if (state) {
        this.props.searchByState(state)
    } else if (statusDropdown) {
        this.props.searchByStatus(statusDropdown)
    } else if (zip) {
        this.props.searchByZip(zip)
    }else {
      this.props.noneSelected()
    }
  }




  // handleFormSubmit = ({ ownername, state }) => {
  //   this.props.searchClient(ownername, state)
  // }

  renderClientRow () {
    if (this.props.client) {
      // console.log(this.props.client)
      return this.props.client.map(
        itemData => <TableRow key={this.getKey()}
        itemData={itemData}
        onClick={this.onRowPress.bind(this, itemData)}/>
      )
    } else if ( this.props.clientItemByState ) {
      return this.props.clientItemByState.map(
        itemData => <TableRow key={this.getKey()}
        itemData={itemData}
        onClick={this.onRowPress.bind(this, itemData)}/>
      )
    } else if ( this.props.clientItemByStatus ) {
      return this.props.clientItemByStatus.map(
        itemData => <TableRow key={this.getKey()}
        itemData={itemData}
        onClick={this.onRowPress.bind(this, itemData)}/>
      )
    } else if ( this.props.clientItemByZip ) {
      return this.props.clientItemByZip.map(
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
       <div style={ styles.mainDivStyles } id='main-div-styles'>
        <Helmet>
          <title>the Brain</title>
        </Helmet>
            <div style={styles.outterDivStyles}>
              <Jumbotron style={styles.jumboStyles2} id='main-div-styles'>
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
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15
  },
  jumboStyles2: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ced4da'
  }
};

const mapStateToProps = state => {
  return {
    clients: state.clients.items,
    selectedclient: state.selectedclient.clientInfo,
    client: state.clients.clientItem,
    clientItemByState: state.clients.clientItemByState,
    clientItemByStatus: state.clients.clientItemByStatus,
    clientItemByZip: state.clients.clientItemByZip
  }
}

export default connect(mapStateToProps, { searchClient, selectClient, noneSelected, searchByState, searchByStatus, searchByZip } )(Home)

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
