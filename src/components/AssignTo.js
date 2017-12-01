import React from 'react'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../actions'
import { Button } from 'reactstrap';


const StatusUpdate = props => {
    const { handleSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleSubmit} style={ styles.formUpdate }>

    <div style={ styles.dropdownUpdate }>
    <Field name="assignTo" component="select">
      <option>Select Closer</option>
      <option value="Isack">Isack</option>
      <option value="Seth">Seth</option>
      <option value="Joe">Joe</option>
      <option value="Bill">Bill</option>
    </Field>
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
   dropdownUpdate: {

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
