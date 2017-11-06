import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron } from 'reactstrap';

class OrderByButton extends Component {
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
            Last Modfied
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Highest to Lowest</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Lowest to Highest</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        </div>
      );
    }
  }


export default reduxForm({
  form: 'orderby' // a unique identifier for this form
}, null, actions)(OrderByButton)
