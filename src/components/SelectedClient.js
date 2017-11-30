import React, { Component } from 'react'
import { connect } from "react-redux";
import { Jumbotron, Table } from 'reactstrap';
import { selectClient, updateOffer, updateStatus } from '../actions'
import UpdateContact from './UpdateContact';
import StatusUpdate from './StatusUpdate';
import OfferUpdate from './OfferUpdate';
import AddClientNote from './AddClientNote';
import AssignTo from './AssignTo';
//make sure action created flows through all reducers


class SelectedClient extends Component {

  constructor(props){
    super(props)
  }


  handleFormSubmit = ({offerUpdate, statusUpdate}) => {
    // console.log(this.props.selectedclient)
    let id = this.props.selectedclient.uid
      if (offerUpdate) {
        this.props.updateOffer({offerUpdate}, id)
    } else if (statusUpdate) {
        this.props.updateStatus({statusUpdate}, id)
    }
  }

  renderCurrentStatus = () => {
    if (this.props.currentStatus) {
      return <div style={ styles.statusOfferNumbersStyles }>Current Status:<div style={ styles.redOfferStatusStyles }>{this.props.currentStatus.statusUpdate}</div></div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>Current Status:<div style={ styles.redOfferStatusStyles }>{this.props.selectedclient.statusUpdate}</div></div>
    }
  }

  renderOfferStatus = () => {
    if (this.props.offerUpdate) {
      return <div style={ styles.statusOfferNumbersStyles }>Offer Status:<div style={ styles.redOfferStatusStyles }>${this.props.offerUpdate.offerUpdate}</div></div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>Offer Status:<div style={ styles.redOfferStatusStyles }>${this.props.selectedclient.offerUpdate}</div></div>
    }
  }




  render(){
    return (
      <div style={ styles.mainDivStyles }>


      <Jumbotron style={ styles.clientJumboStyles }>
        <div style={ styles.clientTitleStyles }>
          <h5>Letter Detail</h5>
        </div>
        <div style={ styles.clientDivStyles } >
          <Table bordered size="sm" responsive>
          <thead>
            <tr>
              <th>Run ID</th>
              <th>Sequence ID</th>
              <th>Grouped Owner ID</th>
              <th>Creation Date</th>
              <th>Buyer</th>
              <th>Owner Name</th>
              <th>Address</th>
              <th>Leases</th>
              <th>Operators</th>
              <th>Blended Avg (NRA)</th>
              <th>Estimated Section Count</th>
            </tr>
          </thead>
          <tbody style={ styles.tbodyStyles }>
            <tr>
                <td>{this.props.selectedclient.runID}</td>
                <td>{this.props.selectedclient.sequenceID}</td>
                <td>{this.props.selectedclient.ownerID}</td>
                <td>{this.props.selectedclient.createdAt}</td>
                <td>{this.props.selectedclient.Owner}</td>
                <td>{this.props.selectedclient.Address}</td>
                <td>{this.props.selectedclient.ownerID}</td>
                <td>{this.props.selectedclient.Well}</td>
                <td>{this.props.selectedclient.OPERATOR}</td>
                <td>{this.props.selectedclient.blendedAvg}</td>
                <td>{this.props.selectedclient.sectNo}</td>
            </tr>
          </tbody>
          </Table>
        </div>
      </Jumbotron>

      <Jumbotron style={ styles.clientJumboStyles }>
        <div style={ styles.clientTitleStyles }>
          <h5>Exhibit Detail</h5>
        </div>
        <div style={ styles.clientDivStyles } >
          <Table bordered size="sm" responsive>
          <thead>
            <tr>
              <th>County</th>
              <th>Lease Name</th>
              <th>Operator Name</th>
              <th>Legal Description</th>
              <th>Owner Interest</th>
              <th>Owner Interest Type</th>
              <th>Rate Area</th>
              <th>Valuation</th>
              <th>Valuation Method</th>
              <th>Valuation Rate</th>
              <th>Tax Value</th>
              <th>Acreage Estimate</th>
              <th>NRA</th>
              <th>Acreage Source</th>
              <th>Production BO/M</th>
              <th>Active Permit</th>
              <th>Active HZ Permit</th>
              <th>rrc_id_raw</th>
            </tr>
          </thead>
          <tbody style={ styles.tbodyStyles }>
            <tr>
                <td>{this.props.selectedclient.COUNTY}</td>
                <td>{this.props.selectedclient.Well}</td>
                <td>{this.props.selectedclient.OPERATOR}</td>
                <td>{this.props.selectedclient.combineDLegal}</td>
                <td>{this.props.selectedclient.INTEREST}</td>
                <td>{this.props.selectedclient.TYPE}</td>
                <td>{this.props.selectedclient.rateArea}</td>
                <td>{this.props.selectedclient.VALUATION}</td>
                <td>{this.props.selectedclient.valuationMethod}</td>
                <td>{this.props.selectedclient.valuationRate}</td>
                <td>{this.props.selectedclient.taxValue}</td>
                <td>{this.props.selectedclient.acreageFinal}</td>
                <td>{this.props.selectedclient.NRA}</td>
                <td>{this.props.selectedclient.acreageSource}</td>
                <td>{this.props.selectedclient.productionBOM}</td>
                <td>{this.props.selectedclient.activePermit}</td>
                <td>{this.props.selectedclient.rrcID}</td>
            </tr>
          </tbody>
          </Table>
        </div>
      </Jumbotron>

      <div style={ styles.statusOfferHistoryDiv }>

        <Jumbotron style={ styles.statusJumboStyles }>
          <div style={ styles.statusTitleStyles }>
            <h5>Status History</h5>
            {this.renderCurrentStatus()}
          </div>
          <div style={ styles.clientDivStyles } >
            <Table bordered size="sm" responsive>
            <thead>
              <tr>
                <th>Date/Time</th>
                <th>Status</th>
                <th>Updated By</th>
              </tr>
            </thead>
            <tbody style={ styles.tbodyStyles }>
              <tr>
                  <td>Current</td>
                  <td>{this.props.selectedclient.DIP}</td>
                  <td>{this.props.selectedclient.modifiedBy}</td>
              </tr>
            </tbody>
            </Table>
          </div>
          <div style={ styles.statusButtonsStyles }>
            <StatusUpdate onSubmit={this.handleFormSubmit}/>
            <AssignTo />
          </div>
          <div style={ styles.assignedToStyles }>
            <div style={ styles.statusOfferNumbersStyles }>Assigned To:<div style={ styles.redOfferStatusStyles }>Seth</div></div>
          </div>
        </Jumbotron>

        <Jumbotron style={ styles.offerJumboStyles }>
          <div style={ styles.offerTitleStyles }>
            <h5>Offer History</h5>
            {this.renderOfferStatus()}
          </div>
          <div style={ styles.clientDivStyles } >
            <Table bordered size="sm" responsive>
            <thead>
              <tr>
                <th>Date/Time</th>
                <th>Offer</th>
                <th>Approved By</th>
              </tr>
            </thead>
            <tbody style={ styles.tbodyStyles }>
              <tr>
                  <td>Current</td>
                  <td>{this.props.selectedclient.currentOffer}</td>
                  <td>{this.props.selectedclient.modifiedBy}</td>
              </tr>
              <tr>
                  <td>Original</td>
                  <td>{this.props.selectedclient.originalOffer}</td>
                  <td>Letter</td>
              </tr>
            </tbody>
            </Table>
          </div>
          <OfferUpdate onSubmit={this.handleFormSubmit}/>
        </Jumbotron>


      </div>


      <Jumbotron style={ styles.clientJumboStyles }>
        <div style={ styles.clientTitleStyles }>
          <h5>Contact Information</h5>
        </div>
        <div style={ styles.clientDivStyles } >
          <Table bordered size="sm" responsive>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Modified By</th>
              <th>Contact Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody style={ styles.tbodyStyles }>
            <tr>
                <td>{this.props.selectedclient.ownerID}</td>
                <td>{this.props.selectedclient.modifiedBy}</td>
                <td>{this.props.selectedclient.Owner}</td>
                <td>{this.props.selectedclient.phoneNumber}</td>
                <td>{this.props.selectedclient.emailAddress}</td>
                <td>{this.props.selectedclient.NOTES}</td>
            </tr>
          </tbody>
          </Table>
        </div>
        <UpdateContact />
      </Jumbotron>


      <Jumbotron style={ styles.clientJumboStyles }>
        <div style={ styles.clientTitleStyles }>
          <h5>Notes</h5>
        </div>
        <div style={ styles.clientDivStyles } >
          <Table bordered size="sm" responsive>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Note</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody style={ styles.tbodyStyles }>
            <tr>
                <td>{this.props.selectedclient.noteCreateTimeStamp}</td>
                <td>{this.props.selectedclient.NOTES}</td>
                <td>{this.props.selectedclient.modifiedBy}</td>
            </tr>
          </tbody>
          </Table>
        </div>
        <AddClientNote onSubmit={this.handleClientNoteSubmit}/>
      </Jumbotron>

      </div>
    );

}
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentStatus: state.selectedclient.status,
    offerUpdate: state.selectedclient.offer
  }
}

const styles = {
  listTitleStyles: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 5
  },
  clientJumboStyles: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: -10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(215, 215, 215)'
  },
  clientTitleStyles: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tbodyStyles: {
    fontSize: 15
  },
  statusOfferHistoryDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  statusJumboStyles: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: -10,
    width: '48%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(215, 215, 215)'
  },
  offerJumboStyles: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: -10,
    width: '48%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(215, 215, 215)'
  },
  offerTitleStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 5,
    paddingLeft: 15
  },
  statusTitleStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 5,
    paddingLeft: 15
  },
  redOfferStatusStyles: {
    color: 'rgb(247, 11, 32)',
    paddingLeft: 10,
    paddingRight: 15,
    fontWeight: 'bold'
  },
  statusOfferNumbersStyles: {
    display: 'flex',
    flexDirection: 'row'
  },
  clientDivStyles: {
    backgroundColor: '#fff',
    marginBottom: 15
  },
  statusUpdateFormStyles: {
    marginBottom: 15
  },
  statusButtonsStyles: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginTop: -30,
    marginLeft: 50
  },
  assignedToStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 15
  }
};

export default connect(mapStateToProps, { selectClient, updateOffer, updateStatus })(SelectedClient);


// <h4 className="title">{this.props.clientInfo.OWNER}</h4>
// <h4 className="title">{this.props.selectedClient.OWNER}</h4>
// <div>{this.props.book.pages} pages</div>
// <div>Author: {this.props.book.author}</div>
// <div>Price: ${this.props.book.price} USD</div>
// <div>
//   Published: {this.props.book.published_date} by{" "}
//   {this.props.book.publisher}
// </div>
// <div>Genre: {this.props.book.category.join(", ")} </div>
