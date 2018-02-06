import React from 'react'



const TableRow = (props) => {
  console.log(props)
  console.log(this.props)
  // if (this.props.itemData.uid == )
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
// const styles={
//   SelectedItem: {
//     backgroundColor: 'rgba(22, 232, 173, 0.8)'
//   }
// }

export default TableRow
