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
              <option>--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Field>
          </div>

          <div>
            <Label for="buyerName" style={ styles.searchLabel }>Buyer:</Label>
            <Field name="buyerName" component="select">
              <option>--</option>
              <option value="Chris">Chris</option>
              <option value="Isack">Isack</option>
            </Field>
          </div>

          <div>
            <Label for="statusDropdown" style={ styles.searchLabel }>Status:</Label>
            <Field name="statusDropdown" component="select">
              <option>--</option>
              <option value="DIP">DIP</option>
              <option value="No Deal">No Deal</option>
              <option value="Bad Address">Bad Address</option>
            </Field>
          </div>

          <Label for="County" style={ styles.searchLabel }>County:</Label>
          <div className="form-group">
            <Field
              name="County"
              component="input"
              type="text"
              placeholder="Enter County Name"
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
          <div className="form-group" style={ styles.stateDropdown }>
              <Field name="state" component="select">
                <option>--</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NJ">NJ</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </Field>
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
                <option>--</option>
                <option value="Last Modified">Last Modified</option>
                <option value="Highest to Lowest">Highest to Lowest</option>
                <option value="Lowest to Highest">Lowest to Highest</option>
              </Field>
          </div>

          <div>
              <Label for="maxResults" style={ styles.searchLabel }>Max:</Label>
              <Field name="maxResults" component="select">
                <option>--</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="25">25</option>
              </Field>
          </div>
          <div>
              <Label for="assignedTo" style={ styles.searchLabel }>Assignment:</Label>
              <Field name="assignedTo" component="select">
                <option>--</option>
                <option value="Chris">Chris</option>
                <option value="Seth">Seth</option>
                <option value="Isack">Isack</option>
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
     padding: 10,
     marginLeft: 20
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
   },
   stateDropdown: {
     paddingTop: 6,
     marginLeft: -10
   }
 };

export default reduxForm({
  form: 'searchform' // a unique identifier for this form
}, null, actions)(SearchForm)
