import React from 'react'
import { Jumbotron, Table } from 'reactstrap';



const TableItem = (props) => {

    return(
      <div style={ styles.listDivStyles }>
        <Jumbotron style={ styles.listJumboStyles }>
            <div style={ styles.listTitleStyles}>
              <h4>Search Results</h4>
            </div>
            <div style={ styles.listInnerDivStyles }>
            <Table striped bordered hover size="sm" responsive>
              <thead>
                <tr>
                  <th>Run#</th>
                  <th>Sequence#</th>
                  <th>Buyer</th>
                  <th>Status</th>
                  <th>Last Modified</th>
                  <th>Owner Name</th>
                  <th>Address</th>
                  <th>Current Offer</th>
                  <th>Original Offer</th>
                </tr>
              </thead>
              <tbody style={ styles.tbodyStyles }>

                {props.children}

              </tbody>
            </Table>
          </div>
        </Jumbotron>
      </div>
    )

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
    paddingBottom: 10,
    marginBottom: 250
  },
  listInnerDivStyles: {
    backgroundColor: '#fff'
  },
  tbodyStyles: {
    fontSize: 15
  }
};

export default TableItem
