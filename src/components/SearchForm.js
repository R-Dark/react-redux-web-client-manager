import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Label, Button, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const SearchForm = props => {
    const { handleSubmit } = props
    return (
    <div style={ styles.allButtons }>
    <form onSubmit={handleSubmit}>
      <div style={ styles.TopRowButtons }>
          <div>
            <UncontrolledButtonDropdown>
            <Label for="runDropdown" style={ styles.firstSearchLabel }>Run:</Label>
              <DropdownToggle caret color="info">
                All
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>1</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>3</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>4</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>5</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div>
            <UncontrolledButtonDropdown>
            <Label for="buyerDropdown" style={ styles.searchLabel }>Buyer:</Label>
              <DropdownToggle caret color="info">
                All
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Chris Bentley</DropdownItem>
                <DropdownItem>Isack Kohn</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div>
            <UncontrolledButtonDropdown>
            <Label for="statusDropdown" style={ styles.searchLabel }>Status:</Label>
              <DropdownToggle caret color="info">
                All
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>DIP</DropdownItem>
                <DropdownItem>BAD ADDRESS</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
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
            <UncontrolledButtonDropdown>
              <Label for="orderDropdown" style={ styles.firstSearchLabel }>Order:</Label>
                <DropdownToggle caret color="info">
                  All
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Highest to Lowest</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Lowest to Highest</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div>
            <UncontrolledButtonDropdown>
              <Label for="maxDropdown" style={ styles.searchLabel }>Max:</Label>
                <DropdownToggle caret color="info">
                  All
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>10</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>50</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>100</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>200</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>500</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>1000</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <div>
            <UncontrolledButtonDropdown>
              <Label for="assignedTo" style={ styles.searchLabel }>Assignment:</Label>
                <DropdownToggle caret color="info">
                  All
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Isack</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Seth</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Joe</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Bill</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
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
     marginLeft: 50
   }
 };

export default reduxForm({
  form: 'searchform' // a unique identifier for this form
}, null, actions)(SearchForm)
