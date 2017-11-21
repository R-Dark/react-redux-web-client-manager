import React, { Component } from "react";
import { connect } from "react-redux";
import { selectClient } from '../actions'
//make sure action created flows through all reducers


class SelectedClient extends Component {

  componentWillMount() {
    // console.log(this.props)
  }
  render() {
    return (
      <div className="col-md-4">
        <h3> Details for: </h3>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    // clientInfo: state.clients.clientInfo
  };
}

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
