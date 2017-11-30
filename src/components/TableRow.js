import React from 'react'



const TableRow = (props) => {
  // console.log(props)
    return(
      <tr onClick={props.onClick}>
          <td>1</td>
          <td>1653</td>
          <td>Chris Bentley</td>
          <td>{props.itemData.statusUpdate}</td>
          <td>2017-05-23</td>
          <td>{props.itemData.Owner}</td>
          <td>{props.itemData.Address}</td>
          <td>{props.itemData.offerUpdate}</td>
          <td>$47,700</td>
      </tr>
    )
}

export default TableRow
