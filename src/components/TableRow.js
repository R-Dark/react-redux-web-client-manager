import React from 'react'



const TableRow = (props) => {
  console.log(props)
    return(
      <tr onClick={props.onClick}>
          <td>1</td>
          <td>1653</td>
          <td>Chris Bentley</td>
          <td>DIP</td>
          <td>2017-05-23</td>
          <td>{props.itemData.OWNER}</td>
          <td>{props.itemData.ADDRESS}</td>
          <td>$36,600</td>
          <td>$47,700</td>
      </tr>
    )
}

export default TableRow
