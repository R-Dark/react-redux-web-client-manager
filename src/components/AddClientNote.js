import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button } from 'reactstrap';


const AddClientNote = props => {
    const { handleSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleSubmit} style={ styles.formUpdate }>

          <div className="form-group">
            <Field
            style={ styles.formStyle }
              name="clientNote"
              component="textarea"
              type="text"
              className= "form-control"
            />

        </div>
          <div style={ styles.buttonUpdate }>
            <Button color="success" id='search-button' action="submit" block >
              Add Note
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
   formStyle: {
     width: '600px',
     height: '200px'
   },
   buttonUpdate: {
     paddingRight: 7,
     paddingLeft: 25
   }
 };

export default reduxForm({
  form: 'addclientnote' // a unique identifier for this form
}, null, actions)(AddClientNote)
