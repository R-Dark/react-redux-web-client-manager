import React from "react";
import { connect } from "react-redux";
import { Jumbotron, Table } from 'reactstrap';
import { selectClient } from '../actions'
import UpdateContact from './UpdateContact';
//make sure action created flows through all reducers


const SelectedClient = (props) => {
    return (
      <Jumbotron style={ styles.clientJumboStyles }>
        <div style={ styles.clientTitleStyles }>
          <h4>Contact Information</h4>
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
                <td>{props.selectedclient.OWNER}</td>
                <td>1653</td>
                <td>Chris Bentley</td>
                <td>DIP</td>
                <td>2017-05-23</td>
                <td>WNER}</td>
            </tr>
          </tbody>
          </Table>
        </div>
        <UpdateContact />
      </Jumbotron>
    );
}


function mapStateToProps(state) {
  return {
    // clientInfo: state.clients.clientInfo
  };
}

const styles = {
  clientDivStyles: {
    backgroundColor: ''
  },
  listTitleStyles: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 5
  },
  clientJumboStyles: {
    paddingTop: 13,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: -235
  },
  clientTitleStyles: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tbodyStyles: {
    fontSize: 15
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
