import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

class ListItems extends Component {
  render() {
    return(
      <div style={ styles.listDivStyles}>
        <h5>Clients:</h5>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

const styles = {
  listDivStyles: {
    marginRight: 15,
    marginLeft: 15
  }
};

export default ListItems
