import React from 'react'



const TableRow = (props) => {
  // console.log(props)
  // console.log(this.props)
  // if (this.props.itemData.uid == )
  let styleVar = props.selected == props.itemData ? styles.SelectedItem : {}
    return(
      <tr onClick={props.onClick} style={styleVar}>
          <td>{props.itemData.runNumber}</td>
          <td>1653</td>
          <td>Chris Bentley</td>
          <td>{props.itemData.statusUpdate}</td>
          <td>2017-05-23</td>
          <td>{props.itemData.Owner}</td>
          <td>{props.itemData.Address}</td>
          <td>{props.itemData.offerUpdate}</td>
          <td>{props.itemData.originalOffer}</td>
      </tr>
    )
}
const styles={
  SelectedItem: {
    backgroundColor: 'rgba(14, 214, 88, 0.8)'
  }
}

export default TableRow
