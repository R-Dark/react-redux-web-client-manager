import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Jumbotron } from 'reactstrap';

class ListItems extends Component {
  render() {
    return(
      <div style={ styles.listDivStyles }>
        <Jumbotron style={ styles.listJumboStyles }>
          <div style={ styles.listTitleStyles}>
            <h4>Search Results</h4>
          </div>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Jumbotron>
      </div>
    )
  }
}

const styles = {
  listDivStyles: {
    marginRight: 15,
    marginLeft: 15
  },
  listTitleStyles: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 5
  },
  listJumboStyles: {
    paddingTop: 13,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 15
  }
};

export default ListItems
