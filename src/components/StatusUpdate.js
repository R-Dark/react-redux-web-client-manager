import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Label, Button } from 'reactstrap';


const StatusUpdate = props => {
    const { handleStatusUpdateSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleStatusUpdateSubmit} style={ styles.formUpdate }>



    <Label for="statusUpdate" style={ styles.labelUpdate }>Contact Name:</Label>
          <div className="form-group">
            <Field
              name="statusUpdate"
              component="input"
              type="text"
              className= "form-control"
            />

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
     justifyContent: 'space-around'
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
   }
 };

export default reduxForm({
  form: 'statusupdate' // a unique identifier for this form
}, null, actions)(StatusUpdate)