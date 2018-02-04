import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import '../styles/home.css';
import TableItem from './TableItem'
import { Jumbotron } from 'reactstrap';
import TableRow from './TableRow';
import SearchForm from './SearchForm';
import SelectedClient from './SelectedClient';
import BatchButton from './BatchButton';
import ReportButton from './ReportButton';
import PackageButton from './PackageButton';
import { queryDbByFilters, selectClient, noneSelected, runBatch, runReport, runPackage } from '../actions'


class Home extends Component {

  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey(){
    return this.keyCount++;
  }

  handleFormSubmit = ({ ownername, state, statusDropdown, zip, assignedTo, County }) => {
    if (ownername || state || statusDropdown || zip || assignedTo || County) {
      this.props.queryDbByFilters(ownername, state, statusDropdown, zip, assignedTo, County)
    }
  }


  renderClientRow () {
    console.log(this.props)
    if (this.props.client) {
      // selectedClient = this.props.selectedClient
      console.log(this.props)
      return this.props.client.map(
        itemData => <TableRow key={this.getKey()}
        // console.log(itemData, this)
        itemData={itemData}
        onClick={this.onRowPress.bind(this, itemData)}/>
      )
    } else if ( this.props.clientItemByState ) {
      // selectedClient = this.props.selectedClient
      return this.props.clientItemByState.map(
        itemData => <TableRow key={this.getKey()}
        itemData={itemData}
        onClick={this.onRowPress.bind(this, itemData)}/>
      )
    } else if ( this.props.clientItemByStatus ) {
      // selectedClient = this.props.selectedClient
      return this.props.clientItemByStatus.map(
        itemData => <TableRow key={this.getKey()}
        itemData={itemData}
        onClick={this.onRowPress.bind(this, itemData)}/>
      )
    } else if ( this.props.clientItemByZip ) {
      // selectedClient = this.props.selectedClient
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


    handleBatchClick = (data) => {
      // console.log('batch-on-page', data)
      this.props.runBatch(this.props.client)
    }

    handleReportClick = () => {
      console.log('report-on-page')
      this.props.runReport()
    }

    handlePackageClick = () => {
      console.log('package-on-page')
      this.props.runPackage()
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
                <div style={styles.BatchAndReportButtons}>
                <BatchButton onClick={this.handleBatchClick.bind(this)}/>
                <ReportButton onClick={this.handleReportClick.bind(this)}/>
                <PackageButton onClick={this.handlePackageClick.bind(this)}/>
                </div>
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

  },
  BatchAndReportButtons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 100,
    paddingRight: 50
  },
};

const mapStateToProps = state => {
  // console.log(state.clients.clientItem)
  return {
    clients: state.clients.items,
    selectedclient: state.selectedclient.clientInfo,
    client: state.clients.clientItem,
    clientItemByState: state.clients.clientItemByState,
    clientItemByStatus: state.clients.clientItemByStatus,
    clientItemByZip: state.clients.clientItemByZip
  }
}

export default connect(mapStateToProps, { queryDbByFilters, selectClient, noneSelected, runBatch, runReport, runPackage } )(Home)

// <div style={ styles.outterDivStyles }>
//   <Jumbotron style={styles.jumboStyles} id='home-button-jumbotron'>
//     <TopRowButtons />
//     <MiddleRowButtons />
//     <BottomRowButtons />
//   </Jumbotron>
// </div>


// handleFormSubmit = ({ ownername, state }) => {
//   this.props.searchClient(ownername, state)
// }

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
