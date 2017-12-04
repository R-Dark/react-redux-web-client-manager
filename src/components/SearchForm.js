import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Label, Button } from 'reactstrap';


const SearchForm = props => {
    const { handleSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleSubmit}>
      <div style={ styles.TopRowButtons }>
          <div>
            <Label for="runNumber" style={ styles.firstSearchLabel }>Run:</Label>
            <Field name="runNumber" component="select">
              <option>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Field>
          </div>

          <div>
            <Label for="buyerName" style={ styles.searchLabel }>Buyer:</Label>
            <Field name="buyerName" component="select">
              <option>All</option>
              <option value="Chris">Chris</option>
              <option value="Isack">Isack</option>
            </Field>
          </div>

          <div>
            <Label for="statusDropdown" style={ styles.searchLabel }>Status:</Label>
            <Field name="runNumber" component="select">
              <option>All</option>
              <option value="DIP">DIP</option>
              <option value="No Deal">No Deal</option>
              <option value="Bad Address">Bad Address</option>
            </Field>
          </div>

          <Label for="sequenceid" style={ styles.searchLabel }>Sequence ID:</Label>
          <div className="form-group">
            <Field
              name="sequenceid"
              component="input"
              type="text"
              placeholder="Enter Id #"
              className= "form-control"
            />
           </div>
        </div>


        <div style={ styles.MiddleRowButtons }>
        <Label for="owner" style={ styles.firstSearchLabel }>Owner:</Label>
          <div className="form-group">
              <Field
                name="ownername"
                component="input"
                type="text"
                placeholder="Enter Owner Name"
                className= "form-control"
              />
          </div>

          <Label for="state" style={ styles.searchLabel }>State:</Label>
          <div className="form-group">
              <Field
                name="state"
                component="input"
                type="text"
                placeholder="Enter State"
                className= "form-control"
              />
          </div>

          <Label for="zip" style={ styles.searchLabel }>Zip:</Label>
          <div  className="form-group">
              <Field
                name="zip"
                component="input"
                type="text"
                placeholder="Enter Zip Code"
                className= "form-control"
              />
          </div>
        </div>

        <div style={ styles.BottomRowButtons }>
          <div>
              <Label for="orderBy" style={ styles.firstSearchLabel }>Order:</Label>
              <Field name="orderBy" component="select">
                <option>All</option>
                <option value="Last Modified">Last Modified</option>
                <option value="Highest to Lowest">Highest to Lowest</option>
                <option value="Lowest to Highest">Lowest to Highest</option>
              </Field>
          </div>

          <div>
              <Label for="maxResults" style={ styles.searchLabel }>Max:</Label>
              <Field name="maxResults" component="select">
                <option>All</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="25">25</option>
              </Field>
          </div>
          <div>
              <Label for="assignedTo" style={ styles.searchLabel }>Assignment:</Label>
              <Field name="assignedTo" component="select">
                <option>All</option>
                <option value="Chris">100</option>
                <option value="Isack">50</option>
                <option value="Joe">Joe</option>
                <option value="Bill">Bill</option>
              </Field>
          </div>
          <Button color="success" block id='search-button' action="submit" style={ styles.searchButton } >
            Search
          </Button>
        </div>

        </form>
      </div>

  )
 }

 const styles = {
   allButtons: {
     padding: 10
   },
   TopRowButtons: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
   MiddleRowButtons: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
   BottomRowButtons: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
   searchLabel: {
     paddingRight: 10,
     paddingLeft: 40,
     marginTop: 7
   },
   firstSearchLabel: {
     paddingRight: 10,
     marginTop: 7
   },
   searchButton: {
     width: 192,
     marginLeft: 50,
     borderStyle: 'solid',
     borderWidth: 2,
     borderColor: '#ced4da'
   }
 };

export default reduxForm({
  form: 'searchform' // a unique identifier for this form
}, null, actions)(SearchForm)
