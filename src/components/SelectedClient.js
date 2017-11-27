import React from "react";
import { connect } from "react-redux";
import { Jumbotron, Table } from 'reactstrap';
import { selectClient } from '../actions'
import UpdateContact from './UpdateContact';
import StatusUpdate from './StatusUpdate';
import OfferUpdate from './OfferUpdate';
//make sure action created flows through all reducers


const SelectedClient = (props) => {
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
                <td>{props.selectedclient.runID}</td>
                <td>{props.selectedclient.sequenceID}</td>
                <td>{props.selectedclient.ownerID}</td>
                <td>{props.selectedclient.createdAt}</td>
                <td>{props.selectedclient.Owner}</td>
                <td>{props.selectedclient.Address}</td>
                <td>{props.selectedclient.ownerID}</td>
                <td>{props.selectedclient.Well}</td>
                <td>{props.selectedclient.OPERATOR}</td>
                <td>{props.selectedclient.blendedAvg}</td>
                <td>{props.selectedclient.sectNo}</td>
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
                <td>{props.selectedclient.COUNTY}</td>
                <td>{props.selectedclient.Well}</td>
                <td>{props.selectedclient.OPERATOR}</td>
                <td>{props.selectedclient.combineDLegal}</td>
                <td>{props.selectedclient.INTEREST}</td>
                <td>{props.selectedclient.TYPE}</td>
                <td>{props.selectedclient.rateArea}</td>
                <td>{props.selectedclient.VALUATION}</td>
                <td>{props.selectedclient.valuationMethod}</td>
                <td>{props.selectedclient.valuationRate}</td>
                <td>{props.selectedclient.taxValue}</td>
                <td>{props.selectedclient.acreageFinal}</td>
                <td>{props.selectedclient.NRA}</td>
                <td>{props.selectedclient.acreageSource}</td>
                <td>{props.selectedclient.productionBOM}</td>
                <td>{props.selectedclient.activePermit}</td>
                <td>{props.selectedclient.rrcID}</td>
            </tr>
          </tbody>
          </Table>
        </div>
      </Jumbotron>

      <div style={ styles.statusOfferHistoryDiv }>

        <Jumbotron style={ styles.statusJumboStyles }>
          <div style={ styles.statusTitleStyles }>
            <h5>Status History</h5>
            <div style={ styles.statusOfferNumbersStyles }>Current Status:<div style={ styles.redOfferStatusStyles }>{props.selectedclient.DIP}</div></div>
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
                  <td>{props.selectedclient.dipUpdateTimeStamp}</td>
                  <td>{props.selectedclient.DIP}</td>
                  <td>{props.selectedclient.modifiedBy}</td>
              </tr>
            </tbody>
            </Table>
          </div>
          <StatusUpdate />
        </Jumbotron>

        <Jumbotron style={ styles.offerJumboStyles }>
          <div style={ styles.offerTitleStyles }>
            <h5>Offer History</h5>
            <div style={ styles.statusOfferNumbersStyles }>Offer Status:<div style={ styles.redOfferStatusStyles }>${props.selectedclient.currentOffer}</div></div>
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
                  <td>{props.selectedclient.offerTimeStamp}</td>
                  <td>{props.selectedclient.currentOffer}</td>
                  <td>{props.selectedclient.modifiedBy}</td>
              </tr>
              <tr>
                  <td>Original</td>
                  <td>{props.selectedclient.originalOffer}</td>
                  <td>Letter</td>
              </tr>
            </tbody>
            </Table>
          </div>
          <OfferUpdate />
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
                <td>{props.selectedclient.ownerID}</td>
                <td>{props.selectedclient.modifiedBy}</td>
                <td>{props.selectedclient.Owner}</td>
                <td>{props.selectedclient.phoneNumber}</td>
                <td>{props.selectedclient.emailAddress}</td>
                <td>{props.selectedclient.NOTES}</td>
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
                <td>{props.selectedclient.noteCreateTimeStamp}</td>
                <td>{props.selectedclient.NOTES}</td>
                <td>{props.selectedclient.modifiedBy}</td>
            </tr>
          </tbody>
          </Table>
        </div>
      </Jumbotron>

      </div>
    );
}


function mapStateToProps(state) {
  return {
    // clientInfo: state.clients.clientInfo
  };
}

const styles = {
  mainDivStyles: {
    marginTop: -218
  },
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
    marginLeft: 15
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
    width: '60%'
  },
  offerJumboStyles: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 1,
    marginRight: 15,
    marginLeft: 15,
    width: '60%'
  },
  offerTitleStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 5
  },
  statusTitleStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 5
  },
  redOfferStatusStyles: {
    color: 'rgb(247, 11, 32)',
    paddingLeft: 10,
    paddingRight: 15
  },
  statusOfferNumbersStyles: {
    display: 'flex',
    flexDirection: 'row'
  }
};

export default connect(mapStateToProps, { selectClient })(SelectedClient);


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
