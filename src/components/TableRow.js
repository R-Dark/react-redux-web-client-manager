import React, { Component } from 'react'

const TableRow = (props) => {
    console.log(props)

    return(
      <tr>
        <th scope="row">1</th>
        <td>3345</td>
        <td>Chris Bentley</td>
        <td>Bad Address</td>
        <td>2017-05-23</td>
        <td>{props.itemData.OWNER}</td>
        <td>{props.itemData.ADDRESS}</td>
        <td>$36,600</td>
        <td>$47,700</td>
      </tr>
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
    paddingBottom: 1
  },
  listInnerDivStyles: {
    backgroundColor: '#fff'
  },
  tbodyStyles: {
    fontSize: 15
  }
};

export default TableRow
