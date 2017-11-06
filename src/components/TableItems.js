import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Jumbotron, Table } from 'reactstrap';

class TableItems extends Component {
  render() {
    return(
      <div style={ styles.listDivStyles }>
        <Jumbotron style={ styles.listJumboStyles }>
            <div style={ styles.listTitleStyles}>
              <h4>Search Results</h4>
            </div>
            <div style={ styles.listInnerDivStyles }>
            <Table striped>
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
                <tr>
                  <th scope="row">1</th>
                  <td>3345</td>
                  <td>Chris Bentley</td>
                  <td>Bad Address</td>
                  <td>2017-05-23</td>
                  <td>Jimmy Lotz</td>
                  <td>2545 Sully Lane, Dallas, TX 78453</td>
                  <td>$36,600</td>
                  <td>$47,700</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>3356</td>
                  <td>Isack Kohn</td>
                  <td>Bad Address</td>
                  <td>2017-05-23</td>
                  <td>Jose Rodriguez</td>
                  <td>233 Clinton Court, Houston, TX 78453</td>
                  <td>$55,600</td>
                  <td>$61,700</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>3231</td>
                  <td>Chris Bentley</td>
                  <td>Address Resolved</td>
                  <td>2017-05-23</td>
                  <td>Pauline Mathers</td>
                  <td>221 Fern St, Austin, TX 78453</td>
                  <td>$77,700</td>
                  <td>$83,700</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>2432</td>
                  <td>Chris Bentley</td>
                  <td>Address Resolved</td>
                  <td>2017-05-23</td>
                  <td>Ben Simmons</td>
                  <td>2545 Sully Lane, Dallas, TX 78453</td>
                  <td>$36,600</td>
                  <td>$47,700</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>3231</td>
                  <td>Chris Bentley</td>
                  <td>Address Resolved</td>
                  <td>2017-05-23</td>
                  <td>Pauline Mathers</td>
                  <td>221 Fern St, Austin, TX 78453</td>
                  <td>$77,700</td>
                  <td>$83,700</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>9867</td>
                  <td>Chris Bentley</td>
                  <td>Address Resolved</td>
                  <td>2017-05-23</td>
                  <td>Reggie Collum</td>
                  <td>2545 Sully Lane, Dallas, TX 78453</td>
                  <td>$36,600</td>
                  <td>$47,700</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>5477</td>
                  <td>Chris Bentley</td>
                  <td>Address Resolved</td>
                  <td>2017-05-23</td>
                  <td>Ben Simmons</td>
                  <td>2545 Sully Lane, Dallas, TX 78453</td>
                  <td>$36,600</td>
                  <td>$47,700</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>3356</td>
                  <td>Isack Kohn</td>
                  <td>Bad Address</td>
                  <td>2017-05-23</td>
                  <td>John Benning</td>
                  <td>233 Clinton Court, Houston, TX 78453</td>
                  <td>$55,600</td>
                  <td>$61,700</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>3342</td>
                  <td>Chris Bentley</td>
                  <td>Address Resolved</td>
                  <td>2017-05-23</td>
                  <td>Phil Tillery</td>
                  <td>2545 Sully Lane, Dallas, TX 78453</td>
                  <td>$36,600</td>
                  <td>$47,700</td>
                </tr>
              </tbody>
            </Table>
          </div>
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
    paddingBottom: 1
  },
  listInnerDivStyles: {
    backgroundColor: '#fff'
  },
  tbodyStyles: {
    fontSize: 15
  }
};

export default TableItems
