import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron } from 'reactstrap';

class BuyerNameButton extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    render() {
      return (
        <div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret color="primary">
            All
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Chris Bentley</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Isack Kohn</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        </div>
      );
    }
  }


export default reduxForm({
  form: 'buyername' // a unique identifier for this form
}, null, actions)(BuyerNameButton)
