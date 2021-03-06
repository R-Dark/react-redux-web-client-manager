import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Label, Button } from 'reactstrap';


const UpdateContact = props => {
    const { handleSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleSubmit} style={ styles.formUpdate }>



    <Label for="contactNameUpdate" style={ styles.labelUpdate }>Contact Name:</Label>
          <div className="form-group">
            <Field
              name="contactName"
              component="input"
              type="text"
              className= "form-control"
            />

        </div>



        <Label for="phoneNumberUpdate" style={ styles.labelUpdate }>Phone Number:</Label>
          <div className="form-group">
              <Field
                name="phoneNumber"
                component="input"
                type="text"
                className= "form-control"
              />
          </div>

          <Label for="emailUpdate" style={ styles.labelUpdate }>Email Address:</Label>
          <div className="form-group">
              <Field
                name="contactEmail"
                component="input"
                type="text"
                className= "form-control"
              />
          </div>

          <Label for="noteUpdate" style={ styles.labelUpdate }>Note:</Label>
          <div  className="form-group">
              <Field
                name="contactNote"
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
     paddingLeft: 20,
     paddingTop: 6
   },
   buttonUpdate: {
     paddingRight: 7,
     paddingLeft: 25
   }
 };

export default reduxForm({
  form: 'updatecontact' // a unique identifier for this form
}, null, actions)(UpdateContact)
