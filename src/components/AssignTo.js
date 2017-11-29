import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const AssignTo = props => {
    const { handleAssignToSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleAssignToSubmit} style={ styles.formUpdate }>

          <div>
            <UncontrolledButtonDropdown>
              <DropdownToggle caret color="info">
                Select Closer
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Isack</DropdownItem>
                <DropdownItem>Seth</DropdownItem>
                <DropdownItem>Bill</DropdownItem>
                <DropdownItem>Joe</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div style={ styles.buttonUpdate }>
            <Button color="success" id='search-button' action="submit" block >
              Assign
            </Button>
          </div>
        </form>
      </div>

  )
 }

 const styles = {
   allButtons: {
     display: 'flex',
     justifyContent: 'center',
     marginTop: 30,
     marginLeft: -45
   },
   formUpdate: {
     display: 'flex',
     justifyContent: 'row'
   },
   labelUpdate: {
     paddingRight: 5,
     paddingLeft: 20
   },
   buttonUpdate: {
     paddingRight: 7,
     paddingLeft: 25
   },
   searchLabel: {
     paddingRight: 10
   }
 };

export default reduxForm({
  form: 'assignto' // a unique identifier for this form
}, null, actions)(AssignTo)

// <Label for="statusDropdown" style={ styles.searchLabel }>Status:</Label>
