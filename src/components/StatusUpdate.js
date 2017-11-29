import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const StatusUpdate = props => {
    const { handleStatusUpdateSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleStatusUpdateSubmit} style={ styles.formUpdate }>

          <div>
            <UncontrolledButtonDropdown>
              <DropdownToggle caret color="info">
                Status
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>DIP</DropdownItem>
                <DropdownItem>NO DEAL</DropdownItem>
                <DropdownItem>BAD ADDRESS</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div style={ styles.buttonUpdate }>
            <Button color="success" id='search-button' action="submit" block >
              Update
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
  form: 'statusupdate' // a unique identifier for this form
}, null, actions)(StatusUpdate)

// <Label for="statusDropdown" style={ styles.searchLabel }>Status:</Label>
