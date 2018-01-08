import React, { Component } from 'react'
import { connect } from "react-redux";
import { Jumbotron, Table } from 'reactstrap';
import { selectClient, updateOffer, updateStatus, updateAssignment, updateContactName, updatePhoneNumber, updateContactEmail, updateContactNote, updateClientNote } from '../actions'
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


  handleFormSubmit = ({offerUpdate, statusUpdate, assignTo, contactName, phoneNumber, contactEmail, contactNote, clientNote}) => {
    // console.log(this.props.selectedclient)
    let id = this.props.selectedclient.uid
      if (offerUpdate) {
        this.props.updateOffer({offerUpdate}, id)
    } else if (statusUpdate) {
        this.props.updateStatus({statusUpdate}, id)
    } else if (assignTo) {
        this.props.updateAssignment({assignTo}, id)
    } else if (contactName) {
        this.props.updateContactName({contactName}, id)
    }else if (phoneNumber) {
        this.props.updatePhoneNumber({phoneNumber}, id)
    }else if (contactEmail) {
        this.props.updateContactEmail({contactEmail}, id)
    }else if (contactNote) {
        this.props.updateContactNote({contactNote}, id)
    }else if (clientNote) {
        this.props.updateClientNote({clientNote}, id)
    }
  }


  renderCurrentStatus = () => {
    if (this.props.currentStatus) {
      return <div style={ styles.statusOfferNumbersStyles }>Current Status:<div style={ styles.redOfferStatusStyles }>{this.props.currentStatus.statusUpdate}</div></div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>Current Status:<div style={ styles.redOfferStatusStyles }>{this.props.selectedclient.statusUpdate}</div></div>
    }
  }

  renderCurrentStatus2 = () => {
    if (this.props.currentStatus) {
      return <div>{this.props.currentStatus.statusUpdate}</div>
    } else {
      return <div>{this.props.selectedclient.statusUpdate}</div>
    }
  }


  renderOfferStatus = () => {
    if (this.props.offerUpdate) {
      return <div style={ styles.statusOfferNumbersStyles }>Current Offer:<div style={ styles.redOfferStatusStyles }>{this.props.offerUpdate.offerUpdate}</div></div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>Current Offer:<div style={ styles.redOfferStatusStyles }>{this.props.selectedclient.offerUpdate}</div></div>
    }
  }


  renderOfferStatus2 = () => {
    if (this.props.offerUpdate) {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.offerUpdate.offerUpdate}</div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.selectedclient.offerUpdate}</div>
    }
  }

  renderAssignTo = () => {
    if (this.props.currentAssignment) {
      return <div style={ styles.statusOfferNumbersStyles }>Assignment:<div style={ styles.redOfferStatusStyles }>{this.props.currentAssignment.assignTo}</div></div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>Assignment:<div style={ styles.redOfferStatusStyles }>{this.props.selectedclient.assignTo}</div></div>
    }
  }

  renderContactName = () => {
    if (this.props.contactName) {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.contactName.contactName}</div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.selectedclient.contactName}</div>
    }
  }

  renderPhoneNumber = () => {
    if (this.props.phoneNumber) {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.phoneNumber.phoneNumber}</div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.selectedclient.phoneNumber}</div>
    }
  }

  renderContactEmail = () => {
    if (this.props.contactEmail) {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.contactEmail.contactEmail}</div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.selectedclient.contactEmail}</div>
    }
  }

  renderContactNote = () => {
    if (this.props.contactNote) {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.contactNote.contactNote}</div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.selectedclient.contactNote}</div>
    }
  }

  renderClientNote = () => {
    if (this.props.clientNote) {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.clientNote.clientNote}</div>
    } else {
      return <div style={ styles.statusOfferNumbersStyles }>{this.props.selectedclient.clientNote}</div>
    }
  }

  renderPricePerAcre = () => {
    if (this.props.offerUpdate) {
      return (
        this.props.offerUpdate.offerUpdate / 11.8
      )
    } else {
      return (
        this.props.selectedclient.offerUpdate / 11.8
      )
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
            {this.renderAssignTo()}
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
                  <td>{this.renderCurrentStatus2()}</td>
                  <td>{this.props.selectedclient.modifiedBy}</td>
              </tr>
            </tbody>
            </Table>
          </div>
          <div style={ styles.statusButtonsStyles }>
            <StatusUpdate onSubmit={this.handleFormSubmit}/>
            <AssignTo onSubmit={this.handleFormSubmit}/>
          </div>
          <div style={ styles.assignedToStyles }>
          </div>
        </Jumbotron>

        <Jumbotron style={ styles.offerJumboStyles }>
          <div style={ styles.offerTitleStyles }>
            <h5>Offer History</h5>
            <div style={ styles.statusOfferNumbersStyles }>Price Per Acre:<div style={ styles.redOfferStatusStyles }>{this.renderPricePerAcre().toFixed(2)}</div></div>
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
                  <td>{this.renderOfferStatus2()}</td>
                  <td>{this.props.selectedclient.modifiedBy}</td>
              </tr>
              <tr>
                  <td>Original</td>
                  <td>{this.props.selectedclient.originalOffer}</td>
                  <td> </td>
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
                <td>{this.renderContactName()}</td>
                <td>{this.renderPhoneNumber()}</td>
                <td>{this.renderContactEmail()}</td>
                <td>{this.renderContactNote()}</td>
            </tr>
          </tbody>
          </Table>
        </div>
        <UpdateContact onSubmit={this.handleFormSubmit}/>
      </Jumbotron>


      <Jumbotron style={ styles.clientJumboStyles }>
        <div style={ styles.clientTitleStyles }>
          <h5>General Notes</h5>
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
                <td>{this.renderClientNote()}</td>
                <td>{this.props.selectedclient.modifiedBy}</td>
            </tr>
          </tbody>
          </Table>
        </div>
        <AddClientNote  onSubmit={this.handleFormSubmit}/>
      </Jumbotron>

      </div>
    );

}
}

const mapStateToProps = (state) => {
  console.log(state.selectedclient.status)
  return {
    currentStatus: state.selectedclient.status,
    offerUpdate: state.selectedclient.offer,
    currentAssignment: state.selectedclient.assignment,
    contactName: state.selectedclient.name,
    phoneNumber: state.selectedclient.phone,
    contactEmail: state.selectedclient.email,
    contactNote: state.selectedclient.contactNote,
    clientNote: state.selectedclient.clientNote
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
    borderColor: '#ced4da'
  },
  clientTitleStyles: {
    display: 'flex',
    justifyContent: 'center'
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
    borderColor: '#ced4da'
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
    borderColor: '#ced4da'
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
    justifyContent: 'flex-end'
  }
};

export default connect(mapStateToProps, { selectClient, updateOffer, updateStatus, updateAssignment, updateContactName, updatePhoneNumber, updateContactEmail, updateContactNote, updateClientNote })(SelectedClient);
